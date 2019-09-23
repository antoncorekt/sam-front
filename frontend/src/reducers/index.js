import {combineReducers} from "redux";
import {createReducer} from "../api/common-reducers";
import {GetDictionarySegmentHandler, PostUserLoginHandler} from "../api/api-handlers";
import {tabsState} from "./tabReducer";
import {UnauthorizedHandler} from "./auth-reducer";

export type MainStateType = {
    accountOfi: any,
    auth: any,
    segments: any
}

export const mainReducer = combineReducers(
    // add reducers
    {
        accountOfi: createReducer({}, []),
        auth: createReducer({}, [UnauthorizedHandler(), PostUserLoginHandler()]),
        segments: createReducer({}, [GetDictionarySegmentHandler()]),
        tabsState
    }
);