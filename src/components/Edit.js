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
          listItems = data[currentPageNumber - 1].map((row, index) => {
            return <Question
                pgNum={currentPageNumber}
                internalQuestionNum = {index + 1}
                externalQuestionNum = {index + 1}
                title={row[1]}
                option1={row[2]}
                option2={row[3]}
                option3={row[4]}
                option4={row[5]}
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
          data.map((row) =>
            {
              qnsToBeExcluded.push(false);
            }
            );
        }
      );
      qnsToBeExcluded.push(false);
      
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
      var internalQnList = [];
      var externalQnList = [];
      var currentPage = [];
      var listItems = null;
      this.state.data.map((page, pgNum) =>
        {
          page.map((row) =>
            {
              var internalQuestionNum = row[6]
              if (!this.state.qnsToBeExcluded[internalQuestionNum]) {
                externalQuestionNum = externalQuestionNum + 1;
              }

              if (pgNum + 1 == activePage) {
                  internalQnList.push(internalQuestionNum);
                  externalQnList.push(externalQuestionNum);
                  if (!this.state.qnsToBeExcluded[internalQuestionNum]) {
                    currentPage.push(row);
                  }
              }
            }
          );
          if (pgNum + 1 == activePage) {
              listItems = currentPage.map((row, index) => {
                return <Question
                    pgNum={pgNum + 1}
                    internalQuestionNum={internalQnList[index]}
                    externalQuestionNum={externalQnList[index]}
                    title={row[1]}
                    option1={row[2]}
                    option2={row[3]}
                    option3={row[4]}
                    option4={row[5]}
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
          page.map((row) =>
            {
              qnsToBeExcluded.push(false);
            }
          );
        }
      );
      qnsToBeExcluded.push(false);

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
            internalQuestionNum= {index + 1}
            externalQuestionNum= {index + 1}
            title={row[1]}
            option1={row[2]}
            option2={row[3]}
            option3={row[4]}
            option4={row[5]}
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

    handleOnChangeQuestion = (pgNum, qnNum, section, value) => {
      //Change the list representation for the specific question cell
      var tempData = Array.from(this.state.data);
      var localQnNumber = -1;
      tempData.map((page) =>
        {
          page.map((row, index) =>
            {
              if (row[6] == qnNum) {
                localQnNumber = index;
              }
            }
          );
        }
      );
      // console.log(pgNum + ";" + qnNum + ";" + section + ";" + localQnNumber);
      // console.log(tempData)
      
      tempData[pgNum - 1][localQnNumber][section] = value;
      //Update the object representation for the CSV generation
      var newRows = []
      
      tempData.map((page) =>
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

      this.setState({
        'rows': newRows,
        'data': tempData
      });
      
    };

    //[False,False,False,False,False]
    handleOnChangeCheckbox = (pgNum, qnNum, isChecked) => {
      this.state.qnsToBeExcluded[qnNum] = isChecked
    };

    handleOnDeleteQuestions = () => {
      //Updates object representation [{},{},{}]
      var newRows = []
      this.state.data.map((page) =>
        {
          page.map((row, qnNum) =>
            {
              if (!this.state.qnsToBeExcluded[qnNum + 1]){
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
      var internalQnList = [];
      var externalQnList = [];
      var currentPage = [];
      var localQnsToBeExcluded = [];

      this.state.data.map((page, pgNum) =>
        {
          page.map((row, index) =>
            {
              var internalQuestionNum = row[6]
              if (!this.state.qnsToBeExcluded[internalQuestionNum]) {
                  externalQuestionNum = externalQuestionNum + 1;
              }
              if (pgNum + 1 == this.state.currentPageNumber) {
                  internalQnList.push(internalQuestionNum);
                  externalQnList.push(externalQuestionNum);
                  if (!this.state.qnsToBeExcluded[internalQuestionNum]) {
                    currentPage.push(row);
                  }
              }
            }
          );
        }
      );

      var listItems = currentPage.map((row, index) => {
        return <Question
            pgNum={this.state.currentPageNumber}
            internalQuestionNum={internalQnList[index]}
            externalQuestionNum={externalQnList[index]}
            title={row[1]}
            option1={row[2]}
            option2={row[3]}
            option3={row[4]}
            option4={row[5]}
            handleOnChangeQuestion={this.handleOnChangeQuestion}
            handleOnChangeCheckbox={this.handleOnChangeCheckbox}
        >
        </Question>
        }
      );
      console.log(currentPage);
      console.log(listItems);

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
                      <Button onClick={this.handleOnRevertToOriginal} variant = "warning" /*onClick: wipe the edit state, database state will be reflected on edit again*/>Revert to Original</Button>
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
