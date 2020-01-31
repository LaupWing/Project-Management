import React from 'react'
import Button from '../../../components/UI/Button/Button'
import {connect} from 'react-redux'

const mapStateToProps = state =>{
    return{
        error: state.user.error
    }
}

export default connect(mapStateToProps)((props) =>{
    const [emailState, setEmailState] = React.useState('')
    const [passwordState, setPasswordState] = React.useState('')
    
    return (
        <form 
            onSubmit={(e)=>{
                e.preventDefault()
                props.submitted(emailState, passwordState)
            }}>
            <input 
                type="email" 
                placeholder="Email"
                value={emailState}
                onChange={event=>{
                    const newEmail = event.target.value
                    setEmailState(newEmail)
                }}
            ></input>
            <input 
                type="password" 
                placeholder="Password"
                value={passwordState}
                onChange={event=>{
                    const newPassword = event.target.value
                    setPasswordState(newPassword)
                }}
            ></input>
            {props.error 
            ? <p className='warning'>{props.error}</p>
            : null}
            <Button>
                Login
            </Button>
        </form>
    )
})