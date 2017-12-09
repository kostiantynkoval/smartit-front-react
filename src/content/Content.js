import React, { Component } from 'react';
import './Content.css';
import { Route, Switch } from 'react-router';
import Package from '../content_components/package/Package';
import Home from '../content_components/home/Home';
import Features from '../content_components/features/Features';
import Demo from '../content_components/demo/Demo';
import Contact from '../content_components/contact/Contact';
import { CSSTransitionGroup } from "react-transition-group";

class Content extends Component {

    render() {
        return (
            <Route render={({ location }) => (
                <CSSTransitionGroup
                    transitionName="example1"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                    <Switch key={location.key} location={location}>
                        <Route exact path="/" component={ Home }/>
                        <Route path="/package" component={ Package }/>
                        <Route path="/features" component={ Features }/>
                        <Route path="/demo" component={ Demo }/>
                        <Route path="/contact" component={ Contact }/>
                    </Switch>
                </CSSTransitionGroup>
            )}
            />
        )
    }
}

export default Content;