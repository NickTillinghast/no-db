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
          <div className="add-box">
            <input
              className="Add"
              value={this.state.comment}
              placeholder="Tell me how this photo makes you feel"
              onChange={e => this.setState({ comment: e.target.value })}
            />
            <div className="add-button">
              <button
                className="button"
                onClick={() => {
                  this.props.addCommentFunc(this.state.comment, this.props.id);
                  this.setState({
                    comment: ""
                  });
                }}
              >
                Lovely Comment
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
