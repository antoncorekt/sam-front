import React, { Component } from 'react';
import type {MainStateType} from "../../../reducers";
import {connect} from "react-redux";
import {Account, Release, RequestSetAccount, Role, Status15, User} from "../../../api/api-models";
import {
    DeleteAccountByStatusByReleaseByBscsAccount, DeleteReleaseByRelease, GetAccount,
    GetDictionaryAccountSap, PatchAccountByStatusByReleaseByBscsAccount,
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
import {Pane} from "../common/Pane";
import {Button} from "antd";
import SecuredComponent from "../common/SecuredComponent";

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

    renderOperations = (userData, currentRelease) => () => {

        return (
            <div className="flex" style={{marginTop: "-3px"}}>
                <div  style={{color: "white", fontSize: "10px"}}>Wersia konfiguracji: {currentRelease}</div>
                <Button style={{marginLeft: "10px"}} size="small" onClick={()=>{alert("Handler Exportuj wszystkie")}}>Exportuj wszystkie</Button>
                <SecuredComponent group={Role.BOOKER} renderIfAccessDenied={false}>
                    <Button style={{marginLeft: "10px"}} size="small" onClick={()=>this.props.addUserAccount(userData.user)}>Dodaj mapowanie</Button>
                </SecuredComponent>
                <SecuredComponent group={Role.CONTROL} renderIfAccessDenied={false}>
                    <Button style={{marginLeft: "10px"}} size="small" onClick={()=>{this.props.release()}}>Zaakceptuj wszystko</Button>
                </SecuredComponent>
                <SecuredComponent group={Role.CONTROL} renderIfAccessDenied={false}>
                    <Button style={{marginLeft: "10px"}} size="small" onClick={()=>{this.props.revertLastRelease()}}>Revert release</Button>
                </SecuredComponent>
                <SecuredComponent group={Role.BOOKER} renderIfAccessDenied={false}>
                    <Button style={{marginLeft: "10px"}} size="small" onClick={()=>{this.props.release()}}>Wszystko do kontrolingu</Button>
                </SecuredComponent>
            </div>
        )
    };

    render(){
        const userData: User = AuthType.getUserData(this.props.userInfo);

        const allAccounts = AccountMappingType.getAllAccounts(this.props.accountsStore);

        const currentRelease = AccountMappingType.getCurrentRelease(allAccounts);

        return (
            <div className="flex flex-column">

                <Pane title={"Title"} icon={"add"} buttonsTitle={this.renderOperations(userData, currentRelease)}>
                    <OneTableAccountView {...this.props} allAccounts={allAccounts} currentRelease={currentRelease}/>
                </Pane>
            </div>
        )
    }


}

const mapStateToProps = (state: MainStateType) => ({
    sapOfi: state.sapAccountOfi,
    userInfo: state.auth,
    accountsStore: state.accountMapping,
    bscsAccounts: state.bscsAccounts,
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
        patchAccount: (store:AccountMappingType, account: Account) => {

            const accountToPatch = AccountMappingType.getModifiedAccountForPatch(store, account);
            const originalAccount = AccountMappingType.getOriginalAccountIfModified(store, account);

            dispatch(
                PatchAccountByStatusByReleaseByBscsAccount(account.status,
                    account.releaseId,
                    originalAccount.bscsAccount,
                    new RequestSetAccount.Builder()
                        .withData(accountToPatch)
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
        },
        revertLastRelease: () => {
            dispatch(
                DeleteReleaseByRelease(Release.LAST)
            )
        }
    }))(AccountMappingTab)