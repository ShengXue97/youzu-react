// database tab, which displays the various columns of the mysql database through flask
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Drawer from './subcomponents/Drawer';
import Alert from 'react-bootstrap/Alert'
import axios from 'axios'; 
import ServerInfo from './subcomponents/ServerInfo.js'; // Relative path to your File
import MaterialTable, { MTableToolbar } from 'material-table';
import IconButton from '@material-ui/core/IconButton';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import { green } from '@material-ui/core/colors';


const ip = ServerInfo.split(",")[0]
const port = ServerInfo.split(",")[1]

export default class database extends Component {
  constructor(props) {
     super(props);
     this.getDatabase();
    
     /*state still uninitialized: saved database file count and time uploaded (check back with Edit.js)*/
     const columns = [
        { title: 'question', field: 'question', editable: 'never'  },
        { title: '1', field: '1', editable: 'never'  },
        { title: '2', field: '2', editable: 'never'  },
        { title: '3', field: '3', editable: 'never'  },
        { title: '4', field: '4', editable: 'never'  },
        { title: 'answer', field: 'answer', editable: 'never'  },
        { title: 'page', field: 'page', editable: 'never'  },
        { title: 'number', field: 'number', editable: 'never'  },
        { title: 'question_type', field: 'question_type', editable: 'never'  },
        { title: 'level', field: 'level', editable: 'never'  },
        { title: 'subject', field: 'subject', editable: 'never'  },
        { title: 'year', field: 'year', editable: 'never'  },
        { title: 'school', field: 'school', editable: 'never'  },
        { title: 'exam', field: 'exam', editable: 'never'  },
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
          localization={{
            toolbar: {
            nRowsSelected: '{0} item(s) selected',
            },
            body: {
            emptyDataSourceMessage: 'Loading data..please wait'
            }
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
          }
        }
        
        />
    </div>

    return (
      <div>
        <Drawer content = {body} name = "Database"/>
      </div>
    );
  }
}