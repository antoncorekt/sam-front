import { combineReducers } from "redux";
import { createReducer } from "../api/common-reducers";

import { AuthType } from "./auth/auth-store-type";
import { SapAccountStoreType } from "./sap-account/sap-account-store-type";
import { SegmentsType } from "./segments/segments-store-type";
import { BscsAccountsType } from "./bscs-accounts/bscs-accounts-store-type";
import { AccountMappingType } from "./bscs-to-sap-mappings/bscs-to-sap-mappings-store-type";
import { OrderMappingsType } from "./order-mappings/order-mappings-store-type";

import { PostUserInfoHandler, PostUserLoginHandler, PostUserLogoffHandler, UnauthorizedHandler } from "./auth/auth-reducer";
import { GetSystemVersionHandler } from "../api/api-handlers";
import { RequestPanelHandler, RequestPanelType } from "./request-panel-reducer";
import {
    DeleteDictionaryAccountSapHandler,
    GetDictionaryAccountSapHandler,
    PostDictionaryAccountSapHandler
} from "./sap-account/sap-account-reducer";
import {
    DeleteDictionarySegmentByIdHandler,
    GetDictionarySegmentHandler,
    PatchDictionarySegmentByIdHandler,
    PostDictionarySegmentHandler,
    SegmentPropertiesInReduxHandler
} from "./segments/segments-reducer";
import {
    DeleteOrderByStatusByReleaseByBscsAccountBySegmentHandler,
    GetOrderHandler,
    OrderMappingPropertiesInReduxHandler,
    PatchOrderByStatusByReleaseByBscsAccountBySegmentHandler,
    PostOrderHandler
} from "./order-mappings/order-mappings-reducer";
import { GetDictionaryAccountBscsHandler } from "./bscs-accounts/bscs-accounts-reducer";
import {
    DeleteAccountByStatusByReleaseByBscsAccountHandler,
    DeleteReleaseByReleaseHandler,
    GetAccount,
    PatchAccountByStatusByReleaseByBscsAccountHandler,
    PostAccountHandler,
    UsersBscsToSapMappings
} from "./bscs-to-sap-mappings/bscs-to-sap-mappings-reducer";

export type MainStateType = {
    auth: AuthType,
    segments: SegmentsType,
    backendInfo: any,
    sapAccountOfi: SapAccountStoreType,
    requestPanel: RequestPanelType,
    accountMapping: AccountMappingType,
    bscsAccounts: BscsAccountsType
}

export const mainReducer = combineReducers(
    // add reducers
    {
        auth: createReducer(new AuthType(), [
            UnauthorizedHandler(),
            PostUserLoginHandler(),
            PostUserInfoHandler(),
            PostUserLogoffHandler()
        ]),
        backendInfo: createReducer({ version: '?' }, [GetSystemVersionHandler()]),
        requestPanel: createReducer(new RequestPanelType(), [RequestPanelHandler()]),

        bscsAccounts: createReducer(new BscsAccountsType(), [GetDictionaryAccountBscsHandler()]),
        sapAccountOfi: createReducer(new SapAccountStoreType(),
            [
                GetDictionaryAccountSapHandler(),
                PostDictionaryAccountSapHandler(),
                DeleteDictionaryAccountSapHandler()
            ]),
        segments: createReducer(new SegmentsType(),
            [
                DeleteDictionarySegmentByIdHandler(),
                GetDictionarySegmentHandler(),
                PatchDictionarySegmentByIdHandler(),
                PostDictionarySegmentHandler(),
                SegmentPropertiesInReduxHandler()
            ]),
        accountMapping: createReducer(new AccountMappingType(),
            [
                UsersBscsToSapMappings(),
                GetAccount(),
                PostAccountHandler(),
                DeleteAccountByStatusByReleaseByBscsAccountHandler(),
                PatchAccountByStatusByReleaseByBscsAccountHandler(),
                DeleteReleaseByReleaseHandler()
            ]),
        orderMappings: createReducer(new OrderMappingsType(),
            [
                DeleteOrderByStatusByReleaseByBscsAccountBySegmentHandler(),
                GetOrderHandler(),
                PatchOrderByStatusByReleaseByBscsAccountBySegmentHandler(),
                PostOrderHandler(),
                OrderMappingPropertiesInReduxHandler()
            ])
    }
);