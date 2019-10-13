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
    DeleteUsersAccountActionType, ModifyAccountActionType,
    UserAccountType
} from "./bscs-account-store-type";
import {actionRequest} from "../../actions/connectToBackendActions";
import {reduceHandlerToProp, uuidv4} from "../../utils/Utils";
import type {AccountEntry} from "./bscs-account-store-type";


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

export const GetAccount = () => {
    const ReduxUsersAccountsPropName = "backendAccounts";
    return {
        GetAccountRequest:(state:any, action:ActionRequestData<null, GetAccountByStatusByReleaseQueryParams>)=>{
            return {...state, backendAccounts: action};
        },
        GetAccountSuccess:(state:any, action:ActionResponseData<ResultSetAccounts,ActionRequestData<null, GetAccountByStatusByReleaseQueryParams>>)=>{

            const actionWithFrontendId = {
                ...action,
                response: {
                    ...action.response,
                    data: action.response.data.map(
                        acc => ({...acc, frontendId: uuidv4()})
                    )
                }
            };

            return {...state, backendAccounts: actionWithFrontendId, backendAccountsOriginal: []};
        },
        GetAccountFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, GetAccountByStatusByReleaseQueryParams>>)=>{
            return {...state, backendAccounts: action};
        },
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
        AddEmptyAccountAction: reduceHandlerToProp(ReduxUsersAccountsPropName)((state: UserAccountType, action: AddEmptyAccountActionType)=>{
            const now = new Date();
            return {
            ...state,
                accounts: [
                new Account.Builder()
                    .withEntryOwner(action.user)
                    .withOfiSapAccount("WYBIEZ SAP OFI")
                    .withFrontendIdFrontProp(uuidv4())
                    .withEntryDate(new Date())
                    .withStatus("F")
                    .withReleaseId(0)
                    .withValidFromDate(new Date(now.getFullYear(), now.getMonth()+2, 1, 0, 0, 0, 0))
                    .build(),
                ...state.accounts
            ]
            }
        }),
        DeleteUsersAccountAction: reduceHandlerToProp(ReduxUsersAccountsPropName)((state: UserAccountType, action: DeleteUsersAccountActionType)=>({
            ...state,
            accounts: state.accounts.filter(
                account => account.frontendId !== action.account.frontendId
            )
        })),
        ModifyUsersAccountAction: reduceHandlerToProp(ReduxUsersAccountsPropName)((state: UserAccountType, action: ModifyAccountActionType)=>({
            ...state,
            accounts: state.accounts.map(
                account => AccountMappingType.isAccountsEquals(account, action.account)
                    ? action.account
                    : account
            )
        })),
        ModifyBackendAccountAction: (state: AccountMappingType, action: ModifyAccountActionType)=>{
            let originalModifiedAccount: Array<AccountEntry> = state.backendAccountsOriginal;

            const modifiedAccounts = state.backendAccounts.response.data.map(
                account => {
                    if (AccountMappingType.isAccountsEquals(account, action.account)){
                        if (originalModifiedAccount.find(accEntry => accEntry.frontendId === account.frontendId) === undefined) {
                            originalModifiedAccount = [...originalModifiedAccount, {frontendId:account.frontendId, account: account}]
                        }
                        return action.account;
                    }
                    return account;
                }
            );

            return {
                ...state,
                backendAccountsOriginal: originalModifiedAccount,
                backendAccounts: {
                    ...state.backendAccounts,
                    response: {
                        ...state.backendAccounts.response,
                        data: modifiedAccounts
                    }
                },
            }
        },
    }
};