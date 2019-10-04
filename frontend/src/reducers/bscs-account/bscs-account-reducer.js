import {ActionRequestData, ActionResponseData} from "../../api/common-middleware";
import {RequestSetAccount, ResultSetAccount, ResultSetError} from "../../api/api-models";


export const PostAccountHandler = () => {
    return {
        PostAccountRequest:(state:any, action:ActionRequestData<RequestSetAccount, null>)=>{
            return {...state, ...action};
        },
        PostAccountSuccess:(state:any, action:ActionResponseData<ResultSetAccount,ActionRequestData<RequestSetAccount, null>>)=>{
            return {...state, ...action};
        },
        PostAccountFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<RequestSetAccount, null>>)=>{
            return {...state, ...action};
        },
    }
};