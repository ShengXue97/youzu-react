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
                aria-label="Checkbox for Question"
                onChange={(e) => {
                        if(window.date[this.props.checkBoxChecked] = false) {
                            window.date[this.props.checkBoxChecked]=true;
                        } else {
                            window.date[this.props.checkBoxChecked]=false;
                        }
                    }
                }
           />
          <InputGroup.Text id="basic-addon1" onChange={(text)=>{window.data[this.props.questionNum] = text}}>{this.props.questionNum} </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        defaultValue={this.props.title}
        aria-describedby="basic-addon1"
        onChange={(text)=>{window.data[this.props.title] = text}}
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
            onChange={(text)=>{window.data[this.props.option1] = text}}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">(2) </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            defaultValue={this.props.option2}
            aria-describedby="basic-addon1"
            onChange={(text)=>{window.data[this.props.option2] = text}}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">(3) </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            defaultValue={this.props.option3}
            aria-describedby="basic-addon1"
            onChange={(text)=>{window.data[this.props.option3] = text}}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">(4) </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            defaultValue={this.props.option4}
            aria-describedby="basic-addon1"
            onChange={(text)=>{window.data[this.props.option4] = text}}
          />
        </InputGroup>
      </ListGroup>
    </div>

  </div>;
  }
}

export default question;