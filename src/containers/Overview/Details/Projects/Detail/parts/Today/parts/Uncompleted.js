import React from 'react'
import styles from './Uncompleted.module.css'

export default props =>{
    console.log(props)
    const uncompleted = props.tasks && props.tasks.map(task=>
        <div className={styles.task}>
            <p className={styles.name}>{task.task}</p>
            <div className={styles.options}>
                <p>Move to:</p>
                <button>Today</button>
                <button>Future</button>
            </div>
        </div>
    )
    return (
        <div className={styles.Uncompleted}>
            <div className={styles.container}>
                <h2>Uncompleted Tasks</h2>
                <p className={styles.description}>You have some uncompleted tasks! What do you want to do with them.</p>
                <div className={styles.taskWrapper}>
                    {uncompleted}
                </div>
            </div>
        </div>
    )
}