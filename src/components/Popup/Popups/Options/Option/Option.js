import React from 'react'
import styles from './Option.module.css'

export default props =>(
    <li onClick={props.option.clicked} className={styles.Option}>{props.option.text}</li>
)