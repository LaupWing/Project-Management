import React from  'react'
import Backdrop from '../UI/Backdrop/Backdrop'

import Options from './Popups/Options/Options'

const components = {
    Options
}



export default props =>{
    console.log(props.popup)
    const DynamicComponent = components[props.popup.type]
    console.log(<DynamicComponent/>)
    return(
        <React.Fragment>
            <Backdrop/>
            <DynamicComponent/>
        </React.Fragment>
    )
}