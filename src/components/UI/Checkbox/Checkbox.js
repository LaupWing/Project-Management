import React from 'react'
import styles from './Checkbox.module.css'

export default (props)=>(
    <label className={styles.container}>
        <input type="checkbox" checked={props.completed} onChange={e=>{
            console.log(e.currentTarget.checked)
            e.currentTarget.checked = !e.currentTarget.checked
        }}/> 
        <p>{props.name}</p>
        <span className={styles.checkmark}></span>
    </label>
)