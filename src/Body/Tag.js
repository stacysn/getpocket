import React, { Component } from 'react';
import '../App.css';
import { Button } from 'reactstrap';
import PostTagModal from './PostTagModal'
import $ from 'jquery';


class Tag extends Component{
   constructor(props){
     super(props)

   }

   handleDeleteTag = (e) => {
     e.preventDefault();
     $.ajax({
       method: 'DELETE',
       url: 'http://localhost:3001/api/articles/' + this.props.articleId + '/tags/' + this.props.tagId
       })
     .then((res)=>{
       console.log('deleted tag', res);
       this.props.loadArticlesFromServer();
     })
   }

   render(){
     return (
       <div>
        #{this.props.tagTitle} <Button onClick={(e)=>this.handleDeleteTag(e)}>X</Button>
       </div>
     )
   }
 }

 export default Tag;
