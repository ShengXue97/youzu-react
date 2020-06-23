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
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'
import InputGroup from 'react-bootstrap/InputGroup'
import CheckBox from 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import ImageIcon from '@material-ui/icons/Image';
import { green } from '@material-ui/core/colors';
import Popup from "reactjs-popup";
import ImageSearchIcon from '@material-ui/icons/ImageSearch';


/* checker to see if given question's image_file column contains authentic base64 text */
// function isDataURL(s) {
//     return !!s.match(isDataURL.regex);
// }
//
// isDataURL.regex = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;

// for encoding utf-8 base64 strings back into base64 urls, for rendering into images
var Buffer = require('buffer/').Buffer;


const Diagram = (image) => {
    var imageList = image.split(" ");
    var encodedImg = null;
    var imgsJSX = imageList.map((img) => {
        if (img !== "" && img !== "-") {
            var fullImgURL = "data:image/png[jpg];base64," + img;
            // return <ModalImage
            //             small={fullImgURL}  // data:image/png[jpg];base64,data:image/png[jpg];base64, base64
            //             medium={fullImgURL}
            //             large={fullImgURL}
            //             hideDownload={true}
            //             hideZoom={true}
            //             style={{"width": "20%"}}
            //             alt="Diagram"/>
            return <Popup modal trigger={<img className="img-thumbnail"
                                              style={{"width": "40%", "cursor": "pointer"}} src={fullImgURL} />}>
                <img src={fullImgURL} style={{"maxWidth": "70vw"}} alt="diagram"/>
            </Popup>
        }
        // if (isDataURL(eachImg)) {
        // if (typeof(Buffer.from === "function")) {
        //     encodedImg = Buffer.from(img, 'base64');
        // } else {
        //     encodedImg = new Buffer.from(img, 'base64');
        // }

        // }
    })
    return imgsJSX;
}


class question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        'pgNum': this.props.pgNum,
        'localQuestionNum': this.props.localQuestionNum,
        'externalQuestionNum': this.props.externalQuestionNum,
        'title': this.props.title,
        'option1': this.props.option1,
        'option2': this.props.option2,
        'option3': this.props.option3,
        'option4': this.props.option4,
        'images': this.props.images,
        'isChecked': this.props.isChecked,
      };
  }

  componentDidUpdate(prevProps) {
    if(this.props != prevProps) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
    {
      this.setState({
        'pgNum': this.props.pgNum,
        'localQuestionNum': this.props.localQuestionNum,
        'externalQuestionNum': this.props.externalQuestionNum,
        'title': this.props.title,
        'option1': this.props.option1,
        'option2': this.props.option2,
        'option3': this.props.option3,
        'option4': this.props.option4,
        'images': this.props.images,
        'isChecked': this.props.isChecked
      });
    }
  }

  // handleImgClick = (clickedImg) => {
  //       return (
  //       <Modal
  //         {...clickedImg}
  //         size="lg"
  //         aria-labelledby="contained-modal-title-vcenter"
  //         centered
  //       >
  //         <Modal.Header closeButton>
  //           <Modal.Title id="contained-modal-title-vcenter">
  //             Image
  //           </Modal.Title>
  //         </Modal.Header>
  //         <Modal.Body>
  //           <img src={clickedImg} alt='Image'/>
  //         </Modal.Body>
  //         <Modal.Footer>
  //           <Button onClick={props.onHide}>Close</Button>
  //         </Modal.Footer>
  //       </Modal>
  //     );
  //   }


  async getBase(file) {
    return new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        var fileBase64 = reader.result;
        resolve(fileBase64)
      };
      reader.onerror = function (error) {
        reject(error);
      };
    });
 }

  async onDrop(files) {
    var firstFile = files[0]
    const reader = new FileReader();
    reader.onload = (event) => {
      // console.log(event.target.result);
      window.fileData = event.target.result;
    };
    reader.readAsDataURL(firstFile);

    var fileBase64 = new Promise((resolve, reject) => {
        var reader = new FileReader();
        reader.readAsDataURL(firstFile);
        reader.onload = function () {
          var fileBase64 = reader.result;
          resolve(fileBase64)
        };
        reader.onerror = function (error) {
          reject(error);
        };
    }).then((fileBase64)=> {
      this.props.handleOnAddImage(this.state.pgNum, this.state.localQuestionNum, fileBase64.split(",")[1])
    })
  }

  render() {
    return <div className="border-bottom border-primary" style={{"display": "block", "textAlign": "center",
        "width": "97%", "marginBottom": "2em", "paddingLeft": "3em"}}>
    <Row bsPrefix={"row"} style={{"width": "inherit"}}>
        <Container fluid>
            <InputGroup className="mb-3" style={{"width": "inherit"}}>
              <InputGroup.Prepend>
                  <InputGroup.Checkbox
                    checked = {this.state.isChecked}
                    onChange={(e) => {
                        this.setState({'isChecked' : e.target.checked});
                        this.props.handleOnChangeCheckbox(this.state.pgNum, this.state.localQuestionNum, e.target.checked)}}
                  />
                  <InputGroup.Text id="basic-addon1">{this.state.externalQuestionNum} </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                style={{"height": "inherit"}}
                value={this.state.title}
                aria-describedby="basic-addon1"
                onChange = {(e) => {
                    this.setState({'title' : e.target.value});
                    this.props.handleOnChangeQuestion(this.state.pgNum, this.state.localQuestionNum, 1, e.target.value)}}
              />
              <IconButton
                color="primary"
                aria-label="add"
                onClick = {(e) => {
                  this.props.handleOnAddQuestion(this.state.pgNum, this.state.localQuestionNum)}}
              >
                <AddCircleOutlineIcon />
              </IconButton>
              <IconButton
                color="secondary"
                aria-label="delete"
                onClick = {(e) => {
                  this.props.handleOnDeleteSingleQuestion(this.state.pgNum, this.state.localQuestionNum)}}
              >
                <DeleteIcon />
              </IconButton>

              <IconButton
                style={{ color: green[500] }}
                aria-label="delete"
                onClick = {(e) => {
                  this.props.handleOnAddImage(this.state.pgNum, this.state.localQuestionNum, "")}}
              >  
                <ImageIcon />
              </IconButton>

              <div>
                <Dropzone style={{"width" : "100%", "height" : "50%"}} name={"hey"} onDrop={(files) => this.onDrop(files)}>
                  <IconButton
                    style={{ color: green[500] }}
                    aria-label="delete"
                  >  
                    <ImageSearchIcon />
                  </IconButton>
                </Dropzone>   
              </div>

              

            </InputGroup>
            <div style = {{paddingLeft : "3em", "maxWidth": "inherit"}}>
              <ListGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">(1) </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    value={this.state.option1}
                    aria-describedby="basic-addon1"
                    onChange={(e) => {
                        this.setState({'option1' : e.target.value});
                        this.props.handleOnChangeQuestion(this.state.pgNum, this.state.localQuestionNum, 2, e.target.value)}}
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">(2) </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    value={this.state.option2}
                    aria-describedby="basic-addon1"
                    onChange={(e) => {
                        this.setState({'option2' : e.target.value});
                        this.props.handleOnChangeQuestion(this.state.pgNum, this.state.localQuestionNum, 3, e.target.value)}}
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">(3) </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    value={this.state.option3}
                    aria-describedby="basic-addon1"
                    onChange={(e) => {
                        this.setState({'option3' : e.target.value});
                        this.props.handleOnChangeQuestion(this.state.pgNum, this.state.localQuestionNum, 4, e.target.value)}}
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">(4) </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    value={this.state.option4}
                    aria-describedby="basic-addon1"
                    onChange={(e) => {
                      this.setState({'option4' : e.target.value});
                      this.props.handleOnChangeQuestion(this.state.pgNum, this.state.localQuestionNum, 5, e.target.value)}}
                  />
                </InputGroup>
              </ListGroup>
            </div>
        </Container>
    </Row>
    <Row bsPrefix={"row"} style={{"paddingLeft": "4em", "textAlign": "center", "maxHeight": "15em", "marginBottom": "2em", "width": "95%"}}>
        <Container className="border border-light"
                   style={{"maxHeight": "inherit", "backgroundColor": "inherit", "marginBottom": "None", "overflow": "hidden"}}>
            <div style={{"maxHeight": "inherit", "overflowY": "scroll"}}>
                {Diagram(this.state.images)}
            </div>
        </Container>
    </Row>
  </div>;
  }
}

export default question;