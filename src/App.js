import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import Auth from './containers/Auth/Auth'
import Overview from './containers/Overview/Overview'
import {connect} from 'react-redux'
import * as actions from './store/actions/index'

class App extends Component {

    componentDidMount(){
        this.props.setUser(this.props.user)
    }

    render(){
        let routes =(
            <Switch>
                <Route path='/auth' component={Auth}/>
                <Route path='/auth' component={Overview}/>
                <Route exact path='/' component={Overview}/>
            </Switch>
        )
        return (
            <div className="App">
                {this.props.user === null ? <Redirect to='/auth'/>:null}
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

const mapDispatchToProps = dispatch =>{
    return {
        setUser: () => dispatch(actions.setUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
