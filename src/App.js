import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Auth from './containers/Auth/Auth'
import Overview from './containers/Overview/Overview'
import {connect} from 'react-redux'

class App extends Component {
    render(){
        let routes =(
            <Switch>
                <Route path='/auth' component={Auth}/>
                <Route exact path='/' component={Overview}/>
            </Switch>
        )
        return (
            <div className="App">
                {routes}       
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        user: state.user.user,
        auth: state.user.auth,
    }
}

export default connect(mapStateToProps)(App);
