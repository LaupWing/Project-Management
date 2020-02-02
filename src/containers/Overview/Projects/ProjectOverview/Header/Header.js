import React from 'react'
import styles from './Header.module.css'

export default (props)=>{
    return (
        <header className={styles.Header}>
            <h1>Hi {props.name}</h1>
            <p>Welcome back to your projects overview!</p>
            <form>
                <input type="text" placeholder="Search Task or Project..."></input>
            </form>
        </header>
    )
}