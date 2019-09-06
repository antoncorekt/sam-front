import React, { Component } from 'react';
import ReactTable from 'react-table';
import { Button, Icon, Input, Pagination, Select } from 'antd';
import { renderDateTime } from '../../utils/Utils.js';
import './style.css';

const InputGroup = Input.Group;
const { Option } = Select;

const data = [
    {
        SAPaccount: 70130200,
        segment: 'PRIV',
        orderNumber: 123,
        validFromDate: renderDateTime(Date.now() - 100000000),
        state: 'Roboczy',
        createdDate: renderDateTime(Date.now() - 100000000),
        createdBy: 'CGSYSADM',
        modifiedDate: renderDateTime(Date.now()),
        modifiedBy: 'CGSYSADM'
    },
    {
        SAPaccount: 70130200,
        segment: 'BIZ',
        orderNumber: 456,
        validFromDate: renderDateTime(Date.now() - 100000000),
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
        Header: 'Konto SAP OFI',
        accessor: 'SAPaccount'
    },
    {
        Header: 'Segment',
        accessor: 'segment'
    },
    {
        Header: 'Nr zamówienia',
        accessor: 'orderNumber'
    },
    {
        Header: 'Ważne od',
        accessor: 'validFromDate'
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

export default class SapToSegmentMappings extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pageSize: 10,
            filtered: []
        };
    }

    render() {
        return (
            <div className="sap-to-segment-mappings">
                <div className="flex-end-row">
                    <div className="right-margin">
                        <InputGroup compact>
                            <Select className="select" placeholder="Wybierz konto SAP OFI">
                                <Option value="1">Konto SAP OFI 1</Option>
                                <Option value="2">Konto SAP OFI 2</Option>
                            </Select>
                            <Button type="primary" onClick={null}>
                                Generuj wiersze
                            </Button>
                        </InputGroup>
                    </div>
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