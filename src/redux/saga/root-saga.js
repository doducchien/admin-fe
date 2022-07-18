import {all} from 'redux-saga/effects'
import authenWatcher from './authen-watcher'
export default function* rootSaga(){
    yield all([authenWatcher()])
}