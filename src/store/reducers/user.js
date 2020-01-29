import * as actionTypes from '../actions/actionTypes'

const initialState ={
    auth: false,
    user: null
}

const setUser = (state,action) =>{
    return {
        ...state,
        user: action.user
    }
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.SET_USER_INFO: return setUser(state,action)
        default: return state
    }
}

export default reducer