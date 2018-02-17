import React, { Component } from 'react';
import '../App.css';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import MyList from './MyList';
import Article from './Article'



class CreateArticleForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      myArticle: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(e){
    this.setState({
      myArticle: e.target.value
    })
  }

  onFormSubmit (e) {
    e.preventDefault()
    let newArticle = this.state.myArticle
    this.props.createArticle(newArticle)
    this.setState({
      myArticle: this.state.myArticle
    })
    console.log("on form sumit, myArticle: ", this.state.myArticle);
  }

  render(){
    return (
      <div className='createForm articleForm'>
        <FormGroup >
          <Label >
            <Input
              onChange={(e) => this.onInputChange(e)}
              placeholder="Add New Article Title"
              type='text'
              value={this.state.myArticle}
            />
          </Label>
          <Button type='submit' action='submit' style={{padding: '0.1rem'}} onClick={(e)=> this.onFormSubmit(e)}> Submit </Button>
        </FormGroup>
        <MyList myArticle={this.state.myArticle}
          myArticles={this.props.myArticles}
        />

      </div>
  )}
}

export default CreateArticleForm;
