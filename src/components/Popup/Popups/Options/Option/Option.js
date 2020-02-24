import React from 'react'
import styles from './Option.module.css'

export default props =>(
    <li className={styles.Option}>{props.option.text}</li>
)