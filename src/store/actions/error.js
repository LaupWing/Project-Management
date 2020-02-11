import * as actionTypes from './actionTypes'

export const setError = (error)=>{
    return {
        type: actionTypes.SET_ERROR,
        error
    }
}