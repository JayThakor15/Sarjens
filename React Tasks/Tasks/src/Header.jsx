import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="navbar">
          <h1 className="navbar-title">React Tasks</h1>

          <div className="innerdiv">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to={"/"}>Login/Signup</Link>
              </li>
              <li className="nav-item">
                <Link to={"/form"}>ShowData</Link>
              </li>
              <li className="nav-item">
                <Link to={"/Todo"}>Todo</Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
