import React, { Component } from 'react';
import ReactTable from 'react-table';
import { Button, Checkbox, Icon, Pagination } from 'antd';
import { renderDateTime } from '../../utils/Utils.js';
import './style.css';

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

const columns = [
    {
        Cell: item => <Icon onClick={() => null} style={{ cursor: "pointer" }} type="delete" />,
        width: 26,
        filterable: false
    },
    {
        Header: 'Konto BSCS',
        accessor: 'BSCSaccount'
    },
    {
        Header: 'Konto SAP OFI',
        accessor: 'SAPaccount'
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
        accessor: 'createdBy'
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
]

export default class BscsToSapMappings extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pageSize: 10,
            filtered: []
        };
    }

    render() {
        return (
            <div className="bscs-to-sap-mappings">
                <div className="flex-end-row">
                    <Button className="right-margin" type="primary" icon="export" onClick={null}>
                        Eksportuj wszystkie
                    </Button>
                    <Button type="primary" icon="plus-circle" onClick={null}>
                        Dodaj mapowanie
                    </Button>
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
                        pageSizeOptions={[10, 25, 50, 100]}
                    />
                </div>
            </div>
        );
    }
}