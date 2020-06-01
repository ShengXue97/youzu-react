import React, { Component } from 'react';

import Dropzone from 'react-dropzone'
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup'
import Pagination from 'react-bootstrap/Pagination'
import ListGroup from 'react-bootstrap/ListGroup'

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
          <Pagination.Item onClick={() => this.handleChangePage(number)} key={number} active={number === this.state.active}>
            {number}
          </Pagination.Item>,
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
        <Navbar bg="light">
          <Navbar.Brand href="/youzu-react">Yoozoo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/edit">Edit</Nav.Link>
              <Nav.Link href="/library">Library</Nav.Link>
              <Nav.Link href="/settings">Settings</Nav.Link>
              <Nav.Link href="/format">Format</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
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
            <InputGroup className="mb-3">
               <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">Filename</InputGroup.Text>
               </InputGroup.Prepend>
               <FormControl
                  placeholder="Filename"
                  aria-label="Filename"
                  aria-describedby="basic-addon1"
               />
            </InputGroup>
            
            <Pagination>{this.state.items}</Pagination>

            <div style = {{display : 'flex', flexDirection : 'row', justifyContent : 'flex-start'}}>
               <div>
                  {this.state.currentImg}
               </div>
               <div style={{ height: '936px', width:"1100px", overflowY: 'scroll' }}>
                  <h5>
                     Questions
                  </h5>
                  <ListGroup>
                     {this.state.text}
                  </ListGroup>
               </div>
            </div> 
         </div>
         

      </div>
    );
    }
}
 