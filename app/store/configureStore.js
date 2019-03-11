//第二步，根据计算规则生成store
import {createStore} from "redux";
import rootReducer from "../constants";

export default function configureStore (initialState) {

    const store = createStore(rootReducer,initialState,
        window.devToolsExtension ? window.devToolsExtension():undefined)
    return store;
}