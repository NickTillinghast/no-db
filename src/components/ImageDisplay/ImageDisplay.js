import React, { Component } from "react";
import "./ImageDisplay.css";
import axios from "axios";
export default class ImageDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPhotos: [],
      comment: [""]
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
  updateText(comment) {
    this.setState({ comment });
  }
  addComment() {
    axios.post("/api/add_comment/:id").then(response => {
      this.setState({ comment: "" });
    });
  }

  deleteComment() {
    axios.delete("/api/delete_comment/:id").then(response => {
      this.setState({ comment: "" });
    });
  }

  editComment() {
    axios.editComment("/api/edit_comment/:id").then(response => {
      this.setState({ comment: "" });
    });
  }

  render() {
    const { allPhotos } = this.state;
    const { comment } = this.state.comment;
    const mappedPhotos = allPhotos.map(photo => {
      return (
        <body className="outer-box">
          <div className="all-images">
            <img className="images" src={photo.image} alt="" />
          </div>

          <div className="add-comment">
            <input
              className="critique-input"
              placeholder="Lovely Comments Here"
              value={comment}
              onChange={e => this.updateText(e.target.value)}
            />
          </div>
          <div className="add-button">
            <button onClick={this.addComment}>Add Love</button>
          </div>
          <div className="edit-comment">
            <input
              className="edit-comment"
              placeholder="Edit Comments Here"
              value={comment}
              onChange={e => this.editComment(e.target.value)}
            />
          </div>
          <div className="edit-button">
            <button onClick={this.editComment}>Edit Love</button>
          </div>
          <div className="delete-button">
            <button onClick={this.deleteComment}>Delete</button>
          </div>
        </body>
      );
    });
    return <div>{mappedPhotos}</div>;
  }
}
