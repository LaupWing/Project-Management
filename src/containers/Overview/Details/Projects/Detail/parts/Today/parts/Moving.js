import React, {useState} from 'react'
import styles from './Moving.module.css'

export default props =>{
    const [uncompletedActive, setUncompletedActive] = useState(true)
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
        <div className={styles.Moving}>
            <div className={styles.container}>
                <div className={styles.choices}>
                    <div className={[styles.uncompleted, uncompletedActive ? styles.active : ''].join(' ')}>
                        <h2>Uncompleted Tasks</h2>
                        <p className={styles.description}>You have some uncompleted tasks! What do you want to do with them.</p>
                        <div className={styles.taskWrapper}>
                            {uncompleted}
                        </div>
                        <div className={styles.buttons}>
                            <button>Next</button>
                        </div>
                    </div>
                    {/* <div className={styles.future}>
                        <h2>Future</h2>
                        <p className={styles.description}>Tasks planned for the future</p>
                        <div className={styles.taskWrapper}>
                            {uncompleted}
                        </div>
                    </div> */}
                </div>
                <div className={styles.today}>
                    <h2>Today</h2>
                </div>
            </div>
        </div>
    )
}