import React, { Component } from 'react';
import type {MainStateType} from "../../../reducers";
import {connect} from "react-redux";
import {Account, Release, RequestSetAccount, Status15, User} from "../../../api/api-models";
import {
    DeleteAccountByStatusByReleaseByBscsAccount, GetAccount,
    GetAccountByStatusByRelease, GetDictionaryAccountSap, PatchAccountByStatusByReleaseByBscsAccount,
    PostAccount, PostReleaseNew
} from "../../../api/api-func";
import {
    AccountMappingType,
    AddEmptyAccountActionType,
    DeleteUsersAccountActionType, ModifyAccountActionType
} from "../../../reducers/bscs-to-sap-mappings/bscs-to-sap-mappings-store-type";
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

    componentDidUpdate(prevProps: Readonly<{accountsStore: AccountMappingType}>, prevState: Readonly<S>, snapshot: SS): void {
        if ((!AccountMappingType.isDeleteAccountSuccessful(prevProps.accountsStore)
            && AccountMappingType.isDeleteAccountSuccessful(this.props.accountsStore)) ||
            (!AccountMappingType.isPatchAccountSuccessful(prevProps.accountsStore)
                && AccountMappingType.isPatchAccountSuccessful(this.props.accountsStore))
        ){
            this.props.getAccountsFromBackend();
        }
    }

    renderAccountView = (viewMode: ViewMode, allAccounts, currentRelease) => {

        const viewProps = this.props;

        if (viewMode === ViewMode.OneTableView){
            return <OneTableAccountView {...viewProps} allAccounts={allAccounts} currentRelease={currentRelease}/>
        }
        if (viewMode === ViewMode.DoubleTableView){
            return <DoubleTableAccountView {...viewProps} allAccounts={allAccounts} currentRelease={currentRelease}/>
        }

        throw new Error("Please, define view mode")
    };

    render(){

        const doubleTableViewMode = ViewMode.OneTableView;

        const userData: User = AuthType.getUserData(this.props.userInfo);

        const allAccounts = AccountMappingType.getAllAccounts(this.props.accountsStore);

        const currentRelease = AccountMappingType.getCurrentRelease(allAccounts);

        return (
            <div className="flex flex-column">
                <div className="width100">
                    <AccountOperationPanel
                        releaseVersion={currentRelease}
                        userRole={userData.role}
                        releaseHandle={this.props.release}
                        addUserAccount={()=>this.props.addUserAccount(userData.user)}
                    />
                </div>
                <div className="flex">
                    {this.renderAccountView(doubleTableViewMode, allAccounts, currentRelease)}
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

            let accToBackend: Account = JSON.parse(JSON.stringify(account));

            accToBackend.status = undefined;
            accToBackend.releaseId = undefined;
            accToBackend.entryDate = undefined;
            accToBackend.entryOwner = undefined;

            dispatch(
                PostAccount(new RequestSetAccount.Builder()
                    .withData(accToBackend)
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
            dispatch(
                ModifyAccountActionType.createAction(account)
            )
        },
        patchAccount: (account: Account) => {
            dispatch(
                PatchAccountByStatusByReleaseByBscsAccount(account.status,
                    account.releaseId,
                    account.bscsAccount,
                    new RequestSetAccount.Builder()
                        .withData(account)
                        .build()
                )
            )
        },
        patchAccountStatus: (account: Account, status: Status15, releaseId: number) => {
            dispatch(
                PatchAccountByStatusByReleaseByBscsAccount(account.status,
                    account.releaseId,
                    account.bscsAccount,
                    new RequestSetAccount.Builder()
                        .withData({status: status, releaseId:releaseId})
                        .build()
                )
            )
        },
        getSapOfi: () => {
            console.log("LOAD DICT ACCOUNT SAP!!!");
            dispatch(
                GetDictionaryAccountSap()
            )
        },
        release: ()=> {
            dispatch(
                PostReleaseNew()
            )
        }
    }))(AccountMappingTab)