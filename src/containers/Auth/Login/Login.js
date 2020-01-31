import React from 'react'
import Button from '../../../components/UI/Button/Button'

export default (props) =>{
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
            <Button>
                Login
            </Button>
        </form>
    )
}