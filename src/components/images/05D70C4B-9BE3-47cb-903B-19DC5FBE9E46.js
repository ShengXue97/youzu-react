import React, { Component } from 'react';

import Dropzone from 'react-dropzone'
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup'
import { Pagination } from 'semantic-ui-react'
import ListGroup from 'react-bootstrap/ListGroup'
import CheckBox from 'react-bootstrap';

import { CSVReader } from 'react-papaparse'
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import Drawer from './Drawer';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Document, Page, pdfjs } from 'react-pdf';

import yoozooImg from './images/yoozoo.jpg';

const buttonRef = React.createRef()

/* [[],[],[],[],[]] */


export default class edit extends Component {
   constructor(props) {
      super(props);
      pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

      const qData = ((window.data.data));
      var listItems = null;

      if (qData !== undefined && qData !=null) {
        var qnNum = 0;
        const questData = {};
        for (var qn = 0; qn < qData.length; qn++) {
            qnNum = qnNum + 1;
            questData = Object.assign(
                qn: {
                    questionNum: qnNum,
                    title: qData[qn][0],
                    option1: qData[qn][1],
                    option2: qData[qn][2],
                    option3: qData[qn][3],
                    option4: qData[qn][4],
                    checkBoxChecked: false
                },
                questData
            )
        }
      }

      this.state = {
        'pageNumber' : 1,
        text: questData,
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

    handleTextChange = (e, idx) => {
        const value = e.target.value;
        this.setState({
            text: {
                idx: {
                    e.target.name: value
                }
            }
        });
    }

    handleCheckBoxChange = (e, idx) => {
        if (this.state.text.idx[5]=false) {
            this.setState(prevState => ({
                ...prevState,
                text[idx]: {
                    ...prevState.text[idx],
                    checkBoxChecked: true
                }
            }));
        } else {
            this.setState(prevState => ({
                ...prevState,
                text[idx]: {
                    ...prevState.text[idx],
                    checkBoxChecked: false
                }
            }));
        }
    }

    saveQuestions = () => {
    /*
        for (item in listItems) {
            if (checkBoxChecked) {
                {qnNum} = questionNum;
                window.data[row[2]] = title;
                window.data[row[4]] = option1;
                window.data[row[5]] = option2;
                window.data[row[6]] = option3;
                window.data[row[7]] = option4;
            }
        }
     */
    }
    render() {
      const renderQuestion = () => {
        if(this.state.text !== undefined && this.state.text != null) {
            this.state.text.map((currQn, index) =>
                <Question
                    props={this.state.text[index]}
                    onChange={this.handleTextChange(currQn, index)}
                    onCheckBoxChange={this.handleCheckBoxChange(currQn, index)}
                />
        )}
      }
      const body =
      <div>
        <CardGroup style={{"maxHeight": "80%", "marginBottom": "2em"}}>
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
                  {renderQuestion()}
                </div>
              </ListGroup>
            </Card.Body>
          </Card>
        </CardGroup>
        <div style={{"float": "right"}}>
            <Button variant="primary" style={{"marginLeft": "1em", "marginRight": "1em"}}>Save Selected Question(s)</Button>
            <Button variant="danger"
                style={{"marginLeft": "1em", "marginRight": "1em"}}/*onClick: delete selected qns in data qns state, uncheck boxes*/
                >Delete Selected Question(s)</Button>
        </div>
        <div style={{"marginLeft": "1em", "marginRight": "1em"}}>
            <Button variant="primary"
                style={{"marginLeft": "1em", "marginRight": "1em"}}/*onClick: save all qns in current edited state to data state*/
                >Save Workspace</Button>
            <Button variant="primary"
                style={{"marginLeft": "1em", "marginRight": "1em"}}/*onClick: Save workspace, then download data as .csv*/
                >Download as .csv</Button>
            <Button variant="success"
                style={{"marginLeft": "1em", "marginRight": "1em"}}/*onClick: need to double confirm how this is different from save*/
                >Upload to Database</Button>
            <Button variant="danger"
                style={{"marginLeft": "1em", "marginRight": "1em"}}/*onClick: wipe the edit state, database state will be reflected on edit again*/
                >Revert to Original</Button>
        </div>
      </div>
      return (
        <div>
          <Drawer content = {body} name = "Edit"/>
        </div>
      );
    }
}

const Question = (props, onChange, onCheckBoxChange) => (
    <div>
        <InputGroup FormclassName="mb-3">
          <InputGroup.Prepend>
              <InputGroup.Checkbox aria-label="Checkbox for Question" onChange={onCheckBoxChange} />
              <InputGroup.Text id="basic-addon1" onChange={onChange}>{props.questionNum}</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            defaultValue={props.title}
            aria-describedby="basic-addon1"
            onChange={onChange}
          />
        </InputGroup>

        <div style = {{"paddingLeft" : "10px", "overflow": "auto"}}>
          <ListGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">(1) </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                defaultValue={props.option1}
                aria-describedby="basic-addon1"
                style = {{"paddingLeft" : "10px", "overflow": "auto"}}
                onChange={onChange}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">(2) </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                defaultValue={props.option2}
                aria-describedby="basic-addon1"
                style = {{"paddingLeft" : "10px", "overflow": "auto"}}
                onChange={onChange}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">(3) </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                defaultValue={props.option3}
                aria-describedby="basic-addon1"
                style = {{"paddingLeft" : "10px", "overflow": "auto"}}
                onChange={onChange}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">(4) </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                defaultValue={props.option4}
                aria-describedby="basic-addon1"
                style = {{"paddingLeft" : "10px", "overflow": "auto"}}
                onChange={onChange}
              />
            </InputGroup>
          </ListGroup>
        </div>
    </div>
)