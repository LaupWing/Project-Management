import React from 'react'
import Header from './Header/Header'

export default (props)=>{
    return (
        <div>
            <Header name={props.userData.displayName}/>
        </div>
    )
}