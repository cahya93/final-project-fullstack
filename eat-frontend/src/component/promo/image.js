/**
 * Author @Eko_cahyanto
 * Siswa @G2_Academy
 * Batch @April2021
 * Tutor @Wawan_Setyawan
 */
import "./promo.css";
import React, { Component } from "react";

class image extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { url, alt } = this.props;
    return (
      <div className="image">
        <img src={url} alt={alt} />
      </div>
    );
  }
}

export default image;
