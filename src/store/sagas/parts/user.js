import firebase from 'firebase'
import {put} from 'redux-saga/effects'
import * as actions from '../../actions/index'
import db from '../../../initFirebase'

export function* loginSaga(action){
    const {email, password} = action
    try{
        const user = yield firebase.auth().signInWithEmailAndPassword(email,password)
        yield put(actions.setUser(user))
        yield put(actions.authError(null))
    }catch(e){
        yield put(actions.authError({message:'Invalid username/password', e}))
    }
}

export function* updateUserDataSaga(action){
    const {userData, id} = action
    try{
        const updating = yield db
            .collection('userData')
            .doc(id)
            .update(userData)
        console.log(updating)
        yield put(actions.setUserData(userData))
    }catch(e){
        console.log(e)
        yield put(actions.setUserData({type:'ERROR',e}))
    } 
}

export function* fetchUserDataSaga(action){
    const {id} = action
    try{
        const userData = yield db.collection('userData').doc(id).get()
        if(userData.exists){
            return yield put(actions.setUserData(userData))
        }
        yield put(actions.setUserData({type:'NOT FOUND'}))
    }catch(e){
        yield put(actions.setUserData({type:'ERROR'}))
    }
}

export function* signUpSaga(action){
    const {email, password} = action
    try{
        const user = yield firebase.auth().createUserWithEmailAndPassword(email,password)
        yield put(actions.setUser(user))
        yield put(actions.authError(null))
    }catch(e){
        yield put(actions.authError({message:'Invalid username/password', e}))
    }
}