import React from 'react';
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import $ from 'jquery';

class PostTagModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      closeAll: false,
      tag:'',
      tagTitle: '',
      tagId: ''
    };

    this.toggle = this.toggle.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);
  }

  componentWillMount(){
    this.props.loadArticlesFromServer()
  }

  toggle() {
    this.setState({modal: !this.state.modal});
  }


  handleTagChange(e){
    this.setState({tagTitle: e.target.value})
  }


  handleTagSubmit = (e) => {
    e.preventDefault()
    $.ajax({
      method: "POST",
      url: 'http://localhost:3001/api/articles/' + this.props.articleId + '/tags/',
      data: {
        tagTitle: this.state.tagTitle
      }
    })
    .then((res) => {
      this.setState({tagId: res._id})
      this.props.loadArticlesFromServer();
      this.setState({
        tagTitle: ''
      })
      this.handleTagChange()
    },
    (err) => {
      console.log("post to /api/articles/:article_id/tags resulted in error: ", err);
    })
    this.toggle()
  }

  render() {

    return (
      <div className='tag-modal'>
        <Button onClick={this.toggle} className='tag-modal'>Add Tag</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className='tag-modal'>
          <ModalHeader toggle={this.toggle} key={this.props.articleTitle._id}>Add Tag to : {this.props.articleTitle}</ModalHeader>
          <ModalBody>
            Add a tag for "{this.props.articleTitle}" article to make searching easier.
            <br />
            <Form>
              <FormGroup>
              <Label>
                <Input
                  type='text'
                  name='text'
                  id='tag'
                  value={this.tagTitle}
                  onChange={this.handleTagChange}
                  placeholder="Add Tag Here"
                />
              </Label>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleTagSubmit} >Submit New Tag</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PostTagModal;
