import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import './index.less';
import App from './App';
import store from './store';
import { Provider } from "react-redux"



ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <Route component={App}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);



