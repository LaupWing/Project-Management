import * as actionTypes from './actionTypes'

export const setUser = (user) =>{
    return{
        type: actionTypes.SET_USER_INFO,
        user
    }
}