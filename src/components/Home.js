import React, { Component } from 'react';
import ReactDOM from "react-dom";
import csv from 'csv';
import Dropzone from 'react-dropzone'
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Alert from 'react-bootstrap/Alert'
import { Link } from 'react-router-dom';
import Drawer from './Drawer';

import yoozooImg from './images/yoozoo.jpg';
import codeImg from './images/code.png';
import lightbulbImg from './images/lightbulb.png';
import userImg from './images/user.png';
import dragImg from './images/drag.png';
import plusImg from './images/plus.png';
import axios from 'axios'; 

import 'axios-progress-bar/dist/nprogress.css'
import { loadProgressBar } from 'axios-progress-bar'
import { Menu } from 'semantic-ui-react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Pagination } from 'semantic-ui-react'

import 'react-pdf/dist/Page/AnnotationLayer.css';
import { withStyles } from "@material-ui/core/styles";

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

const styles = theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
});

const pollServer = (formData) => {
  console.log("polling...")
  axios.post("https://youzu-exam-flask.herokuapp.com/uploadfile", formData, {timeout : 1000 * 100000000000000000000000000})
      .then(function (response) {
        // handle success
        console.log(response)
        // var newWindow = window.open("edit");
        // newWindow.data = response
      })
      .catch(function (error) {
        // handle error
        console.log(error)
        // window.open("edit", "_self");
      })
      .then(function () {
        // always executed
        // pollServer(formData)
      }); 
}


      
class home extends Component {
  
  constructor(props) {
     super(props);
     loadProgressBar()
     this.state = {'msgVariant':'primary', 'msgText':'Upload a file to begin!'}
  }
  
  setMsg = () => {
    this.setState({'msgVariant':'primary', 'msgText':'Upload a file to begin!'});
  }


  onDrop = (files) => {
    var firstFile = files[0]
    const reader = new FileReader();
    reader.onload = (event) => {
      console.log(event.target.result);
      window.fileData = event.target.result;
    };
    reader.readAsDataURL(firstFile);


    const filename = firstFile.name;
    this.setState({'msgVariant':'warning', 'msgText':'Received file, uploading... Check footer at bottom of page for information'});

    // Create an object of formData 
      const formData = new FormData(); 
     
      // Update the formData object 
      formData.append( 
        "myFile", 
        firstFile
      ); 

      // Request made to the backend api 
      // Send formData object 
      pollServer(formData);

    }
  


  render() {
    const body = 
    <div>
  
      <Alert style={{"width" : "100%", "height" : "90%"}} variant={this.state.msgVariant}>
        <p>
          {this.state.msgText}
        </p>
      </Alert>
      <Dropzone style={{"width" : "100%", "height" : "50%"}} name={"hey"} onClick={this.setMsg} onDrop={this.onDrop}>
        <div style = {{flexGrow : "10", display: 'flex', flexDirection: 'column', alignItems:'center', outline: "5px dotted black"}}>
          <div style = {{height : "30px"}}>

          </div>
              <Button onClick={this.setMsg} style = {{height : "90%", width : "50%"}} variant="success">
              <Card.Img style = {{height : "50px", width : "50px"}} variant="left" src={plusImg} />
              Choose PDF File (from local drive)
              </Button>{' '}
          <div style = {{height : "20px"}}/>
          <h4>
            ... Or Drag and Drop that Document.
          </h4>
          <p>
            We'll do the rest for you
          </p>
        </div>
      </Dropzone>    
      <div style = {{height : "20px"}}/>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={lightbulbImg} />
          <Card.Body>
            <Card.Title>Simple to use</Card.Title>
            <Card.Text>
              Just drag-and-drop your PDF file in the box above, wait for the compression to complete and download your file. It's that simple..
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={userImg} />
          <Card.Body>
            <Card.Title>User friendly</Card.Title>
            <Card.Text>
              Easy-to-use user interface that segments the exam paper PDF you upload into pages and questions. Simply edit the text within the question text boxes.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={codeImg} />
          <Card.Body>
            <Card.Title>No coding required</Card.Title>
            <Card.Text>
              Everything is done for you, just for you. The extra processing is done in the background and you will not have to worry about it.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
    return (
      <div>
        <Drawer content = {body} name = "Home"/>
      </div>
    );
    }
}

export default withStyles(styles, { withTheme: true })(home);