import * as actionTypes from '../actions/actionTypes'

const initialState ={
    projects: [
        {
            name: 'Test',
            color:  '#08CDE8',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere eleifend arcu, ut posuere erat rhoncus et. Donec iaculis.',
            tasks: [
                {
                    date:'Thu Feb 20 2020 16:08:00 GMT+0100 (Midden-Europese standaardtijd)',
                    task:'Test',
                    completed: false
                }
            ]
        },
        {
            name: 'Test2',
            color: '#FF00FF',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere eleifend arcu, ut posuere erat rhoncus et. Donec iaculis.',
            tasks: [
                {
                    date:'Thu Feb 20 2020 16:08:00 GMT+0100 (Midden-Europese standaardtijd)',
                    task:'Test2',
                    completed: false
                }
            ]
        },
        {
            name: 'Test Test',
            color: '#FF00FF',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere eleifend arcu, ut posuere erat rhoncus et. Donec iaculis.',
            tasks: [
                {
                    date:'Thu Feb 22 2020 16:08:00 GMT+0100 (Midden-Europese standaardtijd)',
                    task:'Test Test',
                    completed: false
                },
                {
                    date:'Thu Feb 22 2020 16:08:00 GMT+0100 (Midden-Europese standaardtijd)',
                    task:'Test Test2',
                    completed: false
                },
                {
                    date:'Thu Feb 19 2020 16:08:00 GMT+0100 (Midden-Europese standaardtijd)',
                    task:'Test Test3',
                    completed: false
                }
            ]
        },
        {
            name: 'Test Test Test',
            color: '#FF00FF',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere eleifend arcu, ut posuere erat rhoncus et. Donec iaculis.',
            tasks: [
                {
                    date:'Thu Feb 20 2020 16:08:00 GMT+0100 (Midden-Europese standaardtijd)',
                    task:'Test Test Test',
                    completed: false
                }
            ]
        },
        {
            name: 'Test3',
            color: '#FF00FF',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere eleifend arcu, ut posuere erat rhoncus et. Donec iaculis.',
            tasks: [
                {
                    date:'Thu Feb 20 2020 16:08:00 GMT+0100 (Midden-Europese standaardtijd)',
                    task:'Test2',
                    completed: false
                }
            ]
        },
        {
            name: 'Test Test2',
            color: '#FF00FF',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere eleifend arcu, ut posuere erat rhoncus et. Donec iaculis.',
            tasks: [
                {
                    date:'Thu Feb 20 2020 16:08:00 GMT+0100 (Midden-Europese standaardtijd)',
                    task:'Test Test',
                    completed: false
                }
            ]
        },
        {
            name: 'Test Test Test2',
            color: '#FF00FF',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere eleifend arcu, ut posuere erat rhoncus et. Donec iaculis.',
            tasks: [
                {
                    date:'Thu Feb 20 2020 16:08:00 GMT+0100 (Midden-Europese standaardtijd)',
                    task:'Test Test Test',
                    completed: false
                }
            ]
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