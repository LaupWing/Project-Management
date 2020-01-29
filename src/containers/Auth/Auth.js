import React from 'react'
import Login from './Login/Login'
import Signup from './Signup/Signup'
import classes from './Auth.module.css'

class Auth extends React.Component{
    render(){
        return(
            <div className={classes.Auth}>
                <Login/>
                <Signup/>
            </div>
        )
    }
}

export default Auth