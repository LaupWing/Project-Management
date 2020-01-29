import React from 'react'
import Login from './Login/Login'
import Signup from './Signup/Signup'

class Auth extends React.Component{
    render(){
        return(
            <div>
                <Login/>
                <Signup/>
            </div>
        )
    }
}

export default Auth