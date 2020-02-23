import React from 'react'
import styles from './Today.module.css'
import More from '../../../../../../../components/UI/More/More'
import Checkbox from '../../../../../../../components/UI/Checkbox/Checkbox'
export default props =>{
    React.useEffect(()=>console.log(props))
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
        return filterOut
    }

    const tasks = ()=> getTodayTasks().map((task,i)=>{
        return (
            <div className={styles.task} key={i}><Checkbox name={task.task}/></div>
        )
    })
    return(
        <React.Fragment>
            {/* <h2>{props.project.name}</h2>
            <p>{props.project.description}</p>
            <div className={styles.today}>
                <div className={styles.info}>
                    <h3>Today</h3>
                    <More/>
                </div>
                {tasks()}
            </div> */}
        </React.Fragment>
    )
}