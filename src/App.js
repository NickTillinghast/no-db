import React, { Component } from "react";
import Header from "./components/Header/Header";
import ImageDisplay from "./components/ImageDisplay/ImageDisplay";
import "./App.css";

//=================this is the main app using two components==========
class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <Header />
        <div className="title-box">
          <div className="title">
            <p>These are the photos I offer for critique.</p>
          </div>
          <div className="title-two">
            <p>Please feel free to comment and share your feedback</p>
          </div>
        </div>
        <div className="photos">
          <ImageDisplay />
        </div>
      </div>
    );
  }
}
export default App;
