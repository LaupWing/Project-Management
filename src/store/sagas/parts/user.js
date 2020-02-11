import firebase from 'firebase'
import {put} from 'redux-saga/effects'
import * as actions from '../../actions/index'
import db from '../../../initFirebase'

export function* loginSaga(action){
    const {email, password} = action
    try{
        const user = yield firebase.auth().signInWithEmailAndPassword(email,password)
        yield put(actions.setUser(user))
        yield put(actions.setError(null))
    }catch(error){
        yield put(actions.setError({
            type: 'AUTH ERROR',
            message:'Invalid username/password', 
            error
        }))
    }
}

export function* updateUserDataSaga(action){
    const {userData, id} = action
    try{
        yield db
            .collection('userData')
            .doc(id)
            .update(userData)
        
        yield put(actions.setUserData(userData))
        yield put(actions.setError(null))
    }catch(error){
        yield put(actions.setError({
            type:'SERVER ERROR',
            message: 'Something went wrong with the server while update',
            error
        }))
    } 
}

export function* setUserDataSaga(action){
    const {userData, id} = action
    try{
        yield db
            .collection('userData')
            .doc(id)
            .set(userData)
        yield put(actions.setUserData(userData))
        yield put(actions.setError(null))
    }catch(error){
        yield put(actions.setError({
            type:'SERVER ERROR',
            message: 'Something went wrong with the server while adding',
            error
        }))
    } 
}

export function* fetchUserDataSaga(action){
    const {id} = action
    try{
        const userData = yield db.collection('userData').doc(id).get()
        if(userData.exists){
            yield put(actions.setError(null))
            return yield put(actions.setUserData(userData.data()))
        }
        yield put(actions.setError({
            type:'NOT FOUND',
            message: 'User not found',
            error: null
        }))
    }catch(error){
        yield put(actions.setError({
            type:'SERVER ERROR',
            message: 'Something went wrong with the server',
            error
        }))
    }
}

export function* signUpSaga(action){
    const {email, password} = action
    try{
        const user = yield firebase.auth().createUserWithEmailAndPassword(email,password)
        yield put(actions.setUser(user))
        yield put(actions.setError(null))
    }catch(error){
        yield put(actions.setError({
            type: 'SERVER ERROR',
            message:'Invalid username/password', 
            error
        }))
    }
}