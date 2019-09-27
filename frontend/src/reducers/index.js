import {combineReducers} from "redux";
import {createReducer} from "../api/common-reducers";
import {
    GetDictionaryAccountSapHandler,
    GetDictionarySegmentHandler,
    GetSystemVersionHandler,
    PostUserLoginHandler,
    PostUserLogoffHandler
} from "../api/api-handlers";
import {tabsState} from "./tabReducer";
import {UnauthorizedHandler} from "./auth-reducer";
import {RequestPanelHandler, RequestPanelType} from "./request-panel-reducer";

export type MainStateType = {
    accountOfi: any,
    auth: any,
    segments: any,
    backendInfo: any,
    sapAccountOfi: any,
    requestPanel: RequestPanelType
}

export const mainReducer = combineReducers(
    // add reducers
    {
        accountOfi: createReducer({}, []),
        auth: createReducer({}, [UnauthorizedHandler(), PostUserLoginHandler()]),
        logOffInfo: createReducer({}, [PostUserLogoffHandler()]),
        segments: createReducer({}, [GetDictionarySegmentHandler()]),
        backendInfo: createReducer({version: '?'}, [GetSystemVersionHandler()]),
        sapAccountOfi: createReducer({}, [GetDictionaryAccountSapHandler()]),
        requestPanel: createReducer(new RequestPanelType(), [RequestPanelHandler()]),
        tabsState
    }
);