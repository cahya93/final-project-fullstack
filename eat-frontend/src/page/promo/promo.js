import "./promo.css";
import {
  ImagePromo as Image,
  TitlePromo as Title,
  PricePromo as Price,
} from "../../component";
import React, { Component } from "react";
import { connect } from "react-redux";

class promo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      activeSlideIndex: 0,
    };
  }
  convertRp = (e) => {
    const format = e.toString().split("").reverse().join(""); //diformat ke dalam string
    const convert = format.match(/\d{1,3}/g); //ambil 3 angka
    const rupiah =
      "Rp " + convert.join(".").split("").reverse().join("") + ",00"; //join hasil format dan ambil 3 angka
    return rupiah;
  };

  renderItem = () => {
    const { error, isLoaded, items } = this.state;
    if (error) return <div>Error: {error.message}</div>;
    if (!isLoaded) return <div>Loading...</div>;
    return (
      <>
        {items.map((item, idx) => (
          <div className="konten" key={idx} onClick={() => alert(item.menu)}>
            <div className="promo_fixed">50%</div>
            <Image url={item.image} alt="Ikan Bakar" />
            <Title>{item.menu}</Title>
            <Price>{this.convertRp(item.price)}</Price>
          </div>
        ))}
      </>
    );
  };

  componentDidMount() {
    fetch("http://yantodev.ddns.net:8080/eats/viewall")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(`result`, result[0]);
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          console.log(`error`, error);
          this.setState({
            isLoaded: false,
            error,
          });
        }
      );
  }
  render() {
    return <div className="promo">{this.renderItem()}</div>;
  }
}
const mapStateToProps = (state) => ({
  getProduct: state.Product,
});
export default connect(mapStateToProps)(promo);
