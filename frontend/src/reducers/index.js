import {combineReducers} from "redux";
import {createReducer} from "../api/common-reducers";
import {
    GetDictionarySegmentHandler,
    GetSystemVersionHandler
} from "../api/api-handlers";
import {tabsState} from "./tabReducer";
import {PostUserInfoHandler, PostUserLoginHandler, PostUserLogoffHandler, UnauthorizedHandler} from "./auth/auth-reducer";
import {RequestPanelHandler, RequestPanelType} from "./request-panel-reducer";
import {AuthType} from "./auth/auth-store-type";
import {GetDictionaryAccountSapHandler, PostDictionaryAccountSapHandler} from "./sap-account/sap-account-reducer";
import {SapAccountStoreType} from "./sap-account/sap-account-store-type";



export type MainStateType = {
    accountOfi: any,
    auth: AuthType,
    segments: any,
    backendInfo: any,
    sapAccountOfi: any,
    requestPanel: RequestPanelType
}

export const mainReducer = combineReducers(
    // add reducers
    {
        accountOfi: createReducer({}, []),
        auth: createReducer(new AuthType(), [UnauthorizedHandler(), PostUserLoginHandler(), PostUserInfoHandler(), PostUserLogoffHandler()]),
        segments: createReducer({}, [GetDictionarySegmentHandler()]),
        backendInfo: createReducer({version: '?'}, [GetSystemVersionHandler()]),
        sapAccountOfi: createReducer(new SapAccountStoreType(), [GetDictionaryAccountSapHandler(), PostDictionaryAccountSapHandler()]),
        requestPanel: createReducer(new RequestPanelType(), [RequestPanelHandler()]),
        tabsState
    }
);