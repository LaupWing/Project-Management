import React from 'react'
import styles from './Header.module.css'

export default (props)=>{
    return (
        <header className={styles.Header}>
            <h1>Hi {props.name}</h1>
            <p>Welcome back to your projects overview!</p>
            <form>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197 196">
                    <path d="M179.07,192c-3.13-.82-5.4-2.87-7.62-5.11q-16.65-16.75-33.4-33.44a13.1,13.1,0,0,1-1.13-1.48c-20.49,14.7-42.82,19.88-67.21,14.59A79.26,79.26,0,0,1,21.5,135.25,82.06,82.06,0,1,1,158,44.49a81.95,81.95,0,0,1,9,62.3,83.1,83.1,0,0,1-14.07,29.1,17.33,17.33,0,0,1,1.67,1.29c11,11,22,22,33.07,33,2.31,2.3,4.44,4.66,5.36,7.88v4.4a41.94,41.94,0,0,1-2.07,4.39c-1.7,2.79-4.49,4.12-7.46,5.14ZM87.46,27.82a58.64,58.64,0,1,0,58.63,58.59A58.65,58.65,0,0,0,87.46,27.82Z"/>
                </svg>
                <input type="text" placeholder="Search Task or Project..."></input>
            </form>
        </header>
    )
}