import React from "react";
import Comment from "../Comment/Comment";

// import AddedComment from "../AddedComment/AddedComment";

class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: null
    };
  }
  render() {
    console.log(this.props);
    const { comment } = this.props;
    const mappedComments = comment.map((comment, i) => {
      return (
        <Comment
          key={i}
          id={i}
          comment={comment}
          editComment={this.props.editComment}
          deleteComment={this.props.deleteComment}
          parentComment={this.props.id}
        />
      );
    });
    return (
      <div className="outer-box">
        <div className="all-images">
          <input
            className="input-box"
            onChange={e => this.setState({ comment: e.target.value })}
          />
          <button
            onClick={() => {
              this.props.addCommentFunc(this.state.comment, this.props.id);
            }}
          >
            Add Button
          </button>
          <img className="images" src={this.props.image} alt="single-images" />
        </div>
        {mappedComments}
      </div>
    );
  }
}
export default Photo;
