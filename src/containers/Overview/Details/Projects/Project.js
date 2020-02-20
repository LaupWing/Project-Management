import React from 'react'
import styles from './Project.module.css'
import {connect} from 'react-redux'
import Detail from './Detail/Detail'

class ProjectDetail extends React.Component{
    render(){
        return(
            <div className={styles.ProjectDetail}>
                {!this.props.activeProject 
                    ?   <h2>Latest project activity</h2>
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