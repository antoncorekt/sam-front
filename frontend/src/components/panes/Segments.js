import React, { Component } from 'react';
import ReactTable from 'react-table';
import { Button, Pagination } from 'antd';
import { renderDateTime } from '../../utils/Utils.js';
import './style.css';

const data = [
    {
        segment: 'PRIV',
        category: 'PRIV',
        createdDate: renderDateTime(Date.now() - 100000000),
        createdBy: 'CGSYSADM',
        modifiedDate: renderDateTime(Date.now()),
        modifiedBy: 'CGSYSADM',
    },
    {
        segment: 'SOHO',
        category: 'BIZ',
        createdDate: renderDateTime(Date.now() - 100000000),
        createdBy: 'CGSYSADM',
        modifiedDate: renderDateTime(Date.now()),
        modifiedBy: 'CGSYSADM',
    }
]

const columns = [
    {
        Header: 'Segment',
        accessor: 'segment'
    },
    {
        Header: 'Kategoria',
        accessor: 'category'
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

export default class Segments extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pageSize: 10,
            filtered: []
        };
    }

    render() {
        return (
            <div className="segments">
                <div className="flex-end-row">
                    <Button type="primary" icon="plus-circle" onClick={null}>
                        Dodaj segment
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