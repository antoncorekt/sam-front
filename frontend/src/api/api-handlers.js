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