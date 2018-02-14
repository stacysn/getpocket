import React, { Component } from 'react';
import '../App.css';
import { Button, FormGroup, Label, Input } from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Get Pocket</h1>
          <FormGroup >
           <Label >
             <Input
               type="text"
               value={this.props.newArticle}
               onChange={(e) => this.props.addArticle(e)}
              />
           </Label>
         </FormGroup>
         <Button type="submit" style={{padding: '0.1rem'}} onClick={(e) => this.props.addArticle(e)}> Add Article</Button>
        </header>
      </div>
    )
  }
}

export default Header;
