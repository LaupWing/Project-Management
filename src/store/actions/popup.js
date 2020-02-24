import * as actionTypes from './actionTypes'


export const setPopup = (popup)=>{
    return {
        type: actionTypes.SET_POPUP,
        popup
    }
}