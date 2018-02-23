import React, { Component } from 'react';
import '../App.css';
import $ from 'jquery';
import CreateArticleForm from './CreateArticleForm';
import PostTagModal from './PostTagModal';
import MyList from './MyList'

class MyArticlesContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      myArticles: [],
      article_id: '',
      title: '',
      selectedArticleObj: {},
      newTitle: '',
      tagTitle: '',
      tags: ''
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
      this.setState({article_id: this.state.newTitle._id})

      let articles = []
      for (let i = 0; i < res.length; i++){
        articles.push(res[i])
      }
      // console.log("res: ", newTitle.title);
      // console.log("new title input", newTitle);
      // console.log("Id of title", this.state.newTitle._id);
      // console.log("tags", newTitle.tags[0].title);
      // console.log("myArticles: ", this.state.myArticles);
      // console.log("TAGs: ", this.state.myArticles[0].tags[0].title);
    }, (err) => {
      console.log('Error ', err);
    })
  }

  componentDidMount = () => {
    this.loadArticlesFromServer()
  }

  handleSubmit = (e) => {
    // e.preventDefault()
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3001/api/articles',
      data: {
        title : this.state.title,
        tag: this.state.tags
      }
    }).then(res => {
      this.loadArticlesFromServer();
      this.setState({
         title: '',
         tags: ''
      })
      this.handleArticleChange()
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
          title={this.state.title}
          article_id={this.state.article_id}
          loadArticlesFromServer={()=>this.loadArticlesFromServer()}
        />
      </div>
  )}
}

export default MyArticlesContainer;
