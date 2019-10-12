import React, { Component } from "react";
import "./ImageDisplay.css";
import axios from "axios";
import AddComment from "../AddComment/AddComment";
import Comments from "../Comments/Comment";
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
    const newComment = { newComment: comment };
    axios
      .post(`/api/add_comment/${this.state.allPhotos[index].id}`, newComment)
      .then(response => {
        this.setState({
          allPhotos: response.data
          // comment: ""
        });
      });
  }

  deleteComment(comment, index) {
    const indexToDelete = { indexToDelete: comment };
    axios
      .delete(
        `/api/delete_comment/${this.state.allPhotos[index].id}`,
        indexToDelete
      )
      .then(response => {
        this.setState({ allPhotos: response.data });
      });
  }

  editComment(comment, index) {
    const indexToEdit = { newComment: comment };
    const editComment = { editComment: comment };
    axios
      .editComment(`/api/edit_comment/${this.state.allPhotos[index].id}`, {
        indexToEdit,
        editComment
      })
      .then(response => {
        this.setState({ allPhotos: response.data });
      });
  }

  render() {
    const { allPhotos } = this.state;
    const { comment } = this.state.comment;
    const mappedPhotos = allPhotos.map((photo, index) => {
      //   const myComments = photo.comment.map(c => <Comment comment={c}>)

      //   return (
      //     <div>
      //       <AddComment/>
      //       {myComments}
      //     </div>

      return (
        <div key={photo.id} className="outer-box">
          <div className="all-images">
            <img className="images" src={photo.image} alt="" />
          </div>
          <section>
            <Comments addCommentfn={this.addComment} />
            <div className="textArea">{/* <TextContainer /> */}</div>
            <div className="add-comment">
              <input
                className="critique-input"
                placeholder="Lovely Comments Here"
                value={comment}
                onChange={e => this.updateText(e.target.value)}
              />
            </div>
            <div className="add-button">
              <button
                onClick={() => this.addComment(this.state.comment, index)}
              >
                Add Love
              </button>
            </div>
          </section>

          <div className="edit-button">
            <button onClick={() => this.editComment(this.state.comment, index)}>
              Edit Love
            </button>
          </div>
          <div className="delete-button">
            <button
              onClick={() => this.deleteComment(this.state.comment, index)}
            >
              Delete
            </button>
          </div>
        </div>
      );
    });
    console.log(this.state.allPhotos);
    return (
      <div className="image-display">
        <AddComment />
        <div className="printed-text">{this.state.comment}</div>
        <div>{mappedPhotos}</div>
      </div>
    );
  }
}
