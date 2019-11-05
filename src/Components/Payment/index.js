import React, {Component} from "react";
import Title from "../Title";

export default class Payment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            card_type: this.props.card_type || 'VISA',
            card_number: this.props.card_number || '',
            expiry_year: this.props.expiry_year || '',
            expiry_month: this.props.expiry_month || '',
            cvv: this.props.cvv || '',
            card_name: this.props.card_name || ''
        };
    }

    updateState = (e) => {
        const {id, name, value} = e.target;
        const newState = Object.assign({}, this.state);
        const key = id || name;
        newState[key] = value;
        this.setState({ ...newState });
    };

    submitOrder = () => {

        if(this.state.card_name === "" || this.state.card_type === ""
            || this.state.expiry_month === "" || this.state.expiry_year === ""
            || this.state.cvv === "" || this.state.card_number === ""){
            alert("Fill in required fields *");
        }else{
                let order_no=new Date().getUTCMilliseconds();
                if(this.saveOrders(order_no)) {
                    alert("Thank you for the order. Order No:" + order_no);
                }else{
                    alert("Oops an error occurred, please shop again!");
                }

                localStorage.setItem("cart","");
                localStorage.setItem("billing_address","");

                window.location.href = "/";
        }

    };

    saveOrders = (order_no) =>{

        try {

            let all_order = localStorage.getItem("orders");

            if (!all_order) {
                localStorage.setItem("orders", JSON.stringify([]));
                all_order = localStorage.getItem("orders");
            }

            let data = JSON.parse(all_order);

            const  billing_address = JSON.parse(localStorage.getItem('billing_address'));
            const  cart = JSON.parse(localStorage.getItem('cart'));

            let new_data = {
                'order_no': order_no,
                'billing_address': billing_address,
                'cart': cart,
                'order_date':new Date().toLocaleString()
            };

            data.push(new_data);
            localStorage.setItem("orders", JSON.stringify(data));

            return true;
        }catch (e) {
            return false;
        }

    };

    render() {

        const {card_number,expiry_year,expiry_month,cvv,card_name } = this.state;

        return (
            <section>
                <div className="container">
                    <div className="col-md-12">
                        <Title name="your" title="Payment" />
                        <br/>
                        <div className="form-group">
                            <label className="col-md-3 customLabel">Card Type *</label>
                            <div className="col-md-8">
                                <select className="form-control" onChange={this.updateState} name="card_type" id="card_type">
                                    <option value="VISA">VISA</option>
                                    <option value="MASTER">MASTER</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 customLabel">Card Number*</label>
                            <div className="col-md-8">
                                <input type="text" className="form-control" onChange={this.updateState} name="card_number" id="card_number" placeholder="Card Number" value={ card_number }/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 customLabel">Card Name*</label>
                            <div className="col-md-8">
                                <input type="text" className="form-control" onChange={this.updateState} name="card_name" id="card_name" placeholder="Card Name" value={ card_name }/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 customLabel">Expiry*</label>
                            <div className="col-md-8">
                                <input type="text" className="form-control" onChange={this.updateState} name="expiry_month" id="expiry_month" placeholder="Month" value={ expiry_month }/>
                            </div>
                            <br/>
                            <div className="col-md-8">
                                <input type="text" className="form-control" onChange={this.updateState} name="expiry_year" id="expiry_year" placeholder="Year" value={ expiry_year }/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 customLabel">CVV*</label>
                            <div className="col-md-8">
                                <input type="text" className="form-control"  onChange={this.updateState} name="cvv" id="cvv" placeholder="CVV" value={ cvv }/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-12">
                                <button className="btn btn-outline-primary" onClick={ () =>{this.submitOrder()} }>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}