import React, { Component } from 'react';
import '../App.css';
import $ from 'jquery';
import CreateArticleForm from './CreateArticleForm';
import MyList from './MyList'

class MyArticlesContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      myArticles: []
    }
    this.createArticle = this.createArticle.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleArticleChange = this.handleArticleChange.bind(this);
  }

  // handleArticleChange(e){
  //   this.setState({myArticles: e.target.value})
  //   console.log("reached", this.state.myArticles);
  // }

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
          myArticles: res
        }
      )
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
        title: this.state.myArticles
      }
    }).then(res=>{
      let myArticles = this.state.myArticles;
      myArticles.push(res)
      this.setState({
         myArticles
      })
      console.log("my articles array", this.state.myArticles);
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
        />

        <MyList
          myArticles={this.state.myArticles}
          loadArticlesFromServer={(e)=>this.loadArticlesFromServer(e)}
        />

      </div>
  )}
}

export default MyArticlesContainer;
