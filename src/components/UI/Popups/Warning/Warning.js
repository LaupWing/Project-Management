import React from 'react'
import styles from './Warning.module.css'

export default props =>{
    return (
        <div className={styles.Warning}>
            <p>{props.message}</p>
            {props.buttons && props.buttons.map(btn=>{
                return <button className={styles[btn.type]}>{btn.text}</button>
            })}
        </div>
    )
}