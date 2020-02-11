import * as actionTypes from './actionTypes'

export const setUser = (user) =>{
    return{
        type: actionTypes.SET_USER_INFO,
        user
    }
}

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
        type: actionTypes.FETCH_USERDATA_SAGA,
        id
    }
}

export const setUserData = (data) =>{
    return {
        type: actionTypes.SET_USER_DATA,
        data
    }
}
export const updateUserDataToDB = (id, userData) =>{
    return {
        type: actionTypes.UPDATE_USERDATA_TO_DB_SAGA,
        userData,
        id
    }
}
export const setUserDataToDB = (id, userData) =>{
    return {
        type: actionTypes.SET_USERDATA_TO_DB_SAGA,
        userData,
        id
    }
}