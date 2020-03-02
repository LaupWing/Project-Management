const getTodayTasks = (array)=>{
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    // eslint-disable-next-line
    const filterOut =  array.filter(task=>{
        const taskDate = new Date(task.date)
        const taskDay = taskDate.getDate()
        const taskMonth = taskDate.getMonth()
        const taskyear = taskDate.getFullYear()
        
        if(
            taskDay === day &&
            taskMonth === month &&
            taskyear === year
        ){
            return task
        }
    })
    return filterOut
}


const getFutureTasks = (array)=>{
    const date = new Date()
    // eslint-disable-next-line
    const filterOut =  array.filter(task=>{
        const taskDate = new Date(task.date)
        
        if(taskDate >= date){
            return task
        }
    })
    return filterOut
}
const getOutDatedTasks = (array)=>{
    const date = new Date()
    // eslint-disable-next-line
    const filterOut =  array.filter(task=>{
        const taskDate = new Date(task.date)
        
        if(taskDate < date){
            return task
        }
    })
    return filterOut
}

module.exports ={
    getFutureTasks,
    getTodayTasks,
    getOutDatedTasks
}