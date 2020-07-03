import React, { Component } from 'react';

import Dropzone from 'react-dropzone'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import Drawer from './Drawer';
import Alert from 'react-bootstrap/Alert'
import FileCard from './FileCard'

import yoozooImg from './images/yoozoo.jpg';
import codeImg from './images/code.png';
import lightbulbImg from './images/lightbulb.png';
import userImg from './images/user.png';
import plusImg from './images/plus.png';
import page1 from './images/page1.jpg'; /*Placeholder for preview images in each csv entry*/
import axios from 'axios'; 
import serverInfo from './serverInfo.js'; // Relative path to your File
import MaterialTable, { MTableToolbar } from 'material-table';
import IconButton from '@material-ui/core/IconButton';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import { green } from '@material-ui/core/colors';

const ip = serverInfo.split(",")[0]
const port = serverInfo.split(",")[1]

export default class database extends Component {
  constructor(props) {
     super(props);
     this.getDatabase();
    
     /*state still uninitialized: saved database file count and time uploaded (check back with Edit.js)*/
     const columns = [
        { title: 'Question', field: 'Question', editable: 'never'  },
        { title: 'A', field: 'A', editable: 'never'  },
        { title: 'B', field: 'B', editable: 'never'  },
        { title: 'C', field: 'C', editable: 'never'  },
        { title: 'D', field: 'D', editable: 'never'  },
        { title: 'Answer', field: 'Answer', editable: 'never'  },
        { title: 'Page', field: 'Page', editable: 'never'  },
        { title: 'Number', field: 'Number', editable: 'never'  },
        { title: 'Question_type', field: 'Question_type', editable: 'never'  },
        { title: 'Level', field: 'Level', editable: 'never'  },
        { title: 'Subject', field: 'Subject', editable: 'never'  },
        { title: 'Year', field: 'Year', editable: 'never'  },
        { title: 'School', field: 'School', editable: 'never'  },
        { title: 'Exam', field: 'Exam', editable: 'never'  },
      ]



      this.state = {
        'columns' : columns,
        'data' : []
      }
      
    };
  

  deleteWorkspace = (oldName) => {
    console.log("Deleting workspace...")
    axios.post(ip + ":" + port + "/deleteworkspace?name=" + oldName, {timeout : 1000 * 100000000000000000000000000})
  }

  renameWorkspace = (oldName, newName) => {
    console.log("Renaming workspace...")
    axios.post(ip + ":" + port + "/renameworkspace?oldName=" + oldName + "&newName=" + newName , {timeout : 1000 * 100000000000000000000000000})
  }

  getDatabase = () => {
    console.log("Requesting workspace list from server...")
    axios.post(ip + ":" + port + "/getdatabase?options=all", {timeout : 1000 * 100000000000000000000000000})
      .then(response => {
        // handle success
        const tableData = response.data['Table'];
        console.log(response.data['Table'])
        this.setState({'data' : tableData});
      })  
  }
    
  render() {
    const addButton = <div>
    <IconButton
      style={{ color: green[500] }}
      aria-label="delete"
    >  
      <ImageSearchIcon />
    </IconButton>
  </div>
    var list = [];
    var smallest = 149;
    var displayLength = false;
    if (this.state.data.length < smallest){
      smallest = this.state.data.length
    } else {
      displayLength = true;
    }
    
    for (var i = 10; i <= smallest + 10; i = i + 10) {
        list.push(i);
    }
    if (displayLength){
      list.push(this.state.data.length)
    }
    list = Array.from(new Set(list));
  
    const body = 
    <div>
      <Alert style={{"width" : "100%", "height" : "90%"}} variant= "success">
        You are in the Database Page.
      </Alert>
      <MaterialTable
          title="Your Database"
          columns={this.state.columns}
          data={Array.from(this.state.data)}
          options={{
            search: true,
            exportButton: true,
            pageSize: 10,
            emptyRowsWhenPaging: false,
            exportAllData: true,
            pageSizeOptions: list
          }}
          actions={[
            {
              icon: 'refresh',
              tooltip: 'Refresh Data',
              isFreeAction: true,
              onClick: () => this.getDatabase()
            }
          ]}
          components={{
            Toolbar: props => (
              <div>
                <MTableToolbar {...props } />
              </div>
            ),
          }}
          editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    this.setState((prevState) => {
                      const data = [...prevState.data];
                      const oldName = oldData["name"]
                      const newName = newData["name"]
                      var foundExisting = false
                      this.state.data.map((row) =>
                      {
                        var curName = row["name"]
                        if (curName == newName){
                          foundExisting = true
                        }
                      });
                      
                      if (oldName == newName){
                        return;
                      } else if (foundExisting){
                        alert("A workspace with name: '" + newName + "' already exists. No update was made.")
                        return;
                      } else {
                        data[data.indexOf(oldData)] = newData;
                        this.renameWorkspace(oldData["name"], newData["name"])
                        return { ...prevState, data };
                      }
                    });
                  }
                }, 600);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  this.setState((prevState) => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    this.deleteWorkspace(oldData["name"])
                    return { ...prevState, data };
                  });
                }, 600);
              }),
          }}
        />
      );
      
    </div>

    return (
      <div>
        <Drawer content = {body} name = "Database"/>
      </div>
    );
  }
}