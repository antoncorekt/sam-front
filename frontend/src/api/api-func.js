import { 
RequestSetUserLogin,
UserLogin,
ResultSetUserLogin,
UserLoginConf,
ResultSetUserInfo,
UserLoginInfo,
User,
RequestSetUserLogoff,
UserLogoffConf,
RequestSetAccount,
ResultSetAccount,
Account,
ResultSetAccounts,
AccountLog,
ResultSetAccountLogs,
RequestSetOrder,
ResultSetOrder,
Order,
OrderLog,
ResultSetOrders,
ResultSetOrderLogs,
RequestSetAccountDictSap,
AccountDictSap,
ResultSetAccountDictSap,
ResultSetAccountDictSaps,
RequestSetAccountDictBscs,
ResultSetAccountDictBscs,
AccountDictBscs,
ResultSetAccountDictBscss,
RequestSetSegment,
Segment,
ResultSetSegment,
ResultSetSegments,
ResultSetStat,
Stat,
ResultSetVersion,
Version,
ResultSetError,
ResultSetOk,
ResultSetCount,
GetAccountByStatusByReleaseQueryParams,
PutAccountByStatusByReleaseByBscsAccountQueryParams,
DeleteAccountByStatusByReleaseByBscsAccountQueryParams,
PatchAccountByStatusByReleaseByBscsAccountQueryParams,
GetAccountLogQueryParams,
GetOrderByStatusByReleaseQueryParams,
PutOrderByStatusByReleaseByBscsAccountBySegmentQueryParams,
DeleteOrderByStatusByReleaseByBscsAccountBySegmentQueryParams,
PatchOrderByStatusByReleaseByBscsAccountBySegmentQueryParams,
GetOrderLogQueryParams,
PostReleaseByReleaseQueryParams,
DeleteReleaseByReleaseQueryParams,
PutDictionarySegmentByIdQueryParams,
DeleteDictionarySegmentByIdQueryParams,
PatchDictionarySegmentByIdQueryParams} from './api-models.js';
import {Release, Status15} from "./api-models";
import {commonCallApi} from "./common-middleware";
import * as ACT from "./api-actions-defs";

// call UserLogin
export const PostUserLogin = (body:RequestSetUserLogin) => {
	const settings = {		// set settings data
		url:`/user/login`,
		contentType:'application/json',
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
		contentType:'application/json',
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
		contentType:'application/json',
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
		contentType:'application/json',
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
		contentType:'application/json',
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
        contentType:'application/json',
        httpMethod: 'POST',
        body:JSON.stringify(body),
        requestType: ACT.PostOrderRequest,
        successType: ACT.PostOrderSuccess,
        failType: ACT.PostOrderFail
    };
    return commonCallApi(settings);
};


// call ReleaseNew
export const PostReleaseNew = () => {
	const settings = {		// set settings data
		url:`/release/new`,
		contentType:'application/json',
		httpMethod: 'POST',
		body:undefined,
		requestType: ACT.PostReleaseNewRequest,
		successType: ACT.PostReleaseNewSuccess,
		failType: ACT.PostReleaseNewFail
	};
	return commonCallApi(settings); 
};


// call ReleaseAppend
export const PostReleaseByRelease = (release:Release) => {
	const settings = {		// set settings data
		url:`/release/${release}`,
		contentType:'application/json',
		httpMethod: 'POST',
		body:undefined,
		requestType: ACT.PostReleaseByReleaseRequest,
		successType: ACT.PostReleaseByReleaseSuccess,
		failType: ACT.PostReleaseByReleaseFail
	};
	return commonCallApi(settings);
};


// call DictionaryAccountSapCreate
export const PostDictionaryAccountSap = (body:File) => {
    const settings = {    // set settings data
        url:`/dictionary/account/sap`,
        contentType:'application/xlsx',
        httpMethod: 'POST',
        body:body,
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
		contentType:'application/json',
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
		contentType:'application/json',
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
		contentType:'application/json',
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
		contentType:'application/json',
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetSystemHealthRequest,
		successType: ACT.GetSystemHealthSuccess,
		failType: ACT.GetSystemHealthFail
	};
	return commonCallApi(settings); 
};


// call AccountReadActiveAll
export const GetAccount = () => {
	const settings = {		// set settings data
		url:`/account`,
		contentType:'application/json',
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetAccountRequest,
		successType: ACT.GetAccountSuccess,
		failType: ACT.GetAccountFail
	};
	return commonCallApi(settings); 
};


// call AccountReadAll
export const GetAccountByStatusByRelease = (status:Status15,release:Release) => {
	const settings = {		// set settings data
		url:`/account/${status}/${release}`,
		contentType:'application/json',
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetAccountByStatusByReleaseRequest,
		successType: ACT.GetAccountByStatusByReleaseSuccess,
		failType: ACT.GetAccountByStatusByReleaseFail
	};
	return commonCallApi(settings); 
};


// call AccountReadLog
export const GetAccountLog = (account:string) => {
	const settings = {		// set settings data
		url:`/account/log/${account}`,
		contentType:'application/json',
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetAccountLogRequest,
		successType: ACT.GetAccountLogSuccess,
		failType: ACT.GetAccountLogFail
	};
	return commonCallApi(settings); 
};


// call OrderReadActiveAll
export const GetOrder = () => {
	const settings = {		// set settings data
		url:`/order`,
		contentType:'application/json',
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetOrderRequest,
		successType: ACT.GetOrderSuccess,
		failType: ACT.GetOrderFail
	};
	return commonCallApi(settings); 
};


// call OrderReadAll
export const GetOrderByStatusByRelease = (status:Status15,release:Release) => {
	const settings = {		// set settings data
		url:`/order/${status}/${release}`,
		contentType:'application/json',
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetOrderByStatusByReleaseRequest,
		successType: ACT.GetOrderByStatusByReleaseSuccess,
		failType: ACT.GetOrderByStatusByReleaseFail
	};
	return commonCallApi(settings); 
};


// call OrderReadLog
export const GetOrderLog = (account:string) => {
	const settings = {		// set settings data
		url:`/order/log`,
		contentType:'application/json',
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetOrderLogRequest,
		successType: ACT.GetOrderLogSuccess,
		failType: ACT.GetOrderLogFail
	};
	return commonCallApi(settings); 
};


// call DictionaryAccountBscsReadAll
export const GetDictionaryAccountBscs = () => {
	const settings = {		// set settings data
		url:`/dictionary/account/bscs`,
		contentType:'application/json',
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
		contentType:'application/json',
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
		contentType:'application/json',
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetDictionarySegmentRequest,
		successType: ACT.GetDictionarySegmentSuccess,
		failType: ACT.GetDictionarySegmentFail
	};
	return commonCallApi(settings); 
};


// call AccountUpdateOne
export const PutAccountByStatusByReleaseByBscsAccount = (status:Status15,release:Release,bscsAccount:string) => {
	const settings = {		// set settings data
		url:`/account/${status}/${release}/${bscsAccount}`,
		contentType:'application/json',
		httpMethod: 'PUT',
		body:undefined,
		requestType: ACT.PutAccountByStatusByReleaseByBscsAccountRequest,
		successType: ACT.PutAccountByStatusByReleaseByBscsAccountSuccess,
		failType: ACT.PutAccountByStatusByReleaseByBscsAccountFail
	};
	return commonCallApi(settings); 
};


// call OrderUpdateOne
export const PutOrderByStatusByReleaseByBscsAccountBySegment = (status:Status15,release:Release,bscsAccount:string,segment:string) => {
	const settings = {		// set settings data
		url:`/order/${status}/${release}/${bscsAccount}/${segment}`,
		contentType:'application/json',
		httpMethod: 'PUT',
		body:undefined,
		requestType: ACT.PutOrderByStatusByReleaseByBscsAccountBySegmentRequest,
		successType: ACT.PutOrderByStatusByReleaseByBscsAccountBySegmentSuccess,
		failType: ACT.PutOrderByStatusByReleaseByBscsAccountBySegmentFail
	};
	return commonCallApi(settings); 
};


// call DictionarySegmentUpdateOne
export const PutDictionarySegmentById = (id:string) => {
	const settings = {		// set settings data
		url:`/dictionary/segment/${id}`,
		contentType:'application/json',
		httpMethod: 'PUT',
		body:undefined,
		requestType: ACT.PutDictionarySegmentByIdRequest,
		successType: ACT.PutDictionarySegmentByIdSuccess,
		failType: ACT.PutDictionarySegmentByIdFail
	};
	return commonCallApi(settings); 
};


// call AccountUpdateAttributes
export const PatchAccountByStatusByReleaseByBscsAccount = (status:Status15,release:Release,bscsAccount:string, requestSetAccount: RequestSetAccount) => {
	const settings = {		// set settings data
		url:`/account/${status}/${release}/${bscsAccount}`,
		contentType:'application/json',
		httpMethod: 'PATCH',
		body:JSON.stringify(requestSetAccount),
		requestType: ACT.PatchAccountByStatusByReleaseByBscsAccountRequest,
		successType: ACT.PatchAccountByStatusByReleaseByBscsAccountSuccess,
		failType: ACT.PatchAccountByStatusByReleaseByBscsAccountFail
	};
	return commonCallApi(settings); 
};


// call OrderUpdateAttributesOne
export const PatchOrderByStatusByReleaseByBscsAccountBySegment = (status:Status15, release:Release, bscsAccount:string, segment:string, body:RequestSetOrder) => {
	const settings = {		// set settings data
		url:`/order/${status}/${release}/${bscsAccount}/${segment}`,
		contentType:'application/json',
		httpMethod: 'PATCH',
		body:JSON.stringify(body),
		requestType: ACT.PatchOrderByStatusByReleaseByBscsAccountBySegmentRequest,
		successType: ACT.PatchOrderByStatusByReleaseByBscsAccountBySegmentSuccess,
		failType: ACT.PatchOrderByStatusByReleaseByBscsAccountBySegmentFail
	};
	return commonCallApi(settings); 
};


// call DictionarySegmentUpdateAttributes
export const PatchDictionarySegmentById = (id:string, body:RequestSetSegment) => {
	const settings = {		// set settings data
		url:`/dictionary/segment/${id}`,
		contentType:'application/json',
		httpMethod: 'PATCH',
		body:JSON.stringify(body),
		requestType: ACT.PatchDictionarySegmentByIdRequest,
		successType: ACT.PatchDictionarySegmentByIdSuccess,
		failType: ACT.PatchDictionarySegmentByIdFail
	};
	return commonCallApi(settings); 
};


// call AccountDeleteAll
export const DeleteAccount = () => {
	const settings = {		// set settings data
		url:`/account`,
		contentType:'application/json',
		httpMethod: 'DELETE',
		body:undefined,
		requestType: ACT.DeleteAccountRequest,
		successType: ACT.DeleteAccountSuccess,
		failType: ACT.DeleteAccountFail
	};
	return commonCallApi(settings); 
};


// call AccountDeleteOne
export const DeleteAccountByStatusByReleaseByBscsAccount = (status:Status15,release:Release,bscsAccount:string) => {
	const settings = {		// set settings data
		url:`/account/${status}/${release}/${bscsAccount}`,
		contentType:'application/json',
		httpMethod: 'DELETE',
		body:undefined,
		requestType: ACT.DeleteAccountByStatusByReleaseByBscsAccountRequest,
		successType: ACT.DeleteAccountByStatusByReleaseByBscsAccountSuccess,
		failType: ACT.DeleteAccountByStatusByReleaseByBscsAccountFail
	};
	return commonCallApi(settings); 
};


// call OrderDeleteAll
export const DeleteOrder = () => {
	const settings = {		// set settings data
		url:`/order`,
		contentType:'application/json',
		httpMethod: 'DELETE',
		body:undefined,
		requestType: ACT.DeleteOrderRequest,
		successType: ACT.DeleteOrderSuccess,
		failType: ACT.DeleteOrderFail
	};
	return commonCallApi(settings); 
};


// call OrderDeleteOne
export const DeleteOrderByStatusByReleaseByBscsAccountBySegment = (status:Status15,release:Release,bscsAccount:string,segment:string) => {
	const settings = {		// set settings data
		url:`/order/${status}/${release}/${bscsAccount}/${segment}`,
		contentType:'application/json',
		httpMethod: 'DELETE',
		body:undefined,
		requestType: ACT.DeleteOrderByStatusByReleaseByBscsAccountBySegmentRequest,
		successType: ACT.DeleteOrderByStatusByReleaseByBscsAccountBySegmentSuccess,
		failType: ACT.DeleteOrderByStatusByReleaseByBscsAccountBySegmentFail
	};
	return commonCallApi(settings); 
};


// call ReleaseRevoke
export const DeleteReleaseByRelease = (release:Release) => {
	const settings = {		// set settings data
		url:`/release/${release}`,
		contentType:'application/json',
		httpMethod: 'DELETE',
		body:undefined,
		requestType: ACT.DeleteReleaseByReleaseRequest,
		successType: ACT.DeleteReleaseByReleaseSuccess,
		failType: ACT.DeleteReleaseByReleaseFail
	};
	return commonCallApi(settings); 
};


// call DictionaryAccountSapDeleteAll
export const DeleteDictionaryAccountSap = () => {
	const settings = {		// set settings data
		url:`/dictionary/account/sap`,
		contentType:'application/json',
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
		contentType:'application/json',
		httpMethod: 'DELETE',
		body:undefined,
		requestType: ACT.DeleteDictionarySegmentRequest,
		successType: ACT.DeleteDictionarySegmentSuccess,
		failType: ACT.DeleteDictionarySegmentFail
	};
	return commonCallApi(settings); 
};


// call DictionarySegmentDeleteOne
export const DeleteDictionarySegmentById = (id:string) => {
	const settings = {		// set settings data
		url:`/dictionary/segment/${id}`,
		contentType:'application/json',
		httpMethod: 'DELETE',
		body:undefined,
		requestType: ACT.DeleteDictionarySegmentByIdRequest,
		successType: ACT.DeleteDictionarySegmentByIdSuccess,
		failType: ACT.DeleteDictionarySegmentByIdFail
	};
	return commonCallApi(settings); 
};

