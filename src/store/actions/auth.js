import * as actionTypes from './actionTypes'

export const setUser = (user) =>{
    console.log(user)
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
    return{
        type: actionTypes.AUTH_SAGA_LOGIN,
        email,
        password
    }
}
export const authSignup = (email, password)=>{
    return{
        type: actionTypes.AUTH_SAGA_SIGNUP,
        email,
        password
    }
}
