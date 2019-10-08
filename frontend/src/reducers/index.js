import { combineReducers } from "redux";
import { createReducer } from "../api/common-reducers";
import { tabsState } from "./tabReducer";
import { PostUserInfoHandler, PostUserLoginHandler, PostUserLogoffHandler, UnauthorizedHandler } from "./auth/auth-reducer";
import { RequestPanelHandler, RequestPanelType } from "./request-panel-reducer";
import { AuthType } from "./auth/auth-store-type";
import {
    DeleteDictionaryAccountSapHandler,
    GetDictionaryAccountSapHandler,
    PostDictionaryAccountSapHandler
} from "./sap-account/sap-account-reducer";
import { SapAccountStoreType } from "./sap-account/sap-account-store-type";
import { SegmentsType } from "./segments/segments-store-type";
import { GetDictionarySegmentHandler, PostDictionarySegmentHandler, SegmentPropertiesInReduxHandler } from "./segments/segments-reducer";
import { GetSystemVersionHandler } from "../api/api-handlers";

export type MainStateType = {
    auth: AuthType,
    segments: SegmentsType,
    backendInfo: any,
    sapAccountOfi: SapAccountStoreType,
    requestPanel: RequestPanelType
}

export const mainReducer = combineReducers(
    // add reducers
    {
        auth: createReducer(new AuthType(), [UnauthorizedHandler(), PostUserLoginHandler(), PostUserInfoHandler(), PostUserLogoffHandler()]),
        segments: createReducer(new SegmentsType(), [GetDictionarySegmentHandler(), PostDictionarySegmentHandler(), SegmentPropertiesInReduxHandler()]),
        backendInfo: createReducer({ version: '?' }, [GetSystemVersionHandler()]),
        sapAccountOfi: createReducer(new SapAccountStoreType(), [GetDictionaryAccountSapHandler(), PostDictionaryAccountSapHandler(), DeleteDictionaryAccountSapHandler()]),
        requestPanel: createReducer(new RequestPanelType(), [RequestPanelHandler()]),
        tabsState
    }
);