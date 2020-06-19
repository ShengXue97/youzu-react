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
      var data = null;
      if (window.data.data == undefined){
        data = [[[1,"1 John in addition to the two monitors, _________ the books from the staff roorn io theclassroom every morning.","(1) carry","(2) carries","(3) carrying","(4) have carried",1],[1,"2 When, the results of the competition were announced, neither the winner nor his parents\nAALRINY\n_________ atthe hall.a","(1) is","(2) are","(8) was","(4) were",2],[1,"3 [ne nandicratt did not iurn out well as the girl did not put in ____________ effort to glue theparts together.","(1) many","(2) much","(3) little","(A) few",3],[1,"4 My grandmother managed to prepare a nutritions meal for us ___________having only a fewin the refrigeraior.","(1) despite","(2) besides","(3) because of","(4) resulting from",4],[1,"o With trepidation, Sarah watched the running boy ___________ the pail, spilling water all overthe floor.","(1) knock\n\n","(2) knocks\n\n","(3) Knocked\n\n","(A) was knocking",5]],[[2,"6 \"Youve put the carton of milk in ihe refrigerator, __________?* Mrs Lim asked her daughter.","(1) isn't it","(2) didn'twe","(3) hadn't you","(4) haven't you",6],[2,"7 \"| have never __________ such an interesting flower before,” exclaimed the old lady as she\nfooked closely at it.","(1) see","(2) saw","(3) seen","(4) been seeing",7],[2,"8 If She __________ tore waier throughout the day, she would not have been dehydrated.","(1) drunk","(2) drinks","(3) has drunk","(4) had drunk",8],[2,"9 All of the luagage __________io the collection point except the one that belonged to the elderly\nbespectacled man.","(1) is delivering","(2) was delivered","(3) has been delivering\n","(4) nave been delivered",9],[2,"72 in order to be heaithier, Mrs Chandra eliminated salty food and sugary drinks _________. he\ndiet.","(1) off\n","(2) out\n","(3) from\n","{4) away",10]],[[3,"V1 The teacher praised |om for being a ___________ pupil as he always checks his work carefully. ‘bet . ae oa\nand submits his assignments on time.","(i) conscious","(2) respeciful","(3) productive","(4) conscientious",11],[3,"12 Jne gangsters ___________ihe homeless man by raining repeated blows on his head","(1} assailed","(2) criticised","(3) surrounded","(4) approached",12],[3,"43 The teacher encouraged her pupils to read_________ by snaring with them books on a widevariety of topics.","(1) extensively","(2) bountifully,","(3) studiously","(4) _ plentifully",13],[3,"14 the shop assistants were releved wnen the anary customer _________ ater theyapologised for their mistake.","(1) backed up","(2) backed into","(3) backed away","(4) backed down",14],[3,"45 Although ihe doctors were of the opinion that the patient had a good chance of recovery, his\ncondition ___________rapidly after the operation.","(1) decomposed\n","(2) deteriorated\n","(3) destructed\n","(4) degraded",15]],[[4,"16 (2)(3)(4)","(4) curiously","(2) randomly","(3) recklessly","(4) relentlessly",16],[4,"tf OFA) an undeniable","(2) an itremovable","(3) an unbelievable","(4) an unforgettable","-",17]]]
      } else {
        data = window.data.data;
      }
      
      console.log(JSON.stringify(data))
      console.log(typeof(data));
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
                externalQuestionNum = {index + 1}
                title={row[1]}
                option1={row[2]}
                option2={row[3]}
                option3={row[4]}
                option4={row[5]}
                isChecked={false}
                handleOnDeleteSingleQuestion={this.handleOnDeleteSingleQuestion}
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
                title: row[1],
                option1: row[2],
                option2: row[3],
                option3: row[4],
                option4: row[5]
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
        'numPages' : data.length,
        'file': window.fileData,
        'originalData' : data,
        'data' : data,
        'cols' : cols,
        'rows' : rows,
        'qnsToBeExcluded' : qnsToBeExcluded,
        'tempQnsToBeExcluded' : JSON.parse(JSON.stringify(qnsToBeExcluded)),
          'currentPageNumber': currentPageNumber
      };
    }
  
    

    handlePaginationChange = (e, { activePage }) => {
      var externalQuestionNum = 0;
      var localQnList = [];
      var externalQnList = [];
      var currentPage = [];
      var listItems = null;
      this.state.data.map((page, pgNum) =>
        {
          page.map((row, index) =>
            {
              if (!this.state.qnsToBeExcluded[pgNum][index]) {
                externalQuestionNum = externalQuestionNum + 1;
              }

              if (pgNum + 1 == activePage) {
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
                    externalQuestionNum={externalQnList[index]}
                    title={row[1]}
                    option1={row[2]}
                    option2={row[3]}
                    option3={row[4]}
                    option4={row[5]}
                    isChecked={this.state.qnsToBeExcluded[pgNum][localQnList[index] - 1]}
                    handleOnDeleteSingleQuestion={this.handleOnDeleteSingleQuestion}
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
            externalQuestionNum= {index + 1}
            title={row[1]}
            option1={row[2]}
            option2={row[3]}
            option3={row[4]}
            option4={row[5]}
            isChecked={false}
            handleOnDeleteSingleQuestion={this.handleOnDeleteSingleQuestion}
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
        'qnsToBeExcluded' : qnsToBeExcluded,
        'tempQnsToBeExcluded' : JSON.parse(JSON.stringify(qnsToBeExcluded))
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
      //When you change the checkbox, it does not update qnsToBeExcluded. It is only updated
      //when you click the delete button. The reason for this is to support deleting individual questions.
      this.state.tempQnsToBeExcluded[pgNum - 1][localQnNum - 1] = isChecked
    };

    handleOnDeleteSingleQuestion = (pgNum, localQnNum) => {
      this.state.tempQnsToBeExcluded[pgNum - 1][localQnNum - 1] = true;
      this.state.qnsToBeExcluded[pgNum - 1][localQnNum - 1] = true;
      this.handleOnDeleteQuestions(true);
    };

    handleOnDeleteQuestions = (isDeleteOne) => {
      //If deleting one question only, ignore the tempQnsToBeExcluded, which is only for deletion of multiple questions
      var curQnsToBeExcluded = null
      if (isDeleteOne){
        curQnsToBeExcluded = this.state.qnsToBeExcluded;
      } else {
        curQnsToBeExcluded = this.state.tempQnsToBeExcluded;
      }
      console.log(curQnsToBeExcluded)

      //Updates object representation [{},{},{}]
      var newRows = []
      this.state.data.map((page, index) =>
        {
          page.map((row, qnNum) =>
            {
              if (!curQnsToBeExcluded[index][qnNum]){
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
      //External question numbers [1,2,3,4]

      //Renders the questions using the new list representation (Creates the JSX)
      //this.state.data => without deleted questions
      //newData => with deleted questions
      var externalQuestionNum = 0;
      var localQnList = [];
      var externalQnList = [];
      var currentPage = [];
      var listItems = null;
      
      this.state.data.map((page, pgNum) =>
        {
          page.map((row, index) =>
            {
              if (!curQnsToBeExcluded[pgNum][index]) {
                  externalQuestionNum = externalQuestionNum + 1;
              }
              if (pgNum + 1 == this.state.currentPageNumber) {
                  if (!curQnsToBeExcluded[pgNum][index]) {
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
                    externalQuestionNum={externalQnList[index]}
                    title={row[1]}
                    option1={row[2]}
                    option2={row[3]}
                    option3={row[4]}
                    option4={row[5]}
                    isChecked={this.state.tempQnsToBeExcluded[pgNum][localQnList[index] - 1]}
                    handleOnDeleteSingleQuestion={this.handleOnDeleteSingleQuestion}
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
        'rows': newRows,
        'qnsToBeExcluded' : curQnsToBeExcluded,
      });

    }

    handleOnAddQuestion = () => {
      var tempData = []
      var tempRow = []
      //Add new question to the data
      this.state.data.map((page, pgNum) =>
        {
          tempRow = []
          page.map((row, index) =>
            {
              tempRow.push(row);
              if (pgNum + 1 == this.state.currentPageNumber &&  index == page.length - 1) {
                  tempRow.push([this.state.currentPageNumber,"-","-","-","-","-","-"]);
              }
            }
          );
          tempData.push(tempRow);
        }
      );
      
      //Update qnsToBeExcluded
      var tempQnsToBeExcluded = []
      tempData.map((page, pgNum) =>
        {
          var pageList = []
          page.map((row, index) =>
            {
              if (pgNum + 1 == this.state.currentPageNumber &&  index == page.length - 1) {
                pageList.push(false);
              } else {
                pageList.push(this.state.qnsToBeExcluded[pgNum][index]);
              }
            }
            );
            tempQnsToBeExcluded.push(pageList)
        }
      );

      //Updates object representation [{},{},{}]
      var newRows = []
      tempData.map((page, index) =>
        {
          page.map((row, qnNum) =>
            {
              if (!tempQnsToBeExcluded[index][qnNum]){
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
      //External question numbers [1,2,3,4]

      //Renders the questions using the new list representation (Creates the JSX)
      //this.state.data => without deleted questions
      //newData => with deleted questions
      var externalQuestionNum = 0;
      var localQnList = [];
      var externalQnList = [];
      var currentPage = [];
      var listItems = null;
      
      tempData.map((page, pgNum) =>
        {
          page.map((row, index) =>
            {
              if (!tempQnsToBeExcluded[pgNum][index]) {
                  externalQuestionNum = externalQuestionNum + 1;
              }
              if (pgNum + 1 == this.state.currentPageNumber) {
                  if (!tempQnsToBeExcluded[pgNum][index]) {
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
                    externalQuestionNum={externalQnList[index]}
                    title={row[1]}
                    option1={row[2]}
                    option2={row[3]}
                    option3={row[4]}
                    option4={row[5]}
                    isChecked={false}
                    handleOnDeleteSingleQuestion={this.handleOnDeleteSingleQuestion}
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
        'rows': newRows,
        'data': tempData,
        'qnsToBeExcluded': tempQnsToBeExcluded
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
                        <Button variant="info">Download as .csv</Button>
                      </CsvDownloader>
                      <Button onClick={this.handleOnAddQuestion} variant="success">Add Question Below</Button>
                      <Button onClick={this.handleOnRevertToOriginal} variant = "warning">Revert to Original</Button>
                      <Button
                        variant="danger"
                        onClick={() => {
                            this.handleOnDeleteQuestions(false)}}
                      >
                        Delete Selected Question(s)
                      </Button>
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
