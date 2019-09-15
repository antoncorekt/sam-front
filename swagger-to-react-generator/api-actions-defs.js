
// actions for GET /hello-world
export const GetHelloWorldSuccess = "GetHelloWorldSuccess";
export const GetHelloWorldRequest = "GetHelloWorldRequest";
export const GetHelloWorldFail = "GetHelloWorldFail"
;

// actions for POST /login
export const PostLoginSuccess = "PostLoginSuccess";
export const PostLoginRequest = "PostLoginRequest";
export const PostLoginFail = "PostLoginFail"
;

// actions for POST /logout
export const PostLogoutSuccess = "PostLogoutSuccess";
export const PostLogoutRequest = "PostLogoutRequest";
export const PostLogoutFail = "PostLogoutFail"
;

// actions for GET /me
export const GetMeSuccess = "GetMeSuccess";
export const GetMeRequest = "GetMeRequest";
export const GetMeFail = "GetMeFail"
;

// actions for PUT /me
export const PutMeSuccess = "PutMeSuccess";
export const PutMeRequest = "PutMeRequest";
export const PutMeFail = "PutMeFail"
;

// actions for GET /missions
export const GetMissionsSuccess = "GetMissionsSuccess";
export const GetMissionsRequest = "GetMissionsRequest";
export const GetMissionsFail = "GetMissionsFail"
;

// actions for POST /missions
export const PostMissionsSuccess = "PostMissionsSuccess";
export const PostMissionsRequest = "PostMissionsRequest";
export const PostMissionsFail = "PostMissionsFail"
;

// actions for GET /missions/{id}
export const GetMissionsByIdSuccess = "GetMissionsByIdSuccess";
export const GetMissionsByIdRequest = "GetMissionsByIdRequest";
export const GetMissionsByIdFail = "GetMissionsByIdFail"
;

// actions for DELETE /missions/{id}
export const DeleteMissionsByIdSuccess = "DeleteMissionsByIdSuccess";
export const DeleteMissionsByIdRequest = "DeleteMissionsByIdRequest";
export const DeleteMissionsByIdFail = "DeleteMissionsByIdFail"
;

// actions for GET /missions/{missionName}/find-records
export const GetMissionsByMissionNameFindRecordsSuccess = "GetMissionsByMissionNameFindRecordsSuccess";
export const GetMissionsByMissionNameFindRecordsRequest = "GetMissionsByMissionNameFindRecordsRequest";
export const GetMissionsByMissionNameFindRecordsFail = "GetMissionsByMissionNameFindRecordsFail"
;

// actions for PUT /missions/{missionName}/find-records
export const PutMissionsByMissionNameFindRecordsSuccess = "PutMissionsByMissionNameFindRecordsSuccess";
export const PutMissionsByMissionNameFindRecordsRequest = "PutMissionsByMissionNameFindRecordsRequest";
export const PutMissionsByMissionNameFindRecordsFail = "PutMissionsByMissionNameFindRecordsFail"
;

// actions for POST /missions/{missionName}/find-records
export const PostMissionsByMissionNameFindRecordsSuccess = "PostMissionsByMissionNameFindRecordsSuccess";
export const PostMissionsByMissionNameFindRecordsRequest = "PostMissionsByMissionNameFindRecordsRequest";
export const PostMissionsByMissionNameFindRecordsFail = "PostMissionsByMissionNameFindRecordsFail"
;

// actions for GET /missions/{missionName}/find-records/{uuid}
export const GetMissionsByMissionNameFindRecordsByUuidSuccess = "GetMissionsByMissionNameFindRecordsByUuidSuccess";
export const GetMissionsByMissionNameFindRecordsByUuidRequest = "GetMissionsByMissionNameFindRecordsByUuidRequest";
export const GetMissionsByMissionNameFindRecordsByUuidFail = "GetMissionsByMissionNameFindRecordsByUuidFail"
;

// actions for DELETE /missions/{missionName}/find-records/{uuid}
export const DeleteMissionsByMissionNameFindRecordsByUuidSuccess = "DeleteMissionsByMissionNameFindRecordsByUuidSuccess";
export const DeleteMissionsByMissionNameFindRecordsByUuidRequest = "DeleteMissionsByMissionNameFindRecordsByUuidRequest";
export const DeleteMissionsByMissionNameFindRecordsByUuidFail = "DeleteMissionsByMissionNameFindRecordsByUuidFail"
;

// actions for POST /missions/{missionName}/find-records/{uuid}/photos
export const PostMissionsByMissionNameFindRecordsByUuidPhotosSuccess = "PostMissionsByMissionNameFindRecordsByUuidPhotosSuccess";
export const PostMissionsByMissionNameFindRecordsByUuidPhotosRequest = "PostMissionsByMissionNameFindRecordsByUuidPhotosRequest";
export const PostMissionsByMissionNameFindRecordsByUuidPhotosFail = "PostMissionsByMissionNameFindRecordsByUuidPhotosFail"
;

// actions for POST /missions/{missionName}/find-records/{uuid}/photos/original/{photo-name}
export const PostMissionsByMissionNameFindRecordsByUuidPhotosOriginalByPhotoNameSuccess = "PostMissionsByMissionNameFindRecordsByUuidPhotosOriginalByPhotoNameSuccess";
export const PostMissionsByMissionNameFindRecordsByUuidPhotosOriginalByPhotoNameRequest = "PostMissionsByMissionNameFindRecordsByUuidPhotosOriginalByPhotoNameRequest";
export const PostMissionsByMissionNameFindRecordsByUuidPhotosOriginalByPhotoNameFail = "PostMissionsByMissionNameFindRecordsByUuidPhotosOriginalByPhotoNameFail"
;

// actions for POST /missions/{missionName}/find-records/{uuid}/photos/scaled/{photo-name}
export const PostMissionsByMissionNameFindRecordsByUuidPhotosScaledByPhotoNameSuccess = "PostMissionsByMissionNameFindRecordsByUuidPhotosScaledByPhotoNameSuccess";
export const PostMissionsByMissionNameFindRecordsByUuidPhotosScaledByPhotoNameRequest = "PostMissionsByMissionNameFindRecordsByUuidPhotosScaledByPhotoNameRequest";
export const PostMissionsByMissionNameFindRecordsByUuidPhotosScaledByPhotoNameFail = "PostMissionsByMissionNameFindRecordsByUuidPhotosScaledByPhotoNameFail"
;

// actions for DELETE /missions/{missionName}/find-records/{uuid}/photos/{photo-name}
export const DeleteMissionsByMissionNameFindRecordsByUuidPhotosByPhotoNameSuccess = "DeleteMissionsByMissionNameFindRecordsByUuidPhotosByPhotoNameSuccess";
export const DeleteMissionsByMissionNameFindRecordsByUuidPhotosByPhotoNameRequest = "DeleteMissionsByMissionNameFindRecordsByUuidPhotosByPhotoNameRequest";
export const DeleteMissionsByMissionNameFindRecordsByUuidPhotosByPhotoNameFail = "DeleteMissionsByMissionNameFindRecordsByUuidPhotosByPhotoNameFail"
;

// actions for GET /missions/{missionName}/sample-records
export const GetMissionsByMissionNameSampleRecordsSuccess = "GetMissionsByMissionNameSampleRecordsSuccess";
export const GetMissionsByMissionNameSampleRecordsRequest = "GetMissionsByMissionNameSampleRecordsRequest";
export const GetMissionsByMissionNameSampleRecordsFail = "GetMissionsByMissionNameSampleRecordsFail"
;

// actions for PUT /missions/{missionName}/sample-records
export const PutMissionsByMissionNameSampleRecordsSuccess = "PutMissionsByMissionNameSampleRecordsSuccess";
export const PutMissionsByMissionNameSampleRecordsRequest = "PutMissionsByMissionNameSampleRecordsRequest";
export const PutMissionsByMissionNameSampleRecordsFail = "PutMissionsByMissionNameSampleRecordsFail"
;

// actions for POST /missions/{missionName}/sample-records
export const PostMissionsByMissionNameSampleRecordsSuccess = "PostMissionsByMissionNameSampleRecordsSuccess";
export const PostMissionsByMissionNameSampleRecordsRequest = "PostMissionsByMissionNameSampleRecordsRequest";
export const PostMissionsByMissionNameSampleRecordsFail = "PostMissionsByMissionNameSampleRecordsFail"
;

// actions for GET /missions/{missionName}/sample-records/{uuid}
export const GetMissionsByMissionNameSampleRecordsByUuidSuccess = "GetMissionsByMissionNameSampleRecordsByUuidSuccess";
export const GetMissionsByMissionNameSampleRecordsByUuidRequest = "GetMissionsByMissionNameSampleRecordsByUuidRequest";
export const GetMissionsByMissionNameSampleRecordsByUuidFail = "GetMissionsByMissionNameSampleRecordsByUuidFail"
;

// actions for DELETE /missions/{missionName}/sample-records/{uuid}
export const DeleteMissionsByMissionNameSampleRecordsByUuidSuccess = "DeleteMissionsByMissionNameSampleRecordsByUuidSuccess";
export const DeleteMissionsByMissionNameSampleRecordsByUuidRequest = "DeleteMissionsByMissionNameSampleRecordsByUuidRequest";
export const DeleteMissionsByMissionNameSampleRecordsByUuidFail = "DeleteMissionsByMissionNameSampleRecordsByUuidFail"
;

// actions for POST /missions/{missionName}/sample-records/{uuid}/photos
export const PostMissionsByMissionNameSampleRecordsByUuidPhotosSuccess = "PostMissionsByMissionNameSampleRecordsByUuidPhotosSuccess";
export const PostMissionsByMissionNameSampleRecordsByUuidPhotosRequest = "PostMissionsByMissionNameSampleRecordsByUuidPhotosRequest";
export const PostMissionsByMissionNameSampleRecordsByUuidPhotosFail = "PostMissionsByMissionNameSampleRecordsByUuidPhotosFail"
;

// actions for POST /missions/{missionName}/sample-records/{uuid}/photos/original/{photo-name}
export const PostMissionsByMissionNameSampleRecordsByUuidPhotosOriginalByPhotoNameSuccess = "PostMissionsByMissionNameSampleRecordsByUuidPhotosOriginalByPhotoNameSuccess";
export const PostMissionsByMissionNameSampleRecordsByUuidPhotosOriginalByPhotoNameRequest = "PostMissionsByMissionNameSampleRecordsByUuidPhotosOriginalByPhotoNameRequest";
export const PostMissionsByMissionNameSampleRecordsByUuidPhotosOriginalByPhotoNameFail = "PostMissionsByMissionNameSampleRecordsByUuidPhotosOriginalByPhotoNameFail"
;

// actions for POST /missions/{missionName}/sample-records/{uuid}/photos/scaled/{photo-name}
export const PostMissionsByMissionNameSampleRecordsByUuidPhotosScaledByPhotoNameSuccess = "PostMissionsByMissionNameSampleRecordsByUuidPhotosScaledByPhotoNameSuccess";
export const PostMissionsByMissionNameSampleRecordsByUuidPhotosScaledByPhotoNameRequest = "PostMissionsByMissionNameSampleRecordsByUuidPhotosScaledByPhotoNameRequest";
export const PostMissionsByMissionNameSampleRecordsByUuidPhotosScaledByPhotoNameFail = "PostMissionsByMissionNameSampleRecordsByUuidPhotosScaledByPhotoNameFail"
;

// actions for DELETE /missions/{missionName}/sample-records/{uuid}/photos/{photo-name}
export const DeleteMissionsByMissionNameSampleRecordsByUuidPhotosByPhotoNameSuccess = "DeleteMissionsByMissionNameSampleRecordsByUuidPhotosByPhotoNameSuccess";
export const DeleteMissionsByMissionNameSampleRecordsByUuidPhotosByPhotoNameRequest = "DeleteMissionsByMissionNameSampleRecordsByUuidPhotosByPhotoNameRequest";
export const DeleteMissionsByMissionNameSampleRecordsByUuidPhotosByPhotoNameFail = "DeleteMissionsByMissionNameSampleRecordsByUuidPhotosByPhotoNameFail"
;

// actions for GET /missions/{missionName}/search/find-records
export const GetMissionsByMissionNameSearchFindRecordsSuccess = "GetMissionsByMissionNameSearchFindRecordsSuccess";
export const GetMissionsByMissionNameSearchFindRecordsRequest = "GetMissionsByMissionNameSearchFindRecordsRequest";
export const GetMissionsByMissionNameSearchFindRecordsFail = "GetMissionsByMissionNameSearchFindRecordsFail"
;

// actions for GET /missions/{missionName}/search/sample-records
export const GetMissionsByMissionNameSearchSampleRecordsSuccess = "GetMissionsByMissionNameSearchSampleRecordsSuccess";
export const GetMissionsByMissionNameSearchSampleRecordsRequest = "GetMissionsByMissionNameSearchSampleRecordsRequest";
export const GetMissionsByMissionNameSearchSampleRecordsFail = "GetMissionsByMissionNameSearchSampleRecordsFail"
;

// actions for GET /set-backup-downscaler
export const GetSetBackupDownscalerSuccess = "GetSetBackupDownscalerSuccess";
export const GetSetBackupDownscalerRequest = "GetSetBackupDownscalerRequest";
export const GetSetBackupDownscalerFail = "GetSetBackupDownscalerFail"
;

// actions for GET /sync/external-id
export const GetSyncExternalIdSuccess = "GetSyncExternalIdSuccess";
export const GetSyncExternalIdRequest = "GetSyncExternalIdRequest";
export const GetSyncExternalIdFail = "GetSyncExternalIdFail"
;

// actions for GET /sync/file-root
export const GetSyncFileRootSuccess = "GetSyncFileRootSuccess";
export const GetSyncFileRootRequest = "GetSyncFileRootRequest";
export const GetSyncFileRootFail = "GetSyncFileRootFail"
;

// actions for GET /sync/initial-load
export const GetSyncInitialLoadSuccess = "GetSyncInitialLoadSuccess";
export const GetSyncInitialLoadRequest = "GetSyncInitialLoadRequest";
export const GetSyncInitialLoadFail = "GetSyncInitialLoadFail"
;

// actions for GET /sync/node-type
export const GetSyncNodeTypeSuccess = "GetSyncNodeTypeSuccess";
export const GetSyncNodeTypeRequest = "GetSyncNodeTypeRequest";
export const GetSyncNodeTypeFail = "GetSyncNodeTypeFail"
;

// actions for GET /sync/open-registration
export const GetSyncOpenRegistrationSuccess = "GetSyncOpenRegistrationSuccess";
export const GetSyncOpenRegistrationRequest = "GetSyncOpenRegistrationRequest";
export const GetSyncOpenRegistrationFail = "GetSyncOpenRegistrationFail"
;

// actions for GET /sync/pull
export const GetSyncPullSuccess = "GetSyncPullSuccess";
export const GetSyncPullRequest = "GetSyncPullRequest";
export const GetSyncPullFail = "GetSyncPullFail"
;

// actions for GET /sync/push
export const GetSyncPushSuccess = "GetSyncPushSuccess";
export const GetSyncPushRequest = "GetSyncPushRequest";
export const GetSyncPushFail = "GetSyncPushFail"
;

// actions for GET /sync/register
export const GetSyncRegisterSuccess = "GetSyncRegisterSuccess";
export const GetSyncRegisterRequest = "GetSyncRegisterRequest";
export const GetSyncRegisterFail = "GetSyncRegisterFail"
;

// actions for GET /sync/remove-node
export const GetSyncRemoveNodeSuccess = "GetSyncRemoveNodeSuccess";
export const GetSyncRemoveNodeRequest = "GetSyncRemoveNodeRequest";
export const GetSyncRemoveNodeFail = "GetSyncRemoveNodeFail"
;

// actions for GET /sync/set-auto-sync
export const GetSyncSetAutoSyncSuccess = "GetSyncSetAutoSyncSuccess";
export const GetSyncSetAutoSyncRequest = "GetSyncSetAutoSyncRequest";
export const GetSyncSetAutoSyncFail = "GetSyncSetAutoSyncFail"
;

// actions for GET /sync/status
export const GetSyncStatusSuccess = "GetSyncStatusSuccess";
export const GetSyncStatusRequest = "GetSyncStatusRequest";
export const GetSyncStatusFail = "GetSyncStatusFail"
;

// actions for GET /sync/sync-url
export const GetSyncSyncUrlSuccess = "GetSyncSyncUrlSuccess";
export const GetSyncSyncUrlRequest = "GetSyncSyncUrlRequest";
export const GetSyncSyncUrlFail = "GetSyncSyncUrlFail"
;

// actions for GET /sync/synchronise
export const GetSyncSynchroniseSuccess = "GetSyncSynchroniseSuccess";
export const GetSyncSynchroniseRequest = "GetSyncSynchroniseRequest";
export const GetSyncSynchroniseFail = "GetSyncSynchroniseFail"
;

// actions for GET /sync/{missionName}/pull-files
export const GetSyncByMissionNamePullFilesSuccess = "GetSyncByMissionNamePullFilesSuccess";
export const GetSyncByMissionNamePullFilesRequest = "GetSyncByMissionNamePullFilesRequest";
export const GetSyncByMissionNamePullFilesFail = "GetSyncByMissionNamePullFilesFail"
;

// actions for GET /sync/{missionName}/push-files
export const GetSyncByMissionNamePushFilesSuccess = "GetSyncByMissionNamePushFilesSuccess";
export const GetSyncByMissionNamePushFilesRequest = "GetSyncByMissionNamePushFilesRequest";
export const GetSyncByMissionNamePushFilesFail = "GetSyncByMissionNamePushFilesFail"
;

// actions for GET /sync/{missionName}/synchronise-files
export const GetSyncByMissionNameSynchroniseFilesSuccess = "GetSyncByMissionNameSynchroniseFilesSuccess";
export const GetSyncByMissionNameSynchroniseFilesRequest = "GetSyncByMissionNameSynchroniseFilesRequest";
export const GetSyncByMissionNameSynchroniseFilesFail = "GetSyncByMissionNameSynchroniseFilesFail"
;

// actions for GET /user
export const GetUserSuccess = "GetUserSuccess";
export const GetUserRequest = "GetUserRequest";
export const GetUserFail = "GetUserFail"
;

// actions for PUT /user
export const PutUserSuccess = "PutUserSuccess";
export const PutUserRequest = "PutUserRequest";
export const PutUserFail = "PutUserFail"
;

// actions for POST /user
export const PostUserSuccess = "PostUserSuccess";
export const PostUserRequest = "PostUserRequest";
export const PostUserFail = "PostUserFail"
;

// actions for DELETE /user
export const DeleteUserSuccess = "DeleteUserSuccess";
export const DeleteUserRequest = "DeleteUserRequest";
export const DeleteUserFail = "DeleteUserFail"
;

// actions for GET /users
export const GetUsersSuccess = "GetUsersSuccess";
export const GetUsersRequest = "GetUsersRequest";
export const GetUsersFail = "GetUsersFail"
;