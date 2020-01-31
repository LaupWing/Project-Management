import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import Auth from './containers/Auth/Auth'
import Overview from './containers/Overview/Overview'
import {connect} from 'react-redux'
import * as actions from './store/actions/index'
import classes from './App.module.css'
import Dots from './components/BackgroundEl/Dots/Dots'
import firebase from 'firebase'

class App extends Component {
    state={
        sectionHeight: null,
        bgItems:[
            {
                type: 'Dots',
                styles:{
                    bottom: '2vh',
                    left: '2vw',
                }
            },
            {
                type: 'Dots',
                styles:{
                    top: '2vh',
                    right: '2vw',
                }
            },
        ]
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user=>{
            console.log(user)
            this.props.setUser('user')
        })
        const sectionWidth = document.querySelector('section').offsetWidth
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
        const components ={
            Dots
        }

        const bgItems = this.state.bgItems.map((item,i)=>{
            const BgCmp = components[item.type]
            return (
                <BgCmp key={i} styles={item.styles}></BgCmp>
            )
        })
        return (
            <div className={classes.App}>
                {this.props.user === null ? <Redirect to='/auth'/>:null}
                <main>
                    <section 
                        className={classes['white-section']} 
                        style={{
                            height: `${this.state.sectionHeight}px`,
                            transform: this.props.user ? 'translate(100%,0)' : null
                        }}>
                        {routes}
                    </section>
                    <section className={classes['transparent-section']} style={{
                        height: `${this.state.sectionHeight}px`
                    }}>
                        <h2>Project Management</h2>
                    </section>
                </main>
                {bgItems}
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
