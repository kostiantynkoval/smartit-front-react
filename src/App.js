import React, { Component } from 'react';
import NavMain from './top-navigation/NavMain';
import Content from './content/Content';
import Login from "./content_components/auth_components/Login";
import ForgotPassword from "./content_components/auth_components/ForgotPassword";
import { Router, Route, Switch } from 'react-router-dom';
import history from './content_components/shared/history';
import Throttle from 'throttle-debounce/throttle';
import './App.css';

const pushedRoutes = [
    '/',
    '/package',
    '/features',
    '/demo',
    '/contact'
];

class App extends Component {

    componentDidMount() {
        window.addEventListener('mousewheel', Throttle(200, false, this.handleWheel, false));
    }

    handleWheel(e) {
        e.preventDefault();
        let path = history.location.pathname;
        let index = pushedRoutes.indexOf(path);
        if (index !== -1) {
            if (e.deltaY>0) {
                let newIndex = (index===pushedRoutes.length-1)?0:index+1;
                history.push(pushedRoutes[newIndex]);

            } else {
                let newIndex = (index===0)?pushedRoutes.length-1:index-1;
                history.push(pushedRoutes[newIndex]);

            }
        }
    }

  render() {
    return (
      <div className="background-container d-flex flex-column flex-nowrap">
        <Router history={history}>
            <Switch>
                  <Route path="/login" render={ props => <Login/> }/>
                  <Route path="/forgot_password" render={ props => <ForgotPassword/> }/>
                  <Route path="/" render={ (props) => (
                      <div>
                          <NavMain {...props}/>
                          <Content {...props}/>
                      </div>
                  ) }/>
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
