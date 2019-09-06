// call loginUser
const postUserLogin = (body:RequestSetUserLogin) => {
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


// call logoffUser
const postUserLogoff = (body:RequestSetUserLogoff) => {
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


// call createAccount
const postAccount = (body:RequestSetAccount) => {
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


// call doRelease
const postAccountRelease = () => {
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


// call createOrder
const postOrder = (body:RequestSetOrder) => {
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


// call createAccountDictBscs
const postDictionaryAccountBscs = (body:RequestSetAccountDictBscs) => {
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


// call createAccountDictSap
const postDictionaryAccountSap = (body:RequestSetAccountDictSap) => {
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


// call createSegment
const postDictionarySegment = (body:RequestSetSegment) => {
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


// call systemVersion
const getSystemVersion = () => {
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


// call systemStatus
const getSystemStatus = () => {
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


// call readAccountByStatusRelease
const getAccountByStatusByRelease = (status:Status15Enum,release:ReleaseEnum) => {
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


// call readOrderByStatusRelease
const getOrderByStatusByRelease = (status:Status15Enum,release:ReleaseEnum) => {
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


// call readAccountDictBscs
const getDictionaryAccountBscs = () => {
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


// call readAccountDictSap
const getDictionaryAccountSap = () => {
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


// call readSegment
const getDictionarySegment = () => {
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


// call updateAccount
const putAccountByStatusByReleaseByBscsAccount = (status:Status15Enum,release:ReleaseEnum,bscsAccount:string) => {
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


// call updateOrder
const putOrderByStatusByReleaseByBscsAccountBySegment = (status:Status15Enum,release:ReleaseEnum,bscsAccount:string,segment:string) => {
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


// call deleteAccountsAll
const deleteAccount = () => {
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


// call deleteAccount
const deleteAccountByStatusByReleaseByBscsAccount = (status:Status15Enum,release:ReleaseEnum,bscsAccount:string) => {
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


// call deleteOrdersAll
const deleteOrder = () => {
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


// call deleteOrder
const deleteOrderByStatusByReleaseByBscsAccountBySegment = (status:Status15Enum,release:ReleaseEnum,bscsAccount:string,segment:string) => {
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


// call deleteAccountDictBscs
const deleteDictionaryAccountBscs = () => {
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


// call deleteAccountDictSap
const deleteDictionaryAccountSap = () => {
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


// call deleteSegment
const deleteDictionarySegment = () => {
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

