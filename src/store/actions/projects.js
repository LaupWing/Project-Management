import * as actionTypes from './actionTypes'

export const setActiveProject = (project)=>{
    return {
        type: actionTypes.SET_ACTIVE_PROJECT,
        project
    }
}

export const fetchUserProjects = (id)=>{
    return{
        type: actionTypes.FETCH_USERPROJECTS_SAGA,
        id
    }
}