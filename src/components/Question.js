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


class question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        'pgNum': this.props.pgNum,
        'internalQuestionNum': this.props.internalQuestionNum,
        'externalQuestionNum': this.props.externalQuestionNum,
        'title': this.props.title,
        'option1': this.props.option1,
        'option2': this.props.option2,
        'option3': this.props.option3,
        'option4': this.props.option4,
      };
  }

  componentDidUpdate(prevProps) {
    console.log(this.props.pgNum + ";" + prevProps.pgNum)
    if(this.props.pgNum != prevProps.pgNum) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
    {
      this.setState({
        'pgNum': this.props.pgNum,
        'internalQuestionNum': this.props.internalQuestionNum,
        'externalQuestionNum': this.props.externalQuestionNum,
        'title': this.props.title,
        'option1': this.props.option1,
        'option2': this.props.option2,
        'option3': this.props.option3,
        'option4': this.props.option4,
      });
    }
  } 

  render() {
    return <div style = {{width : "80%"}}>
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
          {/*<InputGroup.Checkbox*/}
          {/*  onChange={(e) =>*/}
          {/*      this.props.handleOnChangeCheckbox(this.state.pgNum, this.state.internalQuestionNum, e.target.checked)}*/}
          {/*/>*/}
          <InputGroup.Text id="basic-addon1">{this.state.externalQuestionNum} </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        value={this.state.title}
        aria-describedby="basic-addon1"
        onChange = {(e) => {
            this.setState({'title' : e.target.value});
            this.props.handleOnChangeQuestion(this.state.pgNum, this.state.internalQuestionNum, 1, e.target.value)}}
      />
    </InputGroup>
    <div style = {{paddingLeft : "10px"}}>
      <ListGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">(1) </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            value={this.state.option1}
            aria-describedby="basic-addon1"
            onChange={(e) => {
                this.setState({'option1' : e.target.value});
                this.props.handleOnChangeQuestion(this.state.pgNum, this.state.internalQuestionNum, 2, e.target.value)}}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">(2) </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            value={this.state.option2}
            aria-describedby="basic-addon1"
            onChange={(e) => {
                this.setState({'option2' : e.target.value});
                this.props.handleOnChangeQuestion(this.state.pgNum, this.state.internalQuestionNum, 3, e.target.value)}}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">(3) </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            value={this.state.option3}
            aria-describedby="basic-addon1"
            onChange={(e) => {
                this.setState({'option3' : e.target.value});
                this.props.handleOnChangeQuestion(this.state.pgNum, this.state.internalQuestionNum, 4, e.target.value)}}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">(4) </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            value={this.state.option4}
            aria-describedby="basic-addon1"
            onChange={(e) => {
              this.setState({'option4' : e.target.value});
              this.props.handleOnChangeQuestion(this.state.pgNum, this.state.internalQuestionNum, 5, e.target.value)}}
          />
        </InputGroup>
      </ListGroup>
    </div>

  </div>;
  }
}

export default question;