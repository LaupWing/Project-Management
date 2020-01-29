import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Auth from './containers/Auth/Auth'
import Overview from './containers/Overview/Overview'

class App extends Component {
    render(){
        let routes =(
            <Switch>
                <Route path='/auth' component={Auth}/>
                <Route path='/' component={Overview}/>
            </Switch>
        )
        return (
            <div className="App">
                {routes}       
            </div>
        )
    }
}

export default App;
