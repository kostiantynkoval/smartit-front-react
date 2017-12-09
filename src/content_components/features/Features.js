import React, { Component } from 'react';
import ContactBottom from "../shared/ContactBottom";
import PageTitle from "../shared/PageTitle";
import DelayWrapper from "../shared/DelayWrapper";
import AnimatedWrapper from '../shared/AnimatedWrapper';
import '../Others.css';

const FEATURES_LIST = [
    {title: 'Your own design', position: '0% 0%'},
    {title: 'Product catalog', position: '33% 0%'},
    {title: 'Chat with support', position: '100% 109%'},
    {title: 'News, shares, offers', position: '67% 0%'},
    {title: 'Marketing stats', position: '1% 109%'},
    {title: 'Sales', position: '35% 109%'},
    {title: 'Notifications', position: '68% 109%'}
];

class FeaturesComponent extends Component {
    render() {
        return (
            <div className="main-content other-components-content">
                <div className="features-container components-container d-flex flex-column align-items-center justify-content-between">
                    <div className={`anim-in-text-top ${this.props.animout?'anim-out-text-top':''}`}><PageTitle text="QR Basic Package"/></div>
                    <div className={`features-main anim-in-items-fade ${this.props.animout?'anim-out-items-fade':''}`}>
                        {FEATURES_LIST.map((feature) => (<Feature key={feature.title} feature={feature}/>))}
                    </div>
                    <div className={`anim-in-text-bottom ${this.props.animout?'anim-out-text-bottom':''}`}><ContactBottom/></div>
                </div>
            </div>
        );
    }
}

const Features = DelayWrapper(AnimatedWrapper(FeaturesComponent));
export default Features;

const Feature = (props) => (
    <div className="feature-container mx-auto">
        <div className="feature-item-top mb-1">
            <div className="feature-label anim-in-items-icons" style={{backgroundPosition : props.feature.position}}></div>
        </div>
        <div className="feature-item-bottom mt-4">
            <div className="feature-title">{props.feature.title}</div>
        </div>
    </div>
);