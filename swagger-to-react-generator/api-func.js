// call Log in
import {FindRecordDTO, UserDTO} from "./api-models";

export const PostLogin = (password:string, username:string) => {
	const settings = {		// set settings data
		url:`/login?password=${password}&username=${username}`,
		httpMethod: 'POST',
		body:undefined,
		requestType: ACT.PostLoginRequest,
		successType: ACT.PostLoginSuccess,
		failType: ACT.PostLoginFail
	};
	return commonCallApi(settings); 
};


// call Log out
export const PostLogout = () => {
	const settings = {		// set settings data
		url:`/logout`,
		httpMethod: 'POST',
		body:undefined,
		requestType: ACT.PostLogoutRequest,
		successType: ACT.PostLogoutSuccess,
		failType: ACT.PostLogoutFail
	};
	return commonCallApi(settings); 
};


// call addMission
export const PostMissions = (dto:MissionDTO) => {
	const settings = {		// set settings data
		url:`/missions`,
		httpMethod: 'POST',
		body:JSON.stringify(dto),
		requestType: ACT.PostMissionsRequest,
		successType: ACT.PostMissionsSuccess,
		failType: ACT.PostMissionsFail
	};
	return commonCallApi(settings); 
};


// call add
export const PostMissionsByMissionNameFindRecords = (dto:FindRecordDTO,missionName:string) => {
	const settings = {		// set settings data
		url:`/missions/${missionName}/find-records`,
		httpMethod: 'POST',
		body:JSON.stringify(dto),
		requestType: ACT.PostMissionsByMissionNameFindRecordsRequest,
		successType: ACT.PostMissionsByMissionNameFindRecordsSuccess,
		failType: ACT.PostMissionsByMissionNameFindRecordsFail
	};
	return commonCallApi(settings); 
};


// call addPhoto
export const PostMissionsByMissionNameFindRecordsByUuidPhotos = (missionName:string,uuid:string) => {
	const settings = {		// set settings data
		url:`/missions/${missionName}/findRecords/${uuid}/photos`,
		httpMethod: 'POST',
		body:undefined,
		requestType: ACT.PostMissionsByMissionNameFindRecordsByUuidPhotosRequest,
		successType: ACT.PostMissionsByMissionNameFindRecordsByUuidPhotosSuccess,
		failType: ACT.PostMissionsByMissionNameFindRecordsByUuidPhotosFail
	};
	return commonCallApi(settings); 
};


// call getOriginalPhoto
export const PostMissionsByMissionNameFindRecordsByUuidPhotosOriginalByPhotoName = (missionName:string,photoName:string,uuid:string) => {
	const settings = {		// set settings data
		url:`/missions/${missionName}/findRecords/${uuid}/photos/original/${photoName}`,
		httpMethod: 'POST',
		body:undefined,
		requestType: ACT.PostMissionsByMissionNameFindRecordsByUuidPhotosOriginalByPhotoNameRequest,
		successType: ACT.PostMissionsByMissionNameFindRecordsByUuidPhotosOriginalByPhotoNameSuccess,
		failType: ACT.PostMissionsByMissionNameFindRecordsByUuidPhotosOriginalByPhotoNameFail
	};
	return commonCallApi(settings); 
};


// call getScaledPhoto
export const PostMissionsByMissionNameFindRecordsByUuidPhotosScaledByPhotoName = (missionName:string,photoName:string,uuid:string) => {
	const settings = {		// set settings data
		url:`/missions/${missionName}/findRecords/${uuid}/photos/scaled/${photoName}`,
		httpMethod: 'POST',
		body:undefined,
		requestType: ACT.PostMissionsByMissionNameFindRecordsByUuidPhotosScaledByPhotoNameRequest,
		successType: ACT.PostMissionsByMissionNameFindRecordsByUuidPhotosScaledByPhotoNameSuccess,
		failType: ACT.PostMissionsByMissionNameFindRecordsByUuidPhotosScaledByPhotoNameFail
	};
	return commonCallApi(settings); 
};


// call add
export const PostMissionsByMissionNameSampleRecords = (dto:FindRecordDTO,missionName:string) => {
	const settings = {		// set settings data
		url:`/missions/${missionName}/sample-records`,
		httpMethod: 'POST',
		body:JSON.stringify(dto),
		requestType: ACT.PostMissionsByMissionNameSampleRecordsRequest,
		successType: ACT.PostMissionsByMissionNameSampleRecordsSuccess,
		failType: ACT.PostMissionsByMissionNameSampleRecordsFail
	};
	return commonCallApi(settings); 
};


// call addPhoto
export const PostMissionsByMissionNameSampleRecordsByUuidPhotos = (missionName:string,uuid:string) => {
	const settings = {		// set settings data
		url:`/missions/${missionName}/sampleRecords/${uuid}/photos`,
		httpMethod: 'POST',
		body:undefined,
		requestType: ACT.PostMissionsByMissionNameSampleRecordsByUuidPhotosRequest,
		successType: ACT.PostMissionsByMissionNameSampleRecordsByUuidPhotosSuccess,
		failType: ACT.PostMissionsByMissionNameSampleRecordsByUuidPhotosFail
	};
	return commonCallApi(settings); 
};


// call getOriginalPhoto
export const PostMissionsByMissionNameSampleRecordsByUuidPhotosOriginalByPhotoName = (missionName:string,photoName:string,uuid:string) => {
	const settings = {		// set settings data
		url:`/missions/${missionName}/sampleRecords/${uuid}/photos/original/${photoName}`,
		httpMethod: 'POST',
		body:undefined,
		requestType: ACT.PostMissionsByMissionNameSampleRecordsByUuidPhotosOriginalByPhotoNameRequest,
		successType: ACT.PostMissionsByMissionNameSampleRecordsByUuidPhotosOriginalByPhotoNameSuccess,
		failType: ACT.PostMissionsByMissionNameSampleRecordsByUuidPhotosOriginalByPhotoNameFail
	};
	return commonCallApi(settings); 
};


// call getScaledPhoto
export const PostMissionsByMissionNameSampleRecordsByUuidPhotosScaledByPhotoName = (missionName:string,photoName:string,uuid:string) => {
	const settings = {		// set settings data
		url:`/missions/${missionName}/sampleRecords/${uuid}/photos/scaled/${photoName}`,
		httpMethod: 'POST',
		body:undefined,
		requestType: ACT.PostMissionsByMissionNameSampleRecordsByUuidPhotosScaledByPhotoNameRequest,
		successType: ACT.PostMissionsByMissionNameSampleRecordsByUuidPhotosScaledByPhotoNameSuccess,
		failType: ACT.PostMissionsByMissionNameSampleRecordsByUuidPhotosScaledByPhotoNameFail
	};
	return commonCallApi(settings); 
};


// call addUser
export const PostUser = (dto:UserDTO) => {
	const settings = {		// set settings data
		url:`/user`,
		httpMethod: 'POST',
		body:JSON.stringify(dto),
		requestType: ACT.PostUserRequest,
		successType: ACT.PostUserSuccess,
		failType: ACT.PostUserFail
	};
	return commonCallApi(settings); 
};


// call sayHello
export const GetHelloWorld = (name:string = 'Stranger') => {
	const settings = {		// set settings data
		url:`/hello-world?name=${name}`,
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetHelloWorldRequest,
		successType: ACT.GetHelloWorldSuccess,
		failType: ACT.GetHelloWorldFail
	};
	return commonCallApi(settings); 
};


// call getCurrentUser
export const GetMe = () => {
	const settings = {		// set settings data
		url:`/me`,
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetMeRequest,
		successType: ACT.GetMeSuccess,
		failType: ACT.GetMeFail
	};
	return commonCallApi(settings); 
};


// call getMissions
export const GetMissions = () => {
	const settings = {		// set settings data
		url:`/missions`,
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetMissionsRequest,
		successType: ACT.GetMissionsSuccess,
		failType: ACT.GetMissionsFail
	};
	return commonCallApi(settings); 
};


// call getMission
export const GetMissionsById = (id:string) => {
	const settings = {		// set settings data
		url:`/missions/${id}`,
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetMissionsByIdRequest,
		successType: ACT.GetMissionsByIdSuccess,
		failType: ACT.GetMissionsByIdFail
	};
	return commonCallApi(settings); 
};


// call getAll
export const GetMissionsByMissionNameFindRecords = (missionName:string,offset:number,pageNumber:number,pageSize:number,paged:boolean,sortSorted:boolean,sortUnsorted:boolean,unpaged:boolean) => {
	const settings = {		// set settings data
		url:`/missions/${missionName}/find-records?offset=${offset}&pageNumber=${pageNumber}&pageSize=${pageSize}&paged=${paged}&sort.sorted=${sortSorted}&sort.unsorted=${sortUnsorted}&unpaged=${unpaged}`,
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetMissionsByMissionNameFindRecordsRequest,
		successType: ACT.GetMissionsByMissionNameFindRecordsSuccess,
		failType: ACT.GetMissionsByMissionNameFindRecordsFail
	};
	return commonCallApi(settings); 
};


// call get
export const GetMissionsByMissionNameFindRecordsByUuid = (missionName:string,uuid:string) => {
	const settings = {		// set settings data
		url:`/missions/${missionName}/findRecords/${uuid}`,
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetMissionsByMissionNameFindRecordsByUuidRequest,
		successType: ACT.GetMissionsByMissionNameFindRecordsByUuidSuccess,
		failType: ACT.GetMissionsByMissionNameFindRecordsByUuidFail
	};
	return commonCallApi(settings); 
};


// call getAll
export const GetMissionsByMissionNameSampleRecords = (missionName:string,offset:number,pageNumber:number,pageSize:number,paged:boolean,sortSorted:boolean,sortUnsorted:boolean,unpaged:boolean) => {
	const settings = {		// set settings data
		url:`/missions/${missionName}/sample-records?offset=${offset}&pageNumber=${pageNumber}&pageSize=${pageSize}&paged=${paged}&sort.sorted=${sortSorted}&sort.unsorted=${sortUnsorted}&unpaged=${unpaged}`,
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetMissionsByMissionNameSampleRecordsRequest,
		successType: ACT.GetMissionsByMissionNameSampleRecordsSuccess,
		failType: ACT.GetMissionsByMissionNameSampleRecordsFail
	};
	return commonCallApi(settings); 
};


// call get
export const GetMissionsByMissionNameSampleRecordsByUuid = (missionName:string,uuid:string) => {
	const settings = {		// set settings data
		url:`/missions/${missionName}/sampleRecords/${uuid}`,
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetMissionsByMissionNameSampleRecordsByUuidRequest,
		successType: ACT.GetMissionsByMissionNameSampleRecordsByUuidSuccess,
		failType: ACT.GetMissionsByMissionNameSampleRecordsByUuidFail
	};
	return commonCallApi(settings); 
};


// call find
export const GetMissionsByMissionNameSearchFindRecords = (idPattern:string,missionName:string) => {
	const settings = {		// set settings data
		url:`/missions/${missionName}/search/find-records?idPattern=${idPattern}`,
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetMissionsByMissionNameSearchFindRecordsRequest,
		successType: ACT.GetMissionsByMissionNameSearchFindRecordsSuccess,
		failType: ACT.GetMissionsByMissionNameSearchFindRecordsFail
	};
	return commonCallApi(settings); 
};


// call find
export const GetMissionsByMissionNameSearchSampleRecords = (idPattern:string,missionName:string) => {
	const settings = {		// set settings data
		url:`/missions/${missionName}/search/sample-records?idPattern=${idPattern}`,
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetMissionsByMissionNameSearchSampleRecordsRequest,
		successType: ACT.GetMissionsByMissionNameSearchSampleRecordsSuccess,
		failType: ACT.GetMissionsByMissionNameSearchSampleRecordsFail
	};
	return commonCallApi(settings); 
};


// call setBackupDownscaler
export const GetSetBackupDownscaler = (enabled:boolean) => {
	const settings = {		// set settings data
		url:`/set-backup-downscaler?enabled=${enabled}`,
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetSetBackupDownscalerRequest,
		successType: ACT.GetSetBackupDownscalerSuccess,
		failType: ACT.GetSetBackupDownscalerFail
	};
	return commonCallApi(settings); 
};


// call getExternalId
export const GetSyncExternalId = () => {
	const settings = {		// set settings data
		url:`/sync/external-id`,
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetSyncExternalIdRequest,
		successType: ACT.GetSyncExternalIdSuccess,
		failType: ACT.GetSyncExternalIdFail
	};
	return commonCallApi(settings); 
};


// call getMissionFileRoot
export const GetSyncFileRoot = (missionName:string) => {
	const settings = {		// set settings data
		url:`/sync/file-root?missionName=${missionName}`,
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetSyncFileRootRequest,
		successType: ACT.GetSyncFileRootSuccess,
		failType: ACT.GetSyncFileRootFail
	};
	return commonCallApi(settings); 
};


// call initialLoad
export const GetSyncInitialLoad = () => {
	const settings = {		// set settings data
		url:`/sync/initial-load`,
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetSyncInitialLoadRequest,
		successType: ACT.GetSyncInitialLoadSuccess,
		failType: ACT.GetSyncInitialLoadFail
	};
	return commonCallApi(settings); 
};


// call getNodeType
export const GetSyncNodeType = () => {
	const settings = {		// set settings data
		url:`/sync/node-type`,
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetSyncNodeTypeRequest,
		successType: ACT.GetSyncNodeTypeSuccess,
		failType: ACT.GetSyncNodeTypeFail
	};
	return commonCallApi(settings); 
};


// call openRegistration
export const GetSyncOpenRegistration = (externalId:string) => {
	const settings = {		// set settings data
		url:`/sync/open-registration?externalId=${externalId}`,
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetSyncOpenRegistrationRequest,
		successType: ACT.GetSyncOpenRegistrationSuccess,
		failType: ACT.GetSyncOpenRegistrationFail
	};
	return commonCallApi(settings); 
};


// call pull
export const GetSyncPull = () => {
	const settings = {		// set settings data
		url:`/sync/pull`,
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetSyncPullRequest,
		successType: ACT.GetSyncPullSuccess,
		failType: ACT.GetSyncPullFail
	};
	return commonCallApi(settings); 
};


// call push
export const GetSyncPush = () => {
	const settings = {		// set settings data
		url:`/sync/push`,
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetSyncPushRequest,
		successType: ACT.GetSyncPushSuccess,
		failType: ACT.GetSyncPushFail
	};
	return commonCallApi(settings); 
};


// call register
export const GetSyncRegister = () => {
	const settings = {		// set settings data
		url:`/sync/register`,
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetSyncRegisterRequest,
		successType: ACT.GetSyncRegisterSuccess,
		failType: ACT.GetSyncRegisterFail
	};
	return commonCallApi(settings); 
};


// call removeNode
export const GetSyncRemoveNode = (nodeId:string) => {
	const settings = {		// set settings data
		url:`/sync/remove-node?nodeId=${nodeId}`,
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetSyncRemoveNodeRequest,
		successType: ACT.GetSyncRemoveNodeSuccess,
		failType: ACT.GetSyncRemoveNodeFail
	};
	return commonCallApi(settings); 
};


// call setAutoSync
export const GetSyncSetAutoSync = (enabled:boolean) => {
	const settings = {		// set settings data
		url:`/sync/set-auto-sync?enabled=${enabled}`,
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetSyncSetAutoSyncRequest,
		successType: ACT.GetSyncSetAutoSyncSuccess,
		failType: ACT.GetSyncSetAutoSyncFail
	};
	return commonCallApi(settings); 
};


// call getSyncStatus
export const GetSyncStatus = () => {
	const settings = {		// set settings data
		url:`/sync/status`,
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetSyncStatusRequest,
		successType: ACT.GetSyncStatusSuccess,
		failType: ACT.GetSyncStatusFail
	};
	return commonCallApi(settings); 
};


// call getSyncUrl
export const GetSyncSyncUrl = () => {
	const settings = {		// set settings data
		url:`/sync/sync-url`,
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetSyncSyncUrlRequest,
		successType: ACT.GetSyncSyncUrlSuccess,
		failType: ACT.GetSyncSyncUrlFail
	};
	return commonCallApi(settings); 
};


// call synchronise
export const GetSyncSynchronise = () => {
	const settings = {		// set settings data
		url:`/sync/synchronise`,
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetSyncSynchroniseRequest,
		successType: ACT.GetSyncSynchroniseSuccess,
		failType: ACT.GetSyncSynchroniseFail
	};
	return commonCallApi(settings); 
};


// call pullFiles
export const GetSyncByMissionNamePullFiles = (missionName:string) => {
	const settings = {		// set settings data
		url:`/sync/${missionName}/pull-files`,
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetSyncByMissionNamePullFilesRequest,
		successType: ACT.GetSyncByMissionNamePullFilesSuccess,
		failType: ACT.GetSyncByMissionNamePullFilesFail
	};
	return commonCallApi(settings); 
};


// call pushFiles
export const GetSyncByMissionNamePushFiles = (missionName:string) => {
	const settings = {		// set settings data
		url:`/sync/${missionName}/push-files`,
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetSyncByMissionNamePushFilesRequest,
		successType: ACT.GetSyncByMissionNamePushFilesSuccess,
		failType: ACT.GetSyncByMissionNamePushFilesFail
	};
	return commonCallApi(settings); 
};


// call synchroniseFiles
export const GetSyncByMissionNameSynchroniseFiles = (missionName:string) => {
	const settings = {		// set settings data
		url:`/sync/${missionName}/synchronise-files`,
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetSyncByMissionNameSynchroniseFilesRequest,
		successType: ACT.GetSyncByMissionNameSynchroniseFilesSuccess,
		failType: ACT.GetSyncByMissionNameSynchroniseFilesFail
	};
	return commonCallApi(settings); 
};


// call getUser
export const GetUser = (username:string) => {
	const settings = {		// set settings data
		url:`/user?username=${username}`,
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetUserRequest,
		successType: ACT.GetUserSuccess,
		failType: ACT.GetUserFail
	};
	return commonCallApi(settings); 
};


// call getUsers
export const GetUsers = () => {
	const settings = {		// set settings data
		url:`/users`,
		httpMethod: 'GET',
		body:undefined,
		requestType: ACT.GetUsersRequest,
		successType: ACT.GetUsersSuccess,
		failType: ACT.GetUsersFail
	};
	return commonCallApi(settings); 
};


// call editCurrentUserPassword
export const PutMe = (password:string) => {
	const settings = {		// set settings data
		url:`/me`,
		httpMethod: 'PUT',
		body:JSON.stringify(password),
		requestType: ACT.PutMeRequest,
		successType: ACT.PutMeSuccess,
		failType: ACT.PutMeFail
	};
	return commonCallApi(settings); 
};


// call edit
export const PutMissionsByMissionNameFindRecords = (dto:FindRecordDTO,missionName:string) => {
	const settings = {		// set settings data
		url:`/missions/${missionName}/find-records`,
		httpMethod: 'PUT',
		body:JSON.stringify(dto),
		requestType: ACT.PutMissionsByMissionNameFindRecordsRequest,
		successType: ACT.PutMissionsByMissionNameFindRecordsSuccess,
		failType: ACT.PutMissionsByMissionNameFindRecordsFail
	};
	return commonCallApi(settings); 
};


// call edit
export const PutMissionsByMissionNameSampleRecords = (dto:FindRecordDTO,missionName:string) => {
	const settings = {		// set settings data
		url:`/missions/${missionName}/sample-records`,
		httpMethod: 'PUT',
		body:JSON.stringify(dto),
		requestType: ACT.PutMissionsByMissionNameSampleRecordsRequest,
		successType: ACT.PutMissionsByMissionNameSampleRecordsSuccess,
		failType: ACT.PutMissionsByMissionNameSampleRecordsFail
	};
	return commonCallApi(settings); 
};


// call editUser
export const PutUser = (dto:UserDTO) => {
	const settings = {		// set settings data
		url:`/user`,
		httpMethod: 'PUT',
		body:JSON.stringify(dto),
		requestType: ACT.PutUserRequest,
		successType: ACT.PutUserSuccess,
		failType: ACT.PutUserFail
	};
	return commonCallApi(settings); 
};


// call deleteMission
export const DeleteMissionsById = (id:string) => {
	const settings = {		// set settings data
		url:`/missions/${id}`,
		httpMethod: 'DELETE',
		body:undefined,
		requestType: ACT.DeleteMissionsByIdRequest,
		successType: ACT.DeleteMissionsByIdSuccess,
		failType: ACT.DeleteMissionsByIdFail
	};
	return commonCallApi(settings); 
};


// call delete
export const DeleteMissionsByMissionNameFindRecordsByUuid = (missionName:string,uuid:string) => {
	const settings = {		// set settings data
		url:`/missions/${missionName}/findRecords/${uuid}`,
		httpMethod: 'DELETE',
		body:undefined,
		requestType: ACT.DeleteMissionsByMissionNameFindRecordsByUuidRequest,
		successType: ACT.DeleteMissionsByMissionNameFindRecordsByUuidSuccess,
		failType: ACT.DeleteMissionsByMissionNameFindRecordsByUuidFail
	};
	return commonCallApi(settings); 
};


// call deletePhoto
export const DeleteMissionsByMissionNameFindRecordsByUuidPhotosByPhotoName = (missionName:string,photoName:string,uuid:string) => {
	const settings = {		// set settings data
		url:`/missions/${missionName}/findRecords/${uuid}/photos/${photoName}`,
		httpMethod: 'DELETE',
		body:undefined,
		requestType: ACT.DeleteMissionsByMissionNameFindRecordsByUuidPhotosByPhotoNameRequest,
		successType: ACT.DeleteMissionsByMissionNameFindRecordsByUuidPhotosByPhotoNameSuccess,
		failType: ACT.DeleteMissionsByMissionNameFindRecordsByUuidPhotosByPhotoNameFail
	};
	return commonCallApi(settings); 
};


// call delete
export const DeleteMissionsByMissionNameSampleRecordsByUuid = (missionName:string,uuid:string) => {
	const settings = {		// set settings data
		url:`/missions/${missionName}/sampleRecords/${uuid}`,
		httpMethod: 'DELETE',
		body:undefined,
		requestType: ACT.DeleteMissionsByMissionNameSampleRecordsByUuidRequest,
		successType: ACT.DeleteMissionsByMissionNameSampleRecordsByUuidSuccess,
		failType: ACT.DeleteMissionsByMissionNameSampleRecordsByUuidFail
	};
	return commonCallApi(settings); 
};


// call deletePhoto
export const DeleteMissionsByMissionNameSampleRecordsByUuidPhotosByPhotoName = (missionName:string,photoName:string,uuid:string) => {
	const settings = {		// set settings data
		url:`/missions/${missionName}/sampleRecords/${uuid}/photos/${photoName}`,
		httpMethod: 'DELETE',
		body:undefined,
		requestType: ACT.DeleteMissionsByMissionNameSampleRecordsByUuidPhotosByPhotoNameRequest,
		successType: ACT.DeleteMissionsByMissionNameSampleRecordsByUuidPhotosByPhotoNameSuccess,
		failType: ACT.DeleteMissionsByMissionNameSampleRecordsByUuidPhotosByPhotoNameFail
	};
	return commonCallApi(settings); 
};


// call deleteUser
export const DeleteUser = (username:string) => {
	const settings = {		// set settings data
		url:`/user?username=${username}`,
		httpMethod: 'DELETE',
		body:undefined,
		requestType: ACT.DeleteUserRequest,
		successType: ACT.DeleteUserSuccess,
		failType: ACT.DeleteUserFail
	};
	return commonCallApi(settings); 
};

