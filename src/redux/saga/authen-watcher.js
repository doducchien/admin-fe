import { delay, put, takeLatest } from "redux-saga/effects";
import { LOGIN_REQUEST } from "../action-type/authen-type";
import { INIT } from "../action-type/init-type";
import { loginSuccessAction } from "../action/authen-action";

function* login({payload}){
        yield delay(1000)
    yield put(loginSuccessAction({username: 'admin'}))
}


export default function* authenWatcher(){
    yield takeLatest(LOGIN_REQUEST, login)
}