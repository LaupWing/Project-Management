// import firebase from 'firebase'
// import {put} from 'redux-saga/effects'
// import * as actions from '../../actions/index'
// import db from '../../../initFirebase'

export function* fetchingUserProjects(action){
    const {id} = action
    yield console.log(id)
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