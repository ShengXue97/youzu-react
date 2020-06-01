import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap';

class question extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
    <ReactBootstrap.InputGroup className="mb-3">
      <ReactBootstrap.InputGroup.Prepend>
      <ReactBootstrap.InputGroup.Text id="basic-addon1">{this.props.questionNum} </ReactBootstrap.InputGroup.Text>
      </ReactBootstrap.InputGroup.Prepend>
      <ReactBootstrap.FormControl
        defaultValue={this.props.title}
        aria-describedby="basic-addon1"
      />
    </ReactBootstrap.InputGroup>

    <div style = {{paddingLeft : "10px"}}>
      <ReactBootstrap.ListGroup>
        <ReactBootstrap.InputGroup className="mb-3">
          <ReactBootstrap.InputGroup.Prepend>
          <ReactBootstrap.InputGroup.Text id="basic-addon1">(1) </ReactBootstrap.InputGroup.Text>
          </ReactBootstrap.InputGroup.Prepend>
          <ReactBootstrap.FormControl
            defaultValue={this.props.option1}
            aria-describedby="basic-addon1"
          />
        </ReactBootstrap.InputGroup>

        <ReactBootstrap.InputGroup className="mb-3">
          <ReactBootstrap.InputGroup.Prepend>
          <ReactBootstrap.InputGroup.Text id="basic-addon1">(2) </ReactBootstrap.InputGroup.Text>
          </ReactBootstrap.InputGroup.Prepend>
          <ReactBootstrap.FormControl
            defaultValue={this.props.option2}
            aria-describedby="basic-addon1"
          />
        </ReactBootstrap.InputGroup>

        <ReactBootstrap.InputGroup className="mb-3">
          <ReactBootstrap.InputGroup.Prepend>
          <ReactBootstrap.InputGroup.Text id="basic-addon1">(3) </ReactBootstrap.InputGroup.Text>
          </ReactBootstrap.InputGroup.Prepend>
          <ReactBootstrap.FormControl
            defaultValue={this.props.option3}
            aria-describedby="basic-addon1"
          />
        </ReactBootstrap.InputGroup>

        <ReactBootstrap.InputGroup className="mb-3">
          <ReactBootstrap.InputGroup.Prepend>
          <ReactBootstrap.InputGroup.Text id="basic-addon1">(4) </ReactBootstrap.InputGroup.Text>
          </ReactBootstrap.InputGroup.Prepend>
          <ReactBootstrap.FormControl
            defaultValue={this.props.option4}
            aria-describedby="basic-addon1"
          />
        </ReactBootstrap.InputGroup>
      </ReactBootstrap.ListGroup>
    </div>

  </div>;
  }
}

export default question;