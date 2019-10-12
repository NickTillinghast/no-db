import React, { Component } from "react";
import axios from "axios";

export default class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPhotos: [],
      comment: ""
    };
    this.addComment = this.addComment.bind(this);
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

  updateText(newComment) {
    this.setState({
      comment: newComment
    });
  }

  render() {
    const { allPhotos } = this.state;
    const { comment } = this.state.comment;
    const mappedPhotos = allPhotos.map((photo, index) => {
      // const myComments = photo.comment.map(c => <div></div>)

      return (
        <div key={photo.id} className="outer-box">
          <div className="all-images">
            <img className="images" src={photo.image} alt="" />
          </div>
          <section>
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
        <div className="printed-text">{this.state.comment}</div>
        <div>{mappedPhotos}</div>
      </div>
    );
  }
}

/*
...



render() {
  return <div>
    <h1>{name}</h1?
    <p>{comment}</p>
    <button onClick={() => this.props.deletefn(comment, this.index)}> DeleteBtn</button>
  </div>
}

*/
