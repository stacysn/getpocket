import React, { Component } from 'react';
import Article from './Article';
import '../App.css';

class MyList extends Component{
  render(){
    return(
      <div>
        <h1> My Articles List </h1>
        <Article myArticle={this.props.myArticle}/>
      </div>
    )
  }
}

export default MyList;
// let myArticleArray = this.props.myArticles.map((article)=>{
//   return(
//     <h1>Hello there</h1>
//   )
// })
// return(
//   <div className="articles">
//   {myArticleArray}
//   </div>
// )
// <Article
//   article={article}
// />
