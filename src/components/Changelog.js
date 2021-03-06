// Changelog tab, which explains the changes for the different versions
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Drawer from './subcomponents/Drawer';
import Alert from 'react-bootstrap/Alert'
import ListGroup from 'react-bootstrap/ListGroup'


export default class changelog extends Component {
  constructor(props) {
    super(props);
 }

 render() {
   const body =
   <div>
     <Alert style={{"width" : "100%", "height" : "90%"}} variant= "success">
       <h5>
         You are now in the Changelog Page.
       </h5>
     </Alert>
     <ListGroup>
      <ListGroup.Item action variant = "primary">Updates for Version 2</ListGroup.Item>
      <ListGroup.Item style = {{"paddingLeft" : "30px"}} action variant = "info">
          1. Fix most of the bugs except for OCR-related ones(Please tell us if they still exist)</ListGroup.Item>
      <ListGroup.Item style = {{"paddingLeft" : "30px"}} action variant = "info">
          2. Added ~10,000 PDFs for user to download or process, instead of uploading own's PDFs</ListGroup.Item>
      <ListGroup.Item style = {{"paddingLeft" : "30px"}} action variant = "info">
          3. Added Workspaces under "Library" tab, which allows you to save your undone work for future user
      </ListGroup.Item>
      <ListGroup.Item style = {{"paddingLeft" : "30px"}} action variant = "info">
          4. Added File Information, such as filename and school</ListGroup.Item>
      <ListGroup.Item style = {{"paddingLeft" : "30px"}} action variant = "info">
          5. Improved download as .csv button to return more paper information</ListGroup.Item>
      <ListGroup.Item style = {{"paddingLeft" : "30px"}} action variant = "info">
          6. Changed UI slightly for the "Edit" tab for vertical buttons and added information on hover
      </ListGroup.Item>
      <ListGroup.Item style = {{"paddingLeft" : "30px"}} action variant = "info">
          7. Added images support, for both add and delete</ListGroup.Item>
      <ListGroup.Item style = {{"paddingLeft" : "30px"}} action variant = "info">
          8. Changed FormControl element on question titles to textarea, so users can see the full text easily
      </ListGroup.Item>
    </ListGroup>
   </div>

   return (
     <div>
       <Drawer content = {body} name = "Changelog"/>
     </div>
   );
 }
}