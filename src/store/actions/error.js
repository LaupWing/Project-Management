import * as actionTypes from './actionTypes'

export const setError = (error)=>{
    console.log(error)
    return {
        type: actionTypes.SET_ERROR,
        error
    }
}