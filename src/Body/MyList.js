import React, { Component } from 'react';
import '../App.css';
import { Card, Row, Col, CardText, CardTitle } from 'reactstrap';
import PostTagModal from './PostTagModal'
import Tag from './Tag'


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
                          <div key={tag._id}> 
                            <Tag tagTitle={tag.tagTitle} articleId={article._id} tagId={tag._id} loadArticlesFromServer={()=>dis.props.loadArticlesFromServer()}/>
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
