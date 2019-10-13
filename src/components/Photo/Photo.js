import React from "react";
import Comment from "../Comment/Comment";
import "./Photo.css";

//==============this component is used to make each photo
class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: null
    };
  }
  //
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
          <div>
            <img
              className="images"
              src={this.props.image}
              alt="single-images"
            />
          </div>
          <div>
            <input
              className="Add"
              placeholder="Tell me how you feel"
              onChange={e => this.setState({ comment: e.target.value })}
            />
            <div className="add-button">
              <button
                className="button"
                onClick={() => {
                  this.props.addCommentFunc(this.state.comment, this.props.id);
                }}
              >
                Add Button
              </button>
            </div>
          </div>
          {mappedComments}
        </div>
      </div>
    );
  }
}
export default Photo;
