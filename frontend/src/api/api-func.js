// call Add a new SAP OFI account to dictionary
import {
	FinancialAccount,
	GetAccountOfiByAccountIdQueryParams,
	GetAccountOfiQueryParams,
	MarketSegmentReq
} from "./api-models";
import {ActionRequestData, ActionResponseData, commonCallApi} from "./common-middleware";
import {BACKEND_URL} from "./conf";

const postAccountOfi = (body:FinancialAccount) => {
	const settings = {		// set settings data
		url:`/account/ofi`,
		httpMethod: 'POST',
		body:JSON.stringify(body),
		requestType: 'PostAccountOfiRequest',
		successType: 'PostAccountOfiSuccess',
		failType: 'PostAccountOfiFail'
	};
	return commonCallApi(settings); 
};


// call Import SAP OFI accounts from a file
const postAccountImportOfi = () => {
	const settings = {		// set settings data
		url:`/account/import/ofi`,
		httpMethod: 'POST',
		body:JSON.stringify(undefined),
		requestType: 'PostAccountImportOfiRequest',
		successType: 'PostAccountImportOfiSuccess',
		failType: 'PostAccountImportOfiFail'
	};
	return commonCallApi(settings); 
};


// call Add a new market segment to dictionary
const postSegment = (body:MarketSegmentReq) => {
	const settings = {		// set settings data
		url:`/segment`,
		httpMethod: 'POST',
		body:JSON.stringify(body),
		requestType: 'PostSegmentRequest',
		successType: 'PostSegmentSuccess',
		failType: 'PostSegmentFail'
	};
	return commonCallApi(settings); 
};


// call Return list of SAP OFI accounts
const getAccountOfi = (status:string = 'active') => {
	const settings = {		// set settings data
		url:`/account/ofi?status=${status}`,
		httpMethod: 'GET',
		body:JSON.stringify(undefined),
		requestType: 'GetAccountOfiRequest',
		successType: 'GetAccountOfiSuccess',
		failType: 'GetAccountOfiFail'
	};
	return commonCallApi(settings); 
};


// call Return SAP OFI account by ID
const getAccountOfiByAccountId = (accountId:number) => {
	const settings = {		// set settings data
		url:`/account/ofi/${accountId}`,
		httpMethod: 'GET',
		body:JSON.stringify(undefined),
		requestType: 'GetAccountOfiByAccountIdRequest',
		successType: 'GetAccountOfiByAccountIdSuccess',
		failType: 'GetAccountOfiByAccountIdFail'
	};
	return commonCallApi(settings); 
};


// call Return list of BSCS GL accounts
export const getAccountGl2 = (status:string = 'active') => {
	const settings = {		// set settings data
		url:`${BACKEND_URL}/account/gl?status=${status}`,
		httpMethod: 'GET',
		body:undefined,
		requestType: 'GetAccountGlRequest',
		successType: 'GetAccountGlSuccess',
		failType: 'GetAccountGlFail'
	};
	return commonCallApi(settings); 
};


// call Return BSCS GL account by ID
const getAccountGlByAccountId = (accountId:string) => {
	const settings = {		// set settings data
		url:`/account/gl/${accountId}`,
		httpMethod: 'GET',
		body:JSON.stringify(undefined),
		requestType: 'GetAccountGlByAccountIdRequest',
		successType: 'GetAccountGlByAccountIdSuccess',
		failType: 'GetAccountGlByAccountIdFail'
	};
	return commonCallApi(settings); 
};


// call Return list of Market Segments
const getSegment = () => {
	const settings = {		// set settings data
		url:`/segment`,
		httpMethod: 'GET',
		body:JSON.stringify(undefined),
		requestType: 'GetSegmentRequest',
		successType: 'GetSegmentSuccess',
		failType: 'GetSegmentFail'
	};
	return commonCallApi(settings); 
};


// call Return a single Market Segment
const getSegmentBySegmentId = (segmentId:string) => {
	const settings = {		// set settings data
		url:`/segment/${segmentId}`,
		httpMethod: 'GET',
		body:JSON.stringify(undefined),
		requestType: 'GetSegmentBySegmentIdRequest',
		successType: 'GetSegmentBySegmentIdSuccess',
		failType: 'GetSegmentBySegmentIdFail'
	};
	return commonCallApi(settings); 
};


// call Return account mapping
const getAccountMap = (status:string = 'all',glAccount:string,ofiAccount:string) => {
	const settings = {		// set settings data
		url:`/account/map?status=${status}&glAccount=${glAccount}&ofiAccount=${ofiAccount}`,
		httpMethod: 'GET',
		body:JSON.stringify(undefined),
		requestType: 'GetAccountMapRequest',
		successType: 'GetAccountMapSuccess',
		failType: 'GetAccountMapFail'
	};
	return commonCallApi(settings); 
};


// call Return history of changes in account mapping
const getAccountMapHistory = (dateFrom:string,dateTo:string,user:string,glAccount:string,ofiAccount:string) => {
	const settings = {		// set settings data
		url:`/account/map/history?dateFrom=${dateFrom}&dateTo=${dateTo}&user=${user}&glAccount=${glAccount}&ofiAccount=${ofiAccount}`,
		httpMethod: 'GET',
		body:JSON.stringify(undefined),
		requestType: 'GetAccountMapHistoryRequest',
		successType: 'GetAccountMapHistorySuccess',
		failType: 'GetAccountMapHistoryFail'
	};
	return commonCallApi(settings); 
};


// call Update SAP OFI account
const patchAccountOfiByAccountId = (accountId:number,body:FinancialAccount) => {
	const settings = {		// set settings data
		url:`/account/ofi/${accountId}`,
		httpMethod: 'PATCH',
		body:JSON.stringify(body),
		requestType: 'PatchAccountOfiByAccountIdRequest',
		successType: 'PatchAccountOfiByAccountIdSuccess',
		failType: 'PatchAccountOfiByAccountIdFail'
	};
	return commonCallApi(settings); 
};


// call Remove SAP OFI account
const deleteAccountOfiByAccountId = (accountId:number,body:FinancialAccount) => {
	const settings = {		// set settings data
		url:`/account/ofi/${accountId}`,
		httpMethod: 'DELETE',
		body:JSON.stringify(body),
		requestType: 'DeleteAccountOfiByAccountIdRequest',
		successType: 'DeleteAccountOfiByAccountIdSuccess',
		failType: 'DeleteAccountOfiByAccountIdFail'
	};
	return commonCallApi(settings); 
};


// call Remove an existing market segment
const deleteSegmentBySegmentId = (segmentId:string) => {
	const settings = {		// set settings data
		url:`/segment/${segmentId}`,
		httpMethod: 'DELETE',
		body:JSON.stringify(undefined),
		requestType: 'DeleteSegmentBySegmentIdRequest',
		successType: 'DeleteSegmentBySegmentIdSuccess',
		failType: 'DeleteSegmentBySegmentIdFail'
	};
	return commonCallApi(settings); 
};

export const GetAccountOfiHandler = <S>() => {
	return {
		'GetAccountOfiRequest':(state:S, action:ActionRequestData<null, GetAccountOfiQueryParams>)=>{

			return state;
		},
		'GetAccountOfiSuccess':(state:S, action:ActionResponseData<Array<FinancialAccount>,ActionRequestData<null, GetAccountOfiQueryParams>>)=>{

			return state;
		},
		'GetAccountOfiFail':(state:S, action:ActionRequestData<number>)=>{
			return state;
		},
	}
};


export const PostAccountOfiHandler = <S>() => {
	return {
		'PostAccountOfiRequest':(state:S, action:ActionRequestData<FinancialAccount, null>)=>{
			return state;
		},
		'PostAccountOfiSuccess':(state:S, action:ActionResponseData<null,ActionRequestData<FinancialAccount, null>>)=>{
			return state;
		},
		'PostAccountOfiFail':(state:S, action:ActionRequestData<number>)=>{
			return state;
		},
	}
};


export const GetAccountOfiByAccountIdHandler = <S>() => {
	return {
		'GetAccountOfiByAccountIdRequest':(state:S, action:ActionRequestData<null, GetAccountOfiByAccountIdQueryParams>)=>{
			return state;
		},
		'GetAccountOfiByAccountIdSuccess':(state:S, action:ActionResponseData<FinancialAccount,ActionRequestData<null, GetAccountOfiByAccountIdQueryParams>>)=>{
			return state;
		},
		'GetAccountOfiByAccountIdFail':(state:S, action:ActionRequestData<null>)=>{
			return state;
		},
	}
}