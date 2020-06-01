import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import * as ReactBootstrap from 'react-bootstrap';
import Question from './Question';
import { CSVReader } from 'react-papaparse'

import page1Img from './images/page1.jpg';
import page2Img from './images/page2.jpg';
import page3Img from './images/page3.jpg';
import page4Img from './images/page4.jpg';
import page5Img from './images/page5.jpg';
import page6Img from './images/page6.jpg';
import page7Img from './images/page7.jpg';
import page8Img from './images/page8.jpg';
import page9Img from './images/page9.jpg';
import page10Img from './images/page10.jpg';
import page11Img from './images/page11.jpg';
import page12Img from './images/page12.jpg';
import page13Img from './images/page13.jpg';
import page14Img from './images/page14.jpg';
import page15Img from './images/page15.jpg';
import page16Img from './images/page16.jpg';
import page17Img from './images/page17.jpg';
import page18Img from './images/page18.jpg';
import page19Img from './images/page19.jpg';

const buttonRef = React.createRef()


export default class edit extends Component {
   constructor(props) {
      super(props);
      var newItems = []
      const pageImgs = [null, page1Img, page2Img, page3Img, page4Img, page5Img, page6Img, page7Img,
        page8Img, page9Img, page10Img, page11Img, page12Img, page13Img, page14Img, page15Img, page16Img, page17Img
        ,page18Img, page19Img]

        const data = ((window.data.data));
        console.log(data)
        var qnNum = 0;
        const listItems = data.map((row) =>
        {
          qnNum = qnNum + 1;
          return <Question 
            questionNum = {qnNum}
            title = {row[1]}
            option1 = {row[3]}
            option2 = {row[4]}
            option3 = {row[5]}
            option4 = {row[6]}
          >
          </Question>
        }
        );

      this.state = {pageImgs : pageImgs, text: listItems, active : 1, items : newItems,
       currentImg : <img style={{height: "936px", width:"662px"}} src={page1Img} />};

      for (let number = 1; number <= 19; number++) {
        newItems.push(
          <ReactBootstrap.Pagination.Item onClick={() => this.handleChangePage(number)} key={number} active={number === this.state.active}>
            {number}
          </ReactBootstrap.Pagination.Item>,
        );
      }

      this.setState({items: newItems});
    }

    handleChangePage = (page) => {
      this.setState({currentImg: <img style={{height: "936px", width:"662px"}} src = {this.state.pageImgs[page]} />,
                      active : page});
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
             Edit
        </h1>

        <h5>Basic Upload</h5>
        <CSVReader
          ref={buttonRef}
          onFileLoad={this.handleOnFileLoad}
          onError={this.handleOnError}
          noClick
          noDrag
          onRemoveFile={this.handleOnRemoveFile}
        >
          {({ file }) => (
            <aside
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: 10
              }}
            >
              <button
                type='button'
                onClick={this.handleOpenDialog}
                style={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  width: '40%',
                  paddingLeft: 0,
                  paddingRight: 0
                }}
              >
                Browse file
              </button>
              <div
                style={{
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#ccc',
                  height: 45,
                  lineHeight: 2.5,
                  marginTop: 5,
                  marginBottom: 5,
                  paddingLeft: 13,
                  paddingTop: 3,
                  width: '60%'
                }}
              >
                {file && file.name}
              </div>
              <button
                style={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  paddingLeft: 20,
                  paddingRight: 20
                }}
                onClick={this.handleRemoveFile}
              >
                Remove
              </button>
            </aside>
          )}
        </CSVReader>

        <div style = {{paddingLeft : "30px", paddingRight : "100px"}}>
            <ReactBootstrap.InputGroup className="mb-3">
               <ReactBootstrap.InputGroup.Prepend>
                  <ReactBootstrap.InputGroup.Text id="basic-addon1">Filename</ReactBootstrap.InputGroup.Text>
               </ReactBootstrap.InputGroup.Prepend>
               <ReactBootstrap.FormControl
                  placeholder="Filename"
                  aria-label="Filename"
                  aria-describedby="basic-addon1"
               />
            </ReactBootstrap.InputGroup>
            
            <ReactBootstrap.Pagination>{this.state.items}</ReactBootstrap.Pagination>

            <div style = {{display : 'flex', flexDirection : 'row', justifyContent : 'flex-start'}}>
               <div>
                  {this.state.currentImg}
               </div>
               <div style={{ height: '936px', width:"1100px", overflowY: 'scroll' }}>
                  <h5>
                     Questions
                  </h5>
                  <ReactBootstrap.ListGroup>
                     {this.state.text}
                  </ReactBootstrap.ListGroup>
               </div>
            </div> 
         </div>
         

      </div>
    );
    }
}
 