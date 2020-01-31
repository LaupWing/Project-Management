import {takeEvery} from 'redux-saga/effects'

import * as actionTypes from '../actions/actionTypes'
import {
    loginSaga,
    signUpSaga
}from './parts/auth'

export function* watchAuth(){
    yield takeEvery(actionTypes.AUTH_SAGA_LOGIN, loginSaga)
    yield takeEvery(actionTypes.AUTH_SAGA_SIGNUP, signUpSaga)
}