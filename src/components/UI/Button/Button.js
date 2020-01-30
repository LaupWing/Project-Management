import React from 'react'
import styles from './Button.module.css' 

export default (props)=>{
    const mapClasses = props.classes.map(className=>`${styles[className]}`).join(' ')
    return(
        <button 
            className={`${styles.Button} ${mapClasses}`}
            onClick={props.clicked}
        >
            {props.children}
        </button>
    )
}