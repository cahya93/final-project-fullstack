/**
 * Author @Eko_cahyanto
 * Siswa @G2_Academy
 * Batch @April2021
 * Tutor @Wawan_Setyawan
 */
import "./nav.css";
import { Humberger, Logo, Menu } from "../../component";
import React, { Component } from "react";
class nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  showSidebar = (e) => {
    console.log(`e`, e);
    this.setState({ show: e });
  };

  sidebar = () => {
    return (
      <div className="mySidebar">
        <div className="close" onClick={() => this.showSidebar(false)}>
          &times;
        </div>
        <div className="sign-in">Sign In</div>
        <div className="sidebarMenu" onClick={() => alert("Create")}>
          Create a business account
        </div>
        <div className="sidebarMenu" onClick={() => alert("Add")}>
          Add your restaurant
        </div>
        <div className="sidebarMenu" onClick={() => alert("Deliver")}>
          Sign up to deliver
        </div>
      </div>
    );
  };
  render() {
    const { show } = this.state;
    return (
      <>
        <div className="topnav">
          <div className="humberger">
            {show ? this.sidebar() : ""}
            <Humberger humberger={() => this.showSidebar(true)} />
          </div>
          <div className="logo">{!show ? <Logo /> : ""}</div>
          <div className="topnav-right">
            <Menu redirect={() => alert("Sign In")}>Sign In</Menu>
          </div>
        </div>
      </>
    );
  }
}

export default nav;
