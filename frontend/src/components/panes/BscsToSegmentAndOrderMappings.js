import React, { Component } from 'react';
import ReactTable from 'react-table';
import { Button, Icon, Input, Pagination, Select } from 'antd';
import { renderDateTime } from '../../utils/Utils.js';
import './style.css';
import { connect } from "react-redux";
import { RequestSetOrder } from "../../api/api-models";
import { GetOrderByStatusByRelease, PostOrder } from "../../api/api-func";
import { getOrderMappingsReduxProperty, getOrderMappingsResponseReduxProperty } from '../../reducers/order-mappings/order-mappings-store-type.js';
import { AuthType } from "../../reducers/auth/auth-store-type";
import { Order } from '../../api/api-models.js';

const DEFAULT_CURRENT_PAGE = 0;
const DEFAULT_PAGE_SIZE = 30;
const DEFAULT_FILTERED_COUNT = 1000000;

const InputGroup = Input.Group;
const { Option } = Select;

const columns = (that) => [
    {
        Cell: item => <Icon onClick={() => null} style={{ cursor: "pointer" }} type="delete" />,
        width: 26,
        filterable: false
    },
    {
        Header: 'Konto BSCS',
        accessor: 'bscsAccount'
    },
    {
        Header: 'Segment',
        accessor: 'segmentCode'
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
        accessor: 'entryDate',
        Cell: x => (renderDateTime(x.original.entryDate))
    },
    {
        Header: 'Utworzył',
        accessor: 'entryOwner'
    },
    {
        Header: 'Data modyfikacji',
        accessor: 'updateDate',
        Cell: x => (renderDateTime(x.original.updateDate))
    },
    {
        Header: 'Zmodyfikował',
        accessor: 'updateOwner'
    },
    {
        Header: 'Akcja',
        accessor: 'action',
        filterable: false,
        sortable: false
    }
]

class BscsToSegmentAndOrderMappings extends Component<{
    auth: AuthType,
    orderMappings: OrderMappingsType
}> {

    constructor(props) {
        super(props);

        this.reactTable = React.createRef();
        this.state = {
            currentPage: DEFAULT_CURRENT_PAGE,
            pageSize: DEFAULT_PAGE_SIZE,
            filtered: [],
            filteredCount: DEFAULT_FILTERED_COUNT
        };

        this.props.getAllOrders("W", 0); // TODO_TKB: fix this
    }

    componentDidUpdate(prevProps) {
        if (getOrderMappingsReduxProperty(this.props, "GET", "fail", true) !== true
            && getOrderMappingsReduxProperty(this.props, "GET", "fetching", true) === false
            && getOrderMappingsReduxProperty(prevProps, "GET", "fetching", false) === true) {
            this.setState({
                currentPage: DEFAULT_CURRENT_PAGE,
                pageSize: DEFAULT_PAGE_SIZE,
                filtered: []
            });

            console.log(getOrderMappingsResponseReduxProperty(this.props, "GET", "data", []));
        }

        if (getOrderMappingsResponseReduxProperty(this.props, "GET", "count", -1)
            !== getOrderMappingsResponseReduxProperty(prevProps, "GET", "count", -1)) {
            this.setState({ filteredCount: this.reactTable.getResolvedState().sortedData.length });
        }
    }

    handleDataExport() {
        this.props.insertOrderMapping();
    }

    render() {
        const pageSizeOptions = [
            5,
            10,
            50,
            100,
            getOrderMappingsResponseReduxProperty(this.props, "GET", "count", 0)
        ]
            .filter(item => item !== 0)
            .filter((item, pos, arr) => arr.indexOf(item) === pos)
            .sort((a, b) => a - b)
            .map(x => "" + x);

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
                    <Button className="right-margin" type="primary" icon="export" onClick={() => { this.handleDataExport() }}>
                        Eksportuj wszystkie
                    </Button>
                    <Button type="primary" icon="plus-circle" onClick={null}>
                        Dodaj mapowanie
                    </Button>
                </div >
                <div className="table-container">
                    <ReactTable
                        data={getOrderMappingsReduxProperty(this.props, "GET", "fetching", false) === true
                            ? []
                            : getOrderMappingsResponseReduxProperty(this.props, "GET", "data", [])}
                        columns={columns(this)}
                        noDataText={getOrderMappingsReduxProperty(this.props, "GET", "fetching", false) === true
                            ? "Wczytuję..."
                            : "Brak danych"}
                        ref={(r) => { this.reactTable = r; }}
                        filterable
                        filtered={this.state.filtered}
                        onFilteredChange={filtered => {
                            this.setState({ filtered, filteredCount: this.reactTable.getResolvedState().sortedData.length });
                        }}
                        showPagination={false}
                        minRows={0}
                        page={this.state.currentPage}
                        pageSize={this.state.pageSize}
                    />
                </div>
                <div className="pagination-container">
                    <Pagination
                        size="small"
                        total={Math.min(getOrderMappingsResponseReduxProperty(this.props, "GET", "count", 0), this.state.filteredCount)}
                        showQuickJumper
                        showSizeChanger
                        showTotal={() => {
                            return "Ilość pozycji: "
                                + (getOrderMappingsReduxProperty(this.props, "GET", "fetching", false) === true
                                    ? 0
                                    : Math.min(getOrderMappingsResponseReduxProperty(this.props, "GET", "count", 0), this.state.filteredCount));
                        }}
                        pageSize={this.state.pageSize}
                        onChange={(page, pageSize) => {
                            this.setState({
                                currentPage: page - 1,
                            });
                        }}
                        onShowSizeChange={(current, size) => {
                            this.setState({
                                pageSize: size
                            });
                        }}
                        pageSizeOptions={pageSizeOptions}
                    />
                    <Icon
                        className="pagination-refresh"
                        type="reload"
                        onClick={() => {
                            this.setState({
                                filteredCount: DEFAULT_FILTERED_COUNT
                            });
                            this.props.getAllOrders("W", 0); // TODO_TKB: fix this
                        }}
                        spin={getOrderMappingsReduxProperty(this.props, "GET", "fetching", false)}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    auth: state.auth,
    orderMappings: state.orderMappings,
});

export default connect(
    mapStateToProps,
    dispatch => ({
        getAllOrders: (status, release) => {
            dispatch(
                GetOrderByStatusByRelease(status, release))
        },
        insertOrderMapping: () => {
            dispatch(
                PostOrder(new RequestSetOrder.Builder()
                    .withData(new Order.Builder()
                        .withBscsAccount("10100215")  // TODO_TKB
                        .withSegmentCode("SOHO") // TODO_TKB
                        .build()
                    )
                    .build()
                )
            )
        }
    })
)(BscsToSegmentAndOrderMappings);