import React, { Component } from "react";
import "./Header.css";

// ====================this component displays the header===============
export default class Header extends Component {
  render() {
    return (
      <header className="nav-bar">
        <div className="Critique-box">
          <h1>Photo Critique</h1>
        </div>
        <ul className="list">
          <div className="website">
            <li>Website</li>
          </div>
          <div className="about">
            <li>About</li>
          </div>
          <div className="rules">
            <li className="dropdtn">Rules</li>
          </div>
        </ul>
      </header>
    );
  }
}
