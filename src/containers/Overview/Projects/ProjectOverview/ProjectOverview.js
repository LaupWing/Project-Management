import React from 'react'
import Header from './Header/Header'
import styles from './ProjectOverview.module.css'
// import Color from 'color'
import {connect} from 'react-redux'
import ProjectList from './ProjectList/ProjectList'
// const color = Color('#08E8DE')
// console.log(color.hsl().hex())
// console.log(color.hsl().rotate(-25).hex())
// console.log(color.hsl().lighten(0.5).hex())

const mapStateToProps = state =>{
    return{
        projects: state.projects.projects,
        limit: state.projects.limit
    }
}
export default connect(mapStateToProps)((props)=>{
    return (
        <div className={styles.ProjectOverview}>
            <Header name={props.userData.displayName}/>
            <ProjectList
                projects={props.projects}
                limit={props.limit}
            />
        </div>
    )
})