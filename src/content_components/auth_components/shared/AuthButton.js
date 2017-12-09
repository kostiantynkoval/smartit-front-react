import React, { Component } from 'react';


class AuthButton extends Component {
    render() {
        return (
            <button type="submit" className="btn">{this.props.name}</button>
        )
    }
}

export default AuthButton;