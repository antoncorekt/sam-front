import {combineReducers} from "redux";
import {createReducer} from "../api/common-reducers";
import {
    GetDictionarySegmentHandler,
    GetSystemVersionHandler,
    PostUserLoginHandler,
    PostUserLogoffHandler
} from "../api/api-handlers";
import {tabsState} from "./tabReducer";
import {UnauthorizedHandler} from "./auth-reducer";

export type MainStateType = {
    accountOfi: any,
    auth: any,
    segments: any,
    backendInfo: any
}

export const mainReducer = combineReducers(
    // add reducers
    {
        accountOfi: createReducer({}, []),
        auth: createReducer({}, [UnauthorizedHandler(), PostUserLoginHandler()]),
        logOffInfo: createReducer({}, [PostUserLogoffHandler()]),
        segments: createReducer({}, [GetDictionarySegmentHandler()]),
        backendInfo: createReducer({version: '?'}, [GetSystemVersionHandler()]),

        tabsState
    }
);