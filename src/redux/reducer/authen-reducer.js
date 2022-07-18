import { copyUtil } from "../../utils/copy-util"
import { LOGIN_REQUEST, LOGIN_SUCCESS } from "../action-type/authen-type"

const initState = {
    status:{
        loading: false,
        error: null
    },
    data:{
        username: ''
    }
   
}

const authenReducer = (state = initState, action)=>{
    switch(action.type){
        case LOGIN_REQUEST:{
            const newState = copyUtil.deepCopy(state);
            state.status.loading = true;
            return newState;
        }

        case LOGIN_SUCCESS: {
            const newState = copyUtil.deepCopy(state);
            newState.status.loading = false;
            newState.data.username = action.payload.username;
            console.log("payload",  action.payload)

            // return {...state, data: {...state.data, username: action.payload}}
            return newState;
        }

        default:{return state;}
    }
}

export default authenReducer;