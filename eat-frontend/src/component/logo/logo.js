import logoImg from "../../images/logo.png";
import "./logo.css";
import React, { Component } from "react";
class logo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="logo">
        <span>
          <img src={logoImg} alt="logo" />
        </span>
      </div>
    );
  }
}

export default logo;
