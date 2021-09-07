/**
 * Author @Eko_cahyanto
 * Siswa @G2_Academy
 * Batch @April2021
 * Tutor @Wawan_Setyawan
 */
import "./body.css";
import { Promo, Kategori } from "../../page";
import React, { Component } from "react";
class body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="konten">
        <div className="judul">Promo Hari ini</div>
        <Promo />
        <div className="judul">Pilih Kategori</div>
        <Kategori />
        {/* <div>
          <img src={this.state.image} alt="" />
          <h1>Select Image</h1>
          <input type="file" name="myImage" onChange={this.onImageChange} />
        </div> */}
      </div>
    );
  }
}

export default body;
