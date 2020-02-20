import React from 'react'
import styles from './Project.module.css'
import {connect} from 'react-redux'
import Detail from './Detail/Detail'
import Latest from './Latest/Latest'

class ProjectDetail extends React.Component{
    render(){
        return(
            <div className={styles.ProjectDetail}>
                {!this.props.activeProject 
                    ?   <Latest/>
                    :   <Detail project={this.props.activeProject}/>
                }
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        activeProject: state.projects.activeProject
    }
}

export default connect(mapStateToProps)(ProjectDetail) 