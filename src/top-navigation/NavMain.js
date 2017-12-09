import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MDMenu from 'react-icons/lib/md/menu';
import MdMarkunreadMailbox from 'react-icons/lib/md/markunread-mailbox';
import MdHome from 'react-icons/lib/md/home';
import MdBusinessCenter from 'react-icons/lib/md/business-center';
import MdStar from 'react-icons/lib/md/star';
import MdTv from 'react-icons/lib/md/tv';

import Swipe from 'react-easy-swipe';
import './NavMain.css';

class NavMain extends Component {

    constructor(props) {
        super(props);
        this.showMenu = this.showMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
        this.state = {isHomePage: false, classAnim: '', isMenuVisible: false};
        this._timer = null;
    }

    componentWillMount() {
        const currrentLocation = this.props.location.pathname;
        if (currrentLocation === "/") {
            this.setState({classAnim: 'text-light1'})
        } else {
            this.setState({classAnim: 'text-dark1'})
        }
    }

    componentWillReceiveProps(nextProps) {
        const currrentLocation = this.props.location.pathname;
        const nextLocation = nextProps.location.pathname;
        if (currrentLocation !== "/") {
            this.setState({isHomePage: false})
            if (nextLocation === "/") {
                this.runAnimation('light1');
                this.setState({classAnim: 'text-dark1 anim-nav-light'})
            } else {
                this.setState({classAnim: 'text-dark1'})
            }
        } else {
            if (nextLocation !== "/") {
                this.setState({isHomePage: true});
                this.runAnimation('dark1');
                this.setState({classAnim: 'text-light1 anim-nav-dark'})
            }

        }
    }

    runAnimation(color) {
        this._timer = setTimeout(function () {
            this.setState({classAnim: 'text-' + color})
        }.bind(this), 760);
    }

    showMenu() {
        this.setState({isMenuVisible: true})
    }

    hideMenu() {
        this.setState({isMenuVisible: false})
    }

    componentWillUnmount() {
        clearTimeout(this._timer);
    }

    render() {

        const location = this.props.location.pathname;
        return (
            <header className={(location !== '/') ? 'bordered' : ''}>
                <nav className="d-flex justify-content-between flex-nowrap flex-row">
                    <div className="logo-wrapper">
                        <Link to="/"
                              className={(location === '/') ? 'navbar-brand-logo hidden' : 'navbar-brand-logo'}><img
                            src={require('../images/SmartIT_QRSmarty_4.png')} alt="logo"/></Link>
                    </div>
                    <button onClick={this.showMenu}
                            className={`mob-menu-wrapper ${(location === '/') ? 'fill-white' : ''}`}>
                        <MDMenu/>
                    </button>
                    <div className="menu-wrapper d-flex flex-row flex-nowrap">
                        <ul className="navbar-nav menu-list-inner">
                            <li className="nav-item menu-item ml-md-2 mr-md-2 ml-lg-4 mr-lg-4">

                                <Link to="/"
                                      className={`transition-delay-1 nav-link ${this.state.classAnim} ${(location === '/') ? 'active' : ''}`}>
                                    Home</Link>
                            </li>
                            <li className="nav-item menu-item  ml-md-2 mr-md-2 ml-lg-4 mr-lg-4">
                                <Link to="/package"
                                      className={`transition-delay-2 nav-link d-flex flex-nowrap align-items-center ${this.state.classAnim} ${(location === '/package') ? 'active' : ''}`}>
                                    Package
                                    <img src={require('../images/crown.png')} alt=""/>
                                </Link>
                            </li>
                            <li className="nav-item menu-item  ml-md-2 mr-md-2 ml-lg-4 mr-lg-4">
                                <Link to="/features"
                                      className={`transition-delay-3 nav-link ${this.state.classAnim} ${(location === '/features') ? 'active' : ''}`}>
                                    Features</Link>
                            </li>
                            <li className="nav-item menu-item  ml-md-2 mr-md-2 ml-lg-4 mr-lg-4">
                                <Link to="/demo"
                                      className={`transition-delay-4 nav-link ${this.state.classAnim} ${(location === '/demo') ? 'active' : ''}`}>
                                    Demo</Link>
                            </li>
                            <li className="nav-item menu-item  ml-md-2 mr-md-2 ml-lg-4 mr-lg-4">
                                <Link to="/contact"
                                      className={`transition-delay-5 nav-link ${this.state.classAnim} ${(location === '/contact') ? 'active' : ''}`}>
                                    Contact
                                    Us</Link>
                            </li>
                        </ul>

                        <Link to="/login" className="btn btn-danger text-uppercase align-self-center login-button">log
                            in</Link>
                    </div>
                </nav>

                <div onClick={this.hideMenu} className={`menu-fader ${this.state.isMenuVisible ? 'active' : ''}`}></div>
                <Swipe onSwipeLeft={this.hideMenu}>
                    <div className={`mobile-menu-list ${this.state.isMenuVisible ? 'active' : ''}`}>
                        <div className="mobile-menu-list-header">
                            <div className="mobile-menu-logo-wrapper"><img
                                src={require('../images/SmartIT_QRSmarty_4.png')} alt="logo"/></div>

                        </div>
                        <ul className="navbar-nav mobile-menu-list-inner">
                            <li className={`nav-item mobile-menu-item  ${(location === '/') ? 'active' : ''}`}>
                                <Link to="/"
                                      onClick={this.hideMenu}
                                      className="nav-link mobile-menu-link">
                                    <div className="list-item-image"><MdHome/></div>
                                    Home</Link>
                            </li>
                            <li className={`nav-item mobile-menu-item ${(location === '/package') ? 'active' : ''}`}>
                                <Link to="/package"
                                      onClick={this.hideMenu}
                                      className="nav-link mobile-menu-link d-flex flex-nowrap align-items-center">
                                    <div className="list-item-image"><MdBusinessCenter/></div>
                                    Package
                                    <img src={require('../images/crown.png')} alt=""/>
                                </Link>
                            </li>
                            <li className={`nav-item mobile-menu-item ${(location === '/features') ? 'active' : ''}`}>
                                <Link to="/features"
                                      onClick={this.hideMenu}
                                      className="nav-link mobile-menu-link">
                                    <div className="list-item-image"><MdStar/></div>
                                    Features</Link>
                            </li>
                            <li className={`nav-item mobile-menu-item ${(location === '/demo') ? 'active' : ''}`}>
                                <Link to="/demo"
                                      onClick={this.hideMenu}
                                      className="nav-link mobile-menu-link">
                                    <div className="list-item-image"><MdTv/></div>
                                    Demo</Link>
                            </li>
                            <li className={`nav-item mobile-menu-item ${(location === '/contact') ? 'active' : ''}`}>
                                <Link to="/contact"
                                      onClick={this.hideMenu}
                                      className="nav-link mobile-menu-link">
                                    <div className="list-item-image"><MdMarkunreadMailbox/></div>
                                    Contact
                                    Us</Link>
                            </li>
                        </ul>
                    </div>
                </Swipe>

            </header>
        );
    }
}

export default NavMain;