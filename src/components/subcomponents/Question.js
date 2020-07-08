//Question subcomponent used in Edit tab, which is displayed in the Edit tab, storing the
// title and four options  a question
import React from 'react';
import Dropzone from 'react-dropzone'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup'
import InputGroup from 'react-bootstrap/InputGroup'
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import ImageIcon from '@material-ui/icons/Image';
import { green, blue } from '@material-ui/core/colors';
import Popup from "reactjs-popup";
import '../../diagram.css';
import PublishIcon from '@material-ui/icons/Publish';


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
        'answer': this.props.answer
      };
  }

  componentDidUpdate(prevProps) {
    if(this.props !== prevProps) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
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
        'isChecked': this.props.isChecked,
        'answer': this.props.answer
      });
    }
  }

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
    const Diagram = (image) => {
        var imageList = image.split(" ");
        var imgsJSX = imageList.map((img, imgidx) => {
            if (img !== "" && img !== "-") {
                var fullImgURL = "data:image/png[jpg];base64," + img;
                return <div className={"diagram-wrap"}>
                    <Popup modal
                           trigger={<img className="img-thumbnail" style={{"width": "40%", "cursor": "pointer"}}
                                         title="Expand image" src={fullImgURL} alt={"Diagram"}/>}
                           style={{"maxWidth": "50vw", "maxHeight": "50vh"}}>
                    <img style={{"width": "inherit"}} src={fullImgURL} alt={"Diagram"}/>
                    </Popup>
                    <span className={"delete-btn"} title={"Delete image"}
                          onClick = {(e) => {this.props.handleOnDeleteImage(this.state.pgNum,
                              this.state.localQuestionNum, imgidx)}}>
                        &times;
                    </span>
                </div>
            }
        })
        return imgsJSX;
    }
    return <div className="border-bottom border-primary" style={{"display": "block", "textAlign": "center",
        "width": "97%", "marginBottom": "2em", "paddingLeft": "3em"}}>
    <Row bsPrefix={"row"} style={{"width": "100%"}}>
        <Col xs={10} sm={10} md={10} lg={10} xl={10} style={{"padding": 0}}>
            <InputGroup className="mb-3" style={{"width": "inherit"}}>
              <InputGroup.Prepend>
                  <InputGroup.Checkbox
                    title={"Select Question"}
                    checked = {this.state.isChecked}
                    onChange={(e) => {
                        this.setState({'isChecked' : e.target.checked});
                        this.props.handleOnChangeCheckbox(this.state.pgNum,
                            this.state.localQuestionNum, e.target.checked)}}
                  />
                  <InputGroup.Text id="basic-addon1">{this.state.externalQuestionNum} </InputGroup.Text>
              </InputGroup.Prepend>
              <textarea
                className={"form-control"}
                rows={"3"}
                style={{"minHeight": "3em"}}
                value={this.state.title}
                aria-describedby="basic-addon1"
                onChange = {(e) => {
                    this.setState({'title' : e.target.value});
                    this.props.handleOnChangeQuestion(this.state.pgNum,
                        this.state.localQuestionNum, 1, e.target.value)}}
              />

            </InputGroup>
            <div style = {{paddingLeft : "3em", "maxWidth": "100%", "marginRight": 0, "paddingRight": 0}}>
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
                        this.props.handleOnChangeQuestion(this.state.pgNum,
                            this.state.localQuestionNum, 2, e.target.value)}}
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
                        this.props.handleOnChangeQuestion(this.state.pgNum,
                            this.state.localQuestionNum, 3, e.target.value)}}
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
                        this.props.handleOnChangeQuestion(this.state.pgNum,
                            this.state.localQuestionNum, 4, e.target.value)}}
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
                      this.props.handleOnChangeQuestion(this.state.pgNum,
                          this.state.localQuestionNum, 5, e.target.value)}}
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">Answer </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    value={this.state.answer}
                    title={"e.g. if the answer is option 1, simply key in '1'"}
                    aria-describedby="basic-addon1"
                    onChange={(e) => {
                      this.setState({'answer' : e.target.value});
                      this.props.handleOnChangeQuestion(this.state.pgNum,
                          this.state.localQuestionNum, 8, e.target.value)}}
                  />
                </InputGroup>
              </ListGroup>
            </div>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
            <IconButton
                color="primary"
                aria-label="add"
                title={"Add a new question below"}
                onClick = {(e) => {
                  this.props.handleOnAddQuestion(this.state.pgNum, this.state.localQuestionNum)}}
            >
                <AddCircleOutlineIcon />
            </IconButton>
            <IconButton
                color="secondary"
                aria-label="delete"
                title={"Delete this question"}
                onClick = {(e) => {
                  this.props.handleOnDeleteSingleQuestion(this.state.pgNum, this.state.localQuestionNum)}}
            >
                <DeleteIcon />
            </IconButton>

            <IconButton
                style={{ color: green[500] }}
                aria-label="delete"
                title={"Add cropped area on preview to this question"}
                onClick = {(e) => {
                  this.props.handleOnAddImage(this.state.pgNum, this.state.localQuestionNum, "")}}
            >
                <ImageIcon />
            </IconButton>

            <div>
                <Dropzone style={{"width" : "100%", "height" : "50%"}} name={"hey"}
                          onDrop={(files) => this.onDrop(files)}>
                  <IconButton
                    style={{ color: blue[500] }}
                    aria-label="delete"
                    title={"Upload your own diagram!"}
                  >
                    <PublishIcon />
                  </IconButton>
                </Dropzone>
            </div>
        </Col>
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