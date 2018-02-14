import React, { Component } from 'react';
import { Card, Row, Col, CardText, CardTitle, Button } from 'reactstrap';

class Article extends Component{

  render(){
    return (
      <Row>
        <Col sm="6">
          <Card body style={{backgroundColor: '#7E9181'}}>
            <CardTitle>{this.props.myArticle}</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Add Tag</Button>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default Article;
