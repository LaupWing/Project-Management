import React from 'react'
import styles from './Today.module.css'
import More from '../../../../../../../components/UI/More/More'
import Checkbox from '../../../../../../../components/UI/Checkbox/Checkbox'
import Delete from '../../../../../../../components/UI/Delete/Delete'
import Edit from '../../../../../../../components/UI/Edit/Edit'
import {connect} from 'react-redux'
import * as actions from '../../../../../../../store/actions/index'

const mapDispatchToProps = dispatch =>{
    return {
        setPopup: (popup) => dispatch(actions.setPopup(popup)) 
    }
}

export default connect(null, mapDispatchToProps)(props =>{

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

    const test = ()=>console.log('it works!')

    const openPopup = (e)=>{
        const positions = e.currentTarget.getBoundingClientRect()
        props.setPopup({
            type: 'Options',
            data:[
                {
                    text: 'Add new task',
                    clicked: test
                },
                {
                    text: 'Check all tasks',
                    clicked: test
                },
                {
                    text: 'Uncheck all tasks',
                    clicked: test
                }
            ],
            positions,
            backdropStyle: 'transparent'
        })
    }

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
                        <More clicked={openPopup}/>
                    </div>
                </div>
                {tasks}
            </div>
        </React.Fragment>
    )
})