import {takeEvery} from 'redux-saga/effects'

import * as actionTypes from '../actions/actionTypes'
import {
    loginSaga,
    signUpSaga,
    fetchUserDataSaga,
    updateUserDataSaga,
    setUserDataSaga
}from './parts/user'

import {
    fetchingUserProjects
} from './parts/project'

export function* watchAuth(){
    yield takeEvery(actionTypes.AUTH_LOGIN_SAGA, loginSaga)
    yield takeEvery(actionTypes.AUTH_SIGNUP_SAGA, signUpSaga)
    yield takeEvery(actionTypes.FETCH_USERDATA_SAGA, fetchUserDataSaga)
    yield takeEvery(actionTypes.UPDATE_USERDATA_TO_DB_SAGA, updateUserDataSaga)
    yield takeEvery(actionTypes.SET_USERDATA_TO_DB_SAGA, setUserDataSaga)
}

export function* watchProjects(){
    yield takeEvery(actionTypes.FETCH_USERPROJECTS_SAGA, fetchingUserProjects)
}