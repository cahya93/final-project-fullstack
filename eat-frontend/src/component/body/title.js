import "./body.css";
import React, { Component } from "react";
class title extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { children } = this.props;
    return <div className="judul">{children}</div>;
  }
}

export default title;
