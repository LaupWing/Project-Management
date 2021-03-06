import React from 'react'
import styles from './Backdrop.module.css'

export default (props)=>(
    props.show
        ? <div 
            className={[styles['Backdrop'], 
                props.backdropStyle
                ? styles[props.backdropStyle]
                : ''
            ].join(' ')} onClick={props.clicked}>
    </div>:null
)