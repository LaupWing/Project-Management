import * as actionTypes from '../actions/actionTypes'

const initialState ={
    auth: false,
    user: null,
    error: null
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
        user: action.error.message
    }
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.SET_USER_INFO: return setUser(state,action)
        case actionTypes.AUTH_ERROR: return setError(state,action)
        default: return state
    }
}

export default reducer