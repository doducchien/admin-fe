import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducer/root-reducer";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";
import { envUtil } from "../../utils/env-util";
import rootSaga from "../saga/root-saga";

 
const sagaMiddleware = createSagaMiddleware()
let middleware;
if(envUtil.getEnv() == 'production'){
    middleware = applyMiddleware(sagaMiddleware)
}
else middleware = applyMiddleware(sagaMiddleware, logger)

const store = createStore(rootReducer, middleware)
sagaMiddleware.run(rootSaga);
export default store;