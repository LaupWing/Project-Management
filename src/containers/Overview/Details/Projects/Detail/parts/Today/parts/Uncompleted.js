import React from 'react'
import styles from './Uncompleted.module.css'

export default props =>{
    return (
        <div className={styles.Uncompleted}>
            <div className={styles.container}>
                <h2>Uncompleted Tasks</h2>
            </div>
        </div>
    )
}