import React, { Component } from "react";
import "./ImageDisplay.css";
import axios from "axios";
import Photo from "../Photo/Photo";
// import Comment from "../Comment/Comment";

export default class ImageDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPhotos: [],
      comment: ""
    };
    this.getAllPhotos = this.getAllPhotos.bind(this);
    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.editComment = this.editComment.bind(this);
  }
  componentDidMount() {
    this.getAllPhotos();
  }
  getAllPhotos() {
    axios
      .get("/api/all_photos")
      .then(response => {
        this.setState({
          allPhotos: response.data
        });
      })
      .catch(err => console.log(err));
  }
  updateText(newComment) {
    this.setState({
      comment: newComment
    });
  }
  addComment(comment, index) {
    axios
      .post(`/api/add_comment/${index}`, {
        newComment: comment
      })

      .then(response => {
        this.setState({
          allPhotos: response.data
        });
      });
  }

  deleteComment(indexToDelete, index) {
    axios
      .delete(`/api/delete_comment/${index}`, {
        indexToDelete
      })
      .then(response => {
        this.setState({ allPhotos: response.data });
      });
  }
  editComment(indexToEdit, index, editedComment) {
    console.log(indexToEdit, index, editedComment);
    axios
      .put(`/api/edit_comment/${index}`, {
        index: index,
        indexToEdit: indexToEdit,
        editedComment: editedComment
      })
      .then(response => {
        this.setState({ allPhotos: response.data });
      });
  }
  render() {
    const { allPhotos } = this.state;
    const mappedPhotos = allPhotos.map(photo => {
      return (
        <Photo
          key={photo.id}
          id={photo.id}
          image={photo.image}
          addCommentFunc={this.addComment}
          comment={photo.comment}
          editComment={this.editComment}
          deleteComment={this.deleteComment}
        />
      );
    });
    return (
      <div className="image-display">
        <div>{mappedPhotos}</div>
      </div>
    );
  }
}
