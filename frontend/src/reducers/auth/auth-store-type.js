import {ActionRequestData, ActionResponseData} from "../../api/common-middleware";
import {
    RequestSetUserLogin,
    RequestSetUserLogoff,
    ResultSetOk,
    ResultSetUserInfo,
    ResultSetUserLogin, User
} from "../../api/api-models";


export class AuthType{
    login: ActionResponseData<ResultSetUserLogin,ActionRequestData<RequestSetUserLogin, null>> = {};
    userInfo: ActionResponseData<ResultSetUserInfo,ActionRequestData<null, null>> = {};
    logoutInfo: ActionResponseData<ResultSetOk,ActionRequestData<RequestSetUserLogoff, null>> = {};

    static isLoginOk(obj: AuthType) {
        if (obj.userInfo === undefined || obj.userInfo.fail === true)
            return false;

        if (obj.login.fail === true)
            return false;

        return !(obj.userInfo.response === undefined
            || obj.userInfo.response.data === undefined
            || obj.userInfo.response.data.user === undefined);
    }

    static getUserData(obj: AuthType): User {
        if (this.isLoginOk(obj)){
            return obj.userInfo.response.data.user;
        }

        console.error("getUserData not found user return {}");
        return {}
    }
}