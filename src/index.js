import 'tether/dist/css/tether.min.css';
import 'tether/dist/js/tether.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
