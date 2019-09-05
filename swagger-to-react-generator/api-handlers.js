export const GetSystemVersionHandler = <S>() => {
	 return {
		 'GetSystemVersionRequest':(state:S, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'GetSystemVersionSuccess':(state:S, action:ActionResponseData<ResultSetVersion,ActionRequestData<null, null>)=>{
			 return state;
		},
		 'GetSystemVersionFail':(state:S, action:ActionRequestData<getSystemVersion)=>{
			 return state;
		},
	}
}
export const GetSystemStatusHandler = <S>() => {
	 return {
		 'GetSystemStatusRequest':(state:S, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'GetSystemStatusSuccess':(state:S, action:ActionResponseData<ResultSetStatus,ActionRequestData<null, null>)=>{
			 return state;
		},
		 'GetSystemStatusFail':(state:S, action:ActionRequestData<getSystemStatus)=>{
			 return state;
		},
	}
}
export const PostUserLoginHandler = <S>() => {
	 return {
		 'PostUserLoginRequest':(state:S, action:ActionRequestData<RequestSetUserLogin, null>)=>{
			 return state;
		},
		 'PostUserLoginSuccess':(state:S, action:ActionResponseData<ResultSetUserLogin,ActionRequestData<RequestSetUserLogin, null>)=>{
			 return state;
		},
		 'PostUserLoginFail':(state:S, action:ActionRequestData<postUserLogin)=>{
			 return state;
		},
	}
}
export const PostUserLogoffHandler = <S>() => {
	 return {
		 'PostUserLogoffRequest':(state:S, action:ActionRequestData<RequestSetUserLogoff, null>)=>{
			 return state;
		},
		 'PostUserLogoffSuccess':(state:S, action:ActionResponseData<ResultSetOk,ActionRequestData<RequestSetUserLogoff, null>)=>{
			 return state;
		},
		 'PostUserLogoffFail':(state:S, action:ActionRequestData<postUserLogoff)=>{
			 return state;
		},
	}
}
export const PostAccountHandler = <S>() => {
	 return {
		 'PostAccountRequest':(state:S, action:ActionRequestData<RequestSetAccount, null>)=>{
			 return state;
		},
		 'PostAccountSuccess':(state:S, action:ActionResponseData<ResultSetAccount,ActionRequestData<RequestSetAccount, null>)=>{
			 return state;
		},
		 'PostAccountFail':(state:S, action:ActionRequestData<postAccount)=>{
			 return state;
		},
	}
}
export const DeleteAccountHandler = <S>() => {
	 return {
		 'DeleteAccountRequest':(state:S, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'DeleteAccountSuccess':(state:S, action:ActionResponseData<ResultSetCount,ActionRequestData<null, null>)=>{
			 return state;
		},
		 'DeleteAccountFail':(state:S, action:ActionRequestData<deleteAccount)=>{
			 return state;
		},
	}
}
export const GetAccountByStatusByReleaseHandler = <S>() => {
	 return {
		 'GetAccountByStatusByReleaseRequest':(state:S, action:ActionRequestData<null, GetAccountByStatusByReleaseQueryParams>)=>{
			 return state;
		},
		 'GetAccountByStatusByReleaseSuccess':(state:S, action:ActionResponseData<ResultSetAccounts,ActionRequestData<null, GetAccountByStatusByReleaseQueryParams>)=>{
			 return state;
		},
		 'GetAccountByStatusByReleaseFail':(state:S, action:ActionRequestData<getAccountByStatusByRelease)=>{
			 return state;
		},
	}
}
export const PutAccountByStatusByReleaseByBscsAccountHandler = <S>() => {
	 return {
		 'PutAccountByStatusByReleaseByBscsAccountRequest':(state:S, action:ActionRequestData<null, PutAccountByStatusByReleaseByBscsAccountQueryParams>)=>{
			 return state;
		},
		 'PutAccountByStatusByReleaseByBscsAccountSuccess':(state:S, action:ActionResponseData<ResultSetAccounts,ActionRequestData<null, PutAccountByStatusByReleaseByBscsAccountQueryParams>)=>{
			 return state;
		},
		 'PutAccountByStatusByReleaseByBscsAccountFail':(state:S, action:ActionRequestData<putAccountByStatusByReleaseByBscsAccount)=>{
			 return state;
		},
	}
}
export const DeleteAccountByStatusByReleaseByBscsAccountHandler = <S>() => {
	 return {
		 'DeleteAccountByStatusByReleaseByBscsAccountRequest':(state:S, action:ActionRequestData<null, DeleteAccountByStatusByReleaseByBscsAccountQueryParams>)=>{
			 return state;
		},
		 'DeleteAccountByStatusByReleaseByBscsAccountSuccess':(state:S, action:ActionResponseData<ResultSetCount,ActionRequestData<null, DeleteAccountByStatusByReleaseByBscsAccountQueryParams>)=>{
			 return state;
		},
		 'DeleteAccountByStatusByReleaseByBscsAccountFail':(state:S, action:ActionRequestData<deleteAccountByStatusByReleaseByBscsAccount)=>{
			 return state;
		},
	}
}
export const PostAccountReleaseHandler = <S>() => {
	 return {
		 'PostAccountReleaseRequest':(state:S, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'PostAccountReleaseSuccess':(state:S, action:ActionResponseData<ResultSetOk,ActionRequestData<null, null>)=>{
			 return state;
		},
		 'PostAccountReleaseFail':(state:S, action:ActionRequestData<postAccountRelease)=>{
			 return state;
		},
	}
}
export const PostOrderHandler = <S>() => {
	 return {
		 'PostOrderRequest':(state:S, action:ActionRequestData<RequestSetOrder, null>)=>{
			 return state;
		},
		 'PostOrderSuccess':(state:S, action:ActionResponseData<ResultSetOrder,ActionRequestData<RequestSetOrder, null>)=>{
			 return state;
		},
		 'PostOrderFail':(state:S, action:ActionRequestData<postOrder)=>{
			 return state;
		},
	}
}
export const DeleteOrderHandler = <S>() => {
	 return {
		 'DeleteOrderRequest':(state:S, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'DeleteOrderSuccess':(state:S, action:ActionResponseData<ResultSetCount,ActionRequestData<null, null>)=>{
			 return state;
		},
		 'DeleteOrderFail':(state:S, action:ActionRequestData<deleteOrder)=>{
			 return state;
		},
	}
}
export const GetOrderByStatusByReleaseHandler = <S>() => {
	 return {
		 'GetOrderByStatusByReleaseRequest':(state:S, action:ActionRequestData<null, GetOrderByStatusByReleaseQueryParams>)=>{
			 return state;
		},
		 'GetOrderByStatusByReleaseSuccess':(state:S, action:ActionResponseData<ResultSetOrders,ActionRequestData<null, GetOrderByStatusByReleaseQueryParams>)=>{
			 return state;
		},
		 'GetOrderByStatusByReleaseFail':(state:S, action:ActionRequestData<getOrderByStatusByRelease)=>{
			 return state;
		},
	}
}
export const PutOrderByStatusByReleaseByBscsAccountBySegmentHandler = <S>() => {
	 return {
		 'PutOrderByStatusByReleaseByBscsAccountBySegmentRequest':(state:S, action:ActionRequestData<null, PutOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>)=>{
			 return state;
		},
		 'PutOrderByStatusByReleaseByBscsAccountBySegmentSuccess':(state:S, action:ActionResponseData<ResultSetOrders,ActionRequestData<null, PutOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>)=>{
			 return state;
		},
		 'PutOrderByStatusByReleaseByBscsAccountBySegmentFail':(state:S, action:ActionRequestData<putOrderByStatusByReleaseByBscsAccountBySegment)=>{
			 return state;
		},
	}
}
export const DeleteOrderByStatusByReleaseByBscsAccountBySegmentHandler = <S>() => {
	 return {
		 'DeleteOrderByStatusByReleaseByBscsAccountBySegmentRequest':(state:S, action:ActionRequestData<null, DeleteOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>)=>{
			 return state;
		},
		 'DeleteOrderByStatusByReleaseByBscsAccountBySegmentSuccess':(state:S, action:ActionResponseData<ResultSetCount,ActionRequestData<null, DeleteOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>)=>{
			 return state;
		},
		 'DeleteOrderByStatusByReleaseByBscsAccountBySegmentFail':(state:S, action:ActionRequestData<deleteOrderByStatusByReleaseByBscsAccountBySegment)=>{
			 return state;
		},
	}
}
export const GetDictionaryAccountBscsHandler = <S>() => {
	 return {
		 'GetDictionaryAccountBscsRequest':(state:S, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'GetDictionaryAccountBscsSuccess':(state:S, action:ActionResponseData<ResultSetAccountDictBscss,ActionRequestData<null, null>)=>{
			 return state;
		},
		 'GetDictionaryAccountBscsFail':(state:S, action:ActionRequestData<getDictionaryAccountBscs)=>{
			 return state;
		},
	}
}
export const PostDictionaryAccountBscsHandler = <S>() => {
	 return {
		 'PostDictionaryAccountBscsRequest':(state:S, action:ActionRequestData<RequestSetAccountDictBscs, null>)=>{
			 return state;
		},
		 'PostDictionaryAccountBscsSuccess':(state:S, action:ActionResponseData<ResultSetAccountDictBscs,ActionRequestData<RequestSetAccountDictBscs, null>)=>{
			 return state;
		},
		 'PostDictionaryAccountBscsFail':(state:S, action:ActionRequestData<postDictionaryAccountBscs)=>{
			 return state;
		},
	}
}
export const DeleteDictionaryAccountBscsHandler = <S>() => {
	 return {
		 'DeleteDictionaryAccountBscsRequest':(state:S, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'DeleteDictionaryAccountBscsSuccess':(state:S, action:ActionResponseData<ResultSetCount,ActionRequestData<null, null>)=>{
			 return state;
		},
		 'DeleteDictionaryAccountBscsFail':(state:S, action:ActionRequestData<deleteDictionaryAccountBscs)=>{
			 return state;
		},
	}
}
export const GetDictionaryAccountSapHandler = <S>() => {
	 return {
		 'GetDictionaryAccountSapRequest':(state:S, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'GetDictionaryAccountSapSuccess':(state:S, action:ActionResponseData<ResultSetAccountDictSaps,ActionRequestData<null, null>)=>{
			 return state;
		},
		 'GetDictionaryAccountSapFail':(state:S, action:ActionRequestData<getDictionaryAccountSap)=>{
			 return state;
		},
	}
}
export const PostDictionaryAccountSapHandler = <S>() => {
	 return {
		 'PostDictionaryAccountSapRequest':(state:S, action:ActionRequestData<RequestSetAccountDictSap, null>)=>{
			 return state;
		},
		 'PostDictionaryAccountSapSuccess':(state:S, action:ActionResponseData<ResultSetAccountDictSap,ActionRequestData<RequestSetAccountDictSap, null>)=>{
			 return state;
		},
		 'PostDictionaryAccountSapFail':(state:S, action:ActionRequestData<postDictionaryAccountSap)=>{
			 return state;
		},
	}
}
export const DeleteDictionaryAccountSapHandler = <S>() => {
	 return {
		 'DeleteDictionaryAccountSapRequest':(state:S, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'DeleteDictionaryAccountSapSuccess':(state:S, action:ActionResponseData<ResultSetCount,ActionRequestData<null, null>)=>{
			 return state;
		},
		 'DeleteDictionaryAccountSapFail':(state:S, action:ActionRequestData<deleteDictionaryAccountSap)=>{
			 return state;
		},
	}
}
export const GetDictionarySegmentHandler = <S>() => {
	 return {
		 'GetDictionarySegmentRequest':(state:S, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'GetDictionarySegmentSuccess':(state:S, action:ActionResponseData<ResultSetSegments,ActionRequestData<null, null>)=>{
			 return state;
		},
		 'GetDictionarySegmentFail':(state:S, action:ActionRequestData<getDictionarySegment)=>{
			 return state;
		},
	}
}
export const PostDictionarySegmentHandler = <S>() => {
	 return {
		 'PostDictionarySegmentRequest':(state:S, action:ActionRequestData<RequestSetSegment, null>)=>{
			 return state;
		},
		 'PostDictionarySegmentSuccess':(state:S, action:ActionResponseData<ResultSetSegment,ActionRequestData<RequestSetSegment, null>)=>{
			 return state;
		},
		 'PostDictionarySegmentFail':(state:S, action:ActionRequestData<postDictionarySegment)=>{
			 return state;
		},
	}
}
export const DeleteDictionarySegmentHandler = <S>() => {
	 return {
		 'DeleteDictionarySegmentRequest':(state:S, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'DeleteDictionarySegmentSuccess':(state:S, action:ActionResponseData<ResultSetCount,ActionRequestData<null, null>)=>{
			 return state;
		},
		 'DeleteDictionarySegmentFail':(state:S, action:ActionRequestData<deleteDictionarySegment)=>{
			 return state;
		},
	}
}