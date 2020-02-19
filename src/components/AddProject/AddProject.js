import React from 'react'
import styles from './AddProject.module.css'

export default props =>{
    return(
        <div className={styles.AddProject}>
            <input className={styles.title} type="text" placeholder="Your new Project Title"></input>
            <textarea placeholder="description"></textarea>
            <div className={styles.fieldColor}>
                <div className={styles.colorPreview}></div>
                <input type="text"></input>
            </div>
        </div>
    )
}