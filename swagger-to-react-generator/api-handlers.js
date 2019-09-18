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
import {ActionRequestData, ActionResponseData} from "./src/main/resources/common-reducers";
import * as ACT from './api-actions-defs';

export const GetSystemVersionHandler = () => {
	const expm = ACT.GetSystemVersionRequest;
	return {
		 'GetSystemVersionRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return {...state, ...action};
		},
		 'GetSystemVersionSuccess':(state:any, action:ActionResponseData<ResultSetVersion,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
		},
		 'GetSystemVersionFail':(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
		},
	}
};
export const GetSystemStatusHandler = () => {
	const expm = ACT.GetSystemStatusRequest;
	return {
		 'GetSystemStatusRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return {...state, ...action};
		},
		 'GetSystemStatusSuccess':(state:any, action:ActionResponseData<ResultSetStatus,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
		},
		 'GetSystemStatusFail':(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
		},
	}
};
export const PostUserLoginHandler = () => {
	const expm = ACT.PostUserLoginRequest;
	return {
		 'PostUserLoginRequest':(state:any, action:ActionRequestData<RequestSetUserLogin, null>)=>{
			 return {...state, ...action};
		},
		 'PostUserLoginSuccess':(state:any, action:ActionResponseData<ResultSetUserLogin,ActionRequestData<RequestSetUserLogin, null>>)=>{
			 return {...state, ...action};
		},
		 'PostUserLoginFail':(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<RequestSetUserLogin, null>>)=>{
			 return {...state, ...action};
		},
	}
};
export const PostUserLogoffHandler = () => {
	const expm = ACT.PostUserLogoffRequest;
	return {
		 'PostUserLogoffRequest':(state:any, action:ActionRequestData<RequestSetUserLogoff, null>)=>{
			 return {...state, ...action};
		},
		 'PostUserLogoffSuccess':(state:any, action:ActionResponseData<ResultSetOk,ActionRequestData<RequestSetUserLogoff, null>>)=>{
			 return {...state, ...action};
		},
		 'PostUserLogoffFail':(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<RequestSetUserLogoff, null>>)=>{
			 return {...state, ...action};
		},
	}
};
export const PostAccountHandler = () => {
	const expm = ACT.PostAccountRequest;
	return {
		 'PostAccountRequest':(state:any, action:ActionRequestData<RequestSetAccount, null>)=>{
			 return {...state, ...action};
		},
		 'PostAccountSuccess':(state:any, action:ActionResponseData<ResultSetAccount,ActionRequestData<RequestSetAccount, null>>)=>{
			 return {...state, ...action};
		},
		 'PostAccountFail':(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<RequestSetAccount, null>>)=>{
			 return {...state, ...action};
		},
	}
};
export const DeleteAccountHandler = () => {
	const expm = ACT.DeleteAccountRequest;
	return {
		 'DeleteAccountRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return {...state, ...action};
		},
		 'DeleteAccountSuccess':(state:any, action:ActionResponseData<ResultSetCount,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
		},
		 'DeleteAccountFail':(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
		},
	}
};
export const GetAccountByStatusByReleaseHandler = () => {
	const expm = ACT.GetAccountByStatusByReleaseRequest;
	return {
		 'GetAccountByStatusByReleaseRequest':(state:any, action:ActionRequestData<null, GetAccountByStatusByReleaseQueryParams>)=>{
			 return {...state, ...action};
		},
		 'GetAccountByStatusByReleaseSuccess':(state:any, action:ActionResponseData<ResultSetAccounts,ActionRequestData<null, GetAccountByStatusByReleaseQueryParams>>)=>{
			 return {...state, ...action};
		},
		 'GetAccountByStatusByReleaseFail':(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, GetAccountByStatusByReleaseQueryParams>>)=>{
			 return {...state, ...action};
		},
	}
};
export const PutAccountByStatusByReleaseByBscsAccountHandler = () => {
	const expm = ACT.PutAccountByStatusByReleaseByBscsAccountRequest;
	return {
		 'PutAccountByStatusByReleaseByBscsAccountRequest':(state:any, action:ActionRequestData<null, PutAccountByStatusByReleaseByBscsAccountQueryParams>)=>{
			 return {...state, ...action};
		},
		 'PutAccountByStatusByReleaseByBscsAccountSuccess':(state:any, action:ActionResponseData<ResultSetAccounts,ActionRequestData<null, PutAccountByStatusByReleaseByBscsAccountQueryParams>>)=>{
			 return {...state, ...action};
		},
		 'PutAccountByStatusByReleaseByBscsAccountFail':(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, PutAccountByStatusByReleaseByBscsAccountQueryParams>>)=>{
			 return {...state, ...action};
		},
	}
};
export const DeleteAccountByStatusByReleaseByBscsAccountHandler = () => {
	const expm = ACT.DeleteAccountByStatusByReleaseByBscsAccountRequest;
	return {
		 'DeleteAccountByStatusByReleaseByBscsAccountRequest':(state:any, action:ActionRequestData<null, DeleteAccountByStatusByReleaseByBscsAccountQueryParams>)=>{
			 return {...state, ...action};
		},
		 'DeleteAccountByStatusByReleaseByBscsAccountSuccess':(state:any, action:ActionResponseData<ResultSetCount,ActionRequestData<null, DeleteAccountByStatusByReleaseByBscsAccountQueryParams>>)=>{
			 return {...state, ...action};
		},
		 'DeleteAccountByStatusByReleaseByBscsAccountFail':(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, DeleteAccountByStatusByReleaseByBscsAccountQueryParams>>)=>{
			 return {...state, ...action};
		},
	}
};
export const PostAccountReleaseHandler = () => {
	const expm = ACT.PostAccountReleaseRequest;
	return {
		 'PostAccountReleaseRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return {...state, ...action};
		},
		 'PostAccountReleaseSuccess':(state:any, action:ActionResponseData<ResultSetOk,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
		},
		 'PostAccountReleaseFail':(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
		},
	}
};
export const PostOrderHandler = () => {
	const expm = ACT.PostOrderRequest;
	return {
		 'PostOrderRequest':(state:any, action:ActionRequestData<RequestSetOrder, null>)=>{
			 return {...state, ...action};
		},
		 'PostOrderSuccess':(state:any, action:ActionResponseData<ResultSetOrder,ActionRequestData<RequestSetOrder, null>>)=>{
			 return {...state, ...action};
		},
		 'PostOrderFail':(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<RequestSetOrder, null>>)=>{
			 return {...state, ...action};
		},
	}
};
export const DeleteOrderHandler = () => {
	const expm = ACT.DeleteOrderRequest;
	return {
		 'DeleteOrderRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return {...state, ...action};
		},
		 'DeleteOrderSuccess':(state:any, action:ActionResponseData<ResultSetCount,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
		},
		 'DeleteOrderFail':(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
		},
	}
};
export const GetOrderByStatusByReleaseHandler = () => {
	const expm = ACT.GetOrderByStatusByReleaseRequest;
	return {
		 'GetOrderByStatusByReleaseRequest':(state:any, action:ActionRequestData<null, GetOrderByStatusByReleaseQueryParams>)=>{
			 return {...state, ...action};
		},
		 'GetOrderByStatusByReleaseSuccess':(state:any, action:ActionResponseData<ResultSetOrders,ActionRequestData<null, GetOrderByStatusByReleaseQueryParams>>)=>{
			 return {...state, ...action};
		},
		 'GetOrderByStatusByReleaseFail':(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, GetOrderByStatusByReleaseQueryParams>>)=>{
			 return {...state, ...action};
		},
	}
};
export const PutOrderByStatusByReleaseByBscsAccountBySegmentHandler = () => {
	const expm = ACT.PutOrderByStatusByReleaseByBscsAccountBySegmentRequest;
	return {
		 'PutOrderByStatusByReleaseByBscsAccountBySegmentRequest':(state:any, action:ActionRequestData<null, PutOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>)=>{
			 return {...state, ...action};
		},
		 'PutOrderByStatusByReleaseByBscsAccountBySegmentSuccess':(state:any, action:ActionResponseData<ResultSetOrders,ActionRequestData<null, PutOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>>)=>{
			 return {...state, ...action};
		},
		 'PutOrderByStatusByReleaseByBscsAccountBySegmentFail':(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, PutOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>>)=>{
			 return {...state, ...action};
		},
	}
};
export const DeleteOrderByStatusByReleaseByBscsAccountBySegmentHandler = () => {
	const expm = ACT.DeleteOrderByStatusByReleaseByBscsAccountBySegmentRequest;
	return {
		 'DeleteOrderByStatusByReleaseByBscsAccountBySegmentRequest':(state:any, action:ActionRequestData<null, DeleteOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>)=>{
			 return {...state, ...action};
		},
		 'DeleteOrderByStatusByReleaseByBscsAccountBySegmentSuccess':(state:any, action:ActionResponseData<ResultSetCount,ActionRequestData<null, DeleteOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>>)=>{
			 return {...state, ...action};
		},
		 'DeleteOrderByStatusByReleaseByBscsAccountBySegmentFail':(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, DeleteOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>>)=>{
			 return {...state, ...action};
		},
	}
};
export const GetDictionaryAccountSapHandler = () => {
	const expm = ACT.GetDictionaryAccountSapRequest;
	return {
		 'GetDictionaryAccountSapRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return {...state, ...action};
		},
		 'GetDictionaryAccountSapSuccess':(state:any, action:ActionResponseData<ResultSetAccountDictSaps,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
		},
		 'GetDictionaryAccountSapFail':(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
		},
	}
};
export const PostDictionaryAccountSapHandler = () => {
	const expm = ACT.PostDictionaryAccountSapRequest;
	return {
		 'PostDictionaryAccountSapRequest':(state:any, action:ActionRequestData<RequestSetAccountDictSap, null>)=>{
			 return {...state, ...action};
		},
		 'PostDictionaryAccountSapSuccess':(state:any, action:ActionResponseData<ResultSetAccountDictSap,ActionRequestData<RequestSetAccountDictSap, null>>)=>{
			 return {...state, ...action};
		},
		 'PostDictionaryAccountSapFail':(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<RequestSetAccountDictSap, null>>)=>{
			 return {...state, ...action};
		},
	}
};
export const DeleteDictionaryAccountSapHandler = () => {
	const expm = ACT.DeleteDictionaryAccountSapRequest;
	return {
		 'DeleteDictionaryAccountSapRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return {...state, ...action};
		},
		 'DeleteDictionaryAccountSapSuccess':(state:any, action:ActionResponseData<ResultSetCount,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
		},
		 'DeleteDictionaryAccountSapFail':(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
		},
	}
};
export const GetDictionaryAccountBscsHandler = () => {
	const expm = ACT.GetDictionaryAccountBscsRequest;
	return {
		 'GetDictionaryAccountBscsRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return {...state, ...action};
		},
		 'GetDictionaryAccountBscsSuccess':(state:any, action:ActionResponseData<ResultSetAccountDictBscss,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
		},
		 'GetDictionaryAccountBscsFail':(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
		},
	}
};
export const PostDictionaryAccountBscsHandler = () => {
	const expm = ACT.PostDictionaryAccountBscsRequest;
	return {
		 'PostDictionaryAccountBscsRequest':(state:any, action:ActionRequestData<RequestSetAccountDictBscs, null>)=>{
			 return {...state, ...action};
		},
		 'PostDictionaryAccountBscsSuccess':(state:any, action:ActionResponseData<ResultSetAccountDictBscs,ActionRequestData<RequestSetAccountDictBscs, null>>)=>{
			 return {...state, ...action};
		},
		 'PostDictionaryAccountBscsFail':(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<RequestSetAccountDictBscs, null>>)=>{
			 return {...state, ...action};
		},
	}
};
export const DeleteDictionaryAccountBscsHandler = () => {
	const expm = ACT.DeleteDictionaryAccountBscsRequest;
	return {
		 'DeleteDictionaryAccountBscsRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return {...state, ...action};
		},
		 'DeleteDictionaryAccountBscsSuccess':(state:any, action:ActionResponseData<ResultSetCount,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
		},
		 'DeleteDictionaryAccountBscsFail':(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
		},
	}
};
export const GetDictionarySegmentHandler = () => {
	const expm = ACT.GetDictionarySegmentRequest;
	return {
		 'GetDictionarySegmentRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return {...state, ...action};
		},
		 'GetDictionarySegmentSuccess':(state:any, action:ActionResponseData<ResultSetSegments,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
		},
		 'GetDictionarySegmentFail':(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
		},
	}
};
export const PostDictionarySegmentHandler = () => {
	const expm = ACT.PostDictionarySegmentRequest;
	return {
		 'PostDictionarySegmentRequest':(state:any, action:ActionRequestData<RequestSetSegment, null>)=>{
			 return {...state, ...action};
		},
		 'PostDictionarySegmentSuccess':(state:any, action:ActionResponseData<ResultSetSegment,ActionRequestData<RequestSetSegment, null>>)=>{
			 return {...state, ...action};
		},
		 'PostDictionarySegmentFail':(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<RequestSetSegment, null>>)=>{
			 return {...state, ...action};
		},
	}
};
export const DeleteDictionarySegmentHandler = () => {
	const expm = ACT.DeleteDictionarySegmentRequest;
	return {
		 'DeleteDictionarySegmentRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return {...state, ...action};
		},
		 'DeleteDictionarySegmentSuccess':(state:any, action:ActionResponseData<ResultSetCount,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
		},
		 'DeleteDictionarySegmentFail':(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
		},
	}
};