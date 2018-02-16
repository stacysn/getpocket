import React, { Component } from 'react';
import './App.css';
import Header from './Head/Header';
import MyList from './Body/MyList';


class App extends Component {
  constructor(props){
    super(props);
  }

  // loadArticles() {
  //   for (let i = 0; i < this.state.myArticle.length; i++){
  //     this.setState({ addArticleToList: this.state.myArticle[i]});
  //     console.log("myArticle", this.state.addArticleToList);
  //   }
  //   console.log("THIS IS ADD Article", this.state.addArticleToList);
  // }

  render() {
    return (
      <div>
        <Header />
        <MyList />
      </div>
    );
  }
}

export default App;
