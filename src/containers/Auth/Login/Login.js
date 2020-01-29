import React from 'react'
import classes from './Login.module.css'

export default () =>(
    <form>
        <h2>Login</h2>
        <div className={classes.field}>
            <input type="text"></input>
        </div>
        <div className={classes.field}>
            <input type="password"></input>
        </div>
    </form>
)