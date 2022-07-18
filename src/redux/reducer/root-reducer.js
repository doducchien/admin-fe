import { combineReducers } from "redux";
import authenReducer from "./authen-reducer";
import initReducer from "./init-reducer";

const rootReducer = combineReducers({
    init: initReducer,
    authen: authenReducer
})

export default rootReducer;