import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AuthTop extends Component {
    render() {
        return (
            <div className="auth-top">
                <Link to="/"><img src={require('../../../images/logo.png')} alt=""/></Link>
            </div>
        );
    }
}

export default AuthTop;




