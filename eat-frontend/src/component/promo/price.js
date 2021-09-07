import React, { Component } from "react";
class price extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { children } = this.props;
    return <div className="price">{children}</div>;
  }
}

export default price;
