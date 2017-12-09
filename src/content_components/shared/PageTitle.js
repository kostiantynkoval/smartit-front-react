import React, { Component } from 'react';

class PageTitle extends Component {

    render() {
        return (
            <div className="component-title"><h1>{this.props.text}</h1></div>
        );
    }
}

export default PageTitle;