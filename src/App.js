import React, { Component } from "react";
import Header from "./components/Header/Header";
import ImageDisplay from "./components/ImageDisplay/ImageDisplay";

//=================this is the main app using two components==========
class App extends Component {
  constructor() {
    super();
    this.state = {};
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
