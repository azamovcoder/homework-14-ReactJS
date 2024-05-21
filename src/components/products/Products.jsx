import "./products.scss";

import { Component } from "react";
import axios from "axios";

const API_URL = "https://dummyjson.com";

export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      offset: 1,
      categories: null,
      categoryValue: "/products",
    };
  }

  componentDidMount() {
    axios
      .get(
        `${API_URL}${this.state.categoryValue}?limit=${this.state.offset * 6}`
      )
      .then((res) => this.setState({ data: res.data.products }))
      .catch((err) => console.log(err));

    axios
      .get(`${API_URL}/products/categories`)
      .then((res) => this.setState({ categories: res.data }))
      .catch((err) => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.offset !== prevState.offset ||
      this.state.categoryValue !== prevState.categoryValue
    ) {
      axios
        .get(
          `${API_URL}${this.state.categoryValue}?limit=${this.state.offset * 6}`
        )
        .then((res) => this.setState({ data: res.data.products }))
        .catch((err) => console.log(err));
    }
  }

  render() {
    return (
      <section className="products container">
        <h1 className="products__title">Products</h1>
        <ul className="products__category">
          <li>
            <data
              style={{
                background:
                  this.state.categoryValue === `/products` ? "black" : "grey",
                color:
                  this.state.categoryValue === `/products` ? "white" : "black",
              }}
              onClick={(e) => this.setState({ categoryValue: e.target.value })}
              value="/products"
            >
              All
            </data>
          </li>
          {this.state.categories?.map((el) => (
            <li className="products__category__list" key={el}>
              <data
                style={{
                  background:
                    this.state.categoryValue === `/products/category/${el}`
                      ? "black"
                      : "grey",
                  color:
                    this.state.categoryValue === `/products/category/${el}`
                      ? "white"
                      : "black",
                }}
                onClick={(e) =>
                  this.setState({ categoryValue: e.target.value })
                }
                value={`/products/category/${el}`}
              >
                {el}
              </data>
            </li>
          ))}
        </ul>
        <div className="products__cards">
          {this.state.data?.map((el) => (
            <div key={el.id} className="products__card">
              <div className="products__card__img">
                <img src={el.images[0]} alt={el.title} />
              </div>
              <h3 className="products__card__title">{el.title}</h3>
              <p className="products__card__price">Cost: {el.price}$</p>
              <p className="products__card__desc">{el.description}</p>
            </div>
          ))}
        </div>
        <button
          className="products__btn"
          onClick={() => this.setState({ offset: this.state.offset + 1 })}
        >
          See More
        </button>
      </section>
    );
  }
}
