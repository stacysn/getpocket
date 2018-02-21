
import React from 'react';
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class PostTagModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      closeAll: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleAll() {
    this.setState({
      closeAll: true
    });
  }

  render() {

    return (
      <div>
        <Button onClick={this.toggle}>Add Tag</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Tag to : {this.props.articleTitle}</ModalHeader>
          <ModalBody>
            Add a tag for this article to make searching easier.
            <br />
            <Form>
              <FormGroup>
              <Label>
                <Input
                  type=''
                  name=''
                  id='tag'
                  value={this.props.tag}
                  onChange={this.props.handleTagSubmit}
                  placeholder="Add Tag Here"
                />
              </Label>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Submit New Tag</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PostTagModal;
