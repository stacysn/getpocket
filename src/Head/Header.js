import React, { Component } from 'react';
import '../App.css';
import { Button, FormGroup, Label, Input } from 'reactstrap';




class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      newArticle: ''
    }
    this.addArticle = this.addArticle.bind(this);
  }

  addArticle(e){
    this.setState({
      newArticle: e.target.value
    })
    // console.log("e", this.state.newArticle);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Get Pocket</h1>
          <FormGroup >
           <Label >
             <Input
               type="text"
               value={this.state.newArticle}
               onChange={this.addArticle}
              />
           </Label>
         </FormGroup>
         <Button onClick={(e) => this.addArticle(e)}> Add Article</Button>
        </header>
      </div>
    )
  }
}

export default Header;
