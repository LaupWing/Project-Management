import firebase from 'firebase'
import {put} from 'redux-saga/effects'
import * as actions from '../../actions/index'

export function* loginSaga(action){
    const {email, password} = action
    try{
        const user = yield firebase.auth().signInWithEmailAndPassword(email,password)
        yield put(actions.setUser(user))
    }catch(e){
        yield put(actions.authError(e))
    }
}