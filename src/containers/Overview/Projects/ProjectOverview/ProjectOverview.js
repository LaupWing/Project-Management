import React from 'react'
import Header from './Header/Header'
import styles from './ProjectOverview.module.css'

export default (props)=>{
    return (
        <div className={styles.ProjectOverview}>
            <Header name={props.userData.displayName}/>
        </div>
    )
}