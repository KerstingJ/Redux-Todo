import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './App';

// TODO: this needs to take in a reducer
const store = createStore(()=>{{}});

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    
    ), document.getElementById('root'));