import React, { Component } from 'react';
import './App.css';
import Header from './Head/Header'
import MyList from './Body/MyList'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      myArticle : ['Apple Music Expands', 'Facebook has new Lists feature', 'Smartwatch for Kids'],
      newArticle: ''
    }
    this.addArticle = this.addArticle.bind(this);
  }


  addArticle (e) {
    this.setState({
      newArticle: e.target.value
    })
    this.setState(
      {myArticle: [...this.state.myArticle, this.state.newArticle]}
    )
    console.log("my Article", this.state.myArticle);
  }
//
  // addArticle = (e) => {
  //   let newArticle = []
  //   console.log("e", e);
  //   for (let i = 0; i < e.length; i++){
  //     newArticle.push(e)
  //   }
    // let currentState = this.state;
    // currentState.chartData.datasets[0].data = sizeArr
    // this.setState(
    //   { chartData: update(this.state.chartData, {datasets: {data: {$set: sizeArr}}})
    // })

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
