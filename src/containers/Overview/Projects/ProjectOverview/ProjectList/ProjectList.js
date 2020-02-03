import React from 'react'
import styles from './ProjectList.module.css'
import Project from './Project/Project'

export default (props)=>{
    return(
        <section className={styles.ProjectList}>
            <h2>Projects <span>({props.projects.length})</span></h2>

            <main>
                {props.projects && props.projects.map((project,id)=>{
                    return <Project project={project} key={id}/>
                })}
            </main>
        </section>
    )
}