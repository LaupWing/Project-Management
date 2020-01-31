import * as actionTypes from '../actions/actionTypes'

const initialState ={
    auth: false,
    user: null,
    error: null,
    userData: null
}

const setUser = (state,action) =>{
    return {
        ...state,
        user: action.user
    }
}

const setError = (state,action) =>{
    return {
        ...state,
        error: action.error ? action.error.message : action.error
    }
}
const setUserData = (state,action) =>{
    return {
        ...state,
        userData: action.data
    }
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.SET_USER_INFO: return setUser(state,action)
        case actionTypes.AUTH_ERROR: return setError(state,action)
        case actionTypes.SET_USER_DATA: return setUserData(state,action)
        default: return state
    }
}

export default reducer