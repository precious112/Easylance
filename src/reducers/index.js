import { combineReducers } from "redux";
import userReducer from "./userReducer";
import chatReducer from "./chatReducer";
import tokenReducer from "./tokenReducer";

const allReducers=combineReducers({
    user:userReducer,
    chat:chatReducer,
    token:tokenReducer
});

export default allReducers;