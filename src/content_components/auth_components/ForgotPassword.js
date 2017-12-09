import React, { Component } from 'react';
import AuthTop from "./shared/AuthTop";
import AuthButton from "./shared/AuthButton";
import AuthWindowTitle from "./shared/AuthWindowTitle";
import './Auth.css';



class ForgotPassword extends Component {
    render() {
        return (
            <div className="auth-components-content anim-in-login-fade">
                <AuthTop/>
                <div className="auth-bottom">
                    <div className="auth-window">
                        <AuthWindowTitle strong="Forgot" title="your password"/>
                        <p>Please enter your e-mail below and we email you with instructions</p>
                        <form className="d-flex flex-column flex-nowrap justify-content-start align-items-center">
                            <div className="form-group mb-4">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                <small className="collapse form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <AuthButton name="Reset Password"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default ForgotPassword;
