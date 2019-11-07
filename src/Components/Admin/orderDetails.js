import React, {Component} from "react";
import Title from "../Title";

export default class OrdersDetails extends Component {

    render() {

        const data = localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [];

        if(!this.props.match.params.hasOwnProperty("order_no")){
            alert("An error occurred, please try again");
            window.location.href="/admin/orders";
        }

        let order_details = [];
        const order_no=this.props.match.params.order_no;

        data.forEach((order) => {

            if(parseInt(order.order_no)===parseInt(order_no)){
                return (order_details=order.hasOwnProperty('cart') && order.cart.hasOwnProperty('cart')  ? order.cart.cart : []);
            }
        });

        return (
            <section>
                <div className="container-fluid">
                    <div className="col-md-12">
                        <Title name="Admin" title="Orders Details" />
                        <br/>
                        <table className="table table-condensed">
                            <tr>
                                <th>#</th>
                                <th>Order No</th>
                                <th>Product</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                            {
                                order_details.map((detail, i) => (
                                    <tr key={i}>
                                        <th>{i+1}</th>
                                        <th>{order_no}</th>
                                        <th>{detail.title}</th>
                                        <th>{detail.count}</th>
                                        <th>{detail.price}</th>
                                        <th>{detail.price * detail.count}</th>
                                    </tr>
                                ))
                            }
                        </table>
                    </div>
                </div>
            </section>
        )
    }
}