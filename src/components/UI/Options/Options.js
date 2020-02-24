import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import Option from './Option/Option'
import styles from './Options.module.css'

export default props=>(
    <React.Fragment>
        <Backdrop clicked={props.optionsClose} show={props.show}/>
        <div className={styles.Options}>
            {props.options && props.options.map(opt=><Option option={opt}/>)}
        </div>
    </React.Fragment>
)