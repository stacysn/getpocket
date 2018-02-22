import React, { Component } from 'react';
import '../App.css';
import { Card, Row, Col, CardText, CardTitle } from 'reactstrap';
import PostTagModal from './PostTagModal'
import $ from 'jquery';


class MyList extends Component{
   constructor(props){
     super(props)
    //  this.state={
    //    tag:'',
    //    tagTitle: ''
    //  }
   }

  //  handleTagSubmit = (e) => {
  //    e.preventDefault()
  //    // let articleId = $(e.target).closest('.tag-modal').data('tag._id');
  //   //  console.log("article Id hit?: ", articleId);
  //    // console.log('testing testing to get title of article:', this.state.newTitle);
  //    // this.setState({article_id: this.state.article_id})
  //    // console.log("Hit at this article: ", this.state.article_id );//same as this.state.newTitle._id
  //    $.ajax({
  //      method: "POST",
  //      url: 'http://localhost:3001/api/articles/' + this.articleId + '/tags/',
  //      data: {
  //        tagTitle: this.state.tagTitle
  //      }
  //    })
  //    .then((res) => {
  //      console.log("Res Tags", res);
  //      this.loadArticlesFromServer();
  //      this.setState({
  //        tagTitle: ''
  //      })
  //      console.log("Id of article", this.state.newTitle._id);
  //      this.props.handleTagChange()
  //      console.log("Tag Array: ", );
  //    },
  //    (err) => {
  //      console.log("post to /api/articles/:article_id/tags resulted in error: ", err);
  //    })
  //  }

  render(){
      let myArticles = this.props.myArticles.map(article => {
        return (
          <div key={article._id}>
            <Row className='individualArticle' id={article._id}>
              <Col sm="6">
                <Card body key={article._id} style={{backgroundColor: '#7E9181'}}>
                <CardTitle id={article._id}>{article.title}</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <div className='individualArticle' id={article._id}>
                    <ul>
                      {article.tags.map(function(tag){
                        return (
                          <li key={tag._id}> {tag.tagTitle} </li>
                        )
                      })}
                    </ul>
                  </div>
                  <PostTagModal
                    articleTitle={article.title}
                    articleId={article._id}
                    article_id={this.props.article_id}
                    loadArticlesFromServer={()=>this.props.loadArticlesFromServer()}
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
