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
RequestSetOrder,
ResultSetOrder,
Order,
ResultSetOrders,
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
GetOrderByStatusByReleaseQueryParams,
PutOrderByStatusByReleaseByBscsAccountBySegmentQueryParams,
DeleteOrderByStatusByReleaseByBscsAccountBySegmentQueryParams} from './api-models.js'
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


// call Release
export const PostRelease = () => {
	const settings = {		// set settings data
		url:`/release`,
		contentType:'application/json',
		httpMethod: 'POST',
		body:undefined,
		requestType: ACT.PostReleaseRequest,
		successType: ACT.PostReleaseSuccess,
		failType: ACT.PostReleaseFail
	};
	return commonCallApi(settings); 
};


// call DictionaryAccountSapCreateExcel
export const PostDictionaryAccountSap = (body:File) => {
	const settings = {		// set settings data
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


// call OrderReadSome
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


// call AccountReadSome
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

