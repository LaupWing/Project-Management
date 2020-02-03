import React from 'react'
import styles from './Project.module.css'

export default (props)=>{
    return(
        <div className={styles.Project}>
            {props.project.name}
        </div>
    )
}