export const GetSystemVersionHandler = <S>() => {
	 return {
		 ACT.GetSystemVersionRequest:(state:S, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 ACT.GetSystemVersionSuccess:(state:S, action:ActionResponseData<ResultSetVersion,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 ACT.GetSystemVersionFail:(state:S, action:ActionRequestData<getSystemVersion>)=>{
			 return state;
		},
	}
}
export const GetSystemStatusHandler = <S>() => {
	 return {
		 ACT.GetSystemStatusRequest:(state:S, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 ACT.GetSystemStatusSuccess:(state:S, action:ActionResponseData<ResultSetStatus,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 ACT.GetSystemStatusFail:(state:S, action:ActionRequestData<getSystemStatus>)=>{
			 return state;
		},
	}
}
export const PostUserLoginHandler = <S>() => {
	 return {
		 ACT.PostUserLoginRequest:(state:S, action:ActionRequestData<RequestSetUserLogin, null>)=>{
			 return state;
		},
		 ACT.PostUserLoginSuccess:(state:S, action:ActionResponseData<ResultSetUserLogin,ActionRequestData<RequestSetUserLogin, null>>)=>{
			 return state;
		},
		 ACT.PostUserLoginFail:(state:S, action:ActionRequestData<postUserLogin>)=>{
			 return state;
		},
	}
}
export const PostUserLogoffHandler = <S>() => {
	 return {
		 ACT.PostUserLogoffRequest:(state:S, action:ActionRequestData<RequestSetUserLogoff, null>)=>{
			 return state;
		},
		 ACT.PostUserLogoffSuccess:(state:S, action:ActionResponseData<ResultSetOk,ActionRequestData<RequestSetUserLogoff, null>>)=>{
			 return state;
		},
		 ACT.PostUserLogoffFail:(state:S, action:ActionRequestData<postUserLogoff>)=>{
			 return state;
		},
	}
}
export const PostAccountHandler = <S>() => {
	 return {
		 ACT.PostAccountRequest:(state:S, action:ActionRequestData<RequestSetAccount, null>)=>{
			 return state;
		},
		 ACT.PostAccountSuccess:(state:S, action:ActionResponseData<ResultSetAccount,ActionRequestData<RequestSetAccount, null>>)=>{
			 return state;
		},
		 ACT.PostAccountFail:(state:S, action:ActionRequestData<postAccount>)=>{
			 return state;
		},
	}
}
export const DeleteAccountHandler = <S>() => {
	 return {
		 ACT.DeleteAccountRequest:(state:S, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 ACT.DeleteAccountSuccess:(state:S, action:ActionResponseData<ResultSetCount,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 ACT.DeleteAccountFail:(state:S, action:ActionRequestData<deleteAccount>)=>{
			 return state;
		},
	}
}
export const GetAccountByStatusByReleaseHandler = <S>() => {
	 return {
		 ACT.GetAccountByStatusByReleaseRequest:(state:S, action:ActionRequestData<null, GetAccountByStatusByReleaseQueryParams>)=>{
			 return state;
		},
		 ACT.GetAccountByStatusByReleaseSuccess:(state:S, action:ActionResponseData<ResultSetAccounts,ActionRequestData<null, GetAccountByStatusByReleaseQueryParams>>)=>{
			 return state;
		},
		 ACT.GetAccountByStatusByReleaseFail:(state:S, action:ActionRequestData<getAccountByStatusByRelease>)=>{
			 return state;
		},
	}
}
export const PutAccountByStatusByReleaseByBscsAccountHandler = <S>() => {
	 return {
		 ACT.PutAccountByStatusByReleaseByBscsAccountRequest:(state:S, action:ActionRequestData<null, PutAccountByStatusByReleaseByBscsAccountQueryParams>)=>{
			 return state;
		},
		 ACT.PutAccountByStatusByReleaseByBscsAccountSuccess:(state:S, action:ActionResponseData<ResultSetAccounts,ActionRequestData<null, PutAccountByStatusByReleaseByBscsAccountQueryParams>>)=>{
			 return state;
		},
		 ACT.PutAccountByStatusByReleaseByBscsAccountFail:(state:S, action:ActionRequestData<putAccountByStatusByReleaseByBscsAccount>)=>{
			 return state;
		},
	}
}
export const DeleteAccountByStatusByReleaseByBscsAccountHandler = <S>() => {
	 return {
		 ACT.DeleteAccountByStatusByReleaseByBscsAccountRequest:(state:S, action:ActionRequestData<null, DeleteAccountByStatusByReleaseByBscsAccountQueryParams>)=>{
			 return state;
		},
		 ACT.DeleteAccountByStatusByReleaseByBscsAccountSuccess:(state:S, action:ActionResponseData<ResultSetCount,ActionRequestData<null, DeleteAccountByStatusByReleaseByBscsAccountQueryParams>>)=>{
			 return state;
		},
		 ACT.DeleteAccountByStatusByReleaseByBscsAccountFail:(state:S, action:ActionRequestData<deleteAccountByStatusByReleaseByBscsAccount>)=>{
			 return state;
		},
	}
}
export const PostAccountReleaseHandler = <S>() => {
	 return {
		 ACT.PostAccountReleaseRequest:(state:S, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 ACT.PostAccountReleaseSuccess:(state:S, action:ActionResponseData<ResultSetOk,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 ACT.PostAccountReleaseFail:(state:S, action:ActionRequestData<postAccountRelease>)=>{
			 return state;
		},
	}
}
export const PostOrderHandler = <S>() => {
	 return {
		 ACT.PostOrderRequest:(state:S, action:ActionRequestData<RequestSetOrder, null>)=>{
			 return state;
		},
		 ACT.PostOrderSuccess:(state:S, action:ActionResponseData<ResultSetOrder,ActionRequestData<RequestSetOrder, null>>)=>{
			 return state;
		},
		 ACT.PostOrderFail:(state:S, action:ActionRequestData<postOrder>)=>{
			 return state;
		},
	}
}
export const DeleteOrderHandler = <S>() => {
	 return {
		 ACT.DeleteOrderRequest:(state:S, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 ACT.DeleteOrderSuccess:(state:S, action:ActionResponseData<ResultSetCount,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 ACT.DeleteOrderFail:(state:S, action:ActionRequestData<deleteOrder>)=>{
			 return state;
		},
	}
}
export const GetOrderByStatusByReleaseHandler = <S>() => {
	 return {
		 ACT.GetOrderByStatusByReleaseRequest:(state:S, action:ActionRequestData<null, GetOrderByStatusByReleaseQueryParams>)=>{
			 return state;
		},
		 ACT.GetOrderByStatusByReleaseSuccess:(state:S, action:ActionResponseData<ResultSetOrders,ActionRequestData<null, GetOrderByStatusByReleaseQueryParams>>)=>{
			 return state;
		},
		 ACT.GetOrderByStatusByReleaseFail:(state:S, action:ActionRequestData<getOrderByStatusByRelease>)=>{
			 return state;
		},
	}
}
export const PutOrderByStatusByReleaseByBscsAccountBySegmentHandler = <S>() => {
	 return {
		 ACT.PutOrderByStatusByReleaseByBscsAccountBySegmentRequest:(state:S, action:ActionRequestData<null, PutOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>)=>{
			 return state;
		},
		 ACT.PutOrderByStatusByReleaseByBscsAccountBySegmentSuccess:(state:S, action:ActionResponseData<ResultSetOrders,ActionRequestData<null, PutOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>>)=>{
			 return state;
		},
		 ACT.PutOrderByStatusByReleaseByBscsAccountBySegmentFail:(state:S, action:ActionRequestData<putOrderByStatusByReleaseByBscsAccountBySegment>)=>{
			 return state;
		},
	}
}
export const DeleteOrderByStatusByReleaseByBscsAccountBySegmentHandler = <S>() => {
	 return {
		 ACT.DeleteOrderByStatusByReleaseByBscsAccountBySegmentRequest:(state:S, action:ActionRequestData<null, DeleteOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>)=>{
			 return state;
		},
		 ACT.DeleteOrderByStatusByReleaseByBscsAccountBySegmentSuccess:(state:S, action:ActionResponseData<ResultSetCount,ActionRequestData<null, DeleteOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>>)=>{
			 return state;
		},
		 ACT.DeleteOrderByStatusByReleaseByBscsAccountBySegmentFail:(state:S, action:ActionRequestData<deleteOrderByStatusByReleaseByBscsAccountBySegment>)=>{
			 return state;
		},
	}
}
export const GetDictionaryAccountBscsHandler = <S>() => {
	 return {
		 ACT.GetDictionaryAccountBscsRequest:(state:S, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 ACT.GetDictionaryAccountBscsSuccess:(state:S, action:ActionResponseData<ResultSetAccountDictBscss,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 ACT.GetDictionaryAccountBscsFail:(state:S, action:ActionRequestData<getDictionaryAccountBscs>)=>{
			 return state;
		},
	}
}
export const PostDictionaryAccountBscsHandler = <S>() => {
	 return {
		 ACT.PostDictionaryAccountBscsRequest:(state:S, action:ActionRequestData<RequestSetAccountDictBscs, null>)=>{
			 return state;
		},
		 ACT.PostDictionaryAccountBscsSuccess:(state:S, action:ActionResponseData<ResultSetAccountDictBscs,ActionRequestData<RequestSetAccountDictBscs, null>>)=>{
			 return state;
		},
		 ACT.PostDictionaryAccountBscsFail:(state:S, action:ActionRequestData<postDictionaryAccountBscs>)=>{
			 return state;
		},
	}
}
export const DeleteDictionaryAccountBscsHandler = <S>() => {
	 return {
		 ACT.DeleteDictionaryAccountBscsRequest:(state:S, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 ACT.DeleteDictionaryAccountBscsSuccess:(state:S, action:ActionResponseData<ResultSetCount,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 ACT.DeleteDictionaryAccountBscsFail:(state:S, action:ActionRequestData<deleteDictionaryAccountBscs>)=>{
			 return state;
		},
	}
}
export const GetDictionaryAccountSapHandler = <S>() => {
	 return {
		 ACT.GetDictionaryAccountSapRequest:(state:S, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 ACT.GetDictionaryAccountSapSuccess:(state:S, action:ActionResponseData<ResultSetAccountDictSaps,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 ACT.GetDictionaryAccountSapFail:(state:S, action:ActionRequestData<getDictionaryAccountSap>)=>{
			 return state;
		},
	}
}
export const PostDictionaryAccountSapHandler = <S>() => {
	 return {
		 ACT.PostDictionaryAccountSapRequest:(state:S, action:ActionRequestData<RequestSetAccountDictSap, null>)=>{
			 return state;
		},
		 ACT.PostDictionaryAccountSapSuccess:(state:S, action:ActionResponseData<ResultSetAccountDictSap,ActionRequestData<RequestSetAccountDictSap, null>>)=>{
			 return state;
		},
		 ACT.PostDictionaryAccountSapFail:(state:S, action:ActionRequestData<postDictionaryAccountSap>)=>{
			 return state;
		},
	}
}
export const DeleteDictionaryAccountSapHandler = <S>() => {
	 return {
		 ACT.DeleteDictionaryAccountSapRequest:(state:S, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 ACT.DeleteDictionaryAccountSapSuccess:(state:S, action:ActionResponseData<ResultSetCount,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 ACT.DeleteDictionaryAccountSapFail:(state:S, action:ActionRequestData<deleteDictionaryAccountSap>)=>{
			 return state;
		},
	}
}
export const GetDictionarySegmentHandler = <S>() => {
	 return {
		 ACT.GetDictionarySegmentRequest:(state:S, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 ACT.GetDictionarySegmentSuccess:(state:S, action:ActionResponseData<ResultSetSegments,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 ACT.GetDictionarySegmentFail:(state:S, action:ActionRequestData<getDictionarySegment>)=>{
			 return state;
		},
	}
}
export const PostDictionarySegmentHandler = <S>() => {
	 return {
		 ACT.PostDictionarySegmentRequest:(state:S, action:ActionRequestData<RequestSetSegment, null>)=>{
			 return state;
		},
		 ACT.PostDictionarySegmentSuccess:(state:S, action:ActionResponseData<ResultSetSegment,ActionRequestData<RequestSetSegment, null>>)=>{
			 return state;
		},
		 ACT.PostDictionarySegmentFail:(state:S, action:ActionRequestData<postDictionarySegment>)=>{
			 return state;
		},
	}
}
export const DeleteDictionarySegmentHandler = <S>() => {
	 return {
		 ACT.DeleteDictionarySegmentRequest:(state:S, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 ACT.DeleteDictionarySegmentSuccess:(state:S, action:ActionResponseData<ResultSetCount,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 ACT.DeleteDictionarySegmentFail:(state:S, action:ActionRequestData<deleteDictionarySegment>)=>{
			 return state;
		},
	}
}