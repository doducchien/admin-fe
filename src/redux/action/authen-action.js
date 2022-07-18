import { createAction } from "redux-actions";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../action-type/authen-type";

export const loginRequestAction = createAction(LOGIN_REQUEST);
export const loginSuccessAction = createAction(LOGIN_SUCCESS);
export const loginFailureAction = createAction(LOGIN_FAILURE);