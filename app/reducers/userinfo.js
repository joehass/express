import * as actionTypes from '../constants/userinfo'
const initialState = {};

//第一步，定义规则
export default function userinfo (state = initialState,action) {

    switch (action.type) {
        //登陆
        case actionTypes.USERINFO_LOGUN:
            return action.data;
        case actionTypes.UPDATE_CITYNAME:
            return action.data;
        default:
            return state;
    }
}