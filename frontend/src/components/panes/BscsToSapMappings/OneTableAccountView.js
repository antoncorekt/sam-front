import React, { Component } from 'react';
import {Checkbox, Icon, Pagination, Spin} from "antd";
import {AccountMappingType} from "../../../reducers/bscs-account/bscs-account-store-type";
import ReactTable from "react-table";
import {getPageSizeOption, renderDateTime} from "../../../utils/Utils";
import {SapAccountStoreType} from "../../../reducers/sap-account/sap-account-store-type";
import {AuthType} from "../../../reducers/auth/auth-store-type";
import {Account} from "../../../api/api-models";
import {SelectableCell} from "../common/SelectableCell";

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
        accessor: Account.ObjectProps.validFromDate,
        Cell: x => (renderDateTime(x.original.validFromDate))
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

function foo(x) { return this.x; }

export default class OneTableAccountView extends Component<{
    sapOfi: SapAccountStoreType,
    userInfo: AuthType,
    accountsStore: AccountMappingType,
    getSapOfi: foo
}> {

    state = {
        pageSize: 10,
        filtered: [],
        account: null
    };

    render() {

        const sapAccountDictName = SapAccountStoreType.getSapAccounts(this.props.sapOfi)
            .map(sapAcc => sapAcc.name);

        const data = AccountMappingType.getAllAccounts(this.props.accountsStore);


        return <div className="flex flex-column width100">
            <div className="width100">
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
            <div className="flex">
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
        </div>;
    }
}