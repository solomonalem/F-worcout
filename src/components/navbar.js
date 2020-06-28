import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <h3>
            <span>
              <FontAwesomeIcon icon="running" />
            </span>
            F~worcout
          </h3>
        </Link>
        <div>
          <ul className="navbar-items">
            <li className="navbar-item">
              <Link to="/" className="navbar-link">
                Exercises
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="navbar-link">
                Create Exercise
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="navbar-link">
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
