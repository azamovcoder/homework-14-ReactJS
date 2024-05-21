import "./hero.scss";

import { Component } from "react";
import img from "../../assets/images/hero.webp";

export default class Hero extends Component {
  render() {
    return (
      <section className="hero container">
        <div className="hero__left">
          <h1 className="hero__left__title">ONE PRICE</h1>
          <p className="hero__left__desc">for orders from 3 to 10 items</p>
          <button className="hero__left__btn">Buy {">"}</button>
        </div>
        <div className="hero__right">
          <img src={img} alt="" />
        </div>
      </section>
    );
  }
}
