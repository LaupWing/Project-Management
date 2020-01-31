import React from 'react'
import {connect} from 'react-redux'

class Projects extends React.Component{
    render(){
        return(
            <h2 onClick={()=>console.log(this.props.userData)}>Projects</h2>
        )
    }
}

const mapStateToProps = state=>{
    return{
        userData: state.user.userData
    }
}

export default connect(mapStateToProps)(Projects)