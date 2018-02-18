import React, { Component } from 'react';
import '../App.css';
import $ from 'jquery';
import CreateArticleForm from './CreateArticleForm';
import MyList from './MyList'

class MyArticlesContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      myArticles: [],
      title: 'test',
      selectedArticleObj: {}
    }
    this.createArticle = this.createArticle.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleArticleChange = this.handleArticleChange.bind(this);
  }

  handleArticleChange(e){
    this.setState({myArticles: e.target.value})
    console.log("reached", this.state.myArticles);
  }

  componentWillMount = () => {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3001/api/articles'
    })
    .then((res)=>{
      this.setState(
        {
          myArticles: res
        }
      )
      this.loadArticlesFromServer()
    }, (err) => {
      console.log('Error: ', err);
    })
  }

  loadArticlesFromServer = () => {
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

      console.log("length of res", res.length);
      console.log("last object", res.slice(-1)[0]);
      console.log("selectedArticleObj ", this.state.selectedArticleObj);
    })
  }

  componentDidMount = () => {
    this.loadArticlesFromServer()
  }

  createArticle(e){
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
      console.log("res", res );
    }), (err) => {
      console.log('Error', err);
    }
  }


  render(){
    return (
      <div className='myArticlesContainer'>
        <CreateArticleForm
          createArticle={(e)=>this.createArticle(e)}
          myArticles={this.state.myArticles}
          title={this.state.title}
          handleArticleChange={(e)=>this.handleArticleChange(e)}
        />

        <MyList
          myArticles={this.state.myArticles}
          loadArticlesFromServer={(e)=>this.loadArticlesFromServer(e)}
        />

      </div>
  )}
}

export default MyArticlesContainer;
