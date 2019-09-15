export const GetHelloWorldHandler = () => {
	const expm = ACT.GetHelloWorldRequest;
	 return {
		 'GetHelloWorldRequest':(state:any, action:ActionRequestData<null, GetHelloWorldQueryParams>)=>{
			 return state;
		},
		 'GetHelloWorldSuccess':(state:any, action:ActionResponseData<null,ActionRequestData<null, GetHelloWorldQueryParams>>)=>{
			 return state;
		},
		 'GetHelloWorldFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, GetHelloWorldQueryParams>>)=>{
			 return state;
		},
	}
}
export const PostLoginHandler = () => {
	const expm = ACT.PostLoginRequest;
	 return {
		 'PostLoginRequest':(state:any, action:ActionRequestData<null, PostLoginQueryParams>)=>{
			 return state;
		},
		 'PostLoginSuccess':(state:any, action:ActionResponseData<null,ActionRequestData<null, PostLoginQueryParams>>)=>{
			 return state;
		},
		 'PostLoginFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, PostLoginQueryParams>>)=>{
			 return state;
		},
	}
}
export const PostLogoutHandler = () => {
	const expm = ACT.PostLogoutRequest;
	 return {
		 'PostLogoutRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'PostLogoutSuccess':(state:any, action:ActionResponseData<null,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 'PostLogoutFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, null>>)=>{
			 return state;
		},
	}
}
export const GetMeHandler = () => {
	const expm = ACT.GetMeRequest;
	 return {
		 'GetMeRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'GetMeSuccess':(state:any, action:ActionResponseData<UserDTO,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 'GetMeFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, null>>)=>{
			 return state;
		},
	}
}
export const PutMeHandler = () => {
	const expm = ACT.PutMeRequest;
	 return {
		 'PutMeRequest':(state:any, action:ActionRequestData<string, null>)=>{
			 return state;
		},
		 'PutMeSuccess':(state:any, action:ActionResponseData<UserDTO,ActionRequestData<string, null>>)=>{
			 return state;
		},
		 'PutMeFail':(state:any, action:ActionResponseData<any,ActionRequestData<string, null>>)=>{
			 return state;
		},
	}
}
export const GetMissionsHandler = () => {
	const expm = ACT.GetMissionsRequest;
	 return {
		 'GetMissionsRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'GetMissionsSuccess':(state:any, action:ActionResponseData<Array<MissionDTO>,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 'GetMissionsFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, null>>)=>{
			 return state;
		},
	}
}
export const PostMissionsHandler = () => {
	const expm = ACT.PostMissionsRequest;
	 return {
		 'PostMissionsRequest':(state:any, action:ActionRequestData<MissionDTO, null>)=>{
			 return state;
		},
		 'PostMissionsSuccess':(state:any, action:ActionResponseData<MissionDTO,ActionRequestData<MissionDTO, null>>)=>{
			 return state;
		},
		 'PostMissionsFail':(state:any, action:ActionResponseData<any,ActionRequestData<MissionDTO, null>>)=>{
			 return state;
		},
	}
}
export const GetMissionsByIdHandler = () => {
	const expm = ACT.GetMissionsByIdRequest;
	 return {
		 'GetMissionsByIdRequest':(state:any, action:ActionRequestData<null, GetMissionsByIdQueryParams>)=>{
			 return state;
		},
		 'GetMissionsByIdSuccess':(state:any, action:ActionResponseData<MissionDTO,ActionRequestData<null, GetMissionsByIdQueryParams>>)=>{
			 return state;
		},
		 'GetMissionsByIdFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, GetMissionsByIdQueryParams>>)=>{
			 return state;
		},
	}
}
export const DeleteMissionsByIdHandler = () => {
	const expm = ACT.DeleteMissionsByIdRequest;
	 return {
		 'DeleteMissionsByIdRequest':(state:any, action:ActionRequestData<null, DeleteMissionsByIdQueryParams>)=>{
			 return state;
		},
		 'DeleteMissionsByIdSuccess':(state:any, action:ActionResponseData<null,ActionRequestData<null, DeleteMissionsByIdQueryParams>>)=>{
			 return state;
		},
		 'DeleteMissionsByIdFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, DeleteMissionsByIdQueryParams>>)=>{
			 return state;
		},
	}
}
export const GetMissionsByMissionNameFindRecordsHandler = () => {
	const expm = ACT.GetMissionsByMissionNameFindRecordsRequest;
	 return {
		 'GetMissionsByMissionNameFindRecordsRequest':(state:any, action:ActionRequestData<null, GetMissionsByMissionNameFindRecordsQueryParams>)=>{
			 return state;
		},
		 'GetMissionsByMissionNameFindRecordsSuccess':(state:any, action:ActionResponseData<FindRecordDTO,ActionRequestData<null, GetMissionsByMissionNameFindRecordsQueryParams>>)=>{
			 return state;
		},
		 'GetMissionsByMissionNameFindRecordsFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, GetMissionsByMissionNameFindRecordsQueryParams>>)=>{
			 return state;
		},
	}
}
export const PutMissionsByMissionNameFindRecordsHandler = () => {
	const expm = ACT.PutMissionsByMissionNameFindRecordsRequest;
	 return {
		 'PutMissionsByMissionNameFindRecordsRequest':(state:any, action:ActionRequestData<FindRecordDTO, PutMissionsByMissionNameFindRecordsQueryParams>)=>{
			 return state;
		},
		 'PutMissionsByMissionNameFindRecordsSuccess':(state:any, action:ActionResponseData<FindRecordDTO,ActionRequestData<FindRecordDTO, PutMissionsByMissionNameFindRecordsQueryParams>>)=>{
			 return state;
		},
		 'PutMissionsByMissionNameFindRecordsFail':(state:any, action:ActionResponseData<any,ActionRequestData<FindRecordDTO, PutMissionsByMissionNameFindRecordsQueryParams>>)=>{
			 return state;
		},
	}
}
export const PostMissionsByMissionNameFindRecordsHandler = () => {
	const expm = ACT.PostMissionsByMissionNameFindRecordsRequest;
	 return {
		 'PostMissionsByMissionNameFindRecordsRequest':(state:any, action:ActionRequestData<FindRecordDTO, PostMissionsByMissionNameFindRecordsQueryParams>)=>{
			 return state;
		},
		 'PostMissionsByMissionNameFindRecordsSuccess':(state:any, action:ActionResponseData<FindRecordDTO,ActionRequestData<FindRecordDTO, PostMissionsByMissionNameFindRecordsQueryParams>>)=>{
			 return state;
		},
		 'PostMissionsByMissionNameFindRecordsFail':(state:any, action:ActionResponseData<any,ActionRequestData<FindRecordDTO, PostMissionsByMissionNameFindRecordsQueryParams>>)=>{
			 return state;
		},
	}
}
export const GetMissionsByMissionNameFindRecordsByUuidHandler = () => {
	const expm = ACT.GetMissionsByMissionNameFindRecordsByUuidRequest;
	 return {
		 'GetMissionsByMissionNameFindRecordsByUuidRequest':(state:any, action:ActionRequestData<null, GetMissionsByMissionNameFindRecordsByUuidQueryParams>)=>{
			 return state;
		},
		 'GetMissionsByMissionNameFindRecordsByUuidSuccess':(state:any, action:ActionResponseData<FindRecordDTO,ActionRequestData<null, GetMissionsByMissionNameFindRecordsByUuidQueryParams>>)=>{
			 return state;
		},
		 'GetMissionsByMissionNameFindRecordsByUuidFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, GetMissionsByMissionNameFindRecordsByUuidQueryParams>>)=>{
			 return state;
		},
	}
}
export const DeleteMissionsByMissionNameFindRecordsByUuidHandler = () => {
	const expm = ACT.DeleteMissionsByMissionNameFindRecordsByUuidRequest;
	 return {
		 'DeleteMissionsByMissionNameFindRecordsByUuidRequest':(state:any, action:ActionRequestData<null, DeleteMissionsByMissionNameFindRecordsByUuidQueryParams>)=>{
			 return state;
		},
		 'DeleteMissionsByMissionNameFindRecordsByUuidSuccess':(state:any, action:ActionResponseData<null,ActionRequestData<null, DeleteMissionsByMissionNameFindRecordsByUuidQueryParams>>)=>{
			 return state;
		},
		 'DeleteMissionsByMissionNameFindRecordsByUuidFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, DeleteMissionsByMissionNameFindRecordsByUuidQueryParams>>)=>{
			 return state;
		},
	}
}
export const PostMissionsByMissionNameFindRecordsByUuidPhotosHandler = () => {
	const expm = ACT.PostMissionsByMissionNameFindRecordsByUuidPhotosRequest;
	 return {
		 'PostMissionsByMissionNameFindRecordsByUuidPhotosRequest':(state:any, action:ActionRequestData<null, PostMissionsByMissionNameFindRecordsByUuidPhotosQueryParams>)=>{
			 return state;
		},
		 'PostMissionsByMissionNameFindRecordsByUuidPhotosSuccess':(state:any, action:ActionResponseData<null,ActionRequestData<null, PostMissionsByMissionNameFindRecordsByUuidPhotosQueryParams>>)=>{
			 return state;
		},
		 'PostMissionsByMissionNameFindRecordsByUuidPhotosFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, PostMissionsByMissionNameFindRecordsByUuidPhotosQueryParams>>)=>{
			 return state;
		},
	}
}
export const PostMissionsByMissionNameFindRecordsByUuidPhotosOriginalByPhotoNameHandler = () => {
	const expm = ACT.PostMissionsByMissionNameFindRecordsByUuidPhotosOriginalByPhotoNameRequest;
	 return {
		 'PostMissionsByMissionNameFindRecordsByUuidPhotosOriginalByPhotoNameRequest':(state:any, action:ActionRequestData<null, PostMissionsByMissionNameFindRecordsByUuidPhotosOriginalByPhotoNameQueryParams>)=>{
			 return state;
		},
		 'PostMissionsByMissionNameFindRecordsByUuidPhotosOriginalByPhotoNameSuccess':(state:any, action:ActionResponseData<Resource,ActionRequestData<null, PostMissionsByMissionNameFindRecordsByUuidPhotosOriginalByPhotoNameQueryParams>>)=>{
			 return state;
		},
		 'PostMissionsByMissionNameFindRecordsByUuidPhotosOriginalByPhotoNameFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, PostMissionsByMissionNameFindRecordsByUuidPhotosOriginalByPhotoNameQueryParams>>)=>{
			 return state;
		},
	}
}
export const PostMissionsByMissionNameFindRecordsByUuidPhotosScaledByPhotoNameHandler = () => {
	const expm = ACT.PostMissionsByMissionNameFindRecordsByUuidPhotosScaledByPhotoNameRequest;
	 return {
		 'PostMissionsByMissionNameFindRecordsByUuidPhotosScaledByPhotoNameRequest':(state:any, action:ActionRequestData<null, PostMissionsByMissionNameFindRecordsByUuidPhotosScaledByPhotoNameQueryParams>)=>{
			 return state;
		},
		 'PostMissionsByMissionNameFindRecordsByUuidPhotosScaledByPhotoNameSuccess':(state:any, action:ActionResponseData<Resource,ActionRequestData<null, PostMissionsByMissionNameFindRecordsByUuidPhotosScaledByPhotoNameQueryParams>>)=>{
			 return state;
		},
		 'PostMissionsByMissionNameFindRecordsByUuidPhotosScaledByPhotoNameFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, PostMissionsByMissionNameFindRecordsByUuidPhotosScaledByPhotoNameQueryParams>>)=>{
			 return state;
		},
	}
}
export const DeleteMissionsByMissionNameFindRecordsByUuidPhotosByPhotoNameHandler = () => {
	const expm = ACT.DeleteMissionsByMissionNameFindRecordsByUuidPhotosByPhotoNameRequest;
	 return {
		 'DeleteMissionsByMissionNameFindRecordsByUuidPhotosByPhotoNameRequest':(state:any, action:ActionRequestData<null, DeleteMissionsByMissionNameFindRecordsByUuidPhotosByPhotoNameQueryParams>)=>{
			 return state;
		},
		 'DeleteMissionsByMissionNameFindRecordsByUuidPhotosByPhotoNameSuccess':(state:any, action:ActionResponseData<null,ActionRequestData<null, DeleteMissionsByMissionNameFindRecordsByUuidPhotosByPhotoNameQueryParams>>)=>{
			 return state;
		},
		 'DeleteMissionsByMissionNameFindRecordsByUuidPhotosByPhotoNameFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, DeleteMissionsByMissionNameFindRecordsByUuidPhotosByPhotoNameQueryParams>>)=>{
			 return state;
		},
	}
}
export const GetMissionsByMissionNameSampleRecordsHandler = () => {
	const expm = ACT.GetMissionsByMissionNameSampleRecordsRequest;
	 return {
		 'GetMissionsByMissionNameSampleRecordsRequest':(state:any, action:ActionRequestData<null, GetMissionsByMissionNameSampleRecordsQueryParams>)=>{
			 return state;
		},
		 'GetMissionsByMissionNameSampleRecordsSuccess':(state:any, action:ActionResponseData<FindRecordDTO,ActionRequestData<null, GetMissionsByMissionNameSampleRecordsQueryParams>>)=>{
			 return state;
		},
		 'GetMissionsByMissionNameSampleRecordsFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, GetMissionsByMissionNameSampleRecordsQueryParams>>)=>{
			 return state;
		},
	}
}
export const PutMissionsByMissionNameSampleRecordsHandler = () => {
	const expm = ACT.PutMissionsByMissionNameSampleRecordsRequest;
	 return {
		 'PutMissionsByMissionNameSampleRecordsRequest':(state:any, action:ActionRequestData<FindRecordDTO, PutMissionsByMissionNameSampleRecordsQueryParams>)=>{
			 return state;
		},
		 'PutMissionsByMissionNameSampleRecordsSuccess':(state:any, action:ActionResponseData<FindRecordDTO,ActionRequestData<FindRecordDTO, PutMissionsByMissionNameSampleRecordsQueryParams>>)=>{
			 return state;
		},
		 'PutMissionsByMissionNameSampleRecordsFail':(state:any, action:ActionResponseData<any,ActionRequestData<FindRecordDTO, PutMissionsByMissionNameSampleRecordsQueryParams>>)=>{
			 return state;
		},
	}
}
export const PostMissionsByMissionNameSampleRecordsHandler = () => {
	const expm = ACT.PostMissionsByMissionNameSampleRecordsRequest;
	 return {
		 'PostMissionsByMissionNameSampleRecordsRequest':(state:any, action:ActionRequestData<FindRecordDTO, PostMissionsByMissionNameSampleRecordsQueryParams>)=>{
			 return state;
		},
		 'PostMissionsByMissionNameSampleRecordsSuccess':(state:any, action:ActionResponseData<FindRecordDTO,ActionRequestData<FindRecordDTO, PostMissionsByMissionNameSampleRecordsQueryParams>>)=>{
			 return state;
		},
		 'PostMissionsByMissionNameSampleRecordsFail':(state:any, action:ActionResponseData<any,ActionRequestData<FindRecordDTO, PostMissionsByMissionNameSampleRecordsQueryParams>>)=>{
			 return state;
		},
	}
}
export const GetMissionsByMissionNameSampleRecordsByUuidHandler = () => {
	const expm = ACT.GetMissionsByMissionNameSampleRecordsByUuidRequest;
	 return {
		 'GetMissionsByMissionNameSampleRecordsByUuidRequest':(state:any, action:ActionRequestData<null, GetMissionsByMissionNameSampleRecordsByUuidQueryParams>)=>{
			 return state;
		},
		 'GetMissionsByMissionNameSampleRecordsByUuidSuccess':(state:any, action:ActionResponseData<FindRecordDTO,ActionRequestData<null, GetMissionsByMissionNameSampleRecordsByUuidQueryParams>>)=>{
			 return state;
		},
		 'GetMissionsByMissionNameSampleRecordsByUuidFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, GetMissionsByMissionNameSampleRecordsByUuidQueryParams>>)=>{
			 return state;
		},
	}
}
export const DeleteMissionsByMissionNameSampleRecordsByUuidHandler = () => {
	const expm = ACT.DeleteMissionsByMissionNameSampleRecordsByUuidRequest;
	 return {
		 'DeleteMissionsByMissionNameSampleRecordsByUuidRequest':(state:any, action:ActionRequestData<null, DeleteMissionsByMissionNameSampleRecordsByUuidQueryParams>)=>{
			 return state;
		},
		 'DeleteMissionsByMissionNameSampleRecordsByUuidSuccess':(state:any, action:ActionResponseData<null,ActionRequestData<null, DeleteMissionsByMissionNameSampleRecordsByUuidQueryParams>>)=>{
			 return state;
		},
		 'DeleteMissionsByMissionNameSampleRecordsByUuidFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, DeleteMissionsByMissionNameSampleRecordsByUuidQueryParams>>)=>{
			 return state;
		},
	}
}
export const PostMissionsByMissionNameSampleRecordsByUuidPhotosHandler = () => {
	const expm = ACT.PostMissionsByMissionNameSampleRecordsByUuidPhotosRequest;
	 return {
		 'PostMissionsByMissionNameSampleRecordsByUuidPhotosRequest':(state:any, action:ActionRequestData<null, PostMissionsByMissionNameSampleRecordsByUuidPhotosQueryParams>)=>{
			 return state;
		},
		 'PostMissionsByMissionNameSampleRecordsByUuidPhotosSuccess':(state:any, action:ActionResponseData<null,ActionRequestData<null, PostMissionsByMissionNameSampleRecordsByUuidPhotosQueryParams>>)=>{
			 return state;
		},
		 'PostMissionsByMissionNameSampleRecordsByUuidPhotosFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, PostMissionsByMissionNameSampleRecordsByUuidPhotosQueryParams>>)=>{
			 return state;
		},
	}
}
export const PostMissionsByMissionNameSampleRecordsByUuidPhotosOriginalByPhotoNameHandler = () => {
	const expm = ACT.PostMissionsByMissionNameSampleRecordsByUuidPhotosOriginalByPhotoNameRequest;
	 return {
		 'PostMissionsByMissionNameSampleRecordsByUuidPhotosOriginalByPhotoNameRequest':(state:any, action:ActionRequestData<null, PostMissionsByMissionNameSampleRecordsByUuidPhotosOriginalByPhotoNameQueryParams>)=>{
			 return state;
		},
		 'PostMissionsByMissionNameSampleRecordsByUuidPhotosOriginalByPhotoNameSuccess':(state:any, action:ActionResponseData<Resource,ActionRequestData<null, PostMissionsByMissionNameSampleRecordsByUuidPhotosOriginalByPhotoNameQueryParams>>)=>{
			 return state;
		},
		 'PostMissionsByMissionNameSampleRecordsByUuidPhotosOriginalByPhotoNameFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, PostMissionsByMissionNameSampleRecordsByUuidPhotosOriginalByPhotoNameQueryParams>>)=>{
			 return state;
		},
	}
}
export const PostMissionsByMissionNameSampleRecordsByUuidPhotosScaledByPhotoNameHandler = () => {
	const expm = ACT.PostMissionsByMissionNameSampleRecordsByUuidPhotosScaledByPhotoNameRequest;
	 return {
		 'PostMissionsByMissionNameSampleRecordsByUuidPhotosScaledByPhotoNameRequest':(state:any, action:ActionRequestData<null, PostMissionsByMissionNameSampleRecordsByUuidPhotosScaledByPhotoNameQueryParams>)=>{
			 return state;
		},
		 'PostMissionsByMissionNameSampleRecordsByUuidPhotosScaledByPhotoNameSuccess':(state:any, action:ActionResponseData<Resource,ActionRequestData<null, PostMissionsByMissionNameSampleRecordsByUuidPhotosScaledByPhotoNameQueryParams>>)=>{
			 return state;
		},
		 'PostMissionsByMissionNameSampleRecordsByUuidPhotosScaledByPhotoNameFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, PostMissionsByMissionNameSampleRecordsByUuidPhotosScaledByPhotoNameQueryParams>>)=>{
			 return state;
		},
	}
}
export const DeleteMissionsByMissionNameSampleRecordsByUuidPhotosByPhotoNameHandler = () => {
	const expm = ACT.DeleteMissionsByMissionNameSampleRecordsByUuidPhotosByPhotoNameRequest;
	 return {
		 'DeleteMissionsByMissionNameSampleRecordsByUuidPhotosByPhotoNameRequest':(state:any, action:ActionRequestData<null, DeleteMissionsByMissionNameSampleRecordsByUuidPhotosByPhotoNameQueryParams>)=>{
			 return state;
		},
		 'DeleteMissionsByMissionNameSampleRecordsByUuidPhotosByPhotoNameSuccess':(state:any, action:ActionResponseData<null,ActionRequestData<null, DeleteMissionsByMissionNameSampleRecordsByUuidPhotosByPhotoNameQueryParams>>)=>{
			 return state;
		},
		 'DeleteMissionsByMissionNameSampleRecordsByUuidPhotosByPhotoNameFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, DeleteMissionsByMissionNameSampleRecordsByUuidPhotosByPhotoNameQueryParams>>)=>{
			 return state;
		},
	}
}
export const GetMissionsByMissionNameSearchFindRecordsHandler = () => {
	const expm = ACT.GetMissionsByMissionNameSearchFindRecordsRequest;
	 return {
		 'GetMissionsByMissionNameSearchFindRecordsRequest':(state:any, action:ActionRequestData<null, GetMissionsByMissionNameSearchFindRecordsQueryParams>)=>{
			 return state;
		},
		 'GetMissionsByMissionNameSearchFindRecordsSuccess':(state:any, action:ActionResponseData<Array<FindRecordDTO>,ActionRequestData<null, GetMissionsByMissionNameSearchFindRecordsQueryParams>>)=>{
			 return state;
		},
		 'GetMissionsByMissionNameSearchFindRecordsFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, GetMissionsByMissionNameSearchFindRecordsQueryParams>>)=>{
			 return state;
		},
	}
}
export const GetMissionsByMissionNameSearchSampleRecordsHandler = () => {
	const expm = ACT.GetMissionsByMissionNameSearchSampleRecordsRequest;
	 return {
		 'GetMissionsByMissionNameSearchSampleRecordsRequest':(state:any, action:ActionRequestData<null, GetMissionsByMissionNameSearchSampleRecordsQueryParams>)=>{
			 return state;
		},
		 'GetMissionsByMissionNameSearchSampleRecordsSuccess':(state:any, action:ActionResponseData<Array<FindRecordDTO>,ActionRequestData<null, GetMissionsByMissionNameSearchSampleRecordsQueryParams>>)=>{
			 return state;
		},
		 'GetMissionsByMissionNameSearchSampleRecordsFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, GetMissionsByMissionNameSearchSampleRecordsQueryParams>>)=>{
			 return state;
		},
	}
}
export const GetSetBackupDownscalerHandler = () => {
	const expm = ACT.GetSetBackupDownscalerRequest;
	 return {
		 'GetSetBackupDownscalerRequest':(state:any, action:ActionRequestData<null, GetSetBackupDownscalerQueryParams>)=>{
			 return state;
		},
		 'GetSetBackupDownscalerSuccess':(state:any, action:ActionResponseData<null,ActionRequestData<null, GetSetBackupDownscalerQueryParams>>)=>{
			 return state;
		},
		 'GetSetBackupDownscalerFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, GetSetBackupDownscalerQueryParams>>)=>{
			 return state;
		},
	}
}
export const GetSyncExternalIdHandler = () => {
	const expm = ACT.GetSyncExternalIdRequest;
	 return {
		 'GetSyncExternalIdRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'GetSyncExternalIdSuccess':(state:any, action:ActionResponseData<IdDTO,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 'GetSyncExternalIdFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, null>>)=>{
			 return state;
		},
	}
}
export const GetSyncFileRootHandler = () => {
	const expm = ACT.GetSyncFileRootRequest;
	 return {
		 'GetSyncFileRootRequest':(state:any, action:ActionRequestData<null, GetSyncFileRootQueryParams>)=>{
			 return state;
		},
		 'GetSyncFileRootSuccess':(state:any, action:ActionResponseData<IdDTO,ActionRequestData<null, GetSyncFileRootQueryParams>>)=>{
			 return state;
		},
		 'GetSyncFileRootFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, GetSyncFileRootQueryParams>>)=>{
			 return state;
		},
	}
}
export const GetSyncInitialLoadHandler = () => {
	const expm = ACT.GetSyncInitialLoadRequest;
	 return {
		 'GetSyncInitialLoadRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'GetSyncInitialLoadSuccess':(state:any, action:ActionResponseData<null,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 'GetSyncInitialLoadFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, null>>)=>{
			 return state;
		},
	}
}
export const GetSyncNodeTypeHandler = () => {
	const expm = ACT.GetSyncNodeTypeRequest;
	 return {
		 'GetSyncNodeTypeRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'GetSyncNodeTypeSuccess':(state:any, action:ActionResponseData<IdDTO,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 'GetSyncNodeTypeFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, null>>)=>{
			 return state;
		},
	}
}
export const GetSyncOpenRegistrationHandler = () => {
	const expm = ACT.GetSyncOpenRegistrationRequest;
	 return {
		 'GetSyncOpenRegistrationRequest':(state:any, action:ActionRequestData<null, GetSyncOpenRegistrationQueryParams>)=>{
			 return state;
		},
		 'GetSyncOpenRegistrationSuccess':(state:any, action:ActionResponseData<null,ActionRequestData<null, GetSyncOpenRegistrationQueryParams>>)=>{
			 return state;
		},
		 'GetSyncOpenRegistrationFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, GetSyncOpenRegistrationQueryParams>>)=>{
			 return state;
		},
	}
}
export const GetSyncPullHandler = () => {
	const expm = ACT.GetSyncPullRequest;
	 return {
		 'GetSyncPullRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'GetSyncPullSuccess':(state:any, action:ActionResponseData<null,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 'GetSyncPullFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, null>>)=>{
			 return state;
		},
	}
}
export const GetSyncPushHandler = () => {
	const expm = ACT.GetSyncPushRequest;
	 return {
		 'GetSyncPushRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'GetSyncPushSuccess':(state:any, action:ActionResponseData<null,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 'GetSyncPushFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, null>>)=>{
			 return state;
		},
	}
}
export const GetSyncRegisterHandler = () => {
	const expm = ACT.GetSyncRegisterRequest;
	 return {
		 'GetSyncRegisterRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'GetSyncRegisterSuccess':(state:any, action:ActionResponseData<null,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 'GetSyncRegisterFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, null>>)=>{
			 return state;
		},
	}
}
export const GetSyncRemoveNodeHandler = () => {
	const expm = ACT.GetSyncRemoveNodeRequest;
	 return {
		 'GetSyncRemoveNodeRequest':(state:any, action:ActionRequestData<null, GetSyncRemoveNodeQueryParams>)=>{
			 return state;
		},
		 'GetSyncRemoveNodeSuccess':(state:any, action:ActionResponseData<null,ActionRequestData<null, GetSyncRemoveNodeQueryParams>>)=>{
			 return state;
		},
		 'GetSyncRemoveNodeFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, GetSyncRemoveNodeQueryParams>>)=>{
			 return state;
		},
	}
}
export const GetSyncSetAutoSyncHandler = () => {
	const expm = ACT.GetSyncSetAutoSyncRequest;
	 return {
		 'GetSyncSetAutoSyncRequest':(state:any, action:ActionRequestData<null, GetSyncSetAutoSyncQueryParams>)=>{
			 return state;
		},
		 'GetSyncSetAutoSyncSuccess':(state:any, action:ActionResponseData<null,ActionRequestData<null, GetSyncSetAutoSyncQueryParams>>)=>{
			 return state;
		},
		 'GetSyncSetAutoSyncFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, GetSyncSetAutoSyncQueryParams>>)=>{
			 return state;
		},
	}
}
export const GetSyncStatusHandler = () => {
	const expm = ACT.GetSyncStatusRequest;
	 return {
		 'GetSyncStatusRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'GetSyncStatusSuccess':(state:any, action:ActionResponseData<null,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 'GetSyncStatusFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, null>>)=>{
			 return state;
		},
	}
}
export const GetSyncSyncUrlHandler = () => {
	const expm = ACT.GetSyncSyncUrlRequest;
	 return {
		 'GetSyncSyncUrlRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'GetSyncSyncUrlSuccess':(state:any, action:ActionResponseData<IdDTO,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 'GetSyncSyncUrlFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, null>>)=>{
			 return state;
		},
	}
}
export const GetSyncSynchroniseHandler = () => {
	const expm = ACT.GetSyncSynchroniseRequest;
	 return {
		 'GetSyncSynchroniseRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'GetSyncSynchroniseSuccess':(state:any, action:ActionResponseData<null,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 'GetSyncSynchroniseFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, null>>)=>{
			 return state;
		},
	}
}
export const GetSyncByMissionNamePullFilesHandler = () => {
	const expm = ACT.GetSyncByMissionNamePullFilesRequest;
	 return {
		 'GetSyncByMissionNamePullFilesRequest':(state:any, action:ActionRequestData<null, GetSyncByMissionNamePullFilesQueryParams>)=>{
			 return state;
		},
		 'GetSyncByMissionNamePullFilesSuccess':(state:any, action:ActionResponseData<null,ActionRequestData<null, GetSyncByMissionNamePullFilesQueryParams>>)=>{
			 return state;
		},
		 'GetSyncByMissionNamePullFilesFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, GetSyncByMissionNamePullFilesQueryParams>>)=>{
			 return state;
		},
	}
}
export const GetSyncByMissionNamePushFilesHandler = () => {
	const expm = ACT.GetSyncByMissionNamePushFilesRequest;
	 return {
		 'GetSyncByMissionNamePushFilesRequest':(state:any, action:ActionRequestData<null, GetSyncByMissionNamePushFilesQueryParams>)=>{
			 return state;
		},
		 'GetSyncByMissionNamePushFilesSuccess':(state:any, action:ActionResponseData<null,ActionRequestData<null, GetSyncByMissionNamePushFilesQueryParams>>)=>{
			 return state;
		},
		 'GetSyncByMissionNamePushFilesFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, GetSyncByMissionNamePushFilesQueryParams>>)=>{
			 return state;
		},
	}
}
export const GetSyncByMissionNameSynchroniseFilesHandler = () => {
	const expm = ACT.GetSyncByMissionNameSynchroniseFilesRequest;
	 return {
		 'GetSyncByMissionNameSynchroniseFilesRequest':(state:any, action:ActionRequestData<null, GetSyncByMissionNameSynchroniseFilesQueryParams>)=>{
			 return state;
		},
		 'GetSyncByMissionNameSynchroniseFilesSuccess':(state:any, action:ActionResponseData<null,ActionRequestData<null, GetSyncByMissionNameSynchroniseFilesQueryParams>>)=>{
			 return state;
		},
		 'GetSyncByMissionNameSynchroniseFilesFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, GetSyncByMissionNameSynchroniseFilesQueryParams>>)=>{
			 return state;
		},
	}
}
export const GetUserHandler = () => {
	const expm = ACT.GetUserRequest;
	 return {
		 'GetUserRequest':(state:any, action:ActionRequestData<null, GetUserQueryParams>)=>{
			 return state;
		},
		 'GetUserSuccess':(state:any, action:ActionResponseData<UserDTO,ActionRequestData<null, GetUserQueryParams>>)=>{
			 return state;
		},
		 'GetUserFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, GetUserQueryParams>>)=>{
			 return state;
		},
	}
}
export const PutUserHandler = () => {
	const expm = ACT.PutUserRequest;
	 return {
		 'PutUserRequest':(state:any, action:ActionRequestData<UserDTO, null>)=>{
			 return state;
		},
		 'PutUserSuccess':(state:any, action:ActionResponseData<UserDTO,ActionRequestData<UserDTO, null>>)=>{
			 return state;
		},
		 'PutUserFail':(state:any, action:ActionResponseData<any,ActionRequestData<UserDTO, null>>)=>{
			 return state;
		},
	}
}
export const PostUserHandler = () => {
	const expm = ACT.PostUserRequest;
	 return {
		 'PostUserRequest':(state:any, action:ActionRequestData<UserDTO, null>)=>{
			 return state;
		},
		 'PostUserSuccess':(state:any, action:ActionResponseData<UserDTO,ActionRequestData<UserDTO, null>>)=>{
			 return state;
		},
		 'PostUserFail':(state:any, action:ActionResponseData<any,ActionRequestData<UserDTO, null>>)=>{
			 return state;
		},
	}
}
export const DeleteUserHandler = () => {
	const expm = ACT.DeleteUserRequest;
	 return {
		 'DeleteUserRequest':(state:any, action:ActionRequestData<null, DeleteUserQueryParams>)=>{
			 return state;
		},
		 'DeleteUserSuccess':(state:any, action:ActionResponseData<null,ActionRequestData<null, DeleteUserQueryParams>>)=>{
			 return state;
		},
		 'DeleteUserFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, DeleteUserQueryParams>>)=>{
			 return state;
		},
	}
}
export const GetUsersHandler = () => {
	const expm = ACT.GetUsersRequest;
	 return {
		 'GetUsersRequest':(state:any, action:ActionRequestData<null, null>)=>{
			 return state;
		},
		 'GetUsersSuccess':(state:any, action:ActionResponseData<Array<UserDTO>,ActionRequestData<null, null>>)=>{
			 return state;
		},
		 'GetUsersFail':(state:any, action:ActionResponseData<any,ActionRequestData<null, null>>)=>{
			 return state;
		},
	}
}