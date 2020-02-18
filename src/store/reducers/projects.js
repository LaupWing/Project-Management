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
    limit: 5,
    addModal: false
}

const setActiveProject = (state,action) =>{
    return {
        ...state,
        activeProject: action.project
    }
}

const setProjects = (state,action)=>{
    return{
        ...state,
        projects: action.projects
    }
}

const addProjectModal = (state,action)=>{
    return{
        ...state,
        addModal: action.open
    }
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.SET_ACTIVE_PROJECT:    return setActiveProject(state,action)
        case actionTypes.ADD_PROJECT_MODAL:     return addProjectModal(state,action)
        case actionTypes.SET_PROJECTS:          return setProjects(state,action)
        default: return state
    }
}

export default reducer