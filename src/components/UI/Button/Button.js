import React from 'react'
import classes from './Button.module.css' 

export default (props)=>(
    <button className={`${classes.Button} ${classes[props.classes]}`}>
        {props.children}
    </button>
)