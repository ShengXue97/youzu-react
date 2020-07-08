import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Drawer from './Drawer';
import Alert from 'react-bootstrap/Alert'

 
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