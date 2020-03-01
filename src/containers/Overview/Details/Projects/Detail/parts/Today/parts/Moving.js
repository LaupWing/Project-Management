import React, {useState} from 'react'
import styles from './Moving.module.css'

export default props =>{
    const [uncompletedActive, setUncompletedActive] = useState(true)
    const [today, setToday] = useState([])

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
    const future = props.tasks && props.tasks.map(task=>
        <div className={styles.task}>
            <p className={styles.name}>{task.task}</p>
            <div className={styles.options}>
                <p>Move to:</p>
                <button>Today</button>
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
                            <button onClick={()=>setUncompletedActive(false)}>Next</button>
                        </div>
                    </div>
                    <div className={[styles.future, !uncompletedActive ? styles.active : ''].join(' ')}>
                        <h2>Future</h2>
                        <p className={styles.description}>Tasks planned for the future</p>
                        <div className={styles.taskWrapper}>
                            {future}
                        </div>
                        <div className={styles.buttons}>
                            <button onClick={()=>setUncompletedActive(true)}>Back</button>
                        </div>
                    </div>
                </div>
                <div className={styles.today}>
                    <h2>Today</h2>
                    { today.length === 0 
                        ? <p>Not any tasks set for today yet!</p> 
                        : <p>Have tasks</p>
                    }
                </div>
            </div>
        </div>
    )
}