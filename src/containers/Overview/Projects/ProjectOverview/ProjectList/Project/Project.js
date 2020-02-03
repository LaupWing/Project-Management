import React from 'react'
import styles from './Project.module.css'

export default (props)=>{
    const projectEl = React.useRef(null)
    const [heightState, setHeight] = React.useState(null)
    React.useEffect(()=>{
        setHeight(`${projectEl.current.offsetWidth}px`)
        projectEl.current.style.setProperty('--main-color', props.project.color);
    })

    const abbreviation = (name)=>{
        return name.includes(' ') ? name
            .split(' ')
            .map(word=>word[0])
            .join(' ')
            : name[0]
    }
    return(
        <div 
            ref={projectEl} 
            className={styles.ProjectWrapper}
            style={{
                height: heightState
            }}
        >
            <div className={styles.Project}>
                <h1>{abbreviation(props.project.name)}</h1>
            </div>
        </div>
    )
}