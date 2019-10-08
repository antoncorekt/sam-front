import { combineReducers } from "redux";
import { createReducer } from "../api/common-reducers";

import { AuthType } from "./auth/auth-store-type";
import { SapAccountStoreType } from "./sap-account/sap-account-store-type";
import { SegmentsType } from "./segments/segments-store-type";
import { AccountMappingType } from "./bscs-account/bscs-account-store-type";

import { PostUserInfoHandler, PostUserLoginHandler, PostUserLogoffHandler, UnauthorizedHandler } from "./auth/auth-reducer";
import { GetSystemVersionHandler } from "../api/api-handlers";
import { RequestPanelHandler, RequestPanelType } from "./request-panel-reducer";
import {
    DeleteDictionaryAccountSapHandler,
    GetDictionaryAccountSapHandler,
    PostDictionaryAccountSapHandler
} from "./sap-account/sap-account-reducer";
import {
    GetDictionarySegmentHandler,
    PostDictionarySegmentHandler,
    SegmentPropertiesInReduxHandler
} from "./segments/segments-reducer";
import { UsersBscsToSapMappings } from "./bscs-account/bscs-account-reducer";
import { tabsState } from "./tabReducer";

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
        accountMapping: createReducer(new AccountMappingType(), [UsersBscsToSapMappings()]),
        sapAccountOfi: createReducer(new SapAccountStoreType(), [GetDictionaryAccountSapHandler(), PostDictionaryAccountSapHandler(), DeleteDictionaryAccountSapHandler()]),
        requestPanel: createReducer(new RequestPanelType(), [RequestPanelHandler()]),
        tabsState
    }
);