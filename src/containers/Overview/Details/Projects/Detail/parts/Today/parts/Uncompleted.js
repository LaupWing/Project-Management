import React from 'react'
import styles from './Uncompleted.module.css'

export default props =>{
    return (
        <div className={styles.Uncompleted}>
            <div className={styles.container}>
                <h2>Uncompleted Tasks</h2>
                <p>You have some uncompleted tasks! What do you want to do with them.</p>
            </div>
        </div>
    )
}