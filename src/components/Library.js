import React, { Component } from 'react';

import Dropzone from 'react-dropzone'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Form, FormControl} from 'react-bootstrap';

import codeImg from './images/code.png';
import lightbulbImg from './images/lightbulb.png';
import userImg from './images/user.png';
import dragImg from './images/drag.png';
import plusImg from './images/plus.png';
 
export default class library extends Component {
  constructor(props) {
     super(props);
  }

  render() {
    return (
        <div>
        <Navbar bg="light">
          <Navbar.Brand href="/">Yoozoo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/edit">Edit</Nav.Link>
              <Nav.Link href="/library">Library</Nav.Link>
              <Nav.Link href="/settings">Settings</Nav.Link>
              <Nav.Link href="/format">Format</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <h1>
             Library
        </h1>
      </div>
    );
  }
}