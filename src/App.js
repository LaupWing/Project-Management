import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import Auth from './containers/Auth/Auth'
import Overview from './containers/Overview/Overview'
import {connect} from 'react-redux'
import * as actions from './store/actions/index'

class App extends Component {
    state={
        sectionHeight: null
    }

    componentDidMount(){
        this.props.setUser(this.props.user)
        const sectionWidth = document.querySelector('section.white-section').offsetWidth
        console.log()
        this.setState({
            sectionHeight: sectionWidth * 1.5
        })
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
                <main>
                    <section className='white-section' style={{
                        height: `${this.state.sectionHeight}px`
                    }}>
                        {routes}
                    </section>
                    <section className='transparent-section' style={{
                        height: `${this.state.sectionHeight}px`
                    }}>

                    </section>
                </main>
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
