// import firebase from 'firebase'
import {put} from 'redux-saga/effects'
import * as actions from '../../actions/index'
import db from '../../../initFirebase'
import projects from '../../reducers/projects'
import {createStore} from 'redux'
const store = createStore(projects)


export function* fetchingUserProjects(action){
    const {id} = action
    try{
        const projects = yield db
            .collection('projects')
            .doc(id)
            .get()
        if(projects.exists){
            console.log('exists')
        }else{
            yield put(actions.setUserProjects([]))
        }
    }catch(e){
        yield console.log('error')
    }
}

export function* updateUserProjects(action){
    const {projects} = store.getState()
    const {changes} = action
    console.log(changes)
    const updatedProjects = projects.map(p=>{
        if(p.name===changes.name){
            return changes
        }
        return p
    }) 
    console.log(updatedProjects)
    yield put(actions.setUserProjects(updatedProjects))
}