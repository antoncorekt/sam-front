export const GetSystemVersionHandler = () => {
	const expm = ACT.GetSystemVersionRequest;
	 return {
		 'GetSystemVersionRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'GetSystemVersionSuccess':(state:any, action:ActionResponseData<ResultSetVersion,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 'GetSystemVersionFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, null>>)=>{
			 return state;
		},
	}
}
export const GetSystemStatusHandler = () => {
	const expm = ACT.GetSystemStatusRequest;
	 return {
		 'GetSystemStatusRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'GetSystemStatusSuccess':(state:any, action:ActionResponseData<ResultSetStatus,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 'GetSystemStatusFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, null>>)=>{
			 return state;
		},
	}
}
export const PostUserLoginHandler = () => {
	const expm = ACT.PostUserLoginRequest;
	 return {
		 'PostUserLoginRequest':(state:any, action:ActionRequestData<RequestSetUserLogin, null>)=>{
			 return state;
		},
		 'PostUserLoginSuccess':(state:any, action:ActionResponseData<ResultSetUserLogin,ActionRequestData<RequestSetUserLogin, null>>)=>{
			 return state;
		},
		 'PostUserLoginFail':(state:any, action:ActionResponseData<any,ActionRequestData<RequestSetUserLogin, null>>)=>{
			 return state;
		},
	}
}
export const PostUserLogoffHandler = () => {
	const expm = ACT.PostUserLogoffRequest;
	 return {
		 'PostUserLogoffRequest':(state:any, action:ActionRequestData<RequestSetUserLogoff, null>)=>{
			 return state;
		},
		 'PostUserLogoffSuccess':(state:any, action:ActionResponseData<ResultSetOk,ActionRequestData<RequestSetUserLogoff, null>>)=>{
			 return state;
		},
		 'PostUserLogoffFail':(state:any, action:ActionResponseData<any,ActionRequestData<RequestSetUserLogoff, null>>)=>{
			 return state;
		},
	}
}
export const PostAccountHandler = () => {
	const expm = ACT.PostAccountRequest;
	 return {
		 'PostAccountRequest':(state:any, action:ActionRequestData<RequestSetAccount, null>)=>{
			 return state;
		},
		 'PostAccountSuccess':(state:any, action:ActionResponseData<ResultSetAccount,ActionRequestData<RequestSetAccount, null>>)=>{
			 return state;
		},
		 'PostAccountFail':(state:any, action:ActionResponseData<any,ActionRequestData<RequestSetAccount, null>>)=>{
			 return state;
		},
	}
}
export const DeleteAccountHandler = () => {
	const expm = ACT.DeleteAccountRequest;
	 return {
		 'DeleteAccountRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'DeleteAccountSuccess':(state:any, action:ActionResponseData<ResultSetCount,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 'DeleteAccountFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, null>>)=>{
			 return state;
		},
	}
}
export const GetAccountByStatusByReleaseHandler = () => {
	const expm = ACT.GetAccountByStatusByReleaseRequest;
	 return {
		 'GetAccountByStatusByReleaseRequest':(state:any, action:ActionRequestData<null, GetAccountByStatusByReleaseQueryParams>)=>{
			 return state;
		},
		 'GetAccountByStatusByReleaseSuccess':(state:any, action:ActionResponseData<ResultSetAccounts,ActionRequestData<null, GetAccountByStatusByReleaseQueryParams>>)=>{
			 return state;
		},
		 'GetAccountByStatusByReleaseFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, GetAccountByStatusByReleaseQueryParams>>)=>{
			 return state;
		},
	}
}
export const PutAccountByStatusByReleaseByBscsAccountHandler = () => {
	const expm = ACT.PutAccountByStatusByReleaseByBscsAccountRequest;
	 return {
		 'PutAccountByStatusByReleaseByBscsAccountRequest':(state:any, action:ActionRequestData<null, PutAccountByStatusByReleaseByBscsAccountQueryParams>)=>{
			 return state;
		},
		 'PutAccountByStatusByReleaseByBscsAccountSuccess':(state:any, action:ActionResponseData<ResultSetAccounts,ActionRequestData<null, PutAccountByStatusByReleaseByBscsAccountQueryParams>>)=>{
			 return state;
		},
		 'PutAccountByStatusByReleaseByBscsAccountFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, PutAccountByStatusByReleaseByBscsAccountQueryParams>>)=>{
			 return state;
		},
	}
}
export const DeleteAccountByStatusByReleaseByBscsAccountHandler = () => {
	const expm = ACT.DeleteAccountByStatusByReleaseByBscsAccountRequest;
	 return {
		 'DeleteAccountByStatusByReleaseByBscsAccountRequest':(state:any, action:ActionRequestData<null, DeleteAccountByStatusByReleaseByBscsAccountQueryParams>)=>{
			 return state;
		},
		 'DeleteAccountByStatusByReleaseByBscsAccountSuccess':(state:any, action:ActionResponseData<ResultSetCount,ActionRequestData<null, DeleteAccountByStatusByReleaseByBscsAccountQueryParams>>)=>{
			 return state;
		},
		 'DeleteAccountByStatusByReleaseByBscsAccountFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, DeleteAccountByStatusByReleaseByBscsAccountQueryParams>>)=>{
			 return state;
		},
	}
}
export const PostAccountReleaseHandler = () => {
	const expm = ACT.PostAccountReleaseRequest;
	 return {
		 'PostAccountReleaseRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'PostAccountReleaseSuccess':(state:any, action:ActionResponseData<ResultSetOk,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 'PostAccountReleaseFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, null>>)=>{
			 return state;
		},
	}
}
export const PostOrderHandler = () => {
	const expm = ACT.PostOrderRequest;
	 return {
		 'PostOrderRequest':(state:any, action:ActionRequestData<RequestSetOrder, null>)=>{
			 return state;
		},
		 'PostOrderSuccess':(state:any, action:ActionResponseData<ResultSetOrder,ActionRequestData<RequestSetOrder, null>>)=>{
			 return state;
		},
		 'PostOrderFail':(state:any, action:ActionResponseData<any,ActionRequestData<RequestSetOrder, null>>)=>{
			 return state;
		},
	}
}
export const DeleteOrderHandler = () => {
	const expm = ACT.DeleteOrderRequest;
	 return {
		 'DeleteOrderRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'DeleteOrderSuccess':(state:any, action:ActionResponseData<ResultSetCount,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 'DeleteOrderFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, null>>)=>{
			 return state;
		},
	}
}
export const GetOrderByStatusByReleaseHandler = () => {
	const expm = ACT.GetOrderByStatusByReleaseRequest;
	 return {
		 'GetOrderByStatusByReleaseRequest':(state:any, action:ActionRequestData<null, GetOrderByStatusByReleaseQueryParams>)=>{
			 return state;
		},
		 'GetOrderByStatusByReleaseSuccess':(state:any, action:ActionResponseData<ResultSetOrders,ActionRequestData<null, GetOrderByStatusByReleaseQueryParams>>)=>{
			 return state;
		},
		 'GetOrderByStatusByReleaseFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, GetOrderByStatusByReleaseQueryParams>>)=>{
			 return state;
		},
	}
}
export const PutOrderByStatusByReleaseByBscsAccountBySegmentHandler = () => {
	const expm = ACT.PutOrderByStatusByReleaseByBscsAccountBySegmentRequest;
	 return {
		 'PutOrderByStatusByReleaseByBscsAccountBySegmentRequest':(state:any, action:ActionRequestData<null, PutOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>)=>{
			 return state;
		},
		 'PutOrderByStatusByReleaseByBscsAccountBySegmentSuccess':(state:any, action:ActionResponseData<ResultSetOrders,ActionRequestData<null, PutOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>>)=>{
			 return state;
		},
		 'PutOrderByStatusByReleaseByBscsAccountBySegmentFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, PutOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>>)=>{
			 return state;
		},
	}
}
export const DeleteOrderByStatusByReleaseByBscsAccountBySegmentHandler = () => {
	const expm = ACT.DeleteOrderByStatusByReleaseByBscsAccountBySegmentRequest;
	 return {
		 'DeleteOrderByStatusByReleaseByBscsAccountBySegmentRequest':(state:any, action:ActionRequestData<null, DeleteOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>)=>{
			 return state;
		},
		 'DeleteOrderByStatusByReleaseByBscsAccountBySegmentSuccess':(state:any, action:ActionResponseData<ResultSetCount,ActionRequestData<null, DeleteOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>>)=>{
			 return state;
		},
		 'DeleteOrderByStatusByReleaseByBscsAccountBySegmentFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, DeleteOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>>)=>{
			 return state;
		},
	}
}
export const GetDictionaryAccountBscsHandler = () => {
	const expm = ACT.GetDictionaryAccountBscsRequest;
	 return {
		 'GetDictionaryAccountBscsRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'GetDictionaryAccountBscsSuccess':(state:any, action:ActionResponseData<ResultSetAccountDictBscss,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 'GetDictionaryAccountBscsFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, null>>)=>{
			 return state;
		},
	}
}
export const PostDictionaryAccountBscsHandler = () => {
	const expm = ACT.PostDictionaryAccountBscsRequest;
	 return {
		 'PostDictionaryAccountBscsRequest':(state:any, action:ActionRequestData<RequestSetAccountDictBscs, null>)=>{
			 return state;
		},
		 'PostDictionaryAccountBscsSuccess':(state:any, action:ActionResponseData<ResultSetAccountDictBscs,ActionRequestData<RequestSetAccountDictBscs, null>>)=>{
			 return state;
		},
		 'PostDictionaryAccountBscsFail':(state:any, action:ActionResponseData<any,ActionRequestData<RequestSetAccountDictBscs, null>>)=>{
			 return state;
		},
	}
}
export const DeleteDictionaryAccountBscsHandler = () => {
	const expm = ACT.DeleteDictionaryAccountBscsRequest;
	 return {
		 'DeleteDictionaryAccountBscsRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'DeleteDictionaryAccountBscsSuccess':(state:any, action:ActionResponseData<ResultSetCount,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 'DeleteDictionaryAccountBscsFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, null>>)=>{
			 return state;
		},
	}
}
export const GetDictionaryAccountSapHandler = () => {
	const expm = ACT.GetDictionaryAccountSapRequest;
	 return {
		 'GetDictionaryAccountSapRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'GetDictionaryAccountSapSuccess':(state:any, action:ActionResponseData<ResultSetAccountDictSaps,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 'GetDictionaryAccountSapFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, null>>)=>{
			 return state;
		},
	}
}
export const PostDictionaryAccountSapHandler = () => {
	const expm = ACT.PostDictionaryAccountSapRequest;
	 return {
		 'PostDictionaryAccountSapRequest':(state:any, action:ActionRequestData<RequestSetAccountDictSap, null>)=>{
			 return state;
		},
		 'PostDictionaryAccountSapSuccess':(state:any, action:ActionResponseData<ResultSetAccountDictSap,ActionRequestData<RequestSetAccountDictSap, null>>)=>{
			 return state;
		},
		 'PostDictionaryAccountSapFail':(state:any, action:ActionResponseData<any,ActionRequestData<RequestSetAccountDictSap, null>>)=>{
			 return state;
		},
	}
}
export const DeleteDictionaryAccountSapHandler = () => {
	const expm = ACT.DeleteDictionaryAccountSapRequest;
	 return {
		 'DeleteDictionaryAccountSapRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'DeleteDictionaryAccountSapSuccess':(state:any, action:ActionResponseData<ResultSetCount,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 'DeleteDictionaryAccountSapFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, null>>)=>{
			 return state;
		},
	}
}
export const GetDictionarySegmentHandler = () => {
	const expm = ACT.GetDictionarySegmentRequest;
	 return {
		 'GetDictionarySegmentRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'GetDictionarySegmentSuccess':(state:any, action:ActionResponseData<ResultSetSegments,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 'GetDictionarySegmentFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, null>>)=>{
			 return state;
		},
	}
}
export const PostDictionarySegmentHandler = () => {
	const expm = ACT.PostDictionarySegmentRequest;
	 return {
		 'PostDictionarySegmentRequest':(state:any, action:ActionRequestData<RequestSetSegment, null>)=>{
			 return state;
		},
		 'PostDictionarySegmentSuccess':(state:any, action:ActionResponseData<ResultSetSegment,ActionRequestData<RequestSetSegment, null>>)=>{
			 return state;
		},
		 'PostDictionarySegmentFail':(state:any, action:ActionResponseData<any,ActionRequestData<RequestSetSegment, null>>)=>{
			 return state;
		},
	}
}
export const DeleteDictionarySegmentHandler = () => {
	const expm = ACT.DeleteDictionarySegmentRequest;
	 return {
		 'DeleteDictionarySegmentRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'DeleteDictionarySegmentSuccess':(state:any, action:ActionResponseData<ResultSetCount,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 'DeleteDictionarySegmentFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, null>>)=>{
			 return state;
		},
	}
}