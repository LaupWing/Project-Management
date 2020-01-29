const initialState ={
    auth: false,
    user: null
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case 'TEST':    return state
        default: return state
    }
}

export default reducer