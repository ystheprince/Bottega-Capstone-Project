import React, { Component } from "react";
import Product from "../Product/MenProduct";
import Title from "../Title";
import { ProductConsumer } from "../../Context/MenProductContext";

export default class MenProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Men's" title="Products" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
