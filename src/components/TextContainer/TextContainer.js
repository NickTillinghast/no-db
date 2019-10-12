import React, { Component } from "react";

export default class TextContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.updateText = this.updateText.bind(this);
  }
  updateText(e) {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return (
      <div className="textContainer">
        <textarea
          onChange={this.updateText}
          value={this.state.text}
          cols="50"
          rows="5"
        />
      </div>
    );
  }
}
