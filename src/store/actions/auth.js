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
    return{
        type: actionTypes.AUTH_LOGIN_SAGA,
        email,
        password
    }
}
export const authSignup = (email, password)=>{
    return{
        type: actionTypes.AUTH_SIGNUP_SAGA,
        email,
        password
    }
}

export const fetchUserData = (id)=>{
    return{

    }
}