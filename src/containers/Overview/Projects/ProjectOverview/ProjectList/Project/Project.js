import React from 'react'
import styles from './Project.module.css'
import Color from 'color'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

const mapStateToProps = state =>{
    return{
        active: state.projects.activeProject
    }
}

export default connect(mapStateToProps)((props)=>{
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
    const bgDeco = (name)=>{
        const letters = name
        .split(' ')
        .map(word=>word[0])
        
        return letters.map((ltr,i)=>{
            const leftOrRight = Math.random() <0.5 ? 'left' : 'right'
            const randomNumber = ()=> Math.floor(Math.random() * 30) + 10 
            const minusOrNot = Math.random() <0.5 ? '-' : ''
            const translate  = `translate(${leftOrRight === 'left'?'-':''}${randomNumber()}%, ${minusOrNot + randomNumber()}%)`

            return(<p 
                className={styles.backgroundLetter}
                style={{
                    [leftOrRight]:0,
                    transform: translate
                }}
                key={i}
            >
                {ltr}
            </p>)
        })
    }
    return(
        <div className={`${styles.container} ${props.active === props.project ? styles.active : ''}`}>
            <NavLink 
                to={`/projects/${props.project.name}`}
                activeClassName={styles.active}
            >
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
                            <div className={styles.bgContainer}>
                                {bgDeco(props.project.name)}
                            </div>
                            <h1>{abbreviation(props.project.name)}</h1>
                        </div>
                </div>
            </NavLink>
            <p>{props.project.name}</p>
        </div>
    )
})