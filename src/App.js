import React, { Component } from 'react';
import './App.css';
import Header from './Head/Header'
import MyList from './Body/MyList'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      myArticle : ['Apple Music Expands', 'Facebook Has New Lists Feature', 'Smartwatch for Kids'],
      newArticle: '',
      addArticleToList: ''
    }
    this.addArticle = this.addArticle.bind(this);
    // this.loadArticles = this.loadArticles.bind(this);
  }

  // componentDidMount(){
  //     this.loadArticles()
  // }

  addArticle (e) {
    this.setState({
      newArticle: e.target.value
    })
    this.setState(
      {myArticle: [...this.state.myArticle, this.state.newArticle]}
    )
    console.log("my Article", this.state.myArticle);
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
        <Header addArticle={(e) => this.addArticle(e)}/>
        <MyList myArticle={this.state.myArticle}/>
      </div>
    );
  }
}

export default App;
