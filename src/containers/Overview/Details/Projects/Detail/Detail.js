import React, {useEffect, useState} from 'react'
import styles from './Detail.module.css'
import {connect} from 'react-redux'
import {NavLink,Switch,Route} from 'react-router-dom'

import Today from './parts/Today/Today'
import Progression from './parts/Progression'
import Settings from './parts/Settings'
import Skills from './parts/Skills'

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
    },[props.match.params.id, props.projects])
        
    return(
        <div className={styles.Detail}>
            <nav>
                <NavLink 
                    to="/projects"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 26">
                        <g>
                            <polygon points="46 6.73 22.93 6.73 22.93 0 0 13 22.93 26 22.93 19.27 46 19.27 46 6.73"/>
                        </g>
                    </svg>
                </NavLink>
                <NavLink 
                    className={styles.link}
                    exact to={`/projects/${props.match.params.id}`}
                    activeClassName={styles.active}
                >
                    <li>
                            Today
                    </li>
                </NavLink>

                <NavLink
                    className={styles.link} 
                    exact 
                    to={`/projects/${props.match.params.id}/progression`}
                    activeClassName={styles.active}
                >
                    <li>
                        Progression
                    </li>
                </NavLink>
                <NavLink 
                    className={styles.link}
                    exact 
                    to={`/projects/${props.match.params.id}/skills`}
                    activeClassName={styles.active}
                >
                    <li>
                            Skills
                    </li>
                </NavLink>
                <NavLink 
                    className={styles.link}
                    exact 
                    to={`/projects/${props.match.params.id}/settings`}
                    activeClassName={styles.active}    
                >
                    <li>
                            Settings
                    </li>
                </NavLink>
            </nav>
            {project 
                ?   <div className={styles.content}>
                        <Switch>
                            <Route 
                                exact
                                path="/projects/:id" 
                                render={(props)=><Today project={project} {...props}/>}
                            />
                            <Route path="/projects/:id/progression" component={Progression}/>
                            <Route path="/projects/:id/skills" component={Skills}/>
                            <Route path="/projects/:id/settings" component={Settings}/>
                        </Switch>

                    </div>
                :   null}
        </div>
    )
})