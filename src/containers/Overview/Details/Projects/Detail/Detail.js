import React from 'react'
import styles from './Detail.module.css'
import More from '../../../../../components/UI/More/More'

export default props =>{
    const getTodayTasks = ()=>{
        const date = new Date()
        const day = date.getDate()
        const month = date.getMonth()
        const year = date.getFullYear()
        
        const filterOut = props.project.tasks.filter(task=>{
            const taskDate = new Date(task.date)
            const taskDay = taskDate.getDate()
            const taskMonth = taskDate.getMonth()
            const taskyear = taskDate.getFullYear()
            
            if(
                taskDay === day &&
                taskMonth === month &&
                taskyear === year
            ){
                return task
            }
        })
        console.log(filterOut)
    }
    getTodayTasks()
    return(
        <div className={styles.Detail}>
            <nav>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 26">
                    <g>
                        <polygon points="46 6.73 22.93 6.73 22.93 0 0 13 22.93 26 22.93 19.27 46 19.27 46 6.73"/>
                    </g>
                </svg>
                <li className={styles.active}>Today</li>
                <li>Progression</li>
                <li>Skills</li>
                <li>Settings</li>
            </nav>
            <div className={styles.content}>
                <h2>{props.project.name}</h2>
                <p>{props.project.description}</p>
                <div className={styles.today}>
                    <div className={styles.info}>
                        <h3>Today</h3>
                        <More/>
                    </div>
                </div>
            </div>
        </div>
    )
}