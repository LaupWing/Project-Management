import React, {useState} from 'react'
import styles from './Moving.module.css'
import {getFutureTasks, getOutDatedTasks} from '../../../../../../../../utils/taskFilters'
import Delete from '../../../../../../../../components/UI/Delete/Delete'
import DatePicker from '../../../../../../../../components/UI/DatePicker/DatePicker'

export default props =>{
    const [uncompletedActive, setUncompletedActive] = useState(true)
    const [uncompletedList, setUncompletedList] = useState(props.tasks ? getOutDatedTasks(props.tasks) : [])
    const [futureList, setFutureList] = useState(props.tasks ? getFutureTasks(props.tasks):[])
    const [todayList, setToday] = useState([])

    const uncompletedOutput = uncompletedList.map(task=>
        <div className={styles.task}>
            <p className={styles.name}>{task.task}</p>
            <div className={styles.options}>
                <p>Move to:</p>
                <button onClick={()=>{
                    const filteredOut = uncompletedList.filter(x=>x!==task)
                    setUncompletedList(filteredOut)
                    setToday([...todayList, task])
                }}>Today</button>
                <button onClick={()=>{
                    const filteredOut = uncompletedList.filter(x=>x!==task)
                    setUncompletedList(filteredOut)
                    setFutureList([...futureList, task])
                }}>Future</button>
                <Delete/>
            </div>
        </div>
    )
    const futureOutput = futureList.map(task=>
        <div className={styles.task}>
            <p className={styles.name}>{task.task}</p>
            <div className={styles.options}>
                <p>Move to:</p>
                <button onClick={()=>{
                    const filteredOut = futureList.filter(x=>x!==task)
                    setFutureList(filteredOut)
                    setToday([...todayList, task])
                }}>Today</button>
                <Delete/>
            </div>
        </div>
    )
    const todayOutput = todayList.map(task=>
        <div className={styles.todayTask}>
            <p>{task.task}</p>
            <div className={styles.options}>
                <p>Move to:</p>
                <button>Today</button>
                <Delete/>
            </div>
        </div>
    )
    return (
        <div className={styles.Moving}>
            <div className={styles.container}>
                <div className={styles.choices}>
                    <div className={[styles.uncompleted, uncompletedActive ? styles.active : ''].join(' ')}>
                        <h2>Uncompleted Tasks</h2>
                        <p className={styles.description}>You have some outdated uncompleted tasks! What do you want to do with them.</p>
                        <div className={styles.taskWrapper}>
                            {uncompletedOutput}
                        </div>
                        <div className={styles.buttons}>
                            <button onClick={()=>setUncompletedActive(false)}>Next</button>
                        </div>
                    </div>
                    <div className={[styles.future, !uncompletedActive ? styles.active : ''].join(' ')}>
                        <h2>Future</h2>
                        <p className={styles.description}>Tasks planned for the future</p>
                        <div className={styles.taskWrapper}>
                            {futureOutput}
                        </div>
                        <div className={styles.buttons}>
                            <button onClick={()=>setUncompletedActive(true)}>Back</button>
                        </div>
                    </div>
                </div>
                <div className={styles.today}>
                    <h2>Today</h2>
                    { todayList.length === 0 
                        ? <p>Not any tasks set for today yet!</p> 
                        : todayOutput
                    }
                    <button className={styles.done}>IM DONE</button>
                </div>
            </div>
        </div>
    )
}