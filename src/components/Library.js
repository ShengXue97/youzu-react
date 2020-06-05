import React, { Component } from 'react';

import Dropzone from 'react-dropzone'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import Drawer from './Drawer';
import Alert from 'react-bootstrap/Alert'
import FileCard from './FileCard'

import yoozooImg from './images/yoozoo.jpg';
import codeImg from './images/code.png';
import lightbulbImg from './images/lightbulb.png';
import userImg from './images/user.png';
import dragImg from './images/drag.png';
import plusImg from './images/plus.png';
import page1 from './images/page1.jpg'; /*Placeholder for preview images in each csv entry*/


export default class library extends Component {
  constructor(props) {
     super(props);
     /*state still uninitialized: saved database file count and time uploaded (check back with Edit.js)*/
     this.state = {
        'files': [
            'CHIJ_SA1_ENGLISH',
            'MARIS_STELLA_SA1_ENGLISH',
            'CATHOLIC_HIGH_SA1_ENGLISH',
            'CHIJ_SA1_MATH',
            'MARIS_STELLA_SA1_MATH',
            'CATHOLIC_HIGH_SA1_MATH'
         ],
        'timeUploaded': [
            '05/05/2020',
            '10/05/2020',
            '15/05/2020',
            '17/05/2020',
            '20/05/2020',
            '23/05/2020'
        ]
      }
  }

  render() {
    const body = 
    <div>
      <Alert style={{"width" : "100%", "height" : "90%"}} variant= "success">
        <h5>
          You have {this.state['files'].length} saved workspaces.
        </h5>
      </Alert>
      <div class="ui stackable four column grid">
        <FileCard file={this.state.files[0]} timeUploaded={this.state.timeUploaded[0]}/>
        <FileCard file={this.state.files[1]} timeUploaded={this.state.timeUploaded[0]}/>
        <FileCard file={this.state.files[2]} timeUploaded={this.state.timeUploaded[0]}/>
        <FileCard file={this.state.files[3]} timeUploaded={this.state.timeUploaded[0]}/>
        <FileCard file={this.state.files[3]} timeUploaded={this.state.timeUploaded[0]}/>
        <FileCard file={this.state.files[3]} timeUploaded={this.state.timeUploaded[0]}/>
        <FileCard file={this.state.files[3]} timeUploaded={this.state.timeUploaded[0]}/>
      </div>
    </div>

    return (
      <div>
        <Drawer content = {body} name = "Library"/>
      </div>
    );
  }
}