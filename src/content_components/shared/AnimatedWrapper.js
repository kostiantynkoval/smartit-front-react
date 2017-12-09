import React, { Component } from "react";

const AnimatedWrapper = WrappedComponent => class AnimatedWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {runAnimOut: false};
    }

    componentWillReceiveProps() {
        const historyLocation = this.props.history.location.pathname;
        const propsLocation = this.props.location.pathname;
        if (historyLocation !== propsLocation) {
            this.setState({runAnimOut: true})
        }
    }

    render() {
        return (
                <WrappedComponent animout={this.state.runAnimOut} { ...this.props}/>
        )
    }
};

export default AnimatedWrapper;