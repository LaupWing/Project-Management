// import firebase from 'firebase'
import {put} from 'redux-saga/effects'
import * as actions from '../../actions/index'
import db from '../../../initFirebase'

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

// try{
//     yield db
//         .collection('userData')
//         .doc(id)
//         .update(userData)
        
//     yield put(actions.setUserData({
//         type: 'GOT DATA',
//         userData
//     }))
// }catch(e){
//     yield put(actions.setUserData({type:'ERROR',e}))
// } 