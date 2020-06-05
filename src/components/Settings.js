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
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import Drawer from './Drawer';
import Alert from 'react-bootstrap/Alert'

import yoozooImg from './images/yoozoo.jpg';
import codeImg from './images/code.png';
import lightbulbImg from './images/lightbulb.png';
import userImg from './images/user.png';
import plusImg from './images/plus.png';
 
 
export default class settings extends Component {
  constructor(props) {
    super(props);
 }

 render() {
   const body = 
   <div>
     <Alert style={{"width" : "100%", "height" : "90%"}} variant= "success">
       <h5>
         You are now in the Settings Page.
       </h5>
     </Alert>
   </div>

   return (
     <div>
       <Drawer content = {body} name = "Settings"/>
     </div>
   );
 }
}