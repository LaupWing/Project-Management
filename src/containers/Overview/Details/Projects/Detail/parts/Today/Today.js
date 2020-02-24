import React from 'react'
import styles from './Today.module.css'
import More from '../../../../../../../components/UI/More/More'
import Checkbox from '../../../../../../../components/UI/Checkbox/Checkbox'
import Delete from '../../../../../../../components/UI/Delete/Delete'
import Edit from '../../../../../../../components/UI/Edit/Edit'

export default props =>{
    // const [options] = useState([
    //     {
    //         text: 'Add new task'
    //     },
    //     {
    //         text: 'Check all tasks'
    //     },
    //     {
    //         text: 'Uncheck all tasks'
    //     }
    // ])

    // const [showOptions, setShowOptions] = useState(true)

    const getTodayTasks = ()=>{
        const date = new Date()
        const day = date.getDate()
        const month = date.getMonth()
        const year = date.getFullYear()
        // eslint-disable-next-line
        const filterOut =  props.project.tasks.filter(task=>{
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

    const test = ()=>console.log('test')
    const tasks = getTodayTasks().map((task,i)=>{
        return (
            <div className={styles.task} key={i}>
                <Checkbox name={task.task}/>
                <Delete/>
                <Edit/>
            </div>
        )
    })
    return(
        <React.Fragment>
            <div className={styles.today}>
                <div className={styles.info}>
                    <h3>Today</h3>
                    <div className={styles.moreContainer}>
                        <More clicked={test}/>
                    </div>
                </div>
                {tasks}
            </div>
        </React.Fragment>
    )
}