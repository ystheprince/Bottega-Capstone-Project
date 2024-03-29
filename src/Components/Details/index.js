import React, { Component } from "react";
import { ProductConsumer } from "../../Context/ProductContext";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Button";

export default class Details extends Component {

  getItem = (products, id) => {
    const product = products.find(item => item.id === parseInt(id));
    return product;
  };

  render() {
    return (
      <ProductConsumer>
        {value => {

          let product_id=0;
          let productData={};

          if(this.props.match.params.hasOwnProperty("id")) {
            product_id = this.props.match.params.id;
          }

          if (value.products && value.products.length > 0) {
            productData = this.getItem(value.products, product_id);
          }

          const {
            id,
            company,
            img,
            info,
            price,
            inCart,
            title
          } = productData;

          return (
            <div className="container py-5">
              {/*title*/}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title} </h1>
                </div>
              </div>
              {/*End title*/}
              {/*Product info*/}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 ">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/*Product text*/}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>model: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by :<span className="text-uppercase"> {company} </span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price: <span>$</span>
                      {price}
                    </strong>
                  </h4>

                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about product:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/*buttons*/}
                  <div>
                    <Link to="/home">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>

                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "inCart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
