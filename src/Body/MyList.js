import React, { Component } from 'react';
// import Article from './Article';
import '../App.css';
import { Card, Row, Col, CardText, CardTitle, Button } from 'reactstrap';


class MyList extends Component{
  render(){
    let myArticles = this.props.myArticles.map(article => {
      return (
        <div key={article._id}>
          <Row>
            <Col sm="6">
              <Card body style={{backgroundColor: '#7E9181'}}>
              <CardTitle>{article.title}</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <ul>
                {article.tags.map(function(tag){
                  return <li># {tag.title} </li>
                })}
              </ul>
              <Button>Add Tag</Button>
              </Card>
            </Col>
          </Row>
        </div>
      )

    })


    return (
      <div>
        { myArticles }
      </div>
    )
  }
}

export default MyList;


// <CardText># {article.tags[0].title} </CardText>
// for (let i = 0; i < this.props.myArticles.length; i++ ){
//   for (let j = 0; j < article.tags.length; j++){
