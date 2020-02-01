import {takeEvery} from 'redux-saga/effects'

import * as actionTypes from '../actions/actionTypes'
import {
    loginSaga,
    signUpSaga,
    fetchUserDataSaga
}from './parts/user'

export function* watchAuth(){
    yield takeEvery(actionTypes.AUTH_LOGIN_SAGA, loginSaga)
    yield takeEvery(actionTypes.AUTH_SIGNUP_SAGA, signUpSaga)
    yield takeEvery(actionTypes.FETCH_USERDATA_SAGA, fetchUserDataSaga)
}