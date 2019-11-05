import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/NavBar";
import ProductList from "./Components/ProductList";
import Details from "./Components/Details";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Payment from "./Components/Payment";
import Default from "./Components/Default";
import Modal from "./Components/Modal";
import HomePage from "./Components/HomePage";
import MenProduct from "./Components/ProductList/MenProductList";
import WomenProduct from "./Components/ProductList/WomenProductList";
import AdminLogin from "./Components/Admin/login";
import AdminOrders from  "./Components/Admin/orders";
import AdminOrdersDetails from "./Components/Admin/orderDetails"

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/home" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/payment" component={Payment} />
        <Route path="/women" component={WomenProduct} />
        <Route path="/men" component={MenProduct} />
        <Route path="/admin/login" component={AdminLogin} />
        <Route path="/admin/orders" component={AdminOrders} />
        <Route path="/admin/orders-details/:order_no" component={AdminOrdersDetails} />
        <Route component={Default} />
      </Switch>

      <Modal />
    </React.Fragment>
  );
}

export default App;
