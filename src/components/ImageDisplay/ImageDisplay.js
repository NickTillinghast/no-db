import React, { Component } from "react";
import "./ImageDisplay.css";
import axios from "axios";
import Photo from "../Photo/Photo";

//===========this component will retrieve all images from the cloud and set state and props===========
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
  // ===============this gets all my photos from the cloud
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

  // =======================this function adds a comment and is used in the photo component
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
  // =======================this function will delete the comment and is used in the comment component
  deleteComment(indexToDelete, index) {
    axios
      .delete(`/api/delete_comment/${index}`, {
        indexToDelete
      })
      .then(response => {
        this.setState({ allPhotos: response.data });
      });
  }
  // ==============this function will edit and update the comment and is used in the comment component
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
  //  ================the map here is used to get and display all photos and setup props for the photo component
  render() {
    const { allPhotos } = this.state;
    const mappedPhotos = allPhotos.map(photo => {
      return (
        <Photo // props passed down to photo component
          key={photo.id}
          id={photo.id}
          image={photo.image}
          addCommentFunc={this.addComment} // add function props
          comment={photo.comment}
          editComment={this.editComment} // edit function props
          deleteComment={this.deleteComment} // delete function props
        />
      );
    });
    // display of all api photos
    return (
      <div className="image-display">
        <div>{mappedPhotos}</div>
      </div>
    );
  }
}
