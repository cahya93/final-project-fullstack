import React, { Component } from "react";
class title extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { name } = this.props;
    return <div className="title">{name}</div>;
  }
}

export default title;
