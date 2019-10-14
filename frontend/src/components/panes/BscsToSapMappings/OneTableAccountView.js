import React, { Component } from 'react';
import {Button, Checkbox, DatePicker, Icon, Pagination, Spin} from "antd";
import {AccountMappingType} from "../../../reducers/bscs-to-sap-mappings/bscs-to-sap-mappings-store-type";
import ReactTable from "react-table";
import {getPageSizeOption, renderDateTime} from "../../../utils/Utils";
import {SapAccountStoreType} from "../../../reducers/sap-account/sap-account-store-type";
import {AuthType} from "../../../reducers/auth/auth-store-type";
import {Account, Role, Status, Status15} from "../../../api/api-models";
import {SelectableCell} from "../common/SelectableCell";
import {EditableCell} from "../common/EditableCell";
import SecuredComponent from "../common/SecuredComponent";
import type {AccountEntry} from "../../../reducers/bscs-to-sap-mappings/bscs-to-sap-mappings-store-type";
import moment from "moment";
const { MonthPicker } = DatePicker;

const columns = (setAccountHandler, loadSapAccountHandler, renderUserActionWithAccount) =>
    (sapAccountsDictionary) => [
    // {
    //     Cell: item => <Icon onClick={()=>deleteNewAccountHandler(item.original)} style={{ cursor: (deleteAccountOperationFetching === true ? "loading" : "pointer") }} type="delete" />,
    //     width: 26,
    //     filterable: false
    // },
    {
        Header: 'Konto BSCS',
        // accessor: Account.ObjectProps.bscsAccount,
        Cell: item => (
            <SecuredComponent group={item.original.status === Status15.W || item.original.status === Status15.F ? Role.BOOKER : "N"}>
                <EditableCell
                    rowId={item.original.frontendId}
                    field_key={Account.ObjectProps.bscsAccount}
                    value={item.original.bscsAccount}
                    upperCased={true}
                    handleCellModification={(key, value) => {setAccountHandler({...item.original, bscsAccount:value}) }}
                />
            </SecuredComponent>
        )
    },

    {
        Cell: item => <SecuredComponent group={item.original.status === Status15.W || item.original.status === Status15.F ? Role.BOOKER : "N"}>
                    <SelectableCell options={sapAccountsDictionary}
                                          value={item.original.ofiSapAccount}
                                          loadDictionaryHandler={loadSapAccountHandler}
                                          rowId={item.original.frontendId}
                                          handleCellModification={(key, val)=>setAccountHandler({...item.original, ofiSapAccount:val})}/>
                </SecuredComponent>,
        Header: 'Konto SAP OFI',
        accessor: Account.ObjectProps.ofiSapAccount
    },
    {
        Header: 'VAT',
        accessor:  Account.ObjectProps.vatCodeInd,
        width: 26,
        Cell: () => {
            return (
                <SecuredComponent group={Role.BOOKER}>
                    <Checkbox className="checkbox" id={null} checked={true} onChange={null} />
                </SecuredComponent>
            )
        },
        filterable: false
    },
    {
        Header: 'CIT',
        accessor: Account.ObjectProps.citMarkerVatFlag,
        width: 26,
        Cell: item => {

            return (
                <SecuredComponent group={Role.BOOKER}>
                    <Checkbox className="checkbox" id={null}
                              checked={item.original.citMarkerVatFlag === "X"}
                              onChange={(e)=>{setAccountHandler({...item.original, citMarkerVatFlag:e.target.checked === true ? "X" : ""})}} />
                </SecuredComponent>
            )
        },
        filterable: false
    },
    {
        Header: 'Ważne od',
        accessor: Account.ObjectProps.validFromDate,
        Cell: item => (<SecuredComponent group={Role.BOOKER}>
                <div>
                    <MonthPicker
                        className="month-picker"
                        size="small"
                        format="YYYY-MM-01"
                        value={moment(item.original.validFromDate).startOf('day')}
                        placeholder="Wybierz miesiąc"
                        onChange={(date, dateString) => { setAccountHandler({...item.original, validFromDate:dateString+"T00:00:00.000Z"}) }}
                    />
                </div>
            </SecuredComponent>
            )
    },
    {
        Header: 'Kod WBS',
        Cell: item => <SecuredComponent group={Role.CONTROL}>
            <EditableCell
                rowId={item.index}
                field_key={Account.ObjectProps.ofiSapWbsCode}
                value={item.original.ofiSapWbsCode}
                upperCased={true}
                handleCellModification={(key, value) => { setAccountHandler({...item.original, ofiSapWbsCode:value}) }}
            />
        </SecuredComponent>,
        accessor: Account.ObjectProps.ofiSapWbsCode
    },
    // {
    //     Header: 'Status',
    //     accessor: 'state',
    //     Cell: row => <div className="centered-text">{row.value}</div>
    // },
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
        filterable: false,
        sortable: false,
        width: 300,
        Cell: row => <div>{renderUserActionWithAccount(row.original)}</div>
    }
];


type BscsToSapMappingsStateType = {
    pageSize: number,
    filtered: Array<any>
}

function foo(x) { return this.x; }

const getColorTaskByStatus = (status:Status15) => {
    switch (status) {
        case Status15.C: return {
            background: "#ff9548"
        };
        case Status15.W:return {
            background: "#b0ff7c"
        };
        case Status15.P: return {
            background: "#4a49ff"
        };
        default: return {
            background: "#fffdf8"
        };
    }
};

export default class OneTableAccountView extends Component<{
    sapOfi: SapAccountStoreType,
    userInfo: AuthType,
    accountsStore: AccountMappingType,
    getSapOfi: foo
}> {

    state: BscsToSapMappingsStateType = {
        pageSize: 10,
        filtered: []
    };

    renderUserActionWithAccount = (accountStore: AccountMappingType, userRole: Role, ) => (account: Account) => {

        const renderDeleteButton = () => (
            <Button size="small"
                    onClick={()=>this.props.deleteAccount(account)}
                    loading={this.props.accountsStore.deleteAccount.fetching}
            >
                Usun
            </Button>
        );

        const renderIfModifiedAccount = (renderFunc) => {

            const originalAccount: AccountEntry = AccountMappingType.getOriginalAccountIfModified(accountStore, account);

            if (originalAccount !== undefined && !AccountMappingType.isAccountsDataDeepEquals(originalAccount.account, account)){
                return renderFunc(account, originalAccount.account);
            }
            return "";
        };

        const renderCancelButton = (account, originalAccount) => {
            return (
                <Button size="small"
                        onClick={()=>this.props.modifyAccount(originalAccount)}
                >
                    Anuluj zmiane
                </Button>
            )
        };

        const renderUpdateAccountButton = (account, originalAccount) => {
            return (
                <Button size="small"
                        onClick={()=>this.props.postAccount(account)}
                >
                    Zapisz
                </Button>
            )
        };

        if (!AccountMappingType.isAccountFromBackend(account)){
            return <div>
                <Button size="small"
                        onClick={()=>this.props.postAccount(account)}
                >
                    Zapisz
                </Button>
                {renderDeleteButton()}
            </div>
        }

        if (account.status === Status15.W && userRole === Role.BOOKER){

                return <div className="flex">
                    {renderDeleteButton()}
                    <Button size="small" onClick={()=>this.props.patchAccountStatus(account, Status15.C)}> Zatwierdz</Button>
                    {renderIfModifiedAccount(renderUpdateAccountButton)}
                    {renderIfModifiedAccount(renderCancelButton)}

                </div>
        }

        if (account.status === Status15.C && userRole === Role.CONTROL){
            return <div className="flex">
                <Button size="small" onClick={()=>this.props.patchAccountStatus(account, Status15.W)}>Anuluj</Button>
                <Button size="small"> Zatwierdz</Button>
                {renderIfModifiedAccount(renderUpdateAccountButton)}
                {renderIfModifiedAccount(renderCancelButton())}
            </div>
        }
    };

    render() {

        const sapAccountDictName = SapAccountStoreType.getSapAccounts(this.props.sapOfi)
            .map(sapAcc => sapAcc.sapOfiAccount);

        const data = AccountMappingType.getAllAccounts(this.props.accountsStore);

        return <div className="flex flex-column width100">
            <div className="width100">
                <Spin tip={"Pobieram mapowania"} spinning={AccountMappingType.isLoading(this.props.accountsStore)}>
                    <ReactTable
                        data={data}
                        columns={columns(
                            this.props.modifyAccount,
                            this.props.getSapOfi,
                            this.renderUserActionWithAccount(this.props.accountsStore, AuthType.getUserData(this.props.userInfo).role)
                        )(
                            sapAccountDictName,
                            this.props.accountsStore.deleteAccount.fetching,
                        )}
                        noDataText="Brak danych"
                        filterable
                        filtered={this.state.filtered}
                        showPagination={false}
                        pageSize={this.state.pageSize}
                        onFilteredChange={filtered => this.setState({ filtered })}
                        getTrProps={(state, rowInfo, column, k) => {
                            if (rowInfo === undefined) {
                                return { style: { visibility: "hidden" } };
                            }
                            return {
                                style: getColorTaskByStatus(rowInfo.original.status)
                            };
                        }}
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