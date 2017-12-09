import React, { Component } from 'react';


class AuthWindowTitle extends Component {
    render() {
        return (
            <h2><strong>{this.props.strong}</strong> {this.props.title}</h2>
        )
    }
}

export default AuthWindowTitle;