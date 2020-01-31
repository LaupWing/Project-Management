import React from 'react'
import Button from '../../../components/UI/Button/Button'
import {connect} from 'react-redux'

const mapStateToProps = state=>{
    return{
        error: state.user.error
    }
}

export default connect(mapStateToProps)((props) =>{
    const [emailState, setEmailState] = React.useState('')
    const [passwordState, setPasswordState] = React.useState('')
    const [passwordConfirmState, setPasswordConfirmState] = React.useState('')

    return (
    <form
        onSubmit={(e)=>{
            e.preventDefault()
            props.submitted(emailState, passwordState, passwordConfirmState)
        }}
    >
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
            placeholder="Type Password"
            value={passwordState}
            onChange={event=>{
                const passwordEmail = event.target.value
                setPasswordState(passwordEmail)
            }}
        ></input>
        <input 
            type="password" 
            placeholder="Re-Type Password"
            value={passwordConfirmState}
            onChange={event=>{
                const passwordConfirmEmail = event.target.value
                setPasswordConfirmState(passwordConfirmEmail)
            }}
        ></input>
        {props.error 
        ? <p className='warning'>{props.error}</p>
        : null}
        <Button>Signup</Button>
    </form>)
})