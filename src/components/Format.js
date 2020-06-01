import React, { Component } from 'react';

import Dropzone from 'react-dropzone'
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom';

import codeImg from './images/code.png';
import lightbulbImg from './images/lightbulb.png';
import userImg from './images/user.png';
import dragImg from './images/drag.png';
import plusImg from './images/plus.png';
 
export default class format extends Component {
  constructor(props) {
     super(props);
  }

  render() {
    return (
        <div>
        <div style = {{display : 'flex', flexDirection : 'row', justifyContent : 'space-around'}}>
          <Link to="/">Home  </Link>
          <Link to="/edit">Edit  </Link>
          <Link to="/library">Library  </Link>
          <Link to="/settings">Settings  </Link>
          <Link to="/format">Format  </Link>
        </div>
        <h1>
             Format
        </h1>
      </div>
    );
  }
}