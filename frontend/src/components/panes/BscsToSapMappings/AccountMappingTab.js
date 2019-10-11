import React, { Component } from 'react';
import type {MainStateType} from "../../../reducers";
import {connect} from "react-redux";
import {Account, Release, RequestSetAccount, Status15, User} from "../../../api/api-models";
import {
    DeleteAccountByStatusByReleaseByBscsAccount, GetAccount,
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
import OneTableAccountView from "./OneTableAccountView";
import DoubleTableAccountView from "./DoubleTableAccountView";
import {AccountOperationPanel} from "./AccountOperationPanel";

export class ViewMode {
    static get OneTableView() { return "oneTableView"}
    static get DoubleTableView() { return "doubleTableView"}
}

class AccountMappingTab extends Component<{
    sapOfi: SapAccountStoreType,
    userInfo: AuthType,
    accountsStore: AccountMappingType
}> {

    constructor(props){
        super(props);

        this.props.getAccountsFromBackend();
    }

    componentDidMount(): void {
        console.log("AccountMappingTab componentDidMount")
    }

    renderAccountView = (viewMode: ViewMode) => {

        const viewProps = this.props;

        if (viewMode === ViewMode.OneTableView){
            return <OneTableAccountView {...viewProps}/>
        }
        if (viewMode === ViewMode.DoubleTableView){
            return <DoubleTableAccountView {...viewProps}/>
        }

        throw new Error("Please, define view mode")
    };

    render(){

        const doubleTableViewMode = ViewMode.OneTableView;

        const userData: User = AuthType.getUserData(this.props.userInfo);

        return (
            <div className="flex flex-column">
                <div className="width100">
                    <AccountOperationPanel
                        releaseVersion=""
                        userRole={userData.role}
                        addUserAccount={()=>this.props.addUserAccount(userData.user)}
                    />
                </div>
                <div className="flex">
                    {this.renderAccountView(doubleTableViewMode)}
                </div>
            </div>
        )
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
                GetAccount()
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