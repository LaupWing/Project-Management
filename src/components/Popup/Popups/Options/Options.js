import React from 'react'
import Option from './Option/Option'
import styles from './Options.module.css'

export default props=>{
    return(
    <React.Fragment>
        <div className={styles.Options} style={{
            top: `${props.popup.positions.top}px`,
            left: `${props.popup.positions.left}px`,
            position: 'fixed'
        }}>
            {props.popup.data && props.popup.data.map((opt,i)=><Option key={i} option={opt}/>)}
        </div>
    </React.Fragment>
)}