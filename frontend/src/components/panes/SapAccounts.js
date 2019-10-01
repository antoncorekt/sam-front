import React, { Component } from 'react';
import ReactTable from 'react-table';
import { Button, Checkbox, Pagination } from 'antd';
import { renderDateTime } from '../../utils/Utils.js';
import './style.css';
import {connect} from "react-redux";
import {GetDictionaryAccountSap} from "../../api/api-func";
import {AccountDictSap, ResultSetAccountDictSaps} from "../../api/api-models";
import type {BackendAction} from "../../api/common-middleware";
import type {MainStateType} from "../../reducers";
import AccountSapUploader from "../uploader-panel/AccountSapUploader";
import {ActionRequestData, ActionResponseData} from "../../api/common-middleware";

const data = [
    {
        account: '70130200',
        name: 'Sprzed\Usage SMS FMS',
        createdDate: renderDateTime(Date.now() - 100000000),
        createdBy: 'CGSYSADM',
        modifiedDate: renderDateTime(Date.now()),
        modifiedBy: 'CGSYSADM',
    },
    {
        account: '27800020',
        name: 'Vendor Stores - Microsoft',
        createdDate: renderDateTime(Date.now() - 100000000),
        createdBy: 'CGSYSADM',
        modifiedDate: renderDateTime(Date.now()),
        modifiedBy: 'CGSYSADM',
    }
];
// sapOfiAccount:string;
// name:string;
// status:string;
const columns = [
    {
        Header: 'Konto',
        accessor: 'sapOfiAccount'
    },
    {
        Header: 'Nazwa',
        accessor: 'name'
    },
    {
        Header: 'Data utworzenia',
        accessor: 'entryDate'
    },
    {
        Header: 'Utworzył',
        accessor: 'entryOwner'
    },
    {
        Header: 'Data modyfikacji',
        accessor: 'updateDate'
    },
    {
        Header: 'Zmodyfikował',
        accessor: 'modifiedBy'
    }
];

class SapAccounts extends Component<{
    sapOfi: ActionResponseData<ResultSetAccountDictSaps,ActionRequestData<null, null>>
}> {

    constructor(props) {
        super(props);

        this.state = {
            checked: false,
            pageSize: 10,
            filtered: []
        };

        this.props.getSapOfi();
    }

    onChange = e => {
        this.setState({
            checked: e.target.checked,
        });
    };

    render() {

        const data = this.props.sapOfi.response !== undefined
            ? this.props.sapOfi.response.data
            : [];

        console.log("data ", data);

        return (
            <div className="sap-accounts">
                <div className="flex-end-row">
                    <Checkbox className="checkbox" onChange={null}>
                        Aktualizuj opisy istniejących kont
                    </Checkbox>
                    <AccountSapUploader />
                </div >
                <div className="table-container">
                    <ReactTable
                        data={data}
                        columns={columns}
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
                        total={data.length}
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
                        pageSizeOptions={[10, 25, 50, 100]}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: MainStateType) => ({
    sapOfi:state.sapAccountOfi,
});

export default connect(
    mapStateToProps,
    dispatch => ({
        getSapOfi: () => {
            dispatch(
                GetDictionaryAccountSap()
            )
        }
    }))(SapAccounts)