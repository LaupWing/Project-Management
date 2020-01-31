import {takeEvery} from 'redux-saga/effects'

import * as actionTypes from '../actions/actionTypes'
import {
    loginSaga
}from './parts/auth'

export function* watchAuth(){
    yield takeEvery(actionTypes.AUTH_SAGA_LOGIN, loginSaga)
}