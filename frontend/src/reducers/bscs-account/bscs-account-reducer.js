import {_, ActionRequestData, ActionResponseData} from "../../api/common-middleware";
import {
    Account, DeleteAccountByStatusByReleaseByBscsAccountQueryParams,
    GetAccountByStatusByReleaseQueryParams, PutAccountByStatusByReleaseByBscsAccountQueryParams,
    RequestSetAccount,
    ResultSetAccount, ResultSetAccounts, ResultSetCount,
    ResultSetError
} from "../../api/api-models";
import {AuthType} from "../auth/auth-store-type";
import {
    AccountMappingType,
    AddEmptyAccountActionType,
    DeleteUsersAccountActionType, ModifyUsersAccountActionType,
    UserAccountType
} from "./bscs-account-store-type";
import {actionRequest} from "../../actions/connectToBackendActions";
import {reduceHandlerToProp, uuidv4} from "../../utils/Utils";


export const PostAccountHandler = () => {
    const ReduxUsersAccountsPropName = "postAccount";
    return {
        PostAccountRequest:(state:any, action:ActionRequestData<RequestSetAccount, null>)=>{
            return {...state, postAccount: action};
        },
        PostAccountSuccess:(state:AccountMappingType, action:ActionResponseData<ResultSetAccount,ActionRequestData<RequestSetAccount, null>>)=>{
            return {...state,
                postAccount:action,
                backendAccounts: {
                    ...state.backendAccounts,
                    response: {
                        ...state.backendAccounts.response,
                        data: AccountMappingType.getBackendAccount(state)
                            .map(acc => {
                                if (AccountMappingType.isAccountsEquals(acc, action.response.data)){
                                    return acc;
                                }
                                else {
                                    return action.response.data;
                                }
                            })

                    }
                }
            };
        },
        PostAccountFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<RequestSetAccount, null>>)=>{
            return {...state, postAccount: action};
        },
    }
};

export const GetAccountByStatusByReleaseHandler = () => {
    const ReduxUsersAccountsPropName = "backendAccounts";
    return {
        GetAccountByStatusByReleaseRequest:reduceHandlerToProp(ReduxUsersAccountsPropName)((state:any, action:ActionRequestData<null, GetAccountByStatusByReleaseQueryParams>)=>{
            return {...state, ...action};
        }),
        GetAccountByStatusByReleaseSuccess:reduceHandlerToProp(ReduxUsersAccountsPropName)((state:any, action:ActionResponseData<ResultSetAccounts,ActionRequestData<null, GetAccountByStatusByReleaseQueryParams>>)=>{
            return {...state, ...action};
        }),
        GetAccountByStatusByReleaseFail:reduceHandlerToProp(ReduxUsersAccountsPropName)((state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, GetAccountByStatusByReleaseQueryParams>>)=>{
            return {...state, ...action};
        }),
    }
};
export const PutAccountByStatusByReleaseByBscsAccountHandler = () => {
    const ReduxUsersAccountsPropName = "putAccount";
    return {
        PutAccountByStatusByReleaseByBscsAccountRequest:reduceHandlerToProp(ReduxUsersAccountsPropName)((state:any, action:ActionRequestData<null, PutAccountByStatusByReleaseByBscsAccountQueryParams>)=>{
            return {...state, ...action};
        }),
        PutAccountByStatusByReleaseByBscsAccountSuccess:reduceHandlerToProp(ReduxUsersAccountsPropName)((state:any, action:ActionResponseData<ResultSetAccounts,ActionRequestData<null, PutAccountByStatusByReleaseByBscsAccountQueryParams>>)=>{
            return {...state, ...action};
        }),
        PutAccountByStatusByReleaseByBscsAccountFail:reduceHandlerToProp(ReduxUsersAccountsPropName)((state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, PutAccountByStatusByReleaseByBscsAccountQueryParams>>)=>{
            return {...state, ...action};
        }),
    }
};
export const DeleteAccountByStatusByReleaseByBscsAccountHandler = () => {
    const ReduxUsersAccountsPropName = "deleteAccount";
    return {
        DeleteAccountByStatusByReleaseByBscsAccountRequest:(state:any, action:ActionRequestData<null, DeleteAccountByStatusByReleaseByBscsAccountQueryParams>)=>{
            return {...state, deleteAccount: action};
        },
        DeleteAccountByStatusByReleaseByBscsAccountSuccess:(state:any, action:ActionResponseData<ResultSetCount,ActionRequestData<null, DeleteAccountByStatusByReleaseByBscsAccountQueryParams>>)=>{
            return {...state, deleteAccount: action};
        },
        DeleteAccountByStatusByReleaseByBscsAccountFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, DeleteAccountByStatusByReleaseByBscsAccountQueryParams>>)=>{
            return {...state, deleteAccount: action};
        },
    }
};

export const UsersBscsToSapMappings = () => {
    const ReduxUsersAccountsPropName = "usersAccounts";
    return {
        AddEmptyAccountAction: reduceHandlerToProp(ReduxUsersAccountsPropName)((state: UserAccountType, action: AddEmptyAccountActionType)=>({
            ...state,
            accounts: [
                new Account.Builder()
                    .withEntryOwner(action.user)
                    .withFrontendIdFrontProp(uuidv4())
                    .withEntryDate(new Date())
                    .withStatus("F")
                    .build(),
                ...state.accounts
            ]
        })),
        DeleteUsersAccountAction: reduceHandlerToProp(ReduxUsersAccountsPropName)((state: UserAccountType, action: DeleteUsersAccountActionType)=>({
            ...state,
            accounts: state.accounts.filter(
                account => account.frontendId !== action.account.frontendId
            )
        })),
        ModifyUsersAccountAction: reduceHandlerToProp(ReduxUsersAccountsPropName)((state: UserAccountType, action: ModifyUsersAccountActionType)=>({
            ...state,
            accounts: state.accounts.filter(
                account => account.frontendId !== action.account.frontendId
            )
        })),
    }
};