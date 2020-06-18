import React, { Component } from 'react';

import Dropzone from 'react-dropzone'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup'
import InputGroup from 'react-bootstrap/InputGroup'
import CheckBox from 'react-bootstrap';
import Question from "./Question";


class QuestionPage extends React.Component {
  constructor(props) {
    super(props)
    let listItems = null;
    let count = 0; /* verify that this is safe to do. Previously was 1 */
    listItems = this.props.pageData.map((row) => {
          count = count + 1;
          return <Question
              pgNum={this.props.pgNum}
              internalQuestionNum={this.props.internalQnList[count]}
              externalQuestionNum={this.props.externalQnList[count]}
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
    this.state = {
      "text": listItems,
    }
  }



  render() {
    return <div>
      {this.state.text}
    </div>
  }
}

export default QuestionPage;