import {
	RequestSetSegment,
	Account,
	Order,
	ResultSetUserLogin,
	RequestSetAccountDictBscs,
	RequestSetAccount,
	ResultSetAccount,
	UserLogoff,
	ResultSetOrder,
	Segment,
	ResultSetCount,
	RequestSetAccountDictSap,
	Stat,
	ResultSetStat,
	ResultSetAccountDictSap,
	Version,
	ResultSetVersion,
	ResultSetOk,
	ResultSetSegment,
	ResultSetAccountDictBscs,
	UserLogin,
	ResultSetOrders,
	ResultSetAccountDictSaps,
	ResultSetAccounts,
	AccountDictSap,
	AccountDictBscs,
	ResultSetSegments,
	RequestSetUserLogoff,
	RequestSetUserLogin,
	RequestSetOrder,
	ResultSetAccountDictBscss,
	ResultSetError,
	UserLoginInfo,
	GetAccountByStatusByReleaseQueryParams,
	PutAccountByStatusByReleaseByBscsAccountQueryParams,
	DeleteAccountByStatusByReleaseByBscsAccountQueryParams,
	GetOrderByStatusByReleaseQueryParams,
	PutOrderByStatusByReleaseByBscsAccountBySegmentQueryParams,
	DeleteOrderByStatusByReleaseByBscsAccountBySegmentQueryParams} from './api-models.js'
import {commonCallApi} from "./common-middleware";
import * as ACT from "./api-actions-defs";
import {ReleaseEnum, Status15Enum} from "./api-models";

export const PostUserLogin = (body:RequestSetUserLogin) => {
    const settings = {		// set settings data
        url:`/user/login`,
        httpMethod: 'POST',
        body:JSON.stringify(body),
        requestType: ACT.PostUserLoginRequest,
        successType: ACT.PostUserLoginSuccess,
        failType: ACT.PostUserLoginFail
    };
    return commonCallApi(settings);
};


// call UserRelogin
export const PostUserRelogin = () => {
    const settings = {		// set settings data
        url:`/user/relogin`,
        httpMethod: 'POST',
        body:undefined,
        requestType: ACT.PostUserReloginRequest,
        successType: ACT.PostUserReloginSuccess,
        failType: ACT.PostUserReloginFail
    };
    return commonCallApi(settings);
};


// call UserLogoff
export const PostUserLogoff = (body:RequestSetUserLogoff) => {
    const settings = {		// set settings data
        url:`/user/logoff`,
        httpMethod: 'POST',
        body:JSON.stringify(body),
        requestType: ACT.PostUserLogoffRequest,
        successType: ACT.PostUserLogoffSuccess,
        failType: ACT.PostUserLogoffFail
    };
    return commonCallApi(settings);
};


// call UserInfo
export const PostUserInfo = () => {
    const settings = {		// set settings data
        url:`/user/info`,
        httpMethod: 'POST',
        body:undefined,
        requestType: ACT.PostUserInfoRequest,
        successType: ACT.PostUserInfoSuccess,
        failType: ACT.PostUserInfoFail
    };
    return commonCallApi(settings);
};


// call AccountCreateOne
export const PostAccount = (body:RequestSetAccount) => {
    const settings = {		// set settings data
        url:`/account`,
        httpMethod: 'POST',
        body:JSON.stringify(body),
        requestType: ACT.PostAccountRequest,
        successType: ACT.PostAccountSuccess,
        failType: ACT.PostAccountFail
    };
    return commonCallApi(settings);
};


// call OrderCreateOne
export const PostOrder = (body:RequestSetOrder) => {
    const settings = {		// set settings data
        url:`/order`,
        httpMethod: 'POST',
        body:JSON.stringify(body),
        requestType: ACT.PostOrderRequest,
        successType: ACT.PostOrderSuccess,
        failType: ACT.PostOrderFail
    };
    return commonCallApi(settings);
};


// call Release
export const PostRelease = () => {
    const settings = {		// set settings data
        url:`/release`,
        httpMethod: 'POST',
        body:undefined,
        requestType: ACT.PostReleaseRequest,
        successType: ACT.PostReleaseSuccess,
        failType: ACT.PostReleaseFail
    };
    return commonCallApi(settings);
};


// call DictionaryAccountSapCreate
export const PostDictionaryAccountSap = (body:RequestSetAccountDictSap) => {
    const settings = {		// set settings data
        url:`/dictionary/account/sap`,
        httpMethod: 'POST',
        body:JSON.stringify(body),
        requestType: ACT.PostDictionaryAccountSapRequest,
        successType: ACT.PostDictionaryAccountSapSuccess,
        failType: ACT.PostDictionaryAccountSapFail
    };
    return commonCallApi(settings);
};


// call DictionarySegmentCreate
export const PostDictionarySegment = (body:RequestSetSegment) => {
    const settings = {		// set settings data
        url:`/dictionary/segment`,
        httpMethod: 'POST',
        body:JSON.stringify(body),
        requestType: ACT.PostDictionarySegmentRequest,
        successType: ACT.PostDictionarySegmentSuccess,
        failType: ACT.PostDictionarySegmentFail
    };
    return commonCallApi(settings);
};


// call SystemVersion
export const GetSystemVersion = () => {
    const settings = {		// set settings data
        url:`/system/version`,
        httpMethod: 'GET',
        body:undefined,
        requestType: ACT.GetSystemVersionRequest,
        successType: ACT.GetSystemVersionSuccess,
        failType: ACT.GetSystemVersionFail
    };
    return commonCallApi(settings);
};


// call SystemStatus
export const GetSystemStat = () => {
    const settings = {		// set settings data
        url:`/system/stat`,
        httpMethod: 'GET',
        body:undefined,
        requestType: ACT.GetSystemStatRequest,
        successType: ACT.GetSystemStatSuccess,
        failType: ACT.GetSystemStatFail
    };
    return commonCallApi(settings);
};


// call SystemHealth
export const GetSystemHealth = () => {
    const settings = {		// set settings data
        url:`/system/health`,
        httpMethod: 'GET',
        body:undefined,
        requestType: ACT.GetSystemHealthRequest,
        successType: ACT.GetSystemHealthSuccess,
        failType: ACT.GetSystemHealthFail
    };
    return commonCallApi(settings);
};


// call AccountReadAll
export const GetAccountByStatusByRelease = (status:Status15Enum,release:ReleaseEnum) => {
    const settings = {		// set settings data
        url:`/account/${status}/${release}`,
        httpMethod: 'GET',
        body:undefined,
        requestType: ACT.GetAccountByStatusByReleaseRequest,
        successType: ACT.GetAccountByStatusByReleaseSuccess,
        failType: ACT.GetAccountByStatusByReleaseFail
    };
    return commonCallApi(settings);
};


// call OrderReadSome
export const GetOrderByStatusByRelease = (status:Status15Enum,release:ReleaseEnum) => {
    const settings = {		// set settings data
        url:`/order/${status}/${release}`,
        httpMethod: 'GET',
        body:undefined,
        requestType: ACT.GetOrderByStatusByReleaseRequest,
        successType: ACT.GetOrderByStatusByReleaseSuccess,
        failType: ACT.GetOrderByStatusByReleaseFail
    };
    return commonCallApi(settings);
};


// call DictionaryAccountBscsReadAll
export const GetDictionaryAccountBscs = () => {
    const settings = {		// set settings data
        url:`/dictionary/account/bscs`,
        httpMethod: 'GET',
        body:undefined,
        requestType: ACT.GetDictionaryAccountBscsRequest,
        successType: ACT.GetDictionaryAccountBscsSuccess,
        failType: ACT.GetDictionaryAccountBscsFail
    };
    return commonCallApi(settings);
};


// call DictionaryAccountSapReadAll
export const GetDictionaryAccountSap = () => {
    const settings = {		// set settings data
        url:`/dictionary/account/sap`,
        httpMethod: 'GET',
        body:undefined,
        requestType: ACT.GetDictionaryAccountSapRequest,
        successType: ACT.GetDictionaryAccountSapSuccess,
        failType: ACT.GetDictionaryAccountSapFail
    };
    return commonCallApi(settings);
};


// call DictionarySegmentReadAll
export const GetDictionarySegment = () => {
    const settings = {		// set settings data
        url:`/dictionary/segment`,
        httpMethod: 'GET',
        body:undefined,
        requestType: ACT.GetDictionarySegmentRequest,
        successType: ACT.GetDictionarySegmentSuccess,
        failType: ACT.GetDictionarySegmentFail
    };
    return commonCallApi(settings);
};


// call AccountReadSome
export const PutAccountByStatusByReleaseByBscsAccount = (status:Status15Enum,release:ReleaseEnum,bscsAccount:string) => {
    const settings = {		// set settings data
        url:`/account/${status}/${release}/${bscsAccount}`,
        httpMethod: 'PUT',
        body:undefined,
        requestType: ACT.PutAccountByStatusByReleaseByBscsAccountRequest,
        successType: ACT.PutAccountByStatusByReleaseByBscsAccountSuccess,
        failType: ACT.PutAccountByStatusByReleaseByBscsAccountFail
    };
    return commonCallApi(settings);
};


// call OrderUpdateOne
export const PutOrderByStatusByReleaseByBscsAccountBySegment = (status:Status15Enum,release:ReleaseEnum,bscsAccount:string,segment:string) => {
    const settings = {		// set settings data
        url:`/order/${status}/${release}/${bscsAccount}/${segment}`,
        httpMethod: 'PUT',
        body:undefined,
        requestType: ACT.PutOrderByStatusByReleaseByBscsAccountBySegmentRequest,
        successType: ACT.PutOrderByStatusByReleaseByBscsAccountBySegmentSuccess,
        failType: ACT.PutOrderByStatusByReleaseByBscsAccountBySegmentFail
    };
    return commonCallApi(settings);
};


// call AccountDeleteOne
export const DeleteAccountByStatusByReleaseByBscsAccount = (status:Status15Enum,release:ReleaseEnum,bscsAccount:string) => {
    const settings = {		// set settings data
        url:`/account/${status}/${release}/${bscsAccount}`,
        httpMethod: 'DELETE',
        body:undefined,
        requestType: ACT.DeleteAccountByStatusByReleaseByBscsAccountRequest,
        successType: ACT.DeleteAccountByStatusByReleaseByBscsAccountSuccess,
        failType: ACT.DeleteAccountByStatusByReleaseByBscsAccountFail
    };
    return commonCallApi(settings);
};


// call OrderDeleteOne
export const DeleteOrderByStatusByReleaseByBscsAccountBySegment = (status:Status15Enum,release:ReleaseEnum,bscsAccount:string,segment:string) => {
    const settings = {		// set settings data
        url:`/order/${status}/${release}/${bscsAccount}/${segment}`,
        httpMethod: 'DELETE',
        body:undefined,
        requestType: ACT.DeleteOrderByStatusByReleaseByBscsAccountBySegmentRequest,
        successType: ACT.DeleteOrderByStatusByReleaseByBscsAccountBySegmentSuccess,
        failType: ACT.DeleteOrderByStatusByReleaseByBscsAccountBySegmentFail
    };
    return commonCallApi(settings);
};


// call DictionaryAccountSapDeleteAll
export const DeleteDictionaryAccountSap = () => {
    const settings = {		// set settings data
        url:`/dictionary/account/sap`,
        httpMethod: 'DELETE',
        body:undefined,
        requestType: ACT.DeleteDictionaryAccountSapRequest,
        successType: ACT.DeleteDictionaryAccountSapSuccess,
        failType: ACT.DeleteDictionaryAccountSapFail
    };
    return commonCallApi(settings);
};


// call DictionarySegmentDeleteAll
export const DeleteDictionarySegment = () => {
    const settings = {		// set settings data
        url:`/dictionary/segment`,
        httpMethod: 'DELETE',
        body:undefined,
        requestType: ACT.DeleteDictionarySegmentRequest,
        successType: ACT.DeleteDictionarySegmentSuccess,
        failType: ACT.DeleteDictionarySegmentFail
    };
    return commonCallApi(settings);
};

