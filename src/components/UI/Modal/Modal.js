import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import styles from './Modal.module.css'

export default (props)=>(
    <React.Fragment>
        <Backdrop clicked={props.modalClose} show={props.show}></Backdrop>
        <div 
            className={styles['Modal']}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-70vh)',
                opacity: props.show ? '1' : '0',
                ...props.extraStyles
            }} 
        >
            {props.children}
        </div>
    </React.Fragment>
)