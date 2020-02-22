import React from 'react'
import styles from './Project.module.css'
import {connect} from 'react-redux'
import Detail from './Detail/Detail'
import Latest from './Latest/Latest'
import {Switch, Route} from "react-router-dom";

class ProjectDetail extends React.Component{
    render(){
        return(
            <div className={styles.ProjectDetail}>
                <Switch>
                    <Route exact path='/projects/:id' component={Latest}/>
                </Switch>
                <h2>Test</h2>
                {/* {!this.props.activeProject 
                    ?   <Latest/>
                    :   <Detail project={this.props.activeProject}/>
                } */}
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