import * as actionTypes from '../actions/actionTypes'

const initialState ={
    popup: null
}

const setPopup = (state,action)=>{
    return{
        ...state,
        popup: action.popup
    }
}


const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.SET_POPUP: return setPopup(state,action)
        default: return state
    }
}

export default reducer