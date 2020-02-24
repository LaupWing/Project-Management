import React from  'react'
import Backdrop from '../UI/Backdrop/Backdrop'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index'

import Options from './Popups/Options/Options'

const components = {
    Options
}

const mapDispatchToProps = dispatch =>{
    return{
        closePopup: ()=> dispatch(actions.setPopup(null))
    }
} 

export default connect(null,mapDispatchToProps)(props =>{
    const DynamicComponent = components[props.popup.type]
    return(
        <React.Fragment>
            <Backdrop 
                clicked={props.closePopup} 
                show={props.popup ? true : false}
                backdropStyle={props.popup.backdropStyle}
            />
            <DynamicComponent popup={props.popup}/>
        </React.Fragment>
    )
})