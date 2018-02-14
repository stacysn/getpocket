import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Head/Header'
import MyList from './Body/MyList'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      myArticle : ['Apple Music expands', 'Facebook has new Lists feature', 'Smartwatch for Kids']
    }
  }

  render() {
    return (
      <div>
        <Header />
        <MyList myArticle={this.state.myArticle}/>
      </div>
    );
  }
}

export default App;
