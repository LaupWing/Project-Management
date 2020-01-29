import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import user from './store/reducers/user'
import projects from './store/reducers/projects'

const rootrReducer = combineReducers(user,projects)

ReactDOM.render(
    <Provider store={rootrReducer}>
        <App />
    </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
