import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import DelayWrapper from "../shared/DelayWrapper";
import AnimatedWrapper from '../shared/AnimatedWrapper';
import './Home.css';

class HomeComponent extends Component {
    render() {
        return (
            <div className={`home-background main-content d-flex flex-column flex-nowrap align-items-center anim-in-background-fade ${this.props.animout?'anim-out-slide-up':''}`}>
                <section className="home-top ">
                    <div className={`anim-in-home-fade home-top-left ${this.props.animout?'anim-out-home-fade':''}`}>
                        <div className="home-top-left-inner">
                            <div className="home-top-left-inner-top">
                                <h1 className="main-title">QRSmarty</h1>
                                <div className="top-paragraph-wrapper section-faded p-2"><p className="m-0">All time access to your equipment information within few clicks</p></div>
                            </div>
                            <div className={`image-wrapper-mobile anim-in-home-image ${this.props.animout?'anim-out-home-image':''}`}>
                                <Image/>
                                <div className="scan-line"><div className="scan-line-shadow"></div></div>
                            </div>
                            <div className="d-flex flex-column flex-nowrap justify-content-end">
                                <div className="bottom-paragraph-wrapper"><p>Simple, Smart and Handy App</p></div>
                                <Link to="/contact" className="btn btn-danger align-self-center align-self-md-start login-button m-md-3 m-lg-0">Contact us for more details</Link>
                            </div>
                        </div>
                    </div>
                    <div className={`home-top-right d-lg-flex justify-content-center align-items-center anim-in-home-image-translate ${this.props.animout?'anim-out-home-image-translate':''}`}>
                        <div className={`image-wrapper anim-in-home-image ${this.props.animout?'anim-out-home-image':''}`}>
                            <Image/>
                            <div className="scan-line"><div className="scan-line-shadow"></div></div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const Home = DelayWrapper(AnimatedWrapper(HomeComponent));
export default Home;

const Image = () => (<img src={require('../../images/phones_edit-copy.png')} alt=""/>);