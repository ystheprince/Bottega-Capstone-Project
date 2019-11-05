import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./Context/ProductContext";
import { ProductProviderMen } from "./Context/MenProductContext";
import { ProductProviderWomen } from "./Context/WomenProductContext";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <ProductProviderWomen>
    <ProductProviderMen>
      <ProductProvider>
        <Router>
          <App />
        </Router>
      </ProductProvider>
    </ProductProviderMen>
  </ProductProviderWomen>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
