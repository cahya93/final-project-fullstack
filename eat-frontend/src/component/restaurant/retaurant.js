import "./restaurant.css";
import Image from "./image";
import Title from "./title";
import React, { Component } from "react";
class retaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { action, image, alt, nameRM } = this.props;
    return (
      <div className="restaurant">
        <div className="konten" onClick={action}>
          <Image src={image} alt={alt} />
          <Title name={nameRM} />
        </div>
      </div>
    );
  }
}

export default retaurant;
