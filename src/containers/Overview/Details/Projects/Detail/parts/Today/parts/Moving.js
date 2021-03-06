import React, {useState, useEffect} from 'react'
import styles from './Moving.module.css'
import {getFutureTasks, getOutDatedTasks} from '../../../../../../../../utils/taskFilters'
import Delete from '../../../../../../../../components/UI/Delete/Delete'
import Modal from '../../../../../../../../components/UI/Modal/Modal'
import {connect} from 'react-redux'
import * as actions from '../../../../../../../../store/actions/index'
import firebase from 'firebase'

const mapDispatchToProps = (dispatch)=>{
    return {
        updateProject: (id, changes) => dispatch(actions.updateUserProjects(id,changes)),
    }
}

export default connect(null, mapDispatchToProps)(props =>{
    const [uncompletedActive, setUncompletedActive] = useState(true)
    const [init, setInit] = useState(true)
    const [uncompletedList, setUncompletedList] = useState(props.tasks 
        ? getOutDatedTasks(props.tasks) 
        : [])
    const [futureList, setFutureList] = useState(props.tasks ? getFutureTasks(props.tasks):[])
    const [todayList, setToday] = useState([])
    const [warning, setWarning] = useState(false)

    const deleteTask = (task)=>{
        const updatedProject = {...props.project}
        updatedProject.tasks = props.project.tasks.filter(t=>t!==task) 
        const id             = firebase.auth().currentUser.uid

        props.updateProject(id,updatedProject)
    }
    useEffect(()=>{
        if(!init)   return
        setInit(false)
        if(todayList.length>0){
            // eslint-disable-next-line
            const filteredOut = props.tasks.filter(t=>{
                if(!todayList.find(t2=>t2.task === t.task)){
                    return t
                }
            })
            setUncompletedList(getOutDatedTasks(filteredOut))
            setFutureList(getFutureTasks(filteredOut))
            return
        }
        setUncompletedList(getOutDatedTasks(props.tasks))
        setFutureList(getFutureTasks(props.tasks))
    },[props.tasks, todayList, init])

    const uncompletedOutput = uncompletedList.map((task, i)=>
        <div 
            className={styles.task}
            key={i}
        >
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
                <Delete clicked={()=>deleteTask(task)}/>
            </div>
        </div>
    )
    const futureOutput = futureList.map((task, i)=>
        <div className={styles.task} key={i}>
            <p className={styles.name}>{task.task}</p>
            <div className={styles.options}>
                <p>Move to:</p>
                <button onClick={()=>{
                    const filteredOut = futureList.filter(x=>x!==task)
                    setFutureList(filteredOut)
                    setToday([...todayList, task])
                }}>Today</button>
                <Delete clicked={()=>deleteTask(task)}/>
            </div>
        </div>
    )
    
    const todayOutput = todayList.map((task, i)=>
        <div className={styles.todayTask} key={i}>
            <p>{task.task}</p>
            <div className={styles.options}>
                <p>Move to:</p>
                <button onClick={()=>{
                    const todayFiltered = todayList.filter(t=>t!==task)
                    setToday(todayFiltered)
                    setFutureList([...futureList, task])
                }}>Future</button>
                <Delete clicked={()=>{
                    deleteTask(task)
                    setTimeout(() => {
                        setToday(todayList.filter(t=>t!==task))
                    });
                }}/>
            </div>
        </div>
    )
    const done = ()=>{
        if(uncompletedList.length>0){
            setWarning('You still have uncompleted tasks! What do you want to do with them (either move it to the future or just delete)')
            return 
        }
        props.done(todayList)
    }
    return (
        <div className={styles.Moving}>
            <Modal
                show={warning}
                modalClose={()=>setWarning(false)}
                extraStyles={{
                    width: `80%`,
                    color: 'black'
                }}
            >
                {warning ? warning : ''}
            </Modal>
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
                    <button onClick={done} className={styles.done}>IM DONE</button>
                </div>
            </div>
        </div>
    )
})