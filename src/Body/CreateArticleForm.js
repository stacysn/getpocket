import React, { Component } from 'react';
import '../App.css';
import { Button, FormGroup, Label, Input } from 'reactstrap';


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
      myArticle: ''
    })
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
          <Button type='submit' style={{padding: '0.1rem'}} onClick={(e)=> this.onFormSubmit(e)}> Submit </Button>
        </FormGroup>
      </div>
  )}
}

export default CreateArticleForm;
