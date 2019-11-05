import React, {Component} from "react";
import Title from "../Title";

export default class Checkout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            first_name: this.props.first_name || '',
            last_name: this.props.last_name || '',
            street_address: this.props.street_address || '',
            apartment: this.props.apartment || '',
            post_code: this.props.post_code || '',
            phone: this.props.phone || '',
            email: this.props.email || '',
        };
    }

    updateState = (e) => {
        const {id, name, value} = e.target;
        const newState = Object.assign({}, this.state);
        const key = id || name;
        newState[key] = value;
        this.setState({ ...newState });
    };

    submitCheckout = () => {

        if(this.state.first_name === "" || this.state.post_code === "" || this.state.email === ""){
            alert("Fill in required fields *");
        }else{
            let stat={ ...this.state};
            localStorage.setItem('billing_address', JSON.stringify(stat));
            window.location.href="/payment";
        }

    };

    render() {

        console.log(this.props);

        const { first_name,last_name,street_address,apartment,post_code,phone,email } = this.state;

        return (
            <section>
                    <div className="container">
                        <div className="col-md-12">
                            <Title name="your" title="Checkout" />
                            <br/>
                            <div className="form-group">
                                <label className="col-md-3 customLabel">First name *</label>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" onChange={this.updateState} name="first_name" id="first_name" placeholder="First Name" value={ first_name }/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 customLabel">Last name</label>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" onChange={this.updateState} name="last_name" id="last_name" placeholder="Last Name" value={ last_name }/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 customLabel">Street address</label>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" onChange={this.updateState} name="street_address" id="street_address" placeholder="House number and street name" value={ street_address }/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 customLabel">Apartment, suite, unit etc.</label>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" onChange={this.updateState} name="apartment" id="apartment" placeholder="Apartment, suite, unit etc. (optional)" value={ apartment }/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 customLabel">Postcode / ZIP *</label>
                                <div className="col-md-8">
                                    <input type="text" className="form-control"  onChange={this.updateState} name="post_code" id="post_code" placeholder="Postcode / ZIP" value={ post_code }/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 customLabel">Phone</label>
                                <div className="col-md-8">
                                     <input className="form-control" type="tel" onChange={this.updateState} name="phone" id="phone" placeholder="Phone" value={ phone } autoComplete="tel"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 customLabel">Email address *</label>
                                <div className="col-md-8">
                                    <input className="form-control" type="email" onChange={this.updateState} name="email" id="email" placeholder="Email address" value={ email } autoComplete="email username"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <button className="btn btn-outline-primary" onClick={ () =>{this.submitCheckout()} }>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        )
    }
}