import { Component, Fragment } from "react";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <Hero />
          <Products />
        </main>
        <Footer />
      </Fragment>
    );
  }
}
