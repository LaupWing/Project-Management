import React from 'react'
import styles from './Checkbox.module.css'

export default ()=>(
    <label className={styles.container}>
        <input type="checkbox"/>
        <span className={styles.checkmark}></span>
    </label>
)