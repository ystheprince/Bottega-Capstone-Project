import React, {Component} from "react";
import Title from "../Title";
export default class Orders extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        const data = localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [];

        return (
            <section>
                <div className="container-fluid">
                    <div className="col-md-12">
                        <Title name="Admin" title="Orders" />
                        <br/>
                        <table className="table table-condensed table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Order No</th>
                                    <th>Order Date</th>
                                    <th>Sub Total</th>
                                    <th>Tax</th>
                                    <th>Total</th>
                                    <th>Payment Status</th>
                                    <th>Buyer Name</th>
                                    <th>Buyer Address</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                data.map((order,i) =>(
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{order.order_no}</td>
                                        <td>{order.order_date}</td>
                                        <td>{order.cart.cartSubTotal}</td>
                                        <td>{order.cart.cartTax}</td>
                                        <td>{order.cart.cartTotal}</td>
                                        <td>Paid</td>
                                        <td>{order.billing_address.first_name+" "+order.billing_address.last_name}</td>
                                        <td>{"Street Address: "+order.billing_address.street_address+" ,Apartment:"+order.billing_address.apartment+", Post Code:"+order.billing_address.post_code}</td>
                                        <td>{order.billing_address.phone}</td>
                                        <td>{order.billing_address.email}</td>
                                        <td>
                                            <button className="btn btn-primary btn-sm"
                                                    onClick={ () => {
                                                        window.location.href="/admin/orders-details/"+order.order_no;
                                                    }}
                                            >
                                                View Order Products
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        )
    }
}