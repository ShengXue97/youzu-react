import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap';

export default class library extends Component {
  constructor(props) {
     super(props);
  }

  render() {
    return (
        <div>
        <ReactBootstrap.Navbar bg="light">
          <ReactBootstrap.Navbar.Brand href="/">Yoozoo</ReactBootstrap.Navbar.Brand>
          <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootstrap.Nav className="mr-auto">
              <ReactBootstrap.Nav.Link href="/edit">Edit</ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link href="/library">Library</ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link href="/settings">Settings</ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link href="/format">Format</ReactBootstrap.Nav.Link>
            </ReactBootstrap.Nav>
            <ReactBootstrap.Form inline>
              <ReactBootstrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <ReactBootstrap.Button variant="outline-success">Search</ReactBootstrap.Button>
            </ReactBootstrap.Form>
          </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Navbar>
        <h1>
             Library
        </h1>
      </div>
    );
  }
}