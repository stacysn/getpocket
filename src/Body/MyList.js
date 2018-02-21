import React, { Component } from 'react';
import '../App.css';
import { Card, Row, Col, CardText, CardTitle } from 'reactstrap';
import PostTagModal from './PostTagModal'
import $ from 'jquery';


class MyList extends Component{
   constructor(props){
     super(props)
     this.state={
       tag:''
     }
   }


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
                  <PostTagModal
                    articleTitle={article.title}
                    handleTagSubmit={(e)=>this.props.handleTagSubmit(e)}
                  />
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

// <Button onClick={this.props.toggleTagModal}>Add Tag</Button>
