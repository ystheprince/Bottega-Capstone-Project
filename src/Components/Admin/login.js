import React, {Component} from "react";
import Title from "../Title";

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username || '',
            pass: this.props.pass || ''
        };
    }

    updateState = (e) => {
        const {id, name, value} = e.target;
        const newState = Object.assign({}, this.state);
        const key = id || name;
        newState[key] = value;
        this.setState({ ...newState });
    };

    submitLogin = () => {
        if(this.state.username ==="" || this.state.pass ===""){
            alert("Enter Username and Password");
        }else{
            window.location.href="/admin/orders";
        }
    };

    render() {

        const { pass, username} = this.state;

        return (
            <section>
                <div className="container">
                    <div className="col-md-12">
                        <Title name="Admin" title="Login" />
                        <br/>
                        <div className="form-group">
                            <label className="col-md-3 customLabel">Username*</label>
                            <div className="col-md-8">
                                <input type="text" className="form-control" onChange={this.updateState} name="username" id="username" placeholder="Username" value={ username }/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 customLabel">Password*</label>
                            <div className="col-md-8">
                                <input type="password" className="form-control" onChange={this.updateState} name="pass" id="pass" placeholder="Password" value={ pass }/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-12">
                                <button className="btn btn-outline-primary" onClick={ () =>{this.submitLogin()} }>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}