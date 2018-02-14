import React, { Component } from 'react';
import Article from './Article'


class MyList extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <h1> My List </h1>
        <Article myArticle={this.props.myArticle[0]}/>
        <Article myArticle={this.props.myArticle[1]}/>
        <Article myArticle={this.props.myArticle[2]}/>
      </div>
    )
  }
}

export default MyList;