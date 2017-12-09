import React, { Component } from "react";
import  Delay  from 'react-delay';

const DelayWrapper = WrappedComponent => class DelayWrapper extends Component {

    render() {
        return (
            <Delay wait={500}>
                <WrappedComponent { ...this.props}/>
            </Delay>
        )
    }
};

export default DelayWrapper;