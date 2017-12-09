import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactBottom extends Component {

    render() {
        return (
            <div className="package-contact-section d-flex flex-nowrap align-items-center mb-4 mb-xl-5">
                <p>For detailed information</p><Link to="/contact" className="btn btn-danger align-self-center login-button">Contact Us</Link>
            </div>
        );
    }
}

export default ContactBottom;