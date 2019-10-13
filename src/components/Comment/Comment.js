import React, { Component } from "react";

import "./Comment.css";

export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editedComment: ""
    };
  }
  render() {
    return (
      <div>
        <input
          onChange={e => this.setState({ editedComment: e.target.value })}
          value={this.state.editedComment}
        />
        <button
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
        <button
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
