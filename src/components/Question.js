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
  }

  render() {
    return <div style = {{width : "80%"}}>
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
          <InputGroup.Checkbox
            onChange={(e) => this.props.handleOnChangeCheckbox(this.props.questionNum, e.target.value)}
          />
          <InputGroup.Text id="basic-addon1">{this.props.questionNum} </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        defaultValue={this.props.title}
        aria-describedby="basic-addon1"
        onChange={(e) => this.props.handleOnChangeQuestion(this.props.questionNum, 0, e.target.value)}
      />
    </InputGroup>
    <div style = {{paddingLeft : "10px"}}>
      <ListGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">(1) </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            defaultValue={this.props.option1}
            aria-describedby="basic-addon1"
            onChange={(e) => this.props.handleOnChangeQuestion(this.props.questionNum, 1, e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">(2) </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            defaultValue={this.props.option2}
            aria-describedby="basic-addon1"
            onChange={(e) => this.props.handleOnChangeQuestion(this.props.questionNum, 2, e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">(3) </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            defaultValue={this.props.option3}
            aria-describedby="basic-addon1"
            onChange={(e) => this.props.handleOnChangeQuestion(this.props.questionNum, 3, e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">(4) </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            defaultValue={this.props.option4}
            aria-describedby="basic-addon1"
            onChange={(e) => this.props.handleOnChangeQuestion(this.props.questionNum, 4, e.target.value)}
          />
        </InputGroup>
      </ListGroup>
    </div>

  </div>;
  }
}

export default question;