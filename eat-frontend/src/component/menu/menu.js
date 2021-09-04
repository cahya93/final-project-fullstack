/**
 * Author @Eko_cahyanto
 * Siswa @G2_Academy
 * Batch @April2021
 * Tutor @Wawan_Setyawan
 */
import "./menu.css";
import React, { Component } from "react";
class menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { children, redirect } = this.props;
    return (
      <div className={`menu`} onClick={redirect}>
        {children}
      </div>
    );
  }
}

export default menu;
