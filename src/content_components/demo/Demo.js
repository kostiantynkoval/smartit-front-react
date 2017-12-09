import React, { Component } from 'react';
import DelayWrapper from "../shared/DelayWrapper";
import PageTitle from "../shared/PageTitle";
import AnimatedWrapper from "../shared/AnimatedWrapper";
import '../Others.css';

class DemoComponent extends Component {
    render() {

        return (
            <div className="main-content other-components-content">
                <div className="features-container components-container d-flex flex-column align-items-center justify-content-between">
                    <div className={`anim-in-text-top ${this.props.animout?'anim-out-text-top':''}`}><PageTitle text="Demo Component"/></div>
                </div>
            </div>
        );
    }
}
const Demo = DelayWrapper(AnimatedWrapper(DemoComponent));
export default Demo;