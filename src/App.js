import React, { Component } from "react";
import Header from "./components/Header/Header";
import ImageDisplay from "./components/ImageDisplay/ImageDisplay";
// import AddComment from "./components/AddComment/AddComment";

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
        {/* <AddComment addComment={this.addComment} /> */}
      </div>
    );
  }
}
export default App;
