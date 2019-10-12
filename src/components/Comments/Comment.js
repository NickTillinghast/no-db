import React, { Component } from "react";
import axios from "axios";
import "./Comment.css";

export default class Compose extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allPhotos: [],
      comment: ""
    };

    // this.createPost = this.createPost.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  updateText(newComment) {
    this.setState({ comment: newComment });
  }

  //   createPost() {
  //     const { comment } = this.state;
  //     const { createPostFn } = this.props;
  //     createPostFn(comment);
  //     this.setState({ comment: "" });
  //   }

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

  render() {
    // Destructuring
    const { comment } = this.state;

    return (
      <section className="Compose__parent">
        <div className="Compose__top">
          <input
            className="Compose__input"
            placeholder="What's on your mind?"
            value={comment}
            onChange={e => this.updateText(e.target.value)}
          />
        </div>

        <div className="Compose__bottom">
          <button onClick={this.addComment}>Comment</button>
          {/* <button onClick={this.createPost}>Compose</button> */}
        </div>
      </section>
    );
  }
}
