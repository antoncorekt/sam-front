import {
ResultSetOk,
ResultSetError,
ResultSetCount,
Segment,
RequestSetSegment,
ResultSetSegment,
ResultSetSegments,
Account,
RequestSetAccount,
ResultSetAccounts,
ResultSetAccount,
Order,
RequestSetOrder,
ResultSetOrder,
ResultSetOrders,
RequestSetUserLogin,
ResultSetUserLogin,
UserLogin,
UserLoginInfo,
RequestSetUserLogoff,
UserLogoff,
AccountDictSap,
RequestSetAccountDictSap,
ResultSetAccountDictSap,
ResultSetAccountDictSaps,
AccountDictBscs,
RequestSetAccountDictBscs,
ResultSetAccountDictBscs,
ResultSetAccountDictBscss,
ResultSetVersion,
GetAccountByStatusByReleaseQueryParams,
PutAccountByStatusByReleaseByBscsAccountQueryParams,
DeleteAccountByStatusByReleaseByBscsAccountQueryParams,
GetOrderByStatusByReleaseQueryParams,
PutOrderByStatusByReleaseByBscsAccountBySegmentQueryParams,
DeleteOrderByStatusByReleaseByBscsAccountBySegmentQueryParams} from './api-models.js'
import * as ACT from './api-actions-defs';
import {ActionRequestData, ActionResponseData, globalLoginContext} from "./common-middleware";
import {ResultSetStat, ResultSetUserInfo} from "./api-models";



export const GetSystemVersionHandler = () => {
    return {
        GetSystemVersionRequest:(state:any, action:ActionRequestData<null, null>)=>{
            return {...state, ...action};
        },
        GetSystemVersionSuccess:(state:any, action:ActionResponseData<ResultSetVersion,ActionRequestData<null, null>>)=>{
            return {...state, ...action, version: action.response.data.version};
        },
        GetSystemVersionFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
            return {...state, ...action};
        },
    }
};
export const GetSystemStatHandler = () => {
    return {
        GetSystemStatRequest:(state:any, action:ActionRequestData<null, null>)=>{
            return {...state, ...action};
        },
        GetSystemStatSuccess:(state:any, action:ActionResponseData<ResultSetStat,ActionRequestData<null, null>>)=>{
            return {...state, ...action};
        },
        GetSystemStatFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
            return {...state, ...action};
        },
    }
};
export const GetSystemHealthHandler = () => {
    return {
        GetSystemHealthRequest:(state:any, action:ActionRequestData<null, null>)=>{
            return {...state, ...action};
        },
        GetSystemHealthSuccess:(state:any, action:ActionResponseData<null,ActionRequestData<null, null>>)=>{
            return {...state, ...action};
        },
        GetSystemHealthFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
            return {...state, ...action};
        },
    }
};
export const PostUserLoginHandler = () => {
    return {
        PostUserLoginRequest:(state:any, action:ActionRequestData<RequestSetUserLogin, null>)=>{
            return {...state, login: action};
        },
        PostUserLoginSuccess:(state:any, action:ActionResponseData<ResultSetUserLogin,ActionRequestData<RequestSetUserLogin, null>>)=>{

            globalLoginContext.bearerToken = action.response.data.token;

            return {...state,
                login: action
            };
        },
        PostUserLoginFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<RequestSetUserLogin, null>>)=>{
            return {...state, login: action};
        },
    }
};
export const PostUserReloginHandler = () => {
    return {
        PostUserReloginRequest:(state:any, action:ActionRequestData<null, null>)=>{
            return {...state, ...action};
        },
        PostUserReloginSuccess:(state:any, action:ActionResponseData<ResultSetUserLogin,ActionRequestData<null, null>>)=>{
            return {...state, ...action};
        },
        PostUserReloginFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
            return {...state, ...action};
        },
    }
};
export const PostUserLogoffHandler = () => {
    return {
        PostUserLogoffRequest:(state:any, action:ActionRequestData<RequestSetUserLogoff, null>)=>{
            return {...state, logoutInfo:action};
        },
        PostUserLogoffSuccess:(state:any, action:ActionResponseData<ResultSetOk,ActionRequestData<RequestSetUserLogoff, null>>)=>{
            return {...state, logoutInfo:action};
        },
        PostUserLogoffFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<RequestSetUserLogoff, null>>)=>{
            return {...state, logoutInfo:action};
        },
    }
};
export const PostUserInfoHandler = () => {
    return {
        PostUserInfoRequest:(state:any, action:ActionRequestData<null, null>)=>{
            return {...state, logoutInfo: {}, userInfo: action};
        },
        PostUserInfoSuccess:(state:any, action:ActionResponseData<ResultSetUserInfo,ActionRequestData<null, null>>)=>{

            return {...state,
                    userInfo: action
                };
        },
        PostUserInfoFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
            return {...state, userInfo: action};
        },
    }
};
export const PostAccountHandler = () => {
    return {
        PostAccountRequest:(state:any, action:ActionRequestData<RequestSetAccount, null>)=>{
            return {...state, ...action};
        },
        PostAccountSuccess:(state:any, action:ActionResponseData<ResultSetAccount,ActionRequestData<RequestSetAccount, null>>)=>{
            return {...state, ...action};
        },
        PostAccountFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<RequestSetAccount, null>>)=>{
            return {...state, ...action};
        },
    }
};
export const GetAccountByStatusByReleaseHandler = () => {
    return {
        GetAccountByStatusByReleaseRequest:(state:any, action:ActionRequestData<null, GetAccountByStatusByReleaseQueryParams>)=>{
            return {...state, ...action};
        },
        GetAccountByStatusByReleaseSuccess:(state:any, action:ActionResponseData<ResultSetAccounts,ActionRequestData<null, GetAccountByStatusByReleaseQueryParams>>)=>{
            return {...state, ...action};
        },
        GetAccountByStatusByReleaseFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, GetAccountByStatusByReleaseQueryParams>>)=>{
            return {...state, ...action};
        },
    }
};
export const PutAccountByStatusByReleaseByBscsAccountHandler = () => {
    return {
        PutAccountByStatusByReleaseByBscsAccountRequest:(state:any, action:ActionRequestData<null, PutAccountByStatusByReleaseByBscsAccountQueryParams>)=>{
            return {...state, ...action};
        },
        PutAccountByStatusByReleaseByBscsAccountSuccess:(state:any, action:ActionResponseData<ResultSetAccounts,ActionRequestData<null, PutAccountByStatusByReleaseByBscsAccountQueryParams>>)=>{
            return {...state, ...action};
        },
        PutAccountByStatusByReleaseByBscsAccountFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, PutAccountByStatusByReleaseByBscsAccountQueryParams>>)=>{
            return {...state, ...action};
        },
    }
};
export const DeleteAccountByStatusByReleaseByBscsAccountHandler = () => {
    return {
        DeleteAccountByStatusByReleaseByBscsAccountRequest:(state:any, action:ActionRequestData<null, DeleteAccountByStatusByReleaseByBscsAccountQueryParams>)=>{
            return {...state, ...action};
        },
        DeleteAccountByStatusByReleaseByBscsAccountSuccess:(state:any, action:ActionResponseData<ResultSetCount,ActionRequestData<null, DeleteAccountByStatusByReleaseByBscsAccountQueryParams>>)=>{
            return {...state, ...action};
        },
        DeleteAccountByStatusByReleaseByBscsAccountFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, DeleteAccountByStatusByReleaseByBscsAccountQueryParams>>)=>{
            return {...state, ...action};
        },
    }
};
export const PostOrderHandler = () => {
    return {
        PostOrderRequest:(state:any, action:ActionRequestData<RequestSetOrder, null>)=>{
            return {...state, ...action};
        },
        PostOrderSuccess:(state:any, action:ActionResponseData<ResultSetOrder,ActionRequestData<RequestSetOrder, null>>)=>{
            return {...state, ...action};
        },
        PostOrderFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<RequestSetOrder, null>>)=>{
            return {...state, ...action};
        },
    }
};
export const GetOrderByStatusByReleaseHandler = () => {
    return {
        GetOrderByStatusByReleaseRequest:(state:any, action:ActionRequestData<null, GetOrderByStatusByReleaseQueryParams>)=>{
            return {...state, ...action};
        },
        GetOrderByStatusByReleaseSuccess:(state:any, action:ActionResponseData<ResultSetOrders,ActionRequestData<null, GetOrderByStatusByReleaseQueryParams>>)=>{
            return {...state, ...action};
        },
        GetOrderByStatusByReleaseFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, GetOrderByStatusByReleaseQueryParams>>)=>{
            return {...state, ...action};
        },
    }
};
export const PutOrderByStatusByReleaseByBscsAccountBySegmentHandler = () => {
    return {
        PutOrderByStatusByReleaseByBscsAccountBySegmentRequest:(state:any, action:ActionRequestData<null, PutOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>)=>{
            return {...state, ...action};
        },
        PutOrderByStatusByReleaseByBscsAccountBySegmentSuccess:(state:any, action:ActionResponseData<ResultSetOrders,ActionRequestData<null, PutOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>>)=>{
            return {...state, ...action};
        },
        PutOrderByStatusByReleaseByBscsAccountBySegmentFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, PutOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>>)=>{
            return {...state, ...action};
        },
    }
};
export const DeleteOrderByStatusByReleaseByBscsAccountBySegmentHandler = () => {
    return {
        DeleteOrderByStatusByReleaseByBscsAccountBySegmentRequest:(state:any, action:ActionRequestData<null, DeleteOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>)=>{
            return {...state, ...action};
        },
        DeleteOrderByStatusByReleaseByBscsAccountBySegmentSuccess:(state:any, action:ActionResponseData<ResultSetCount,ActionRequestData<null, DeleteOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>>)=>{
            return {...state, ...action};
        },
        DeleteOrderByStatusByReleaseByBscsAccountBySegmentFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, DeleteOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>>)=>{
            return {...state, ...action};
        },
    }
};
export const PostReleaseHandler = () => {
    return {
        PostReleaseRequest:(state:any, action:ActionRequestData<null, null>)=>{
            return {...state, ...action};
        },
        PostReleaseSuccess:(state:any, action:ActionResponseData<ResultSetOk,ActionRequestData<null, null>>)=>{
            return {...state, ...action};
        },
        PostReleaseFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
            return {...state, ...action};
        },
    }
};
export const GetDictionaryAccountBscsHandler = () => {
    return {
        GetDictionaryAccountBscsRequest:(state:any, action:ActionRequestData<null, null>)=>{
            return {...state, ...action};
        },
        GetDictionaryAccountBscsSuccess:(state:any, action:ActionResponseData<ResultSetAccountDictBscss,ActionRequestData<null, null>>)=>{
            return {...state, ...action};
        },
        GetDictionaryAccountBscsFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
            return {...state, ...action};
        },
    }
};
export const GetDictionaryAccountSapHandler = () => {
    return {
        GetDictionaryAccountSapRequest:(state:any, action:ActionRequestData<null, null>)=>{
            return {...state, ...action};
        },
        GetDictionaryAccountSapSuccess:(state:any, action:ActionResponseData<ResultSetAccountDictSaps,ActionRequestData<null, null>>)=>{
            return {...state, ...action};
        },
        GetDictionaryAccountSapFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
            return {...state, ...action};
        },
    }
};
export const PostDictionaryAccountSapHandler = () => {
    return {
        PostDictionaryAccountSapRequest:(state:any, action:ActionRequestData<File, null>)=>{
            return {...state, ...action};
        },
        PostDictionaryAccountSapSuccess:(state:any, action:ActionResponseData<ResultSetOk,ActionRequestData<File, null>>)=>{
            return {...state, ...action};
        },
        PostDictionaryAccountSapFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<File, null>>)=>{
            return {...state, ...action};
        },
    }
};
export const DeleteDictionaryAccountSapHandler = () => {
    return {
        DeleteDictionaryAccountSapRequest:(state:any, action:ActionRequestData<null, null>)=>{
            return {...state, ...action};
        },
        DeleteDictionaryAccountSapSuccess:(state:any, action:ActionResponseData<ResultSetCount,ActionRequestData<null, null>>)=>{
            return {...state, ...action};
        },
        DeleteDictionaryAccountSapFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
            return {...state, ...action};
        },
    }
};
export const GetDictionarySegmentHandler = () => {
    return {
        GetDictionarySegmentRequest:(state:any, action:ActionRequestData<null, null>)=>{
            return {...state, ...action};
        },
        GetDictionarySegmentSuccess:(state:any, action:ActionResponseData<ResultSetSegments,ActionRequestData<null, null>>)=>{
            return {...state, ...action};
        },
        GetDictionarySegmentFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
            return {...state, ...action};
        },
    }
};
export const PostDictionarySegmentHandler = () => {
    return {
        PostDictionarySegmentRequest:(state:any, action:ActionRequestData<RequestSetSegment, null>)=>{
            return {...state, ...action};
        },
        PostDictionarySegmentSuccess:(state:any, action:ActionResponseData<ResultSetSegment,ActionRequestData<RequestSetSegment, null>>)=>{
            return {...state, ...action};
        },
        PostDictionarySegmentFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<RequestSetSegment, null>>)=>{
            return {...state, ...action};
        },
    }
};
export const DeleteDictionarySegmentHandler = () => {
    return {
        DeleteDictionarySegmentRequest:(state:any, action:ActionRequestData<null, null>)=>{
            return {...state, ...action};
        },
        DeleteDictionarySegmentSuccess:(state:any, action:ActionResponseData<ResultSetCount,ActionRequestData<null, null>>)=>{
            return {...state, ...action};
        },
        DeleteDictionarySegmentFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
            return {...state, ...action};
        },
    }
};