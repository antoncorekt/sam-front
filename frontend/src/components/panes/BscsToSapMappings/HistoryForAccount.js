import React from "react";
import {
    Account,
    AccountLog,
    GetAccountLogQueryParams,
    RequestSetAccount,
    ResultSetAccountLogs
} from "../../../api/api-models";
import type {MainStateType} from "../../../reducers";
import {connect} from "react-redux";
import {GetAccountLog, PostAccount} from "../../../api/api-func";
import {Spin} from "antd";
import {AccountMappingType} from "../../../reducers/bscs-to-sap-mappings/bscs-to-sap-mappings-store-type";
import ReactTable from "react-table";
import {AuthType} from "../../../reducers/auth/auth-store-type";
import {ActionRequestData, ActionResponseData} from "../../../api/common-middleware";
import {renderDateTime} from "../../../utils/Utils";

const columns = [
    {
        Header: 'Operacija',
        accessor: AccountLog.ObjectProps.opcode
    },
    {
        Header: 'Status',
        accessor: "status"
    },
    {
        Header: 'Bscs account',
        accessor: AccountLog.ObjectProps.bscsAccount
    },
    {
        Header: 'Sap account',
        accessor: AccountLog.ObjectProps.ofiSapAccount
    },
    {
        Header: 'OfiSapWbsCode',
        accessor: AccountLog.ObjectProps.ofiSapWbsCode
    },
    {
        Header: 'Utworzył',
        accessor: AccountLog.ObjectProps.entryOwner
    },
    {
        Header: 'Data modyfikacji',
        accessor:  AccountLog.ObjectProps.opdate,
        Cell: item => renderDateTime(item.original.opdate)
    },
];

export class HistoryForAccount extends React.Component{


    render() {
        return <div>

            <div className="width100">
                <ReactTable
                    columns={columns}
                    data={this.props.data}
                    noDataText="Brak danych"
                    showPagination={true}
                    pageSize={10}
                />
            </div>
        </div>;
    }

}
