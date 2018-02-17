import React, { Component } from 'react';
import './App.css';
import Header from './Head/Header';
import MyArticlesContainer from './Body/MyArticlesContainer';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <MyArticlesContainer />
      </div>
    );
  }
}

export default App;
