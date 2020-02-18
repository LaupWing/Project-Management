import React from 'react'
import styles from './AddProject.module.css'

export default props =>{
    return(
        <div className={styles.AddProject}>
            <input className={styles.title} type="text" placeholder="Your new Project Title"></input>
        </div>
    )
}