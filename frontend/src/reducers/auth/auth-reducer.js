import * as ACT from "../../api/api-actions-defs";
import {ActionRequestData, ActionResponseData, globalLoginContext} from "../../api/common-middleware";
import {
    RequestSetUserLogin,
    RequestSetUserLogoff,
    ResultSetError,
    ResultSetOk,
    ResultSetUserInfo, ResultSetUserLogin
} from "../../api/api-models";
import {AuthType} from "./auth-store-type";

export const UNAUTHORIZED_ACTION = "UNAUTHORIZED_ACTION";

export const UnauthorizedHandler = () => {

    return {
        UNAUTHORIZED_ACTION:(state:AuthType, action:ActionRequestData<null, null>)=>{

            return {
                ...state,
                userInfo: {fail:true, msg: "Session expired"}
            };
        }
    }
};

export const PostUserLogoffHandler = () => {
    return {
        PostUserLogoffRequest:(state:AuthType, action:ActionRequestData<RequestSetUserLogoff, null>)=>{
            return {...state, logoutInfo:action};
        },
        PostUserLogoffSuccess:(state:AuthType, action:ActionResponseData<ResultSetOk,ActionRequestData<RequestSetUserLogoff, null>>)=>{
            return {...state, logoutInfo:action};
        },
        PostUserLogoffFail:(state:AuthType, action:ActionResponseData<ResultSetError,ActionRequestData<RequestSetUserLogoff, null>>)=>{
            return {...state, logoutInfo:action};
        },
    }
};

export const PostUserInfoHandler = () => {
    return {
        PostUserInfoRequest:(state:AuthType, action:ActionRequestData<null, null>)=>{
            return {...state, logoutInfo: {}, userInfo: action};
        },
        PostUserInfoSuccess:(state:AuthType, action:ActionResponseData<ResultSetUserInfo,ActionRequestData<null, null>>)=>{

            return {...state,
                userInfo: action
            };
        },
        PostUserInfoFail:(state:AuthType, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
            return {...state, userInfo: action};
        },
    }
};

export const PostUserLoginHandler = () => {
    return {
        PostUserLoginRequest:(state:AuthType, action:ActionRequestData<RequestSetUserLogin, null>)=>{
            return {...state, login: action};
        },
        PostUserLoginSuccess:(state:AuthType, action:ActionResponseData<ResultSetUserLogin,ActionRequestData<RequestSetUserLogin, null>>)=>{

            globalLoginContext.bearerToken = action.response.data.token;

            return {...state,
                login: action
            };
        },
        PostUserLoginFail:(state:AuthType, action:ActionResponseData<ResultSetError,ActionRequestData<RequestSetUserLogin, null>>)=>{
            return {...state, login: action};
        },
    }
};
