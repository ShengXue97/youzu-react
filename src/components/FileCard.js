import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import page1 from './images/page1.jpg'; /*Placeholder for preview images in each csv entry*/


class fileCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div class="column">
            <Card className="text-center">
                <Card.Body>
                  <Card.Title>
                    <h1 style={{"font-size":"1.5vw"}}>{this.props.file}</h1>
                  </Card.Title>
                  <Card.Img variant="top" src={page1}/>
                  <Card.Text style={{"font-size":"1vw"}}>
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