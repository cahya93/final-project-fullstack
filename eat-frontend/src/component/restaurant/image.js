import React, { Component } from "react";
class image extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { src, alt } = this.props;
    return <img src={src} alt={alt} />;
  }
}

export default image;
