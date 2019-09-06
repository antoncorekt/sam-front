import React, { Component } from 'react';
import ReactTable from 'react-table';
import { Button, Checkbox, Pagination } from 'antd';
import { renderDateTime } from '../../utils/Utils.js';
import './style.css';

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
]

const columns = [
    {
        Header: 'Konto',
        accessor: 'account'
    },
    {
        Header: 'Nazwa',
        accessor: 'name'
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
    }
]

export default class SapAccounts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            checked: false,
            pageSize: 10,
            filtered: []
        };
    }

    onChange = e => {
        this.setState({
            checked: e.target.checked,
        });
    };

    render() {
        return (
            <div className="sap-accounts">
                <div className="flex-end-row">
                    <Checkbox className="checkbox" onChange={null}>
                        Aktualizuj opisy istniejących kont
                    </Checkbox>
                    <Button type="primary" icon="upload" onClick={null}>
                        Wczytaj plik
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