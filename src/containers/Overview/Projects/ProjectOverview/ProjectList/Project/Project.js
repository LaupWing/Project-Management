import React from 'react'
import styles from './Project.module.css'
import Color from 'color'
import {connect} from 'react-redux'
import * as actions from '../../../../../../store/actions/index'

const mapDispatchToProps = dispatch =>{
    return{
        setActiveProject: (project) => dispatch(actions.setActiveProject(project))
    }
}
const mapStateToProps = state =>{
    return{
        active: state.projects.activeProject
    }
}

export default connect(mapStateToProps, mapDispatchToProps)((props)=>{
    const projectEl = React.useRef(null)
    const [bgState, setBgState] = React.useState(null)
    const [heightState, setHeight] = React.useState(null)
    const [bgGradientState, setBgGradientState] = React.useState(null)

    React.useEffect(()=>{
        setHeight(`${projectEl.current.offsetWidth}px`)
        projectEl.current.style.setProperty('--main-color', props.project.color)
        createBG(props.project.color)
    },[props.project.color])

    const createBG = (hex) =>{
        const color = Color(hex)
        const randomGrade = Math.floor(Math.random() * 360) + 1
        setBgState(color.hex())
        setBgGradientState(`linear-gradient(${randomGrade}deg, ${color.hsl().hex()} 0%, ${color.hsl().rotate(-30).hex()} 100%)`)
    }

    const abbreviation = (name)=>{
        return name.includes(' ') ? name
            .split(' ')
            .map(word=>word[0])
            .join(' ')
            : name[0]
    }
    const setProject = ()=>{
        props.setActiveProject(props.project)
    }
    return(
        <div className={`${styles.container} ${props.active === props.project ? styles.active : ''}`} onClick={setProject}>
            <div 
                ref={projectEl} 
                className={`${styles.ProjectWrapper}`}
                style={{
                    height: heightState,
                }}
            >
                <div 
                    className={styles.Project}
                    style={{
                        backgroundColor: bgState,
                        background: bgGradientState
                    }}
                >
                    <h1>{abbreviation(props.project.name)}</h1>
                </div>
            </div>
            <p>{props.project.name}</p>
        </div>
    )
})