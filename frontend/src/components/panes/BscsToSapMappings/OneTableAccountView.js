import React, { Component } from 'react';
import {Button, Checkbox, DatePicker, Icon, Pagination, Spin, Modal, Input} from "antd";
import {AccountMappingType} from "../../../reducers/bscs-to-sap-mappings/bscs-to-sap-mappings-store-type";
import ReactTable from "react-table";
import {
    getColor,
    getFilteredAndSortedArray,
    getPageSizeOption,
    getPaginationArray,
    Filter, renderDateTime
} from "../../../utils/Utils";
import {SapAccountStoreType} from "../../../reducers/sap-account/sap-account-store-type";
import {BscsAccountsType} from "../../../reducers/bscs-accounts/bscs-accounts-store-type";
import {AuthType} from "../../../reducers/auth/auth-store-type";
import {Account, Role, Status, Status15} from "../../../api/api-models";
import {SelectableCell} from "../common/SelectableCell";
import {EditableCell} from "../common/EditableCell";
import SecuredComponent from "../common/SecuredComponent";
import type {AccountEntry} from "../../../reducers/bscs-to-sap-mappings/bscs-to-sap-mappings-store-type";
import {HistoryForAccount} from "./HistoryForAccount";
import moment from "moment";


const { MonthPicker } = DatePicker;


const columns = (setAccountHandler, loadSapAccountHandler, renderUserActionWithAccount, showHistoryHandler) =>
    (sapAccountsDictionary, bscsAccountDictionary) => [
    // {
    //     Cell: item => <Icon onClick={()=>deleteNewAccountHandler(item.original)} style={{ cursor: (deleteAccountOperationFetching === true ? "loading" : "pointer") }} type="delete" />,
    //     width: 26,
    //     filterable: false
    // },
    {
        Header: 'Konto BSCS',
        // Header: <SearchColumn/>,
        accessor: Account.ObjectProps.bscsAccount,
        Cell: item => (
            <div className="flex space-between">
                <div className="width100">
                    <SecuredComponent opacity={false} group={item.original.status === Status15.W || item.original.status === Status15.F ? Role.BOOKER : "N"}>
                        <SelectableCell
                            rowId={item.original.frontendId}
                            field_key={Account.ObjectProps.bscsAccount}
                            dropdownStyle={{ width: "400px" }}
                            value={item.original.bscsAccount}
                            options={
                                bscsAccountDictionary
                            }
                            handleCellModification={(key, value) => {setAccountHandler({...item.original, bscsAccount:value}) }}
                        />
                    </SecuredComponent>
                </div>
                <Icon type={"history"} onClick={()=>showHistoryHandler(item.original)}/>
            </div>
        )
    },

    {
        Cell: item => <SecuredComponent opacity={false} group={item.original.status === Status15.W || item.original.status === Status15.F ? Role.BOOKER : "N"}>
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
        width: 28,
        Cell: (item) => {
            return (
                <SecuredComponent opacity={false} group={item.original.status === Status15.W || item.original.status === Status15.F ? Role.BOOKER : "N"}>
                    <Checkbox className="checkbox" id={null}
                              checked={item.original.vatCodeInd === "1"}
                              onChange={(e)=>{setAccountHandler({...item.original, vatCodeInd:e.target.checked === true ? "1" : "0"})}} />
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
                <SecuredComponent opacity={false} group={item.original.status === Status15.W || item.original.status === Status15.F ? Role.BOOKER : "N"}>
                    <SelectableCell options={["1", "0", "PUSTE"]}
                        value={item.original.citMarkerVatFlag}
                        rowId={item.original.frontendId}
                        handleCellModification={(key, val)=>setAccountHandler({...item.original, citMarkerVatFlag:val})}/>
                </SecuredComponent>
            )
        },
        filterable: false
    },
    {
        Header: 'Ważne od',
        accessor: Account.ObjectProps.validFromDate,
        width: 140,
        Cell: item => (<SecuredComponent opacity={false} group={item.original.status === Status15.W || item.original.status === Status15.F ? Role.BOOKER : "N"}>
                <div>
                    <MonthPicker
                        disabled={!((item.original.status === Status15.W || item.original.status === Status15.F) && Role.BOOKER)}
                        className="month-picker"
                        size="small"
                        format="YYYY-MM-01"
                        value={item.original.validFromDate !== null && item.original.validFromDate !== undefined ? moment(item.original.validFromDate) : null}
                        placeholder="Wybierz miesiąc"
                        onChange={(date, dateString) => { setAccountHandler({...item.original, validFromDate:dateString+"T00:00:00.000Z"}) }}
                    />

                </div>
            </SecuredComponent>
            )
    },
    {
        Header: 'Kod WBS',
        Cell: item => <SecuredComponent opacity={false} group={item.original.status === Status15.C ? Role.CONTROL : "N"}>
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
        accessor: Account.ObjectProps.entryDate,
        Cell: item => renderDateTime(item.original.entryDate)
    },
    {
        Header: 'Utworzył',
        accessor: Account.ObjectProps.entryOwner
    },
    {
        Header: 'Data modyfikacji',
        accessor:  Account.ObjectProps.updateDate,
        Cell: item => renderDateTime(item.original.updateDate)
    },
    {
        Header: 'Zmodyfikował',
        accessor: Account.ObjectProps.updateOwner
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
    return {
        background: getColor(status)
    };
};

export default class OneTableAccountView extends Component<{
    sapOfi: SapAccountStoreType,
    userInfo: AuthType,
    accountsStore: AccountMappingType,
    getSapOfi: foo
}> {

    state: BscsToSapMappingsStateType = {
        pageSize: 10,
        page: 1,
        filters: [{
            orig: [Account.ObjectProps.bscsAccount, Account.ObjectProps.ofiSapAccount, Account.ObjectProps.entryOwner,Account.ObjectProps.updateOwner, Account.ObjectProps.ofiSapWbsCode],
            search: null,
            compareFunc: Filter.defaultStringComparator
        }],
        sortedBy: Account.ObjectProps.updateDate
    };

    componentDidUpdate(prevProps: Readonly<{accountsStore: AccountMappingType}>, prevState: Readonly<S>, snapshot: SS): void {

        if (prevProps.accountsStore.accountLog.fetching === true
            && this.props.accountsStore.accountLog.fetching === false
        ) {

            Modal.info({
                title: "History",
                content: <HistoryForAccount data={AccountMappingType.getAccountLogs(this.props.accountLog)}/>,
                width: 1000
            })
        }
    }

    showHistoryHandler = (getAccountHistoryHandler) => (account: Account) => {



        getAccountHistoryHandler(account.bscsAccount);
    };

    renderUserActionWithAccount = (accountStore: AccountMappingType, userRole: Role, currentRelease: number) => (account: Account) => {

        const renderDeleteButton = () => (
            <Button size="small"
                    onClick={()=>this.props.deleteAccount(account)}
                    loading={this.props.accountsStore.deleteAccount.fetching}
            >
                Usuń
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
                    Anuluj zmianę
                </Button>
            )
        };

        const renderUpdateAccountButton = (account, originalAccount) => {
            return (
                <Button size="small"
                        onClick={()=>this.props.patchAccount(accountStore, account)}
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
                <Button size="small" onClick={()=>this.props.patchAccountStatus(account, Status15.P, ""+currentRelease)}> Zatwierdz</Button>
                {renderIfModifiedAccount(renderUpdateAccountButton)}
                {renderIfModifiedAccount(renderCancelButton)}
            </div>
        }
    };

    render() {

        const sapAccountDictName = SapAccountStoreType.getSapAccounts(this.props.sapOfi)
            .map(sapAcc => sapAcc.sapOfiAccount);

        const bscsAccountDictName = BscsAccountsType.getBscsAccounts(this.props.bscsAccounts)
            .filter(acc => acc.active === "A")
            .map(acc => acc.account);

        const fullData = this.props.allAccounts;

        const sortedAndFilteredData = getFilteredAndSortedArray(this.props.allAccounts, this.state.filters, "", true);

        const paginationArray = getPaginationArray(sortedAndFilteredData, this.state.page, this.state.pageSize);

        return <div className="flex flex-column width100 " >

            <div className="flex width100 space-between" style={{marginBottom: "15px"}}>

                <div className="flex ">
                    <Input placeholder="Szukaj" onChange={(e)=>{this.setState({filters: [{
                            orig: [Account.ObjectProps.bscsAccount, Account.ObjectProps.ofiSapAccount, Account.ObjectProps.entryOwner,Account.ObjectProps.updateOwner, Account.ObjectProps.ofiSapWbsCode],
                            search: e.target.value,
                            compareFunc: Filter.defaultStringComparator
                        }]})}} size={"small"}/>
                </div>

                <div className="flex">
                    <Pagination
                        size="small"
                        total={sortedAndFilteredData.length}
                        showQuickJumper
                        showSizeChanger
                        showTotal={() => {
                            return "Ilość pozycji: " + sortedAndFilteredData.length;
                        }}
                        onChange={(page, pageSize) => {
                            this.setState({pageSize: pageSize, page: page});
                        }}
                        onShowSizeChange={(current, size) => {
                            this.setState({pageSize: size});
                        }}
                        pageSizeOptions={getPageSizeOption(sortedAndFilteredData)}
                    />
                    <Icon
                        style={{marginTop:"5px"}}
                        className="pagination-refresh"
                        type="reload"
                        onClick={() => {
                            this.props.getAccountsFromBackend();
                        }}
                        spin={this.props.accountsStore.backendAccounts.fetching}
                    />
                </div>
            </div>

            <div className="width100">
                <Spin tip={"Pobieram mapowania"} spinning={AccountMappingType.isLoading(this.props.accountsStore)}>
                    <ReactTable
                        data={paginationArray}
                        columns={columns(
                            this.props.modifyAccount,
                            this.props.getSapOfi,
                            this.renderUserActionWithAccount(this.props.accountsStore, AuthType.getUserData(this.props.userInfo).role, this.props.currentRelease),
                            this.showHistoryHandler(this.props.getAccountHistory, this.props.accountLog)
                        )(
                            sapAccountDictName,
                            bscsAccountDictName,
                        )}
                        noDataText="Brak danych"
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
                        // style={{
                        //     height: "400px" // This will force the table body to overflow and scroll, since there is not enough room
                        // }}
                    />
                </Spin>
            </div>
            <div className="flex">


            </div>
        </div>;
    }
}