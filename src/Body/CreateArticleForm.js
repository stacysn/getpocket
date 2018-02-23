import React, { Component } from 'react';
import '../App.css';
import { Button, FormGroup, Label, Input, Form } from 'reactstrap';
import MyList from './MyList';
import $ from 'jquery';



class CreateArticleForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      myArticle: '',
      myArticleArray : [],
      articleID: ''
    }
  }

  getArticleIdFromMyList = () => {
    console.log("Got getArticleIdFromMyList");
    console.log("tagid: ", this.tagid);

  }


  render(){
    return (
      <div className='createForm articleForm'>
      <Form inline >
      <FormGroup>
        <Label for="article" hidden>Article</Label>
        <Input
          type="text"
          name="text"
          id="article"
          value={this.props.title}
          onChange={this.props.handleArticleChange}
          placeholder="Insert Article Here"
        />
      </FormGroup>
      {' '}
      <Button onClick={this.props.handleSubmit}>Submit</Button>
      </Form>

      <MyList
        myArticles={this.props.myArticles}
        title={this.props.newTitle}
        handleTagChange={(e)=>this.props.handleTagChange(e)}
        article_id={this.props.article_id}
        loadArticlesFromServer={()=>this.props.loadArticlesFromServer()}
        getArticleIdFromMyList={()=>this.getArticleIdFromMyList()}
      />
    </div>
  )}


}

export default CreateArticleForm;
