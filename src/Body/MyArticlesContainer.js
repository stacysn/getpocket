import React, { Component } from 'react';
import '../App.css';
import $ from 'jquery';
import CreateArticleForm from './CreateArticleForm';
import PostTagModal from './PostTagModal';

class MyArticlesContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      myArticles: [],
      title: '',
      selectedArticleObj: {},
      newTitle: '',
      tag: ''
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
      console.log("res", res);
      console.log("res: ", newTitle.title);
      console.log("new title input", newTitle);
      console.log("tags", newTitle.tags[0].title);
      console.log("myArticles: ", this.state.myArticles);
      console.log("TAGs: ", this.state.myArticles[0].tags[0].title);
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
        title : this.state.title,
        tag: this.state.tag
      }
    }).then(res => {
      this.loadArticlesFromServer();
      this.setState({
         title: '',
         tag: ''
      })
      this.handleArticleChange()
      console.log("res", res );
    }), (err) => {
      console.log('Error', err);
    }
  }

  handleTagSubmit = (event) => {
    event.preventDefault()
    $.ajax({
      method: "POST",
      url: "https://localhost:3001/articles/",
      data: {
        tag: this.state.tag,
      }
    })
    .then((res) => {
      this.setState({tag: ''})
    },
    (err) => {
      console.log("error: ", err);
    })
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
          handleTagSubmit={(e)=>this.handleTagSubmit(e)}
        />
      </div>
  )}
}

export default MyArticlesContainer;
