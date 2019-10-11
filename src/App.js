import React, { Component } from "react";
import Header from "./components/Header/Header";
import ImageDisplay from "./components/ImageDisplay/ImageDisplay";
class App extends Component {
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
