import React from 'react'
import styles from './ProjectList.module.css'
import Project from './Project/Project'


export default (props)=>{
    const sectionEl = React.useRef(null)
    React.useEffect(()=>{

        console.log(sectionEl)

    },[])
    const threshold = ()=>{}
    return(
        <section ref={sectionEl} className={styles.ProjectList}>
            <h2>Projects <span>({props.projects.length})</span></h2>

            <main>
                {props.projects && props.projects.map((project,id)=>{
                    return <Project project={project} key={id}/>
                })}
            </main>
        </section>
    )
}