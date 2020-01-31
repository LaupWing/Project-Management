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
export const authLogin = (email, password)=>{
    console.log(email,password)
    return{
        type: actionTypes.AUTH_SAGA_LOGIN,
        email,
        password
    }
}
