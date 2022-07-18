import { INIT } from "../action-type/init-type"

const initState = {
    value: false
}

const initReducer = (state =  initState, action)=>{
    switch(action.payload){
        case INIT:{
            
            return{
                ...state,
                value: true
            }
        }
        default: {
            return state;
        }
    }
}

export default initReducer;