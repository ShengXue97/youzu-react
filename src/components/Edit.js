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
import CsvDownloader from 'react-csv-downloader';
import yoozooImg from './images/yoozoo.jpg';

const buttonRef = React.createRef()


export default class edit extends Component {
   constructor(props) {
      super(props);
      pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

      const data = ((window.data.data));
      const cols = [{
        id: 'title',
        displayName: "title"
      }, {
        id: "option1",
        displayName: "option1"
      }, {
        id: "option2",
        displayName: "option2"
      }, {
        id: "option3",
        displayName: "option3"
      }, {
        id: "option4",
        displayName: "option4"
      }];

      const rows = [{
        title: "foo",
        option1: "bar",
        option2: "bar",
        option3: "bar",
        option4: "bar"
      }, {
        title: "foobar",
        option1: "foobar",
        option2: "foobar",
        option3: "foobar",
        option4: "foobar"
      }];

      var listItems = null;
      if (data !== undefined && data != null){
        console.log(data)
        console.log(typeof(data))
        var qnNum = 0;
        listItems = data.map((row) =>
        {
          qnNum = qnNum + 1;
          return <Question
            questionNum = {qnNum}
            title = {row[0]}
            option1 = {row[1]}
            option2 = {row[2]}
            option3 = {row[3]}
            option4 = {row[4]}
            handleOnChangeQuestion = {this.handleOnChangeQuestion}
            handleOnChangeCheckbox = {this.handleOnChangeCheckbox}
          >
          </Question>
        }
        );
      }

      // data => [[],[],[]] => Imported from Flask
      // rows => [{},{},{}] => CSVDownloader needs this format to produce csv
      this.state = {'pageNumber' : 1,
        text: listItems,
        'numPages' : 1,
        'file': window.fileData,
        'data' : data,
        'cols' : cols,
        'rows' : rows,
        'qnsToBeExcluded' : [] 
      };
    }
    

    handlePaginationChange = (e, { activePage }) => {
      this.setState({'pageNumber': activePage});
    }

    onDocumentLoadSuccess = ({ numPages }) => {
      this.setState({ numPages });
    }
    handleOnChangeQuestion = (qnNum, section, value) => {
      this.state.data[qnNum - 1][section] = value;
      var newRows = []
      
      this.state.data.map((row) =>
        {
          const newRow = {
            title: row[0],
            option1: row[1],
            option2: row[2],
            option3: row[3],
            option4: row[4]
          }
          newRows.push(newRow)
        }
      );

      this.setState({'rows': newRows});
    };

    handleOnChangeCheckbox = (qnNum, isChecked) => {
      if (isChecked){
        this.state.qnsToBeExcluded.push(qnNum);
      } else{
        this.state.qnsToBeExcluded.pop(qnNum);
      }
    };
    handleOnDeleteQuestions = () => {
      var oldQnNum = 0;

      //Updates list representation [[],[],[]]
      var newData = []
      this.state.data.map((row) =>
        {
          oldQnNum = oldQnNum + 1;
          if (!this.state.qnsToBeExcluded.includes(oldQnNum)){
            newData.push(row);
          }
        }
      );
      this.setState({'data': newData});
      
      //Updates object representation [{},{},{}]
      var newRows = []
      this.state.data.map((row) =>
        {
          const newRow = {
            title: row[0],
            option1: row[1],
            option2: row[2],
            option3: row[3],
            option4: row[4]
          }
          newRows.push(newRow)
        }
      );
      this.setState({'rows': newRows});
      
      console.log(this.state.data)
      //Renders the questions using the new list representation (Creates the JSX)
      var newQnNum = 0;
      var listItems = this.state.data.map((row) =>
        {
          newQnNum = newQnNum + 1;
          return <Question
            questionNum = {newQnNum}
            title = {row[0]}
            option1 = {row[1]}
            option2 = {row[2]}
            option3 = {row[3]}
            option4 = {row[4]}
            handleOnChangeQuestion = {this.handleOnChangeQuestion}
            handleOnChangeCheckbox = {this.handleOnChangeCheckbox}
          >
          </Question>
        }
      );
      this.setState({'text': listItems});

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
                  <div class="ui stackable four column grid">
                      <Button variant="primary"/*onClick: save all qns in current edited state to data state*/>Save Workspace</Button>
                      <CsvDownloader
                      filename="myfile"
                      separator=","
                      wrapColumnChar='"'
                      columns={this.state.cols}
                      datas={this.state.rows}
                      text="DOWNLOAD">
                        <Button variant="info" /*onClick: Save workspace, then download data as .csv*/>Download as .csv</Button>
                      </CsvDownloader>
                      <Button variant="success" /*onClick: need to double confirm how this is different from save*/>Upload to Database</Button>
                      <Button variant = "danger" /*onClick: wipe the edit state, database state will be reflected on edit again*/>Revert to Original</Button>
                      <Button onClick={this.handleOnDeleteQuestions} variant="danger" /*onClick: delete selected qns in data qns state, uncheck boxes*/>Delete Selected Question(s)</Button>
                  </div>
              </Card>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Questions</Card.Title>
              <ListGroup>
                <div style={{ height: '936px', width:"900px", overflowY: 'scroll' }}>
                  {this.state.text} 
                </div>
              </ListGroup>
            </Card.Body>
          </Card>
        </CardGroup>



        </div>
      return (
        <div>
          <Drawer content = {body} name = "Edit"/>
        </div>
      );
    }
}