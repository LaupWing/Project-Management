import * as actionTypes from '../actions/actionTypes'

const initialState ={
    error: null
}

const setError = (state,action)=>{
    return{
        error: action.error
    }
}


const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.SET_ERROR: return setError(state,action)
        default: return state
    }
}

export default reducer