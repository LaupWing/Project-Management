import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../../../store/actions/index'
import Entername from './EnterName/EnterName'
import ProjectOverview from './ProjectOverview/ProjectOverview'

class Projects extends React.Component{
    state = {
        name: ''
    }
    submitName(e){
        e.preventDefault()
        if(this.state.name.length > 0){
            this.props.setUserDataToDB(
                this.props.user.uid,
                {
                    displayName: this.state.name,
                    settings:{
                        colorTheme: 'default'
                    }
                }
            )
        }
    }
    render(){
        return(
            <React.Fragment>
                {this.props.userData 
                    ? this.props.userData.type === 'NOT FOUND'
                        ?   <Entername
                                inputChanged={(e)=>this.setState({name: e.target.value})}
                                submitted={this.submitName.bind(this)}  
                                name={this.state.name}
                            />
                        :   <ProjectOverview
                                userData={this.props.userData.userData}
                            />
                    : null
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = state=>{
    return{
        userData: state.user.userData,
        user: state.user.user
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        setUserDataToDB: (id, userData)=> dispatch(actions.setUserDataToDB(id, userData))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Projects)