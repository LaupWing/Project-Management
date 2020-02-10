import React from 'react'
import styles from './ProjectList.module.css'
import Project from './Project/Project'
import ShowMore from './Project/ShowMore'

export default (props)=>{
    return(
        <section className={styles.ProjectList}>
            <h2>Projects <span>({props.projects.length})</span></h2>

            <main>
                {props.projects && props.projects.slice(0,props.limit).map((project,id)=>{
                    return <Project project={project} key={id}/>
                })}
                <ShowMore
                    totalLength={props.projects.length}
                    limit={props.limit}
                    color='var(--lighter-base-color)'
                />
            </main>
        </section>
    )
}