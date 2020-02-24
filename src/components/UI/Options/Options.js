import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import Option from './Option/Option'

export default props=>{
    <React.Fragment>
        <Backdrop clicked={props.optionsClose} show={props.show}/>
        {props.options && props.options.map(opt=><Option option={opt}/>)}
    </React.Fragment>
}