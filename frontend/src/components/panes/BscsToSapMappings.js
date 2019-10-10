import React, { Component } from 'react';
import ReactTable from 'react-table';
import {Button, Checkbox, Icon, Pagination, Spin} from 'antd';
import { renderDateTime } from '../../utils/Utils.js';
import './style.css';
import type {MainStateType} from "../../reducers";
import {connect} from "react-redux";
import {
    DeleteAccountByStatusByReleaseByBscsAccount,
    DeleteDictionaryAccountSap,
    GetAccountByStatusByRelease,
    GetDictionaryAccountSap,
    PostAccount
} from "../../api/api-func";
import {Account, Release, RequestSetAccount, Status15} from "../../api/api-models";
import {AuthType} from "../../reducers/auth/auth-store-type";
import {SapAccountStoreType} from "../../reducers/sap-account/sap-account-store-type";
import {SelectableCell} from "./common/SelectableCell";
import {getPageSizeOption} from "../../utils/Utils";
import {
    AccountMappingType,
    AddEmptyAccountActionType,
    DeleteUsersAccountActionType
} from "../../reducers/bscs-account/bscs-account-store-type";

const columns = (deleteNewAccountHandler, setAccountHandler, loadSapAccountHandler) => (sapAccountsDictionary, deleteAccountOperationFetching) => [
    {
        Cell: item => <Icon onClick={()=>deleteNewAccountHandler(item.original)} style={{ cursor: (deleteAccountOperationFetching === true ? "loading" : "pointer") }} type="delete" />,
        width: 26,
        filterable: false
    },
    {
        Header: 'Konto BSCS',
        accessor: Account.ObjectProps.bscsAccount
    },
    {
        Cell: item => <SelectableCell options={sapAccountsDictionary}
                                           value={item.original.ofiSapAccount}
                                           loadDictionaryHandler={loadSapAccountHandler}
                                           handleCellModification={(val)=>setAccountHandler({...item.original, ofiSapAccount:val})}/>,
        Header: 'Konto SAP OFI',
        // accessor: 'ofiSapAccount'
    },
    {
        Header: 'VAT',
        accessor: 'vatInd',
        Cell: () => {
            return (
                <Checkbox className="checkbox" id={null} checked={true} onChange={null} />
            )
        },
        filterable: false
    },
    {
        Header: 'CIT',
        accessor: 'citInd',
        Cell: () => {
            return (
                <Checkbox className="checkbox" id={null} checked={true} onChange={null} />
            )
        },
        filterable: false
    },
    {
        Header: 'Ważne od',
        accessor: 'validFromDate'
    },
    {
        Header: 'Kod WBS',
        accessor: 'WBScode'
    },
    {
        Header: 'Status',
        accessor: 'state',
        Cell: row => <div className="centered-text">{row.value}</div>
    },
    {
        Header: 'Data utworzenia',
        accessor: 'createdDate'
    },
    {
        Header: 'Utworzył',
        accessor: 'entryOwner'
    },
    {
        Header: 'Data modyfikacji',
        accessor: 'modifiedDate'
    },
    {
        Header: 'Zmodyfikował',
        accessor: 'modifiedBy'
    },
    {
        Header: 'Akcja',
        accessor: 'action',
        filterable: false,
        sortable: false
    }
];

type BscsToSapMappingsStateType = {
    pageSize: number,
    filtered: Array<any>,
    account: Account
}

class BscsToSapMappings extends Component<{
    sapOfi: SapAccountStoreType,
    userInfo: AuthType,
    accountsStore: AccountMappingType
}> {

    constructor(props) {
        super(props);

        this.props.getAccountsFromBackend();
    }

    state = {
        pageSize: 10,
        filtered: [],
        account: null
    };

    componentDidUpdate(prevProps: Readonly<{accountsStore: AccountMappingType}>, prevState: Readonly<S>, snapshot: SS): void {
        if (!AccountMappingType.isDeleteAccountSuccessful(prevProps.accountsStore)
            && AccountMappingType.isDeleteAccountSuccessful(this.props.accountsStore)) {
            this.props.getAccountsFromBackend();
        }
    }

    render() {
        const sapAccountDictName = SapAccountStoreType.getSapAccounts(this.props.sapOfi)
            .map(sapAcc => sapAcc.name);

        const data = AccountMappingType.getAllAccounts(this.props.accountsStore);

        return (
            <div className="bscs-to-sap-mappings">
                <div className="flex-end-row">
                    <Button className="right-margin" type="primary" icon="export" onClick={()=>this.props.test(AuthType.getUserData(this.props.userInfo).user)}>
                        Eksportuj wszystkie
                    </Button>
                    <Button type="primary" icon="plus-circle" onClick={() => {this.props.addUserAccount(AuthType.getUserData(this.props.userInfo).user)}}>
                        Dodaj mapowanie
                    </Button>
                </div >
                <div className="table-container">
                    <Spin tip={"Pobieram słownik"} spinning={AccountMappingType.isLoading(this.props.accountsStore)}>
                        <ReactTable
                            data={data}
                            columns={columns(
                                this.props.deleteAccount,
                                this.props.modifyAccount,
                                this.props.getSapOfi
                            )(
                                sapAccountDictName,
                                this.props.accountsStore.deleteAccount.fetching
                            )}
                            noDataText="Brak danych"
                            filterable
                            filtered={this.state.filtered}
                            showPagination={false}
                            pageSize={this.state.pageSize}
                            onFilteredChange={filtered => this.setState({ filtered })}
                        />
                    </Spin>
                </div>
                <div className="pagination-container">
                    <Pagination
                        size="small"
                        total={100}
                        showQuickJumper
                        showSizeChanger
                        showTotal={() => {
                            return "Ilość pozycji: " + 0;
                        }}
                        onChange={(page, pageSize) => {
                            this.setState({ pageSize: pageSize });
                        }}
                        onShowSizeChange={(current, size) => {
                            this.setState({ pageSize: size });
                        }}
                        pageSizeOptions={getPageSizeOption(data)}
                    />
                    <Icon
                        className="pagination-refresh"
                        type="reload"
                        onClick={() => {
                            this.props.getAccountsFromBackend();
                        }}
                        spin={this.props.accountsStore.backendAccounts.fetching}
                    />
                </div>
            </div>
        );
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
    }))(BscsToSapMappings)