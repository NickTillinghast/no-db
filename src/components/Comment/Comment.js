import React, { Component } from "react";
import "./Comment.css";

// =================this component will display the comments and will update and delete the=========
export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editedComment: ""
    };
  }

  render() {
    return (
      <div className="comment-button">
        <div className="big-box">
          <input
            className="put-box"
            placeholder="Edit how you feel"
            onChange={e => this.setState({ editedComment: e.target.value })}
            value={this.state.editedComment}
          />

          <button
            className="edit"
            onClick={e =>
              this.props.editComment(
                this.props.id, // props passed in from photo
                this.props.parentComment, // props passed in from photo
                this.state.editedComment // updated state
              )
            }
          >
            Adjust Critique
          </button>
        </div>
        <button
          className="delete"
          onClick={e =>
            this.props.deleteComment(this.props.id, this.props.parentComment)
          }
        >
          Remove ;
        </button>
        <div className="comment">{this.props.comment}</div>
      </div>
    );
  }
}
