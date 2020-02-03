import * as actionTypes from './actionTypes'

export const setActiveProject = (project)=>{
    return {
        type: actionTypes.SET_ACTIVE_PROJECT,
        project
    }
}