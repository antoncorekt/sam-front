import React, { Component } from 'react';
import ReactTable from 'react-table';
import { Button, Checkbox, Icon, Pagination } from 'antd';
import { renderDateTime } from '../../utils/Utils.js';
import './style.css';
import type {MainStateType} from "../../reducers";
import {connect} from "react-redux";
import {DeleteDictionaryAccountSap, GetDictionaryAccountSap, PostAccount} from "../../api/api-func";
import {Account, RequestSetAccount} from "../../api/api-models";
import {AuthType} from "../../reducers/auth/auth-store-type";
import {SapAccountStoreType} from "../../reducers/sap-account/sap-account-store-type";
import {SelectableCell} from "./common/SelectableCell";
import {getPageSizeOption} from "../../utils/Utils";

const data = [
    {
        BSCSaccount: 70140200,
        SAPaccount: 70130200,
        vatInd: null,
        citInd: null,
        validFromDate: renderDateTime(Date.now() - 100000000),
        WBScode: 'X-PLA-30000-02',
        state: 'Roboczy',
        createdDate: renderDateTime(Date.now() - 100000000),
        createdBy: 'CGSYSADM',
        modifiedDate: renderDateTime(Date.now()),
        modifiedBy: 'CGSYSADM'
    },
    {
        BSCSaccount: 70140200,
        SAPaccount: 70130200,
        vatInd: null,
        citInd: null,
        validFromDate: renderDateTime(Date.now() - 100000000),
        WBScode: 'X-PLA-30000-02',
        state: 'Zatwierdzony',
        createdDate: renderDateTime(Date.now() - 100000000),
        createdBy: 'CGSYSADM',
        modifiedDate: renderDateTime(Date.now()),
        modifiedBy: 'CGSYSADM'
    }
]

const columns = (deleteNewAccountHandler, setAccountHandler, loadSapAccountHandler) => (sapAccountsDictionary) => [
    {
        Cell: item => <Icon onClick={deleteNewAccountHandler} style={{ cursor: "pointer" }} type="delete" />,
        width: 26,
        filterable: false
    },
    {
        Header: 'Konto BSCS',
        accessor: 'BSCSaccount'
    },
    {
        Cell: item => <SelectableCell options={sapAccountsDictionary}
                                           value={item.original.ofiSapAccount}
                                           loadDictionaryHandler={loadSapAccountHandler}
                                           handleCellModification={setAccountHandler}/>,
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
    userInfo: AuthType
}> {

    constructor(props) {
        super(props);
    }


    state = {
        pageSize: 10,
        filtered: [],
        account: null
    };

    addNewAccount = () => {
        this.setState({
            account: new Account.Builder()
                .withEntryOwner(AuthType.getUserData(this.props.userInfo).user)
                .withOfiSapAccount("enter sap account hear")
                .withStatus("?")
                .build()
        })
    };

    setAccountHandler = (accountKey) => (field, value) => {
        this.setState({
            account: {...this.state.account, [accountKey]: value}
        })
    };

    deleteNewAccount = () => {
        this.setState({
            account: null
         })
    };

    render() {
        const {account} = this.state;

        const sapAccountDictName = SapAccountStoreType.getSapAccounts(this.props.sapOfi)
            .map(sapAcc => sapAcc.name);
        const bscsToSAPAccounts = [];

        const data = [account, ...bscsToSAPAccounts]
            .filter(acc => acc !== null)
        ;

        return (
            <div className="bscs-to-sap-mappings">
                <div className="flex-end-row">
                    <Button className="right-margin" type="primary" icon="export" onClick={()=>this.props.test(AuthType.getUserData(this.props.userInfo).user)}>
                        Eksportuj wszystkie
                    </Button>
                    <Button type="primary" icon="plus-circle" onClick={this.addNewAccount}>
                        Dodaj mapowanie
                    </Button>
                </div >
                <div className="table-container">
                    <ReactTable
                        data={data}
                        columns={columns(
                            this.deleteNewAccount,
                            this.setAccountHandler("ofiSapAccount"),
                            this.props.getSapOfi
                        )(
                            sapAccountDictName
                        )}
                        noDataText="Brak danych"
                        filterable
                        filtered={this.state.filtered}
                        showPagination={false}
                        pageSize={this.state.pageSize}
                        onFilteredChange={filtered => this.setState({ filtered })}
                    />
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
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: MainStateType) => ({
    sapOfi: state.sapAccountOfi,
    userInfo: state.auth
});

export default connect(
    mapStateToProps,
    dispatch => ({
        postAccount: () => {
            const account: Account = new Account();

            dispatch(
                PostAccount(new RequestSetAccount.Builder()
                    .withData(account)
                    .build()
                )
            )
        },
        test: (login) => {
            dispatch({
                type: "AddEmptyAccount",
                action: {
                    user: login
                }
            })

        },
        deleteDict: () => {
            dispatch(
                DeleteDictionaryAccountSap()
            )
        },
        getSapOfi: () => {
            console.log("LOAD DICT ACCOUNT SAP!!!");
            dispatch(
                GetDictionaryAccountSap()
            )
        },
    }))(BscsToSapMappings)