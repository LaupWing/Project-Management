
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





const reducer = (state=initialState, action)=>{
    switch(action.type){
        default: return state
    }
}

export default reducer