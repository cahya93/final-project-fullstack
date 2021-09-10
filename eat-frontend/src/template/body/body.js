/**
 * Author @Eko_cahyanto
 * Siswa @G2_Academy
 * Batch @April2021
 * Tutor @Wawan_Setyawan
 */
import { Title, Restaurant } from "../../component";
import { Promo, Kategori } from "../../page";
import React, { Component } from "react";
import { connect } from "react-redux";
class body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="konten">
        <Title>Promo Hari ini</Title>
        <Promo />
        <Title>Pilih Kategori</Title>
        <Kategori />
        <Title>Pilih Restaurant</Title>
        <Restaurant
          action={() => alert("coba")}
          image={
            "https://asset-a.grid.id/crop/0x113:825x629/360x240/photo/2020/05/16/2464089360.jpg"
          }
          nameRM="Krusty Krab"
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  getProduct: state.Product,
});
export default connect(mapStateToProps)(body);
