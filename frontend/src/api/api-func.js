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
ResultSetStatus,
GetAccountByStatusByReleaseQueryParams,
PutAccountByStatusByReleaseByBscsAccountQueryParams,
DeleteAccountByStatusByReleaseByBscsAccountQueryParams,
GetOrderByStatusByReleaseQueryParams,
PutOrderByStatusByReleaseByBscsAccountBySegmentQueryParams,
DeleteOrderByStatusByReleaseByBscsAccountBySegmentQueryParams} from './api-models.js'

import * as ACT from './api-actions-defs';
import {commonCallApi} from "./common-middleware";

// call Logs an user into the system and produces a JWT token
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


// call Logs an user off
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


// call Creates an account
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


// call Releases account, orders changing the status
export const PostAccountRelease = () => {
	const settings = {		// set settings data
		url:`/account/release`,
		httpMethod: 'POST',
		body:undefined,
		requestType: ACT.PostAccountReleaseRequest,
		successType: ACT.PostAccountReleaseSuccess,
		failType: ACT.PostAccountReleaseFail
	};
	return commonCallApi(settings); 
};


// call Creates an order
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


// call Creates an account description
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


// call Creates an account description
export const PostDictionaryAccountBscs = (body:RequestSetAccountDictBscs) => {
	const settings = {		// set settings data
		url:`/dictionary/account/bscs`,
		httpMethod: 'POST',
		body:JSON.stringify(body),
		requestType: ACT.PostDictionaryAccountBscsRequest,
		successType: ACT.PostDictionaryAccountBscsSuccess,
		failType: ACT.PostDictionaryAccountBscsFail
	};
	return commonCallApi(settings); 
};


// call Creates new segment
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


// call Provides basic system version info
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


// call Provides process statistics
export const GetSystemStatus = () => {
	const settings = {		// set settings data
		url:`/system/status`,
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetSystemStatusRequest,
		successType: ACT.GetSystemStatusSuccess,
		failType: ACT.GetSystemStatusFail
	};
	return commonCallApi(settings); 
};


// call Reads some accounts
export const GetAccountByStatusByRelease = (status:string,release:string) => {
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


// call Reads some orders
export const GetOrderByStatusByRelease = (status:string,release:string) => {
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


// call Reads all account descriptions
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


// call Reads all account descriptions
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


// call Reads all segments
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


// call Updates an account
export const PutAccountByStatusByReleaseByBscsAccount = (status:string,release:string,bscsAccount:string) => {
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


// call Updates an order
export const PutOrderByStatusByReleaseByBscsAccountBySegment = (status:string,release:string,bscsAccount:string,segment:string) => {
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


// call Deletes all accounts
export const DeleteAccount = () => {
	const settings = {		// set settings data
		url:`/account`,
		httpMethod: 'DELETE',
		body:undefined,
		requestType: ACT.DeleteAccountRequest,
		successType: ACT.DeleteAccountSuccess,
		failType: ACT.DeleteAccountFail
	};
	return commonCallApi(settings); 
};


// call Deletes an account
export const DeleteAccountByStatusByReleaseByBscsAccount = (status:string,release:string,bscsAccount:string) => {
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


// call Deletes all orders
export const DeleteOrder = () => {
	const settings = {		// set settings data
		url:`/order`,
		httpMethod: 'DELETE',
		body:undefined,
		requestType: ACT.DeleteOrderRequest,
		successType: ACT.DeleteOrderSuccess,
		failType: ACT.DeleteOrderFail
	};
	return commonCallApi(settings); 
};


// call Deletes an order
export const DeleteOrderByStatusByReleaseByBscsAccountBySegment = (status:string,release:string,bscsAccount:string,segment:string) => {
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


// call Deletes all account descriptions
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


// call Deletes all account descriptions
export const DeleteDictionaryAccountBscs = () => {
	const settings = {		// set settings data
		url:`/dictionary/account/bscs`,
		httpMethod: 'DELETE',
		body:undefined,
		requestType: ACT.DeleteDictionaryAccountBscsRequest,
		successType: ACT.DeleteDictionaryAccountBscsSuccess,
		failType: ACT.DeleteDictionaryAccountBscsFail
	};
	return commonCallApi(settings); 
};


// call Deletes all segments
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

