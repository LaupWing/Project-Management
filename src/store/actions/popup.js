import * as actionTypes from './actionTypes'


export const setPopup = (error)=>{
    return {
        type: actionTypes.SET_POPUP,
        error
    }
}