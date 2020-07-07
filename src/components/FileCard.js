import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import page1 from './images/page1.jpg'; /*Placeholder for preview images in each csv entry*/


class fileCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className="column">
            <Card className="text-center">
                <Card.Body>
                  <Card.Title>
                    <h1 style={{"fontSize":"1.5vw"}}>{this.props.file}</h1>
                  </Card.Title>
                  <Card.Img variant="top" src={page1}/>
                  <Card.Text style={{"fontSize":"1vw"}}>
                    Supporting text here
                  </Card.Text>
                  <Card.Text>
                    <small className="text-muted">Last updated on {this.props.timeUploaded}</small>
                  </Card.Text>
                  <Button variant="primary">Edit</Button>
                </Card.Body>
             </Card>
        </div>
  )}
}

export default fileCard;