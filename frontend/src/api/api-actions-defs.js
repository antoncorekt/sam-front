
// actions for GET /system/version
export const GetSystemVersionSuccess = "GetSystemVersionSuccess";
export const GetSystemVersionRequest = "GetSystemVersionRequest";
export const GetSystemVersionFail = "GetSystemVersionFail"
;

// actions for GET /system/stat
export const GetSystemStatSuccess = "GetSystemStatSuccess";
export const GetSystemStatRequest = "GetSystemStatRequest";
export const GetSystemStatFail = "GetSystemStatFail"
;

// actions for GET /system/health
export const GetSystemHealthSuccess = "GetSystemHealthSuccess";
export const GetSystemHealthRequest = "GetSystemHealthRequest";
export const GetSystemHealthFail = "GetSystemHealthFail"
;

// actions for POST /user/login
export const PostUserLoginSuccess = "PostUserLoginSuccess";
export const PostUserLoginRequest = "PostUserLoginRequest";
export const PostUserLoginFail = "PostUserLoginFail"
;

// actions for POST /user/relogin
export const PostUserReloginSuccess = "PostUserReloginSuccess";
export const PostUserReloginRequest = "PostUserReloginRequest";
export const PostUserReloginFail = "PostUserReloginFail"
;

// actions for POST /user/logoff
export const PostUserLogoffSuccess = "PostUserLogoffSuccess";
export const PostUserLogoffRequest = "PostUserLogoffRequest";
export const PostUserLogoffFail = "PostUserLogoffFail"
;

// actions for POST /account
export const PostAccountSuccess = "PostAccountSuccess";
export const PostAccountRequest = "PostAccountRequest";
export const PostAccountFail = "PostAccountFail"
;

// actions for GET /account/{status}/{release}
export const GetAccountByStatusByReleaseSuccess = "GetAccountByStatusByReleaseSuccess";
export const GetAccountByStatusByReleaseRequest = "GetAccountByStatusByReleaseRequest";
export const GetAccountByStatusByReleaseFail = "GetAccountByStatusByReleaseFail"
;

// actions for PUT /account/{status}/{release}/{bscsAccount}
export const PutAccountByStatusByReleaseByBscsAccountSuccess = "PutAccountByStatusByReleaseByBscsAccountSuccess";
export const PutAccountByStatusByReleaseByBscsAccountRequest = "PutAccountByStatusByReleaseByBscsAccountRequest";
export const PutAccountByStatusByReleaseByBscsAccountFail = "PutAccountByStatusByReleaseByBscsAccountFail"
;

// actions for DELETE /account/{status}/{release}/{bscsAccount}
export const DeleteAccountByStatusByReleaseByBscsAccountSuccess = "DeleteAccountByStatusByReleaseByBscsAccountSuccess";
export const DeleteAccountByStatusByReleaseByBscsAccountRequest = "DeleteAccountByStatusByReleaseByBscsAccountRequest";
export const DeleteAccountByStatusByReleaseByBscsAccountFail = "DeleteAccountByStatusByReleaseByBscsAccountFail"
;

// actions for POST /order
export const PostOrderSuccess = "PostOrderSuccess";
export const PostOrderRequest = "PostOrderRequest";
export const PostOrderFail = "PostOrderFail"
;

// actions for GET /order/{status}/{release}
export const GetOrderByStatusByReleaseSuccess = "GetOrderByStatusByReleaseSuccess";
export const GetOrderByStatusByReleaseRequest = "GetOrderByStatusByReleaseRequest";
export const GetOrderByStatusByReleaseFail = "GetOrderByStatusByReleaseFail"
;

// actions for PUT /order/{status}/{release}/{bscsAccount}/{segment}
export const PutOrderByStatusByReleaseByBscsAccountBySegmentSuccess = "PutOrderByStatusByReleaseByBscsAccountBySegmentSuccess";
export const PutOrderByStatusByReleaseByBscsAccountBySegmentRequest = "PutOrderByStatusByReleaseByBscsAccountBySegmentRequest";
export const PutOrderByStatusByReleaseByBscsAccountBySegmentFail = "PutOrderByStatusByReleaseByBscsAccountBySegmentFail"
;

// actions for DELETE /order/{status}/{release}/{bscsAccount}/{segment}
export const DeleteOrderByStatusByReleaseByBscsAccountBySegmentSuccess = "DeleteOrderByStatusByReleaseByBscsAccountBySegmentSuccess";
export const DeleteOrderByStatusByReleaseByBscsAccountBySegmentRequest = "DeleteOrderByStatusByReleaseByBscsAccountBySegmentRequest";
export const DeleteOrderByStatusByReleaseByBscsAccountBySegmentFail = "DeleteOrderByStatusByReleaseByBscsAccountBySegmentFail"
;

// actions for POST /release
export const PostReleaseSuccess = "PostReleaseSuccess";
export const PostReleaseRequest = "PostReleaseRequest";
export const PostReleaseFail = "PostReleaseFail"
;

// actions for GET /dictionary/account/bscs
export const GetDictionaryAccountBscsSuccess = "GetDictionaryAccountBscsSuccess";
export const GetDictionaryAccountBscsRequest = "GetDictionaryAccountBscsRequest";
export const GetDictionaryAccountBscsFail = "GetDictionaryAccountBscsFail"
;

// actions for GET /dictionary/account/sap
export const GetDictionaryAccountSapSuccess = "GetDictionaryAccountSapSuccess";
export const GetDictionaryAccountSapRequest = "GetDictionaryAccountSapRequest";
export const GetDictionaryAccountSapFail = "GetDictionaryAccountSapFail"
;

// actions for POST /dictionary/account/sap
export const PostDictionaryAccountSapSuccess = "PostDictionaryAccountSapSuccess";
export const PostDictionaryAccountSapRequest = "PostDictionaryAccountSapRequest";
export const PostDictionaryAccountSapFail = "PostDictionaryAccountSapFail"
;

// actions for DELETE /dictionary/account/sap
export const DeleteDictionaryAccountSapSuccess = "DeleteDictionaryAccountSapSuccess";
export const DeleteDictionaryAccountSapRequest = "DeleteDictionaryAccountSapRequest";
export const DeleteDictionaryAccountSapFail = "DeleteDictionaryAccountSapFail"
;

// actions for GET /dictionary/segment
export const GetDictionarySegmentSuccess = "GetDictionarySegmentSuccess";
export const GetDictionarySegmentRequest = "GetDictionarySegmentRequest";
export const GetDictionarySegmentFail = "GetDictionarySegmentFail"
;

// actions for POST /dictionary/segment
export const PostDictionarySegmentSuccess = "PostDictionarySegmentSuccess";
export const PostDictionarySegmentRequest = "PostDictionarySegmentRequest";
export const PostDictionarySegmentFail = "PostDictionarySegmentFail"
;

// actions for DELETE /dictionary/segment
export const DeleteDictionarySegmentSuccess = "DeleteDictionarySegmentSuccess";
export const DeleteDictionarySegmentRequest = "DeleteDictionarySegmentRequest";
export const DeleteDictionarySegmentFail = "DeleteDictionarySegmentFail"
;