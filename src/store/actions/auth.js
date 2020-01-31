import * as actionTypes from './actionTypes'

export const setUser = (user) =>{
    return{
        type: actionTypes.SET_USER_INFO,
        user
    }
}

export const authError = (error)=>(
    {
        type: actionTypes.AUTH_ERROR,
        error
    }
)
export const authLogin = (error)=>(
    {
        type: actionTypes.AUTH_SAGA_LOGIN,
        error
    }
)