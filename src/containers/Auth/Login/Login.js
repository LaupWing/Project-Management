import React from 'react'
import Button from '../../../components/UI/Button/Button'

export default () =>(
    <form>
        <input type="email" placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
        <Button>
            Login
        </Button>
    </form>
)