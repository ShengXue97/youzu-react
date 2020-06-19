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
import QuestionPage from './QuestionPage';
import { CSVReader } from 'react-papaparse'
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import Drawer from './Drawer';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Document, Page, pdfjs } from 'react-pdf';
import CsvDownloader from 'react-csv-downloader';
import yoozooImg from './images/yoozoo.jpg';
import { MDBContainer, MDBScrollbar } from "mdbreact";
import "./scrollbar.css";

const buttonRef = React.createRef()


export default class edit extends Component {
   constructor(props) {
      super(props);
      pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

      var data = ((window.data.data));
      console.log(data)
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

      var listItems = null;
      var currentPageNumber = 1;
      if (data !== undefined && data != null){
          console.log(data)
          listItems = data[currentPageNumber - 1].map((row, index) => {
            return <Question
                pgNum={currentPageNumber}
                localQuestionNum = {index + 1}
                internalQuestionNum = {index + 1}
                externalQuestionNum = {index + 1}
                title={row[1]}
                option1={row[2]}
                option2={row[3]}
                option3={row[4]}
                option4={row[5]}
                isChecked={false}
                handleOnChangeQuestion={this.handleOnChangeQuestion}
                handleOnChangeCheckbox={this.handleOnChangeCheckbox}
            >
            </Question>
            }
          );
      }

      var rows = []
      
      data.map((page) =>
        {
            page.map((row) => {
                const newRow = {
                title: row[0],
                option1: row[1],
                option2: row[2],
                option3: row[3],
                option4: row[4]
                }
                rows.push(newRow)
            }
            );
        }
      );

      var qnsToBeExcluded = []
      data.map((page) =>
        {
          var pageList = []
          page.map((row) =>
            {
              pageList.push(false);
            }
            );
          qnsToBeExcluded.push(pageList)
        }
      );
      
      // data => [[],[],[]] => Imported from Flask
      // rows => [{},{},{}] => CSVDownloader needs this format to produce csv
      this.state = {'pageNumber' : 1,
        'text': listItems,
        'numPages' : 1,
        'file': window.fileData,
        'originalData' : data,
        'data' : data,
        'cols' : cols,
        'rows' : rows,
        'qnsToBeExcluded' : qnsToBeExcluded,
          'currentPageNumber': currentPageNumber
      };
    }
  
    

    handlePaginationChange = (e, { activePage }) => {
      var internalQuestionNum = 0;
      var externalQuestionNum = 0;
      var localQnList = [];
      var internalQnList = [];
      var externalQnList = [];
      var currentPage = [];
      var listItems = null;
      this.state.data.map((page, pgNum) =>
        {
          page.map((row, index) =>
            {
              var internalQuestionNum = row[6]
              if (!this.state.qnsToBeExcluded[pgNum][index]) {
                externalQuestionNum = externalQuestionNum + 1;
              }

              if (pgNum + 1 == activePage) {
                  internalQnList.push(internalQuestionNum);
                  if (!this.state.qnsToBeExcluded[pgNum][index]) {
                    externalQnList.push(externalQuestionNum);
                    localQnList.push(index + 1);
                    currentPage.push(row);
                  }
              }
            }
          );
          if (pgNum + 1 == activePage) {
              listItems = currentPage.map((row, index) => {
                return <Question
                    pgNum={pgNum + 1}
                    localQuestionNum = {localQnList[index]}
                    internalQuestionNum={internalQnList[index]}
                    externalQuestionNum={externalQnList[index]}
                    title={row[1]}
                    option1={row[2]}
                    option2={row[3]}
                    option3={row[4]}
                    option4={row[5]}
                    isChecked={this.state.qnsToBeExcluded[pgNum][localQnList[index] - 1]}
                    handleOnChangeQuestion={this.handleOnChangeQuestion}
                    handleOnChangeCheckbox={this.handleOnChangeCheckbox}
                >
                </Question>
                }
              );
              return listItems;
          }
        }
      );

      // listItems = <div
      //         >
      //           {this.state.data[activePage - 1]}
      //         </div>

      this.setState({
        'pageNumber' : activePage,
        'currentPageNumber': activePage,
        'text' : listItems,
      });
    }

    onDocumentLoadSuccess = ({ numPages }) => {
      this.setState({ numPages });
    }

    handleOnRevertToOriginal = () => {
      //Revert back qnsToBeExcluded
      var qnsToBeExcluded = []
      this.state.originalData.map((page) =>
        {
          var pageList = []
          page.map((row) =>
            {
              pageList.push(false);
            }
            );
          qnsToBeExcluded.push(pageList)
        }
      );

      //Revert object representation for CSV generation
      var newRows = []
      
      this.state.originalData.map((page) =>
        {
          page.map((row) =>
            {
              const newRow = {
                title: row[1],
                option1: row[2],
                option2: row[3],
                option3: row[4],
                option4: row[5]
              }
              newRows.push(newRow)
            }
          );
        }
      );

      //Revert JSX(rendering) representation
      var listItems = null;
      listItems = this.state.originalData[this.state.currentPageNumber - 1].map((row, index) => {
        return <Question
            pgNum={this.state.currentPageNumber}
            localQuestionNum = {index + 1}
            internalQuestionNum= {index + 1}
            externalQuestionNum= {index + 1}
            title={row[1]}
            option1={row[2]}
            option2={row[3]}
            option3={row[4]}
            option4={row[5]}
            isChecked={false}
            handleOnChangeQuestion={this.handleOnChangeQuestion}
            handleOnChangeCheckbox={this.handleOnChangeCheckbox}
        >
        </Question>
        }
      );
      this.setState({
        'rows': newRows,
        'text' : listItems,
        'data' : this.state.originalData,
        'qnsToBeExcluded' : qnsToBeExcluded
      });
      
    };

    handleOnChangeQuestion = (pgNum, localQnNum, section, value) => {
      //Change the list representation for the specific question cell
      var tempData = Array.from(this.state.data);
      tempData[pgNum - 1][localQnNum - 1][section] = value;
      //Update the object representation for the CSV generation
      var newRows = []
      tempData.map((page, index) =>
        {
          page.map((row, qnNum) =>
            {
              if (!this.state.qnsToBeExcluded[index][qnNum]){
                const newRow = {
                  title: row[1],
                  option1: row[2],
                  option2: row[3],
                  option3: row[4],
                  option4: row[5]
                }
                newRows.push(newRow)
              }
            }
          );
        }
      );

      this.setState({
        'rows': newRows,
        'data': tempData
      });
      
    };

    //[False,False,False,False,False]
    handleOnChangeCheckbox = (pgNum, localQnNum, isChecked) => {
      this.state.qnsToBeExcluded[pgNum - 1][localQnNum - 1] = isChecked
    };

    handleOnDeleteQuestions = () => {
      //Updates object representation [{},{},{}]
      var newRows = []
      this.state.data.map((page, index) =>
        {
          page.map((row, qnNum) =>
            {
              if (!this.state.qnsToBeExcluded[index][qnNum]){
                const newRow = {
                  title: row[1],
                  option1: row[2],
                  option2: row[3],
                  option3: row[4],
                  option4: row[5]
                }
                newRows.push(newRow)
              }
            }
          );
        }
      );
      
      //Original [1,2,3,4,5]
      //qnsToBeExcluded [False,False,True,False,False]
      //Internal question numbers [1,2,4,5]
      //External question numbers [1,2,3,4]

      //Renders the questions using the new list representation (Creates the JSX)
      //this.state.data => without deleted questions
      //newData => with deleted questions
      var externalQuestionNum = 0;
      var localQnList = [];
      var internalQnList = [];
      var externalQnList = [];
      var currentPage = [];
      var listItems = null;
      
      this.state.data.map((page, pgNum) =>
        {
          page.map((row, index) =>
            {
              var internalQuestionNum = row[6]
              if (!this.state.qnsToBeExcluded[pgNum][index]) {
                  externalQuestionNum = externalQuestionNum + 1;
              }
              if (pgNum + 1 == this.state.currentPageNumber) {
                  internalQnList.push(internalQuestionNum);
                  if (!this.state.qnsToBeExcluded[pgNum][index]) {
                    localQnList.push(index + 1);
                    externalQnList.push(externalQuestionNum);
                    currentPage.push(row);
                  }
              }
            }
          );
          if (pgNum + 1 == this.state.currentPageNumber) {
              listItems = currentPage.map((row, index) => {
                return <Question
                    pgNum={pgNum + 1}
                    localQuestionNum = {localQnList[index]}
                    internalQuestionNum={internalQnList[index]}
                    externalQuestionNum={externalQnList[index]}
                    title={row[1]}
                    option1={row[2]}
                    option2={row[3]}
                    option3={row[4]}
                    option4={row[5]}
                    isChecked={false}
                    handleOnChangeQuestion={this.handleOnChangeQuestion}
                    handleOnChangeCheckbox={this.handleOnChangeCheckbox}
                >
                </Question>
                }
              );
          }
        }
      );
      console.log(listItems)

      this.setState({
        "text" : listItems,
        'rows': newRows
      });

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
                      {/*<Button variant="primary">Save Workspace</Button>*/}
                      <CsvDownloader
                      filename="myfile"
                      separator=","
                      wrapColumnChar='"'
                      columns={this.state.cols}
                      datas={this.state.rows}
                      text="DOWNLOAD">
                        <Button variant="info" /*onClick: Save workspace, then download data as .csv*/>Download as .csv</Button>
                      </CsvDownloader>
                      {/*<Button variant="success">Upload to Database</Button>*/}
                      {/*<Button onClick={this.handleOnRevertToOriginal} variant = "warning">Revert to Original</Button>*/}
                      <Button onClick={this.handleOnDeleteQuestions} variant="danger">Delete Selected Question(s)</Button>
                  </div>
              </Card>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Questions</Card.Title>
              <ListGroup>
                  <MDBContainer>
                    <div className="scrollbar my-5 mx-auto scrollbar-near-moon" style={{ height: '936px', width:"100%"}}>
                      {this.state.text}
                    </div>
                  </MDBContainer>
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
