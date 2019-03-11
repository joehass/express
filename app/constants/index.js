import {combineReducers} from "redux";
import userinfo from "../reducers/userinfo";

//整合计算规则
const rootReducer = combineReducers({
    userinfo//计算规则
});
export default rootReducer