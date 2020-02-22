import React, {useEffect, useState} from 'react'
import styles from './Detail.module.css'
import More from '../../../../../components/UI/More/More'
import Checkbox from '../../../../../components/UI/Checkbox/Checkbox'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

const mapStateToProps = (state)=>{
    return {
        projects: state.projects.projects
    }
}

export default connect(mapStateToProps)(props =>{
    const [project, setProject] = useState(null)
    
    useEffect(()=>{
        const findProject = props.projects.find(p=>p.name===props.match.params.id)
        setProject(findProject)
        console.log(props)
    },[props.match.params.id])

    const getTodayTasks = ()=>{
        const date = new Date()
        const day = date.getDate()
        const month = date.getMonth()
        const year = date.getFullYear()
        const filterOut = project.tasks.filter(task=>{
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
        <div className={styles.Detail}>
            <nav>
                <NavLink to="/projects">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 26">
                        <g>
                            <polygon points="46 6.73 22.93 6.73 22.93 0 0 13 22.93 26 22.93 19.27 46 19.27 46 6.73"/>
                        </g>
                    </svg>
                </NavLink>
                <li className={styles.active}>
                    <NavLink exact to={`/projects/${props.match.params.id}`}>
                        Today
                    </NavLink>
                </li>
                <li>Progression</li>
                <li>Skills</li>
                <li>Settings</li>
            </nav>
            {project 
                ?   <div className={styles.content}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <div className={styles.today}>
                            <div className={styles.info}>
                                <h3>Today</h3>
                                <More/>
                            </div>
                            {tasks()}
                        </div>
                    </div>
                :   null}
        </div>
    )
})