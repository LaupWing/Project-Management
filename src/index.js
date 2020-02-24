import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import user from './store/reducers/user'
import projects from './store/reducers/projects'
import error from './store/reducers/error'
import popup from './store/reducers/popup'
import './initFirebase'
import firebase from 'firebase'
import {BrowserRouter} from 'react-router-dom'
import {watchAuth, watchProjects} from './store/sagas/index'
import createSagaMiddleware from  'redux-saga'

const rootrReducer = combineReducers({
    user,
    projects,
    error,
    popup
})
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootrReducer, applyMiddleware(sagaMiddleware))

let app = null

sagaMiddleware.run(watchAuth)
sagaMiddleware.run(watchProjects)

firebase.auth().onAuthStateChanged(()=>{
    // Initialize app when app is not created yet
    if(!app){
        app = ReactDOM.render(
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>, document.getElementById('root')
        );
    }
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
