import { combineReducers } from "redux";
import { createReducer } from "../api/common-reducers";

import {tabsState} from "./tabReducer";
import {PostUserInfoHandler, PostUserLoginHandler, PostUserLogoffHandler, UnauthorizedHandler} from "./auth/auth-reducer";
import {RequestPanelHandler, RequestPanelType} from "./request-panel-reducer";
import {AuthType} from "./auth/auth-store-type";
import {GetDictionaryAccountSapHandler, PostDictionaryAccountSapHandler} from "./sap-account/sap-account-reducer";
import {SapAccountStoreType} from "./sap-account/sap-account-store-type";
import { UpdateSegmentPropertiesInReduxHandler } from "./segments-reducer";
import {GetDictionarySegmentHandler, GetSystemVersionHandler} from "../api/api-handlers";


export type MainStateType = {
    auth: AuthType,
    segments: any,
    backendInfo: any,
    sapAccountOfi: SapAccountStoreType,
    requestPanel: RequestPanelType
}

export const mainReducer = combineReducers(
    // add reducers
    {
        auth: createReducer(new AuthType(), [UnauthorizedHandler(), PostUserLoginHandler(), PostUserInfoHandler(), PostUserLogoffHandler()]),
        segments: createReducer({}, [GetDictionarySegmentHandler(), UpdateSegmentPropertiesInReduxHandler()]),
        backendInfo: createReducer({version: '?'}, [GetSystemVersionHandler()]),
        sapAccountOfi: createReducer(new SapAccountStoreType(), [GetDictionaryAccountSapHandler(), PostDictionaryAccountSapHandler()]),
        requestPanel: createReducer(new RequestPanelType(), [RequestPanelHandler()]),
        tabsState
    }
);