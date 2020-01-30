import React from 'react'
import Login from './Login/Login'
import Signup from './Signup/Signup'
import classes from './Auth.module.css'
import Button from '../../components/UI/Button/Button'
import CSSTransition from 'react-transition-group/CSSTransition'

class Auth extends React.Component{
    state={
        type: 'login'
    }
    checkAuthType(name){
        return this.state.type === name ? ['switch-auth', 'active'] : ['switch-auth']
    }
    toggleType(){

        this.setState({
            type: this.state.type === 'login' ? 'signup' : 'login'
        })
    }
    render(){
        return(
            <div className={classes.Auth}>
                <nav>
                    <Button 
                        clicked={this.toggleType.bind(this)} 
                        classes={this.checkAuthType('login')}
                    >
                        Login
                    </Button>
                    <Button 
                        clicked={this.toggleType.bind(this)} 
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
                        <Login/>
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
                        <Signup/>
                    </CSSTransition>
                </main>
            </div>
        )
    }
}

export default Auth