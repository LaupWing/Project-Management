import React from 'react'
import Header from './Header/Header'
import styles from './ProjectOverview.module.css'
import Color from 'color'

const color = Color('#08E8DE')
console.log(color.hsl().hex())
console.log(color.hsl().rotate(-25).hex())
console.log(color.hsl().lighten(0.5).hex())
export default (props)=>{
    return (
        <div className={styles.ProjectOverview}>
            <Header name={props.userData.displayName}/>
        </div>
    )
}