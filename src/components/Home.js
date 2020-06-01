import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap';
import Card from "react-bootstrap/Card";

import codeImg from './images/code.png';
import lightbulbImg from './images/lightbulb.png';
import userImg from './images/user.png';
import plusImg from './images/plus.png';
import axios from 'axios'; 

import 'axios-progress-bar/dist/nprogress.css'
import { loadProgressBar } from 'axios-progress-bar'

const pollServer = (formData) => {
  console.log("polling...")
  axios.post("/uploadfile", formData, {timeout : 1000 * 10})
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

      
export default class home extends Component {
  constructor(props) {
     super(props);
     loadProgressBar()
     this.state = {'msgVariant':'primary', 'msgText':'Upload a file to begin!'}

  }
  
  setMsg = () => {
    this.setState({'msgVariant':'primary', 'msgText':'Upload a file to begin!'});
  }

  onDrop = (files) => {
    var firstFile = null
    files.map((file, idx) => {
      if (firstFile == null){
        firstFile = file
      }
    })

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
    return (
        <div>
        <ReactBootstrap.Navbar bg="light">
          <ReactBootstrap.Navbar.Brand href="/">Yoozoo</ReactBootstrap.Navbar.Brand>
          <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootstrap.Nav className="mr-auto">
              <ReactBootstrap.Nav.Link href="/edit">Edit</ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link href="/library">Library</ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link href="/settings">Settings</ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link href="/format">Format</ReactBootstrap.Nav.Link>
            </ReactBootstrap.Nav>
            <ReactBootstrap.Form inline>
              <ReactBootstrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <ReactBootstrap.Button variant="outline-success">Search</ReactBootstrap.Button>
            </ReactBootstrap.Form>
          </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Navbar>
        <h1>
             Home
        </h1>
        <div style = {{height: "50px"}}>
  
        </div>
        <div style={{display: 'flex', flexDirection : 'column', alignItems : 'center', justifyContent: 'space-between', height : "80px"}}>
          <ReactBootstrap.Alert style={{"width" : "70%", "height" : "90%"}} variant={this.state.msgVariant}>
            <p>
              {this.state.msgText}
            </p>
          </ReactBootstrap.Alert>
        </div>

        <div style={{display: 'flex', flexDirection : 'column', alignItems : 'center', justifyContent: 'space-between', height : "190px"}}>
          <Dropzone style={{"width" : "70%", "height" : "50%"}} name={"hey"} onClick={this.setMsg} onDrop={this.onDrop}>
            <div style = {{flexGrow : "10", display: 'flex', flexDirection: 'column', alignItems:'center', outline: "5px dotted black"}}>
              <div style = {{height : "30px"}}>

              </div>
                  <ReactBootstrap.Button onClick={this.setMsg} style = {{height : "90%", width : "50%"}} variant="success">
                  <Card.Img style = {{height : "50px", width : "50px"}} variant="left" src={plusImg} />
                  Choose PDF File (from local drive)
                  </ReactBootstrap.Button>{' '}
              <div style = {{height : "20px"}}>

              </div>
              <h4>
                ... Or Drag and Drop that Document.
              </h4>
              <p>
                We'll do the rest for you
              </p>
            </div>
          </Dropzone>    
        </div>

  
        <div style = {{height: "50px"}}>
  
        </div>
  
        <CardGroup style = {{paddingLeft : "300px", paddingRight : "300px"}}>
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
    );
    }
}