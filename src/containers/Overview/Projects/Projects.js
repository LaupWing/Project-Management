import React from 'react'
import {connect} from 'react-redux'
import styles from './Projects.module.css'
import Button from '../../../components/UI/Button/Button'
import CSSTransition from 'react-transition-group/CSSTransition'
import * as actions from '../../../store/actions/index'

class Projects extends React.Component{
    state = {
        name: ''
    }
    submitName(e){
        e.preventDefault()
        console.log(this.state.name)
    }
    render(){
        return(
            <React.Fragment>
                {this.props.userData 
                    ? this.props.userData.type === 'NOT FOUND'
                            ?   <form onSubmit={this.submitName.bind(this)} className={styles.enterName}>
                                    <div className={styles.wrapper}>
                                        <h2>Hello there,</h2>
                                        <input 
                                            spellCheck='false' 
                                            className={styles} 
                                            type='text' 
                                            placeholder="Enter your name..."
                                            value={this.state.name}
                                            onChange={(e)=>this.setState({name:e.target.value})}
                                        ></input>
                                        <CSSTransition
                                            in={this.state.name.length > 0 }
                                            timeout={500}
                                            unmountOnExit
                                            mountOnEnter
                                            classNames={{
                                                enter: '',
                                                enterActive: styles["button-enter"],
                                                exitActive: styles["button-exit"],
                                                exit: '',
                                            }}
                                        >
                                            <Button classes={['enterName']}>Submit</Button>
                                        </CSSTransition>
                                    </div>
                                </form>
                        : <p>found</p>
                    : null
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = state=>{
    return{
        userData: state.user.userData,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        saveUserDataToDB: (id, userData)=> dispatch(actions.saveUserDataToDB(id, userData))
    }
}



export default connect(mapStateToProps)(Projects)