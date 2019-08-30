export const GetAccountOfiHandler = <S>() => {
	 return {
		 'GetAccountOfiRequest':(state:S, action:ActionRequestData<null, GetAccountOfiQueryParams>)=>{
			 return state;
		},
		 'GetAccountOfiSuccess':(state:S, action:ActionResponseData<Array<FinancialAccount>,ActionRequestData<null, GetAccountOfiQueryParams>)=>{
			 return state;
		},
		 'GetAccountOfiFail':(state:S, action:ActionRequestData<getAccountOfi)=>{
			 return state;
		},
	}
}
export const PostAccountOfiHandler = <S>() => {
	 return {
		 'PostAccountOfiRequest':(state:S, action:ActionRequestData<FinancialAccount, null>)=>{
			 return state;
		},
		 'PostAccountOfiSuccess':(state:S, action:ActionResponseData<null,ActionRequestData<FinancialAccount, null>)=>{
			 return state;
		},
		 'PostAccountOfiFail':(state:S, action:ActionRequestData<postAccountOfi)=>{
			 return state;
		},
	}
}
export const GetAccountOfiByAccountIdHandler = <S>() => {
	 return {
		 'GetAccountOfiByAccountIdRequest':(state:S, action:ActionRequestData<null, GetAccountOfiByAccountIdQueryParams>)=>{
			 return state;
		},
		 'GetAccountOfiByAccountIdSuccess':(state:S, action:ActionResponseData<FinancialAccount,ActionRequestData<null, GetAccountOfiByAccountIdQueryParams>)=>{
			 return state;
		},
		 'GetAccountOfiByAccountIdFail':(state:S, action:ActionRequestData<getAccountOfiByAccountId)=>{
			 return state;
		},
	}
}
export const DeleteAccountOfiByAccountIdHandler = <S>() => {
	 return {
		 'DeleteAccountOfiByAccountIdRequest':(state:S, action:ActionRequestData<FinancialAccount, DeleteAccountOfiByAccountIdQueryParams>)=>{
			 return state;
		},
		 'DeleteAccountOfiByAccountIdSuccess':(state:S, action:ActionResponseData<null,ActionRequestData<FinancialAccount, DeleteAccountOfiByAccountIdQueryParams>)=>{
			 return state;
		},
		 'DeleteAccountOfiByAccountIdFail':(state:S, action:ActionRequestData<deleteAccountOfiByAccountId)=>{
			 return state;
		},
	}
}
export const PatchAccountOfiByAccountIdHandler = <S>() => {
	 return {
		 'PatchAccountOfiByAccountIdRequest':(state:S, action:ActionRequestData<FinancialAccount, PatchAccountOfiByAccountIdQueryParams>)=>{
			 return state;
		},
		 'PatchAccountOfiByAccountIdSuccess':(state:S, action:ActionResponseData<null,ActionRequestData<FinancialAccount, PatchAccountOfiByAccountIdQueryParams>)=>{
			 return state;
		},
		 'PatchAccountOfiByAccountIdFail':(state:S, action:ActionRequestData<patchAccountOfiByAccountId)=>{
			 return state;
		},
	}
}
export const GetAccountGlHandler = <S>() => {
	 return {
		 'GetAccountGlRequest':(state:S, action:ActionRequestData<null, GetAccountGlQueryParams>)=>{
			 return state;
		},
		 'GetAccountGlSuccess':(state:S, action:ActionResponseData<Array<FinancialAccount>,ActionRequestData<null, GetAccountGlQueryParams>)=>{
			 return state;
		},
		 'GetAccountGlFail':(state:S, action:ActionRequestData<getAccountGl)=>{
			 return state;
		},
	}
}
export const GetAccountGlByAccountIdHandler = <S>() => {
	 return {
		 'GetAccountGlByAccountIdRequest':(state:S, action:ActionRequestData<null, GetAccountGlByAccountIdQueryParams>)=>{
			 return state;
		},
		 'GetAccountGlByAccountIdSuccess':(state:S, action:ActionResponseData<FinancialAccount,ActionRequestData<null, GetAccountGlByAccountIdQueryParams>)=>{
			 return state;
		},
		 'GetAccountGlByAccountIdFail':(state:S, action:ActionRequestData<getAccountGlByAccountId)=>{
			 return state;
		},
	}
}
export const PostAccountImportOfiHandler = <S>() => {
	 return {
		 'PostAccountImportOfiRequest':(state:S, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'PostAccountImportOfiSuccess':(state:S, action:ActionResponseData<null,ActionRequestData<null, null>)=>{
			 return state;
		},
		 'PostAccountImportOfiFail':(state:S, action:ActionRequestData<postAccountImportOfi)=>{
			 return state;
		},
	}
}
export const GetSegmentHandler = <S>() => {
	 return {
		 'GetSegmentRequest':(state:S, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'GetSegmentSuccess':(state:S, action:ActionResponseData<Array<MarketSegment>,ActionRequestData<null, null>)=>{
			 return state;
		},
		 'GetSegmentFail':(state:S, action:ActionRequestData<getSegment)=>{
			 return state;
		},
	}
}
export const PostSegmentHandler = <S>() => {
	 return {
		 'PostSegmentRequest':(state:S, action:ActionRequestData<MarketSegmentReq, null>)=>{
			 return state;
		},
		 'PostSegmentSuccess':(state:S, action:ActionResponseData<null,ActionRequestData<MarketSegmentReq, null>)=>{
			 return state;
		},
		 'PostSegmentFail':(state:S, action:ActionRequestData<postSegment)=>{
			 return state;
		},
	}
}
export const GetSegmentBySegmentIdHandler = <S>() => {
	 return {
		 'GetSegmentBySegmentIdRequest':(state:S, action:ActionRequestData<null, GetSegmentBySegmentIdQueryParams>)=>{
			 return state;
		},
		 'GetSegmentBySegmentIdSuccess':(state:S, action:ActionResponseData<MarketSegment,ActionRequestData<null, GetSegmentBySegmentIdQueryParams>)=>{
			 return state;
		},
		 'GetSegmentBySegmentIdFail':(state:S, action:ActionRequestData<getSegmentBySegmentId)=>{
			 return state;
		},
	}
}
export const DeleteSegmentBySegmentIdHandler = <S>() => {
	 return {
		 'DeleteSegmentBySegmentIdRequest':(state:S, action:ActionRequestData<null, DeleteSegmentBySegmentIdQueryParams>)=>{
			 return state;
		},
		 'DeleteSegmentBySegmentIdSuccess':(state:S, action:ActionResponseData<null,ActionRequestData<null, DeleteSegmentBySegmentIdQueryParams>)=>{
			 return state;
		},
		 'DeleteSegmentBySegmentIdFail':(state:S, action:ActionRequestData<deleteSegmentBySegmentId)=>{
			 return state;
		},
	}
}
export const GetAccountMapHandler = <S>() => {
	 return {
		 'GetAccountMapRequest':(state:S, action:ActionRequestData<null, GetAccountMapQueryParams>)=>{
			 return state;
		},
		 'GetAccountMapSuccess':(state:S, action:ActionResponseData<Array<AccountMap>,ActionRequestData<null, GetAccountMapQueryParams>)=>{
			 return state;
		},
		 'GetAccountMapFail':(state:S, action:ActionRequestData<getAccountMap)=>{
			 return state;
		},
	}
}
export const GetAccountMapHistoryHandler = <S>() => {
	 return {
		 'GetAccountMapHistoryRequest':(state:S, action:ActionRequestData<null, GetAccountMapHistoryQueryParams>)=>{
			 return state;
		},
		 'GetAccountMapHistorySuccess':(state:S, action:ActionResponseData<Array<AccountMapLog>,ActionRequestData<null, GetAccountMapHistoryQueryParams>)=>{
			 return state;
		},
		 'GetAccountMapHistoryFail':(state:S, action:ActionRequestData<getAccountMapHistory)=>{
			 return state;
		},
	}
}