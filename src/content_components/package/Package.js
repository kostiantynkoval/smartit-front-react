import React, {Component} from 'react';
import ContactBottom from "../shared/ContactBottom";
import PageTitle from "../shared/PageTitle";
import DelayWrapper from "../shared/DelayWrapper";
import AnimatedWrapper from '../shared/AnimatedWrapper';
import '../Others.css';
import './Package.css';

const listObj = [
    {
        title: "Your own design:",
        items: [
            'search products via QR scanner',
            'text search',
            'possibility to see an appropriate result of searching with additional info about it',
            'favourite and recently searched items'
        ]
    },
    {
        title: 'Admin panel with next functions:',
        items: [
            'possibility to add/update your products',
            'set the availability of your products',
            'possibility to print QR code for each product'
        ]
    },
    {
        title: 'Admin panel with next functions:',
        items: [
            'Play Market and Apple store accounts with possibility to upload your own Apps to it'
        ]
    },
    {
        title: 'Redesign',
        items: [
            'We can create special design for your apps and admin panel as you wish'
        ]
    }
];


class PackageComponent extends Component {
    render() {
        return (
            <div className="main-content other-components-content">
                <div
                    className="package-container components-container d-flex flex-column align-items-center justify-content-between">
                    <div className={`anim-in-text-top ${this.props.animout ? 'anim-out-text-top' : ''}`}><PageTitle
                        text="QR Basic Package"/></div>
                    <div className="package-main">
                        <div className={`anim-in-left package-left ${this.props.animout ? 'anim-out-left' : ''}`}>
                            <div className="list-container">
                                {listObj.map((item, i) => <List key={i} item={item}/>)}
                            </div>
                        </div>
                        <div className="package-right d-flex justify-content-end align-items-center">
                            <div
                                className={`anim-in-image-bottom ${this.props.animout ? 'anim-out-image-bottom' : ''}`}>
                                <img src={require('../../images/phones-package.png')} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={`anim-in-text-bottom ${this.props.animout ? 'anim-out-text-bottom' : ''}`}>
                        <ContactBottom/></div>
                </div>
            </div>
        );
    }
}

const Package = DelayWrapper(AnimatedWrapper(PackageComponent))
export default Package;


const List = (props) => {
    return (
        <div className="item-section">
            <h6>{props.item.title}</h6>
            <ul>
                {props.item.items.map((elem, i) => <ListItem key={elem} item={elem}/>)}
            </ul>
        </div>
    )
};

const ListItem = (props) => (
    <li className="list-item">{props.item}</li>
);