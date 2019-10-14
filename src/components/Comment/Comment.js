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
        <div>
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
                this.props.id,
                this.props.parentComment,
                this.state.editedComment
              )
            }
          >
            Edit Button
          </button>
        </div>
        <button
          className="delete"
          onClick={e =>
            this.props.deleteComment(this.props.id, this.props.parentComment)
          }
        >
          Delete Button
        </button>

        {this.props.comment}
      </div>
    );
  }
}
