import React from 'react'
import Login from './Login/Login'
import Signup from './Signup/Signup'
import classes from './Auth.module.css'
import Button from '../../components/UI/Button/Button'

class Auth extends React.Component{
    render(){
        return(
            <div className={classes.Auth}>
                <nav>
                    <Button classes={'switch-auth'}>
                        Login
                    </Button>
                </nav>
                <Login/>
                <Signup/>
            </div>
        )
    }
}

export default Auth