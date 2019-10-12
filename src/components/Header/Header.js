import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <header className="nav-bar">
        <h1>Photo Critique</h1>
        <ul>
          <li>Website</li>
          <li>About</li>

          <li className="dropdtn">Rules</li>
        </ul>
      </header>
    );
  }
}
