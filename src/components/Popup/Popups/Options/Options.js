import React from 'react'
import Option from './Option/Option'
import styles from './Options.module.css'

export default props=>(
    <React.Fragment>
        <div className={styles.Options}>
            {props.options && props.options.map(opt=><Option option={opt}/>)}
        </div>
    </React.Fragment>
)