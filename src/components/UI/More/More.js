import React from 'react'
import styles from './More.module.css'

export default props =>(
    <div className={[styles.More, styles[props.active]].join(' ')} onClick={props.clicked.bind(this)}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
    </div>
)