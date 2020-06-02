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

import yoozooImg from './images/yoozoo.jpg';
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
        <Menu size='large'>
          <Menu.Item>
            <img style = {{width: "154px", height: "49px"}} src= {yoozooImg} />
          </Menu.Item>
          <Menu.Item
            name='home'
          >
            <Link to="/">Home</Link>
          </Menu.Item>

          <Menu.Item
            name='/library'
          >
            <Link to="/library">Library</Link>
          </Menu.Item>

          <Menu.Item
            name='settings'
          >
            <Link to="/settings">Settings</Link>
          </Menu.Item>

          <Menu.Item
            name='format'
          >
            <Link to="/format">Format</Link>
          </Menu.Item>
        </Menu>
        <h1>
             Library
        </h1>
      </div>
    );
  }
}