/**
 * Author @Eko_cahyanto
 * Siswa @G2_Academy
 * Batch @April2021
 * Tutor @Wawan_Setyawan
 */

import { Nav, Body, Footer } from "./template";
import { connect } from "react-redux";
import ApiBackend from "./service/API/api";
import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getProduct = () => {
    ApiBackend.getAllData().then((data) => {
      console.log(`data`, data);
      this.props.product(data);
    });
  };
  async componentDidMount() {
    await this.getProduct();
  }
  render() {
    return (
      <>
        <Nav />
        <Body />
        <Footer />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  product: (product) => dispatch({ type: "product", payload: { product } }),
});
export default connect(null, mapDispatchToProps)(App);
