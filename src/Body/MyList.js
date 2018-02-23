import React, { Component } from 'react';
import '../App.css';
import { Card, Row, Col, CardText, CardTitle, Button } from 'reactstrap';
import PostTagModal from './PostTagModal'
import $ from 'jquery';


class MyList extends Component{
   constructor(props){
     super(props)
     this.state={
       tag:'',
       tagTitle: ''
     }
   }

   componentWillMount(){
     this.props.loadArticlesFromServer()
   }

   handleDeleteTag = (e) => {
    //  e.preventDefault();
    // console.log("HANDLE DELETE TAG", e);
    // console.log("E", e);
    // console.log("Using this: ", this.state.tag.tagTitle);
    let tagID = $(e.target).closest('.tag._id').data('.tag._id');
     console.log('deleting this tag: ', tagID);
    // //  console.log('trying to delete tag with id', this.state.tagId);
    //  $.ajax({
    //    method: 'DELETE',
    //    url: 'http://localhost:3001/api/articles/' + this.props.articleId + '/tags/' + this.state.tagId
    //    })
    //  .then((res)=>{
    //    console.log('deleted tag', res);
    //    this.props.loadPostsFromServer();
    //  })
   }

  render(){
      let myArticles = this.props.myArticles.map(article => {
        let dis = this
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
                          <div key={tag._id} className="individualTag">
                            {tag.tagTitle} <Button onClick={(e)=>dis.handleDeleteTag(e)}>X</Button>
                          </div>
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
