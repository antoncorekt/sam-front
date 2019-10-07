import {_, ActionRequestData, ActionResponseData} from "../../api/common-middleware";
import {Account, RequestSetAccount, ResultSetAccount, ResultSetError} from "../../api/api-models";
import {AuthType} from "../auth/auth-store-type";
import {AccountMappingType} from "./bscs-account-store-type";
import {actionRequest} from "../../actions/connectToBackendActions";
import {reduceHandlerToProp, uuidv4} from "../../utils/Utils";


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

const tt: AccountMappingType = {};

export const UsersBscsToSapMappings = () => {
    uuidv4()
    return {
        AddEmptyAccount: reduceHandlerToProp("usersAccounts")((state, action)=>({
            ...state,
            accounts: [
                new Account.Builder()
                    .withEntryOwner(action.user)
                    .withOfiSapAccount("EMPTY")
                    .withStatus("EDITED")
                    .build(),
                ...state.accounts
            ]
        }))
    }
};