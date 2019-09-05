// call loginUser
const postUserLogin = (body:RequestSetUserLogin) => {
	const settings = {		// set settings data
		url:`/user/login`,
		httpMethod: 'POST',
		body:JSON.stringify(body),
		requestType: 'PostUserLoginRequest',
		successType: 'PostUserLoginSuccess',
		failType: 'PostUserLoginFail'
	};
	return commonCallApi(settings); 
};


// call logoffUser
const postUserLogoff = (body:RequestSetUserLogoff) => {
	const settings = {		// set settings data
		url:`/user/logoff`,
		httpMethod: 'POST',
		body:JSON.stringify(body),
		requestType: 'PostUserLogoffRequest',
		successType: 'PostUserLogoffSuccess',
		failType: 'PostUserLogoffFail'
	};
	return commonCallApi(settings); 
};


// call createAccount
const postAccount = (body:RequestSetAccount) => {
	const settings = {		// set settings data
		url:`/account`,
		httpMethod: 'POST',
		body:JSON.stringify(body),
		requestType: 'PostAccountRequest',
		successType: 'PostAccountSuccess',
		failType: 'PostAccountFail'
	};
	return commonCallApi(settings); 
};


// call doRelease
const postAccountRelease = () => {
	const settings = {		// set settings data
		url:`/account/release`,
		httpMethod: 'POST',
		body:undefined,
		requestType: 'PostAccountReleaseRequest',
		successType: 'PostAccountReleaseSuccess',
		failType: 'PostAccountReleaseFail'
	};
	return commonCallApi(settings); 
};


// call createOrder
const postOrder = (body:RequestSetOrder) => {
	const settings = {		// set settings data
		url:`/order`,
		httpMethod: 'POST',
		body:JSON.stringify(body),
		requestType: 'PostOrderRequest',
		successType: 'PostOrderSuccess',
		failType: 'PostOrderFail'
	};
	return commonCallApi(settings); 
};


// call createAccountDictBscs
const postDictionaryAccountBscs = (body:RequestSetAccountDictBscs) => {
	const settings = {		// set settings data
		url:`/dictionary/account/bscs`,
		httpMethod: 'POST',
		body:JSON.stringify(body),
		requestType: 'PostDictionaryAccountBscsRequest',
		successType: 'PostDictionaryAccountBscsSuccess',
		failType: 'PostDictionaryAccountBscsFail'
	};
	return commonCallApi(settings); 
};


// call createAccountDictSap
const postDictionaryAccountSap = (body:RequestSetAccountDictSap) => {
	const settings = {		// set settings data
		url:`/dictionary/account/sap`,
		httpMethod: 'POST',
		body:JSON.stringify(body),
		requestType: 'PostDictionaryAccountSapRequest',
		successType: 'PostDictionaryAccountSapSuccess',
		failType: 'PostDictionaryAccountSapFail'
	};
	return commonCallApi(settings); 
};


// call createSegment
const postDictionarySegment = (body:RequestSetSegment) => {
	const settings = {		// set settings data
		url:`/dictionary/segment`,
		httpMethod: 'POST',
		body:JSON.stringify(body),
		requestType: 'PostDictionarySegmentRequest',
		successType: 'PostDictionarySegmentSuccess',
		failType: 'PostDictionarySegmentFail'
	};
	return commonCallApi(settings); 
};


// call systemVersion
const getSystemVersion = () => {
	const settings = {		// set settings data
		url:`/system/version`,
		httpMethod: 'GET',
		body:undefined,
		requestType: 'GetSystemVersionRequest',
		successType: 'GetSystemVersionSuccess',
		failType: 'GetSystemVersionFail'
	};
	return commonCallApi(settings); 
};


// call systemStatus
const getSystemStatus = () => {
	const settings = {		// set settings data
		url:`/system/status`,
		httpMethod: 'GET',
		body:undefined,
		requestType: 'GetSystemStatusRequest',
		successType: 'GetSystemStatusSuccess',
		failType: 'GetSystemStatusFail'
	};
	return commonCallApi(settings); 
};


// call readAccountByStatusRelease
const getAccountByStatusByRelease = (status:string,release:string) => {
	const settings = {		// set settings data
		url:`/account/${status}/${release}`,
		httpMethod: 'GET',
		body:undefined,
		requestType: 'GetAccountByStatusByReleaseRequest',
		successType: 'GetAccountByStatusByReleaseSuccess',
		failType: 'GetAccountByStatusByReleaseFail'
	};
	return commonCallApi(settings); 
};


// call readOrderByStatusRelease
const getOrderByStatusByRelease = (status:string,release:string) => {
	const settings = {		// set settings data
		url:`/order/${status}/${release}`,
		httpMethod: 'GET',
		body:undefined,
		requestType: 'GetOrderByStatusByReleaseRequest',
		successType: 'GetOrderByStatusByReleaseSuccess',
		failType: 'GetOrderByStatusByReleaseFail'
	};
	return commonCallApi(settings); 
};


// call readAccountDictBscs
const getDictionaryAccountBscs = () => {
	const settings = {		// set settings data
		url:`/dictionary/account/bscs`,
		httpMethod: 'GET',
		body:undefined,
		requestType: 'GetDictionaryAccountBscsRequest',
		successType: 'GetDictionaryAccountBscsSuccess',
		failType: 'GetDictionaryAccountBscsFail'
	};
	return commonCallApi(settings); 
};


// call readAccountDictSap
const getDictionaryAccountSap = () => {
	const settings = {		// set settings data
		url:`/dictionary/account/sap`,
		httpMethod: 'GET',
		body:undefined,
		requestType: 'GetDictionaryAccountSapRequest',
		successType: 'GetDictionaryAccountSapSuccess',
		failType: 'GetDictionaryAccountSapFail'
	};
	return commonCallApi(settings); 
};


// call readSegment
const getDictionarySegment = () => {
	const settings = {		// set settings data
		url:`/dictionary/segment`,
		httpMethod: 'GET',
		body:undefined,
		requestType: 'GetDictionarySegmentRequest',
		successType: 'GetDictionarySegmentSuccess',
		failType: 'GetDictionarySegmentFail'
	};
	return commonCallApi(settings); 
};


// call updateAccount
const putAccountByStatusByReleaseByBscsAccount = (status:string,release:string,bscsAccount:string) => {
	const settings = {		// set settings data
		url:`/account/${status}/${release}/${bscsAccount}`,
		httpMethod: 'PUT',
		body:undefined,
		requestType: 'PutAccountByStatusByReleaseByBscsAccountRequest',
		successType: 'PutAccountByStatusByReleaseByBscsAccountSuccess',
		failType: 'PutAccountByStatusByReleaseByBscsAccountFail'
	};
	return commonCallApi(settings); 
};


// call updateOrder
const putOrderByStatusByReleaseByBscsAccountBySegment = (status:string,release:string,bscsAccount:string,segment:string) => {
	const settings = {		// set settings data
		url:`/order/${status}/${release}/${bscsAccount}/${segment}`,
		httpMethod: 'PUT',
		body:undefined,
		requestType: 'PutOrderByStatusByReleaseByBscsAccountBySegmentRequest',
		successType: 'PutOrderByStatusByReleaseByBscsAccountBySegmentSuccess',
		failType: 'PutOrderByStatusByReleaseByBscsAccountBySegmentFail'
	};
	return commonCallApi(settings); 
};


// call deleteAccountsAll
const deleteAccount = () => {
	const settings = {		// set settings data
		url:`/account`,
		httpMethod: 'DELETE',
		body:undefined,
		requestType: 'DeleteAccountRequest',
		successType: 'DeleteAccountSuccess',
		failType: 'DeleteAccountFail'
	};
	return commonCallApi(settings); 
};


// call deleteAccount
const deleteAccountByStatusByReleaseByBscsAccount = (status:string,release:string,bscsAccount:string) => {
	const settings = {		// set settings data
		url:`/account/${status}/${release}/${bscsAccount}`,
		httpMethod: 'DELETE',
		body:undefined,
		requestType: 'DeleteAccountByStatusByReleaseByBscsAccountRequest',
		successType: 'DeleteAccountByStatusByReleaseByBscsAccountSuccess',
		failType: 'DeleteAccountByStatusByReleaseByBscsAccountFail'
	};
	return commonCallApi(settings); 
};


// call deleteOrdersAll
const deleteOrder = () => {
	const settings = {		// set settings data
		url:`/order`,
		httpMethod: 'DELETE',
		body:undefined,
		requestType: 'DeleteOrderRequest',
		successType: 'DeleteOrderSuccess',
		failType: 'DeleteOrderFail'
	};
	return commonCallApi(settings); 
};


// call deleteOrder
const deleteOrderByStatusByReleaseByBscsAccountBySegment = (status:string,release:string,bscsAccount:string,segment:string) => {
	const settings = {		// set settings data
		url:`/order/${status}/${release}/${bscsAccount}/${segment}`,
		httpMethod: 'DELETE',
		body:undefined,
		requestType: 'DeleteOrderByStatusByReleaseByBscsAccountBySegmentRequest',
		successType: 'DeleteOrderByStatusByReleaseByBscsAccountBySegmentSuccess',
		failType: 'DeleteOrderByStatusByReleaseByBscsAccountBySegmentFail'
	};
	return commonCallApi(settings); 
};


// call deleteAccountDictBscs
const deleteDictionaryAccountBscs = () => {
	const settings = {		// set settings data
		url:`/dictionary/account/bscs`,
		httpMethod: 'DELETE',
		body:undefined,
		requestType: 'DeleteDictionaryAccountBscsRequest',
		successType: 'DeleteDictionaryAccountBscsSuccess',
		failType: 'DeleteDictionaryAccountBscsFail'
	};
	return commonCallApi(settings); 
};


// call deleteAccountDictSap
const deleteDictionaryAccountSap = () => {
	const settings = {		// set settings data
		url:`/dictionary/account/sap`,
		httpMethod: 'DELETE',
		body:undefined,
		requestType: 'DeleteDictionaryAccountSapRequest',
		successType: 'DeleteDictionaryAccountSapSuccess',
		failType: 'DeleteDictionaryAccountSapFail'
	};
	return commonCallApi(settings); 
};


// call deleteSegment
const deleteDictionarySegment = () => {
	const settings = {		// set settings data
		url:`/dictionary/segment`,
		httpMethod: 'DELETE',
		body:undefined,
		requestType: 'DeleteDictionarySegmentRequest',
		successType: 'DeleteDictionarySegmentSuccess',
		failType: 'DeleteDictionarySegmentFail'
	};
	return commonCallApi(settings); 
};

