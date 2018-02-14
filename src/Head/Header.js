import React, { Component } from 'react';
import '../App.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';




class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Get Pocket</h1>
          <FormGroup >
           <Label >
             <Input type="text" />
           </Label>
         </FormGroup>
         <Button>Add Article</Button>
        </header>
      </div>
    )
 }
}

export default Header;
