import React, { Component } from "react";
import Rules from "../Rules/Rules";
import About from "../About/About";
import Website from "../Website/Website";
import PhotoCritique from "../PhotoCritique/PhotoCritique";

import "./Header.css";

// ====================this component displays the header===============
export default class Header extends Component {
  render() {
    return (
      <header className="nav-bar">
        <div className="Critique-box">
          <h1>
            Photo Critique
            <PhotoCritique />
          </h1>
        </div>

        <div className="list-box">
          <ul className="list">
            <div className="website">
              <li>
                Website
                <Website />
              </li>
            </div>
            <div className="about">
              <li>
                About
                <About />
              </li>
            </div>
            <div className="rules">
              <li>
                Rules
                <Rules />
              </li>
            </div>
          </ul>
        </div>
      </header>
    );
  }
}
