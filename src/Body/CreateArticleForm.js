import React, { Component } from 'react';
import '../App.css';
import { Button, FormGroup, Label, Input, Form } from 'reactstrap';
import MyList from './MyList';


class CreateArticleForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      myArticle: '',
      myArticleArray : []
    }
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

        <MyList myArticle={this.state.myArticle}
          myArticles={this.props.myArticles}
          title={this.props.newTitle}
        />

      </div>
  )}
}

export default CreateArticleForm;
