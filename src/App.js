import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import Auth from './containers/Auth/Auth'
import Overview from './containers/Overview/Overview'
import ProjectDetails from './containers/Overview/Details/Projects/Project'
import Projects from './containers/Overview/Projects/Projects'
import {connect} from 'react-redux'
import * as actions from './store/actions/index'
import classes from './App.module.css'
import Dots from './components/BackgroundEl/Dots/Dots'
import firebase from 'firebase'
import Modal from './components/UI/Modal/Modal'
import AddProject from './components/AddProject/AddProject'

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
            this.props.setUser(user)
            if(user){
                this.props.onUserDataFetch(user.uid)
                // this.props.onUserProjectsFetch(user.uid)
            }
        })
        const sectionWidth = document.querySelector('section').offsetWidth
        this.setState({
            sectionHeight: sectionWidth * 1.5
        })
    }

    render(){
        const routesWhite =(
            <Switch>
                <Route path='/auth' component={Auth}/>
                <Route path='/auth' component={Overview}/>
                <Route exact path='/' component={ProjectDetails}/>
            </Switch>
        )
        const routesTransparent = (
            <Switch>
                <Route exact path='/' component={Projects}/>
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
                            transform: this.props.user 
                                ? 'translate(100%,0)' 
                                : null
                        }}>
                        {routesWhite}
                    </section>
                    <section 
                        className={classes['transparent-section']} 
                        style={{
                            height: `${this.state.sectionHeight}px`,
                            transform: this.props.user 
                                ? 'translate(-100%,0)' 
                                : null
                    }}>
                        {routesTransparent}
                    </section>
                </main>
                <Modal
                    show={this.props.showModal}
                    modalClose={this.props.turnOffModal}
                >
                    {this.props.showModal ? <AddProject/> : ''}
                </Modal>
                {bgItems}
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        user:      state.user.user,
        auth:      state.user.auth,
        showModal: state.projects.addModal
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        setUser: (user) => dispatch(actions.setUser(user)),
        onUserDataFetch: (id) => dispatch(actions.fetchUserData(id)),
        onUserProjectsFetch: (id) => dispatch(actions.fetchUserProjects(id)),
        turnOffModal: () => dispatch(actions.openAddProjectModal(false))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
