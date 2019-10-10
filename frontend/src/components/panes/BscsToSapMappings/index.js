import React, { Component } from 'react';
import type {MainStateType} from "../../../reducers";
import {connect} from "react-redux";
import {Account, Release, RequestSetAccount, Status15} from "../../../api/api-models";
import {
    DeleteAccountByStatusByReleaseByBscsAccount,
    GetAccountByStatusByRelease, GetDictionaryAccountSap,
    PostAccount
} from "../../../api/api-func";
import {
    AccountMappingType,
    AddEmptyAccountActionType,
    DeleteUsersAccountActionType
} from "../../../reducers/bscs-account/bscs-account-store-type";
import {SapAccountStoreType} from "../../../reducers/sap-account/sap-account-store-type";
import {AuthType} from "../../../reducers/auth/auth-store-type";


class AccountMappingTab extends Component<{
    sapOfi: SapAccountStoreType,
    userInfo: AuthType,
    accountsStore: AccountMappingType
}> {

    render() {
        return undefined;
    }


}

const mapStateToProps = (state: MainStateType) => ({
    sapOfi: state.sapAccountOfi,
    userInfo: state.auth,
    accountsStore: state.accountMapping
});

export default connect(
    mapStateToProps,
    dispatch => ({
        postAccount: (account: Account) => {

            dispatch(
                PostAccount(new RequestSetAccount.Builder()
                    .withData(account)
                    .build()
                )
            )
        },
        addUserAccount: (login: string) => {
            dispatch(
                AddEmptyAccountActionType.createAction(login)
            )
        },
        getAccountsFromBackend: () => {
            dispatch(
                GetAccountByStatusByRelease(Status15.W, Release.LAST)
            )
        },
        deleteAccount: (account: Account) =>{
            if (AccountMappingType.isAccountFromBackend(account)){
                console.log("del account from backend", account);
                dispatch(
                    DeleteAccountByStatusByReleaseByBscsAccount(account.status, account.releaseId, account.bscsAccount)
                )
            }
            else {
                console.log("del account from frontend memory", account);
                dispatch(
                    DeleteUsersAccountActionType.createAction(account)
                )
            }
        },
        modifyAccount: (account: Account) => {
            if (AccountMappingType.isAccountFromBackend(account)){
                console.log("del account from backend", account);
                dispatch(
                    DeleteAccountByStatusByReleaseByBscsAccount(account.status, account.releaseId, account.bscsAccount)
                )
            }
            else {
                console.log("del account from frontend memory", account);
                dispatch(
                    DeleteUsersAccountActionType.createAction(account)
                )
            }
        },
        getSapOfi: () => {
            console.log("LOAD DICT ACCOUNT SAP!!!");
            dispatch(
                GetDictionaryAccountSap()
            )
        },
    }))(AccountMappingTab)