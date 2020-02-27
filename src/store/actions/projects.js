import * as actionTypes from './actionTypes'

export const setActiveProject = (project)=>{
    return {
        type: actionTypes.SET_ACTIVE_PROJECT,
        project
    }
}

export const setUserProjects = (projects)=>{
    return{
        type: actionTypes.SET_PROJECTS,
        projects
    }
}
export const openAddProjectModal = (open)=>{
    return{
        type: actionTypes.ADD_PROJECT_MODAL,
        open
    }
}

export const fetchUserProjects = (id)=>{
    return{
        type: actionTypes.FETCH_USERPROJECTS_SAGA,
        id
    }
}
export const updateUserProjects = (changes)=>{
    return{
        type: actionTypes.UPDATE_USERPROJECTS_SAGA,
        changes
    }
}