import React, { Component } from 'react';
import { Card, Row, Col, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class MyList extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <Row>
        <Col sm="6">
          <Card body>
            <CardTitle>{this.props.myArticle}</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default MyList;
