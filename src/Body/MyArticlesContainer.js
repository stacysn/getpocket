import React, { Component } from 'react';
import '../App.css';
import $ from 'jquery';
import CreateArticleForm from './CreateArticleForm';

class MyArticlesContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      myArticles: [],
      title: '',
      selectedArticleObj: {},
      newTitle: ''
    }
    this.handleArticleChange = this.handleArticleChange.bind(this);
  }

  handleArticleChange(e){
    this.setState({title: e.target.value})
  }

  componentWillMount = () => {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3001/api/articles'
    })
    .then((res)=>{
      this.setState(
        {
          myArticles: res,
          selectedArticleObj: res[0]
        }
      )
      this.loadArticlesFromServer()
    }, (err) => {
      console.log('Error: ', err);
    })
  }

  loadArticlesFromServer = () => { //retrieves articles from db
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3001/api/articles/'
    })
    .then((res) => {
      this.setState(
        {
          myArticles: res,
          selectedArticleObj: res.slice(-1)[0]
        }
      )
      let newTitle = res.slice(-1)[0] //gets last input of res array
      this.setState({newTitle: newTitle})
      console.log("length of res", res.length);
      console.log("res: ", newTitle.title);
      console.log("new title input", newTitle);
    }, (err) => {
      console.log('Error ', err);
    })
  }

  componentDidMount = () => {
    this.loadArticlesFromServer()
  }

  handleSubmit = (e) => {
    // e.preventDefault()
    console.log(this.state.selectedArticleObj._id);
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3001/api/articles',
      data: {
        title : this.state.title
      }
    }).then(res => {
      this.loadArticlesFromServer();
      this.setState({
         title: ''
      })
      this.handleArticleChange()
      console.log("res", res );
    }), (err) => {
      console.log('Error', err);
    }
  }


  render(){
    return (
      <div className='myArticlesContainer'>
        <CreateArticleForm
          myArticles={this.state.myArticles}
          handleArticleChange={(e)=>this.handleArticleChange(e)}
          selectedArticleObj={this.state.selectedArticleObj}
          loadArticlesFromServer={(e)=>this.loadArticlesFromServer(e)}
          handleSubmit={(e)=>this.handleSubmit(e)}
          newTitle={this.state.newTitle}
        />


      </div>
  )}
}

export default MyArticlesContainer;
