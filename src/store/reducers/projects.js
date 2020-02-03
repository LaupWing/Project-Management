import * as actionTypes from '../actions/actionTypes'

const initialState ={
    projects: [
        {
            name: 'Test',
            color:  '#08CDE8'
        },
        {
            name: 'Test2',
            color: '#FF00FF'
        },
        {
            name: 'Test Test',
            color: '#FF00FF'
        },
        {
            name: 'Test Test Test',
            color: '#FF00FF'
        },
        {
            name: 'Test2',
            color: '#FF00FF'
        },
        {
            name: 'Test Test',
            color: '#FF00FF'
        },
        {
            name: 'Test Test Test',
            color: '#FF00FF'
        }
    ],
    activeProject: null,
    limit: 5
}

const setUserData = (state,action) =>{
    return {
        ...state,
        activeProject: action.project
    }
}




const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.SET_ACTIVE_PROJECT:    return setUserData(state,action)
        default: return state
    }
}

export default reducer