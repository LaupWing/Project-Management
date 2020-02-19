import React from 'react'
import styles from './AddProject.module.css'
import Button from '../UI/Button/Button'
export default props =>{
    return(
        <form className={styles.AddProject}>
            <input className={styles.title} type="text" placeholder="Your new Project Title"></input>
            <textarea placeholder="description"></textarea>
            <div className={styles.fieldColor}>
                <div className={styles.colorPreview}>
                    <p>Icon Preview</p>
                </div>
                <input type="text" placeholder="Color"></input>
            </div>
            <Button>Create</Button>
        </form>
    )
}