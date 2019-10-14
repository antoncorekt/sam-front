import React, { Component } from 'react';
import ReactTable from 'react-table';
import { Button, DatePicker, Icon, Input, Pagination, Select } from 'antd';
import { EditableCell } from './common/EditableCell';
import { SelectableCell } from "./common/SelectableCell";
import { renderDateTime } from '../../utils/Utils';
import './style.css';
import { connect } from "react-redux";
import { GetOrderByStatusByRelease } from "../../api/api-func";
import {
    cancelEditionOfOrderMappingPropertiesInRedux,
    editOrderMappingPropertiesInRedux,
    unshiftOrderMappingInRedux
} from "../../actions/orderMappingsActions";
import { AuthType } from "../../reducers/auth/auth-store-type";
import { getOrderMappingsReduxProperty, getOrderMappingsResponseReduxProperty } from '../../reducers/order-mappings/order-mappings-store-type';
import { getSegmentsResponseReduxProperty } from '../../reducers/segments/segments-store-type';
import { getbscsAccountsResponseReduxProperty } from '../../reducers/bscs-accounts/bscs-accounts-store-type';
import { Order } from '../../api/api-models.js';
import moment from 'moment';

const DEFAULT_CURRENT_PAGE = 0;
const DEFAULT_PAGE_SIZE = 30;
const DEFAULT_FILTERED_COUNT = 1000000;

const InputGroup = Input.Group;
const { Option } = Select;
const { MonthPicker } = DatePicker;

const columns = (that) => [
    {
        Cell: item => <Icon onClick={() => null} style={{ cursor: "pointer" }} type="delete" />,
        width: 26,
        filterable: false
    },
    {
        Header: 'Konto BSCS',
        accessor: Order.ObjectProps.bscsAccount,
        Cell: x => (
            <div>
                <SelectableCell
                    rowId={x.index}
                    field_key='bscsAccount'
                    value={x.original.bscsAccount}
                    options={getbscsAccountsResponseReduxProperty(that.props, "GET", "data", []).map(s => s.account).sort()}
                    handleCellModification={(key, value) => { that.handleCellModification(x.index, key, value) }}
                />
            </div>
        )
    },
    {
        Header: 'Segment',
        accessor: Order.ObjectProps.segmentCode,
        Cell: x => (
            <div>
                <SelectableCell
                    rowId={x.index}
                    field_key='segmentCode'
                    value={x.original.segmentCode}
                    options={getSegmentsResponseReduxProperty(that.props, "GET", "data", []).map(s => s.csTradeRef).sort()}
                    handleCellModification={(key, value) => { that.handleCellModification(x.index, key, value) }}
                />
            </div>
        )
    },
    {
        Header: 'Nr zamówienia',
        accessor: Order.ObjectProps.orderNumber,
        Cell: x => (
            <div>
                <EditableCell
                    rowId={x.index}
                    field_key='orderNumber'
                    value={x.original.orderNumber}
                    handleCellModification={(key, value) => { that.handleCellModification(x.index, key, value) }}
                />
            </div>
        )
    },
    {
        Header: 'Ważne od',
        accessor: Order.ObjectProps.validFromDate,
        width: 172,
        Cell: x => (
            <div>
                <MonthPicker
                    className="month-picker"
                    size="small"
                    format="YYYY-MM-01"
                    value={x.original.validFromDate !== null && x.original.validFromDate !== undefined ? moment(x.original.validFromDate) : null}
                    placeholder="Wybierz miesiąc"
                    onChange={(date, dateString) => {
                        that.handleCellModification(x.index, "validFromDate", date);
                    }}
                />
            </div>
        )
    },
    {
        Header: 'Status',
        accessor: Order.ObjectProps.status,
        Cell: row => <div className="centered-text">{row.value}</div>
    },
    {
        Header: 'Data utworzenia',
        accessor: Order.ObjectProps.entryDate,
        Cell: x => (renderDateTime(x.original.entryDate))
    },
    {
        Header: 'Utworzył',
        accessor: Order.ObjectProps.entryOwner
    },
    {
        Header: 'Data modyfikacji',
        accessor: Order.ObjectProps.updateDate,
        Cell: x => (renderDateTime(x.original.updateDate))
    },
    {
        Header: 'Zmodyfikował',
        accessor: Order.ObjectProps.updateOwner
    },
    {
        Header: 'Akcja',
        filterable: false,
        sortable: false,
        Cell: x => (
            <div>
                {x.original.modified === true ?
                    <div>
                        <Button
                            className="save-button"
                            size="small"
                            onClick={() => that.handleSaveRowChanges(x.index, x.original)}
                        >Zapisz</Button>
                        <Button
                            className="cancel-button"
                            size="small"
                            onClick={() => that.handleCancelRowChanges(x.index)}
                        >Anuluj</Button>
                    </div> : null
                }
            </div>
        ),
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
        }

        if (getOrderMappingsResponseReduxProperty(this.props, "GET", "count", -1)
            !== getOrderMappingsResponseReduxProperty(prevProps, "GET", "count", -1)) {
            this.setState({ filteredCount: this.reactTable.getResolvedState().sortedData.length });
        }
    }

    handleRowAddition() {
        this.setState({
            currentPage: DEFAULT_CURRENT_PAGE
        });
        let orderMappingData = new Order.Builder()
            .withBscsAccount("")
            .withSegmentCode("")
            .withStatus("W")
            .withEntryDate(Date.now())
            .withEntryOwner(AuthType.getUserData(this.props.auth).user)
            .build();
        orderMappingData.modified = true;
        orderMappingData.newRow = true;
        this.props.unshiftOrderMappingInRedux(orderMappingData);
    }

    handleCellModification(rowId, key, value) {
        let orderMappingData = new Order();
        orderMappingData[key] = value;
        orderMappingData.updateDate = Date.now();
        orderMappingData.updateOwner = AuthType.getUserData(this.props.auth).user;
        this.props.editOrderMappingPropertiesInRedux(rowId, orderMappingData);
    }

    handleSaveRowChanges(rowId, rowData) {
        if (getOrderMappingsResponseReduxProperty(this.props, "GET", "data", [])[rowId].newRow === true) {
            alert("Not handled.");
        }
        else {
            alert("Not handled.");
        }
    }

    handleCancelRowChanges(rowId) {
        if (getOrderMappingsResponseReduxProperty(this.props, "GET", "data", [])[rowId].newRow === true) {
            alert("Not handled.");
        }
        else {
            this.props.cancelEditionOfOrderMappingPropertiesInRedux(rowId);
        }
    }

    handleDataExport() {
        alert("Not handled.");
        this.getSegmentOptions();
    }

    getSegmentOptions() {
        let segments = getSegmentsResponseReduxProperty(this.props, "GET", "data", []).map(s => s.csTradeRef + " (" + s.segmCategory + ")");
        console.log(segments);
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
            <div className="bscs-to-segment-and-order-mappings">
                <div className="flex-end-row">
                    <div className="right-margin">
                        <InputGroup compact>
                            <Select className="row-generation-select" placeholder="Wybierz konto SAP OFI">
                                <Option value="1">Konto SAP OFI 1</Option>
                                <Option value="2">Konto SAP OFI 2</Option>
                            </Select>
                            <Button type="primary" onClick={null}>
                                Generuj wiersze
                            </Button>
                        </InputGroup>
                    </div>
                    <Button
                        className="right-margin"
                        type="primary"
                        icon="export"
                        onClick={() => { this.handleDataExport() }}
                    >Eksportuj wszystkie
                    </Button>
                    <Button
                        type="primary"
                        icon="plus-circle"
                        onClick={() => { this.handleRowAddition() }}
                    >Dodaj mapowanie
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
    bscsAccounts: state.bscsAccounts,
    orderMappings: state.orderMappings,
    segments: state.segments
});

export default connect(
    mapStateToProps,
    dispatch => ({
        getAllOrders: (status, release) => {
            dispatch(
                GetOrderByStatusByRelease(status, release))
        },
        editOrderMappingPropertiesInRedux: (rowId, orderMappingData: Order) => {
            dispatch(
                editOrderMappingPropertiesInRedux(rowId, orderMappingData)
            )
        },
        cancelEditionOfOrderMappingPropertiesInRedux: (rowId) => {
            dispatch(
                cancelEditionOfOrderMappingPropertiesInRedux(rowId)
            )
        },
        unshiftOrderMappingInRedux: (orderMappingData: Order) => {
            dispatch(
                unshiftOrderMappingInRedux(orderMappingData)
            )
        },
    })
)(BscsToSegmentAndOrderMappings);