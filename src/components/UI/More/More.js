import React from 'react'
import styles from './More.module.css'

export default props =>(
    <div className={styles.More} onClick={props.clicked}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
    </div>
)