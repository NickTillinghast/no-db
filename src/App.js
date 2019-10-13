import React, { Component } from "react";
import Header from "./components/Header/Header";
import ImageDisplay from "./components/ImageDisplay/ImageDisplay";

class App extends Component {
  constructor() {
    super();
    this.state = {
      comment: ""
    };
    this.addComment = this.addComment.bind(this);
  }
  addComment(text) {
    this.setState({ comment: text });
  }
  render() {
    return (
      <div>
        <Header />
        <ImageDisplay />
      </div>
    );
  }
}
export default App;
