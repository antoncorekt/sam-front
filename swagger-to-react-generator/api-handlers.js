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
PatchDictionarySegmentByIdQueryParams} from './api-models.js'
export const GetSystemVersionHandler = () => {
	return {
		GetSystemVersionRequest:(state:any, action:ActionRequestData<null, null>)=>{
			 return {...state, ...action};
		},
		GetSystemVersionSuccess:(state:any, action:ActionResponseData<ResultSetVersion,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
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
			 return {...state, ...action};
		},
		PostUserLoginSuccess:(state:any, action:ActionResponseData<ResultSetUserLogin,ActionRequestData<RequestSetUserLogin, null>>)=>{
			 return {...state, ...action};
		},
		PostUserLoginFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<RequestSetUserLogin, null>>)=>{
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
export const PostUserLogoffHandler = () => {
	return {
		PostUserLogoffRequest:(state:any, action:ActionRequestData<RequestSetUserLogoff, null>)=>{
			 return {...state, ...action};
		},
		PostUserLogoffSuccess:(state:any, action:ActionResponseData<ResultSetOk,ActionRequestData<RequestSetUserLogoff, null>>)=>{
			 return {...state, ...action};
		},
		PostUserLogoffFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<RequestSetUserLogoff, null>>)=>{
			 return {...state, ...action};
		},
	}
};
export const PostUserInfoHandler = () => {
	return {
		PostUserInfoRequest:(state:any, action:ActionRequestData<null, null>)=>{
			 return {...state, ...action};
		},
		PostUserInfoSuccess:(state:any, action:ActionResponseData<ResultSetUserInfo,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
		},
		PostUserInfoFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
		},
	}
};
export const GetAccountHandler = () => {
	return {
		GetAccountRequest:(state:any, action:ActionRequestData<null, null>)=>{
			 return {...state, ...action};
		},
		GetAccountSuccess:(state:any, action:ActionResponseData<ResultSetAccounts,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
		},
		GetAccountFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
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
export const DeleteAccountHandler = () => {
	return {
		DeleteAccountRequest:(state:any, action:ActionRequestData<null, null>)=>{
			 return {...state, ...action};
		},
		DeleteAccountSuccess:(state:any, action:ActionResponseData<ResultSetAccounts,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
		},
		DeleteAccountFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
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
export const PatchAccountByStatusByReleaseByBscsAccountHandler = () => {
	return {
		PatchAccountByStatusByReleaseByBscsAccountRequest:(state:any, action:ActionRequestData<null, PatchAccountByStatusByReleaseByBscsAccountQueryParams>)=>{
			 return {...state, ...action};
		},
		PatchAccountByStatusByReleaseByBscsAccountSuccess:(state:any, action:ActionResponseData<ResultSetAccounts,ActionRequestData<null, PatchAccountByStatusByReleaseByBscsAccountQueryParams>>)=>{
			 return {...state, ...action};
		},
		PatchAccountByStatusByReleaseByBscsAccountFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, PatchAccountByStatusByReleaseByBscsAccountQueryParams>>)=>{
			 return {...state, ...action};
		},
	}
};
export const GetAccountLogHandler = () => {
	return {
		GetAccountLogRequest:(state:any, action:ActionRequestData<null, GetAccountLogQueryParams>)=>{
			 return {...state, ...action};
		},
		GetAccountLogSuccess:(state:any, action:ActionResponseData<ResultSetAccountLogs,ActionRequestData<null, GetAccountLogQueryParams>>)=>{
			 return {...state, ...action};
		},
		GetAccountLogFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, GetAccountLogQueryParams>>)=>{
			 return {...state, ...action};
		},
	}
};
export const GetOrderHandler = () => {
	return {
		GetOrderRequest:(state:any, action:ActionRequestData<null, null>)=>{
			 return {...state, ...action};
		},
		GetOrderSuccess:(state:any, action:ActionResponseData<ResultSetOrders,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
		},
		GetOrderFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
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
export const DeleteOrderHandler = () => {
	return {
		DeleteOrderRequest:(state:any, action:ActionRequestData<null, null>)=>{
			 return {...state, ...action};
		},
		DeleteOrderSuccess:(state:any, action:ActionResponseData<ResultSetOrders,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
		},
		DeleteOrderFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
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
export const PatchOrderByStatusByReleaseByBscsAccountBySegmentHandler = () => {
	return {
		PatchOrderByStatusByReleaseByBscsAccountBySegmentRequest:(state:any, action:ActionRequestData<null, PatchOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>)=>{
			 return {...state, ...action};
		},
		PatchOrderByStatusByReleaseByBscsAccountBySegmentSuccess:(state:any, action:ActionResponseData<ResultSetOrders,ActionRequestData<null, PatchOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>>)=>{
			 return {...state, ...action};
		},
		PatchOrderByStatusByReleaseByBscsAccountBySegmentFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, PatchOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>>)=>{
			 return {...state, ...action};
		},
	}
};
export const GetOrderLogHandler = () => {
	return {
		GetOrderLogRequest:(state:any, action:ActionRequestData<null, GetOrderLogQueryParams>)=>{
			 return {...state, ...action};
		},
		GetOrderLogSuccess:(state:any, action:ActionResponseData<ResultSetOrderLogs,ActionRequestData<null, GetOrderLogQueryParams>>)=>{
			 return {...state, ...action};
		},
		GetOrderLogFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, GetOrderLogQueryParams>>)=>{
			 return {...state, ...action};
		},
	}
};
export const PostReleaseNewHandler = () => {
	return {
		PostReleaseNewRequest:(state:any, action:ActionRequestData<null, null>)=>{
			 return {...state, ...action};
		},
		PostReleaseNewSuccess:(state:any, action:ActionResponseData<ResultSetOk,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
		},
		PostReleaseNewFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
		},
	}
};
export const PostReleaseByReleaseHandler = () => {
	return {
		PostReleaseByReleaseRequest:(state:any, action:ActionRequestData<null, PostReleaseByReleaseQueryParams>)=>{
			 return {...state, ...action};
		},
		PostReleaseByReleaseSuccess:(state:any, action:ActionResponseData<ResultSetOk,ActionRequestData<null, PostReleaseByReleaseQueryParams>>)=>{
			 return {...state, ...action};
		},
		PostReleaseByReleaseFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, PostReleaseByReleaseQueryParams>>)=>{
			 return {...state, ...action};
		},
	}
};
export const DeleteReleaseByReleaseHandler = () => {
	return {
		DeleteReleaseByReleaseRequest:(state:any, action:ActionRequestData<null, DeleteReleaseByReleaseQueryParams>)=>{
			 return {...state, ...action};
		},
		DeleteReleaseByReleaseSuccess:(state:any, action:ActionResponseData<ResultSetOk,ActionRequestData<null, DeleteReleaseByReleaseQueryParams>>)=>{
			 return {...state, ...action};
		},
		DeleteReleaseByReleaseFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, DeleteReleaseByReleaseQueryParams>>)=>{
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
		PostDictionaryAccountSapRequest:(state:any, action:ActionRequestData<null, null>)=>{
			 return {...state, ...action};
		},
		PostDictionaryAccountSapSuccess:(state:any, action:ActionResponseData<ResultSetOk,ActionRequestData<null, null>>)=>{
			 return {...state, ...action};
		},
		PostDictionaryAccountSapFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
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
export const PutDictionarySegmentByIdHandler = () => {
	return {
		PutDictionarySegmentByIdRequest:(state:any, action:ActionRequestData<null, PutDictionarySegmentByIdQueryParams>)=>{
			 return {...state, ...action};
		},
		PutDictionarySegmentByIdSuccess:(state:any, action:ActionResponseData<ResultSetCount,ActionRequestData<null, PutDictionarySegmentByIdQueryParams>>)=>{
			 return {...state, ...action};
		},
		PutDictionarySegmentByIdFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, PutDictionarySegmentByIdQueryParams>>)=>{
			 return {...state, ...action};
		},
	}
};
export const DeleteDictionarySegmentByIdHandler = () => {
	return {
		DeleteDictionarySegmentByIdRequest:(state:any, action:ActionRequestData<null, DeleteDictionarySegmentByIdQueryParams>)=>{
			 return {...state, ...action};
		},
		DeleteDictionarySegmentByIdSuccess:(state:any, action:ActionResponseData<ResultSetCount,ActionRequestData<null, DeleteDictionarySegmentByIdQueryParams>>)=>{
			 return {...state, ...action};
		},
		DeleteDictionarySegmentByIdFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, DeleteDictionarySegmentByIdQueryParams>>)=>{
			 return {...state, ...action};
		},
	}
};
export const PatchDictionarySegmentByIdHandler = () => {
	return {
		PatchDictionarySegmentByIdRequest:(state:any, action:ActionRequestData<null, PatchDictionarySegmentByIdQueryParams>)=>{
			 return {...state, ...action};
		},
		PatchDictionarySegmentByIdSuccess:(state:any, action:ActionResponseData<ResultSetCount,ActionRequestData<null, PatchDictionarySegmentByIdQueryParams>>)=>{
			 return {...state, ...action};
		},
		PatchDictionarySegmentByIdFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, PatchDictionarySegmentByIdQueryParams>>)=>{
			 return {...state, ...action};
		},
	}
};