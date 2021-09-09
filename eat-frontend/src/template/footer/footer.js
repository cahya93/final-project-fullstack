/**
 * Author @Eko_cahyanto
 * Siswa @G2_Academy
 * Batch @April2021
 * Tutor @Wawan_Setyawan
 */
import "./footer.css";
import React, { Component } from "react";
class footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer className="footer">
        <div className="footer_fixed">
          Copyright © <a href="."> yantodev.com</a> 2021
        </div>
      </footer>
    );
  }
}

export default footer;
