import React from 'react'
import Login from './Login/Login'
import Signup from './Signup/Signup'
import classes from './Auth.module.css'
import Button from '../../components/UI/Button/Button'
import CSSTransition from 'react-transition-group/CSSTransition'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index'
import {Redirect} from 'react-router-dom'

class Auth extends React.Component{
    state={
        type: 'login'
    }

    onLogin(email,password){
        this.props.login(email,password)
    }
    onSignup(email,password, confirmPassword){
        if(password!== confirmPassword){
            return this.props.setError({
                type: 'USER ERROR',
                message:'Passwords has to be equal',
                error: null
            })
        }
        this.props.signUp(email,password)
    }
    checkAuthType(name){
        return this.state.type === name ? ['switch-auth', 'active'] : ['switch-auth']
    }
    toggleType(type){
        this.props.setError(null)
        this.setState({
            type
        })
    }
    render(){
        return(
            <div className={classes.Auth}>
                {this.props.user ? <Redirect to='/'/>:null}
                <h1 onClick={()=>console.log(this.props.user)}>Welcome!</h1>
                <nav>
                    <Button 
                        clicked={()=>this.toggleType('login')} 
                        classes={this.checkAuthType('login')}
                    >
                        Login
                    </Button>
                    <Button 
                        clicked={()=>this.toggleType('signup')} 
                        classes={this.checkAuthType('signup')}
                    >
                        Signup
                    </Button>
                </nav>
                <main>
                    <CSSTransition
                        mountOnEnter 
                        unmountOnExit
                        in={this.state.type === 'login' }
                        timeout={1000}
                        classNames={{
                            enterDone: 'done',
                            enter: '',
                            enterActive: classes["left-enter"],
                            exitActive: classes["left-exit"],
                            exit: '',
                        }}
                    >
                        <Login 
                            submitted={this.onLogin.bind(this)}
                        />
                    </CSSTransition>
                    <CSSTransition
                        mountOnEnter 
                        unmountOnExit
                        in={this.state.type !== 'login' }
                        timeout={1000}
                        classNames={{
                            enterDone: 'done',
                            enter: '',
                            enterActive: classes["right-enter"],
                            exitActive: classes["right-exit"],
                            exit: '',
                        }}
                    >
                        <Signup 
                            submitted={this.onSignup.bind(this)}
                        />
                    </CSSTransition>
                </main>
            </div>
        )
    }
}

const mapStateToProps = state=>{
    return{
        user: state.user.user
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        login: (email, password) => dispatch(actions.authLogin(email, password)),
        setError: (error) => dispatch(actions.setError(error)),
        signUp: (email,password) => dispatch(actions.authSignup(email,password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)