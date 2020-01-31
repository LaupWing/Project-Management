import firebase from 'firebase'
import {put} from 'redux-saga/effects'
import * as actions from '../../actions/index'

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