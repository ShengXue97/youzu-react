import React, { Component } from 'react';

import Dropzone from 'react-dropzone'
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup'
import { Pagination } from 'semantic-ui-react'
import ListGroup from 'react-bootstrap/ListGroup'

import Question from './Question';
import { CSVReader } from 'react-papaparse'
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import Drawer from './Drawer';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Document, Page, pdfjs } from 'react-pdf';

import yoozooImg from './images/yoozoo.jpg';

const buttonRef = React.createRef()


export default class edit extends Component {
   constructor(props) {
      super(props);
      pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

      const data = ((window.data.data));
      var listItems = null;

      if (data !== undefined && data != null){
        console.log(data)
        console.log(typeof(data))
        var qnNum = 0;
        listItems = data.map((row) =>
        {
          key = {member.id}
          qnNum = qnNum + 1;
          return <Question
            questionNum = {qnNum}
            title = {row[2]}
            option1 = {row[4]}
            option2 = {row[5]}
            option3 = {row[6]}
            option4 = {row[7]}
            checkboxChecked = {false}
          >
          </Question>
        }
        );
      }


      this.state = {'pageNumber' : 1,
        text: listItems,
        'numPages' : 1,
        'file': window.fileData,
      };
    }

    handlePaginationChange = (e, { activePage }) => {
      this.setState({'pageNumber': activePage});
    }

    onDocumentLoadSuccess = ({ numPages }) => {
      this.setState({ numPages });
    }


    render() {
      const body =
      <div>

        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>PDF file preview</Card.Title>
              <Pagination defaultActivePage={1}
                totalPages={this.state.numPages}
                onPageChange={this.handlePaginationChange}
              />
              <Card>
                <Document
                    file={this.state.file}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                  >
                    <Page pageNumber={this.state.pageNumber} />
                  </Document>
                  <p>Page {this.state.pageNumber} of {this.state.numPages}</p>
              </Card>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Questions</Card.Title>
              <ListGroup>
                <div style={{ height: '936px', width:"1100px", overflowY: 'scroll' }}>
                  {this.state.text}
                </div>
              </ListGroup>
            </Card.Body>
            <div class="ui stackable 2 column grid">
                <button variant="primary" /*onClick: save selected qns in select qns state, uncheck boxes*/>Save Selected Question(s)</button>
                <button variant="danger" /*onClick: delete selected qns in data qns state, uncheck boxes*/>Delete Selected Question(s)</button>
            </div>
          </Card>
        </CardGroup>
        <div class="ui stackable four column grid">
            <button variant="contained" color="primary"/*onClick: save all qns in current edited state to data state*/>Save Workspace</button>
            <button variant="contained" color="primary" /*onClick: Save workspace, then download data as .csv*/>Download as .csv</button>
            <button variant="contained" color="success" /*onClick: need to double confirm how this is different from save*/>Upload to Database</button>
            <button variant="contained" color="danger" /*onClick: wipe the edit state, database state will be reflected on edit again*/>Revert to Original</button>
        </div>



        </div>
      return (
        <div>
          <Drawer content = {body} name = "Edit"/>
        </div>
      );
    }
}