import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Drawer from './Drawer';
import Alert from 'react-bootstrap/Alert'
import axios from 'axios'; 
import serverInfo from './serverInfo.js'; // Relative path to your File
import MaterialTable, { MTableToolbar } from 'material-table';
import IconButton from '@material-ui/core/IconButton';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import { green } from '@material-ui/core/colors';


const ip = serverInfo.split(",")[0];
const port = serverInfo.split(",")[1];

export default class library extends Component {
  constructor(props) {
     super(props);
     this.listWorkspace();
     const columns = [
        { title: 'Name', field: 'name' },
        { title: 'Last Modified', field: 'lastModified', editable: 'never' }
     ];
     this.state = {
        'columns' : columns,
        'data' : []
     }
  };

  openWorkspace = (oldName) => {
    console.log("Opening workspace...")
    axios.post(ip + ":" + port + "/openworkspace?name=" + oldName,
        {timeout : 1000 * 100000000000000000000000000})
    .then(response => {
      // handle success
      const data =  JSON.parse(response.data['data']);
      const fileData = response.data['fileData'];
      const attributeData = response.data['attributeData'];
      let newWindow = window.open("#/edit");
      newWindow.myname = oldName;
      newWindow.csvdata = data;
      newWindow.fileData = fileData;
      newWindow.myname = attributeData['filename'];
      newWindow.school = attributeData['school'];
      newWindow.subject = attributeData['subject'];
      newWindow.level = attributeData['level'];
      newWindow.year = attributeData['year'];
      newWindow.exam = attributeData['exam'];
    })
  }

  addNewWorkspace = () => {
    let newWindow = window.open("#/home");
  }

  deleteWorkspace = (oldName) => {
    console.log("Deleting workspace...")
    axios.post(ip + ":" + port + "/deleteworkspace?name=" + oldName, {timeout : 1000 * 100000000000000000000000000})
  }

  renameWorkspace = (oldName, newName) => {
    console.log("Renaming workspace...")
    axios.post(ip + ":" + port + "/renameworkspace?oldName=" + oldName + "&newName=" + newName , {timeout : 1000 * 100000000000000000000000000})
  }

  listWorkspace = () => {
    console.log("Requesting workspace list from server...")
    axios.post(ip + ":" + port + "/listworkspace?options=all", {timeout : 1000 * 100000000000000000000000000})
      .then(response => {
        // handle success
        const workspaceData = response.data['Workspaces'];
        // uncomment the next line to see the data in a successful load of a workspace
        // console.log(response.data['Workspaces'])
        this.setState({'data' : workspaceData});
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
    let list = [];
    let smallest = 149;
    let displayLength = false;
    if (this.state.data.length < smallest){
      smallest = this.state.data.length
    } else {
      displayLength = true;
    }
    
    for (let i = 10; i <= smallest + 10; i = i + 10) {
        list.push(i);
    }

    if (displayLength){
      list.push(this.state.data.length)
    }

    list = Array.from(new Set(list));
    const body = 
    <div>
      <Alert style={{"width" : "100%", "height" : "90%"}} variant= "success">
        You are in the Library Page.
      </Alert>
      <MaterialTable
          title="Your Workspaces"
          columns={this.state.columns}
          data={Array.from(this.state.data)}
          options={{
            search: true,
            exportButton: true,
            pageSize:10,
            exportAllData: true,
            pageSizeOptions: list
          }}
          
          actions={[
            {
              icon: 'launch',
              tooltip: 'Open Workspace',
              onClick: (event, rowData) => this.openWorkspace(rowData.name)
            },
            {
              icon: 'refresh',
              tooltip: 'Refresh Data',
              isFreeAction: true,
              onClick: () => this.listWorkspace()
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
                      let foundExisting = false
                      this.state.data.map((row) =>
                      {
                        let curName = row["name"]
                        if (curName === newName){
                          foundExisting = true
                        }
                      });
                      
                      if (oldName === newName){
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
    </div>

    return (
      <div>
        <Drawer content={body} name="Library"/>
      </div>
    );
  }
}