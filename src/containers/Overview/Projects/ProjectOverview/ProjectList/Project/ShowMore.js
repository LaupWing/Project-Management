import React from 'react'
import styles from './Project.module.css'

export default (props)=>{
    const [bgState, setBgState] = React.useState(null)
    const [heightState, setHeight] = React.useState(null)
    const projectEl = React.useRef(null)

    React.useEffect(()=>{
        setHeight(`${projectEl.current.offsetWidth}px`)
        setBgState(props.color)
    },[props.color])

    const calcLeft = ()=>{
        if(props.totalLength-props.limit >= 5){
            return 5
        }else{
            return props.totalLength-props.limit
        }
    }
    return(
        <div className={styles.container}>
            <div 
                ref={projectEl} 
                className={styles.ProjectWrapper}
                style={{
                    height: heightState,
                }}
            >
                <div 
                    className={styles.Project}
                    style={{
                        backgroundColor: bgState
                    }}
                >
                    <h1>{calcLeft()} +</h1>
                </div>
            </div>
        </div>
    )
}