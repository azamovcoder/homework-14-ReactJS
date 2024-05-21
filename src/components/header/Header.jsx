import "./header.scss";

import { Component } from "react";
import img from "../../assets/logo/nav.png";
import img1 from "../../assets/logo/nav1.svg";
import img2 from "../../assets/logo/nav2.svg";
import img3 from "../../assets/logo/nav3.svg";
import img4 from "../../assets/logo/nav4.svg";

export default class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <header className="header">
        <div className="container">
          <nav className="header__nav">
            <div className="header__nav__left">
              <a href="#">
                <img src={img} alt="" />
              </a>
            </div>
            <div className="header__nav__right">
              <div className="header__nav__right__logo">
                <img src={img1} alt="" />
                <span>Catalog</span>
              </div>
              <div className="header__nav__form">
                <input placeholder="Search..." type="text" />
                <button>Find</button>
              </div>
              <div className="header__nav__right__loges">
                <div className="header__nav__right__logo">
                  <img src={img2} alt="" />
                  <span>Orders</span>
                </div>
                <div className="header__nav__right__logo">
                  <img src={img3} alt="" />
                  <span>Cart</span>
                </div>
                <div className="header__nav__right__logo">
                  <img src={img4} alt="" />
                  <span>Sign in</span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
