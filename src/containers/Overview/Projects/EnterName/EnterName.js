import React from 'react'
import styles from './EnterName.module.css'
import Button from '../../../../components/UI/Button/Button'
import CSSTransition from 'react-transition-group/CSSTransition'

export default (props)=>{
    return(
        <form 
            onSubmit={props.submitted} 
            className={styles.enterName}
        >
            <div className={styles.wrapper}>
                <h2>Hello there,</h2>
                <input 
                    spellCheck='false' 
                    className={styles} 
                    type='text' 
                    placeholder="Enter your name..."
                    value={props.name}
                    onChange={props.inputChanged}
                ></input>
                <CSSTransition
                    in={props.name.length > 0 }
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
    )
}