import React from 'react'
import styles from './Checkbox.module.css'

export default (props)=>(
    <label className={styles.container}>
        <input 
            type="checkbox" 
            checked={props.completed} 
            onChange={props.changed}
        /> 
        <p>{props.name}</p>
        <span className={styles.checkmark}></span>
    </label>
)