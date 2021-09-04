import "./humberger.css";
import React, { Component } from "react";
class humberger extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { humberger } = this.props;
    return (
      <div className="humberger" onClick={humberger}>
        &#9776;
      </div>
    );
  }
}

export default humberger;
