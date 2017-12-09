import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthTop from "./shared/AuthTop";
import AuthButton from "./shared/AuthButton";
import AuthWindowTitle from "./shared/AuthWindowTitle";
import './Auth.css';



class Login extends Component {
    render() {
        return (
            <div className="auth-components-content anim-in-login-fade">
                <AuthTop/>
                <div className="auth-bottom">
                    <div className="auth-window">
                        <AuthWindowTitle strong="Login" title="to Admin Panel"/>
                        <form className="d-flex flex-column flex-nowrap justify-content-start align-items-center">
                            <div className="form-group">
                                <label htmlFor="inputEmail1">Email address</label>
                                <input type="email" className="form-control" id="inputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                    <small className="collapse form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPassword">Password</label>
                                <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                            </div>
                            <Link to="/forgot_password">Forgot Password?</Link>
                            <AuthButton name="Login to QRSmarty"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;
