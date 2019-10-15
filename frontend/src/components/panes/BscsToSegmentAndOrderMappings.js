import React, { Component } from 'react';
import ReactTable from 'react-table';
import { Button, DatePicker, Icon, Input, Modal, Pagination, Select } from 'antd';
import { EditableCell } from './common/EditableCell';
import { SelectableCell } from "./common/SelectableCell";
import { renderDateTime } from '../../utils/Utils';
import './style.css';
import { connect } from "react-redux";
import { RequestSetOrder, Order } from "../../api/api-models";
import { GetOrder, PostOrder } from "../../api/api-func";
import {
    cancelEditionOfOrderMappingPropertiesInRedux,
    deleteOrderMappingInRedux,
    editOrderMappingPropertiesInRedux,
    handleOrderMappingPostOrPatchInRedux,
    unshiftOrderMappingInRedux
} from "../../actions/orderMappingsActions";
import { AuthType } from "../../reducers/auth/auth-store-type";
import { getOrderMappingsReduxProperty, getOrderMappingsResponseReduxProperty } from '../../reducers/order-mappings/order-mappings-store-type';
import { getSegmentsResponseReduxProperty } from '../../reducers/segments/segments-store-type';
import { getBscsAccountsResponseReduxProperty } from '../../reducers/bscs-accounts/bscs-accounts-store-type';
import { getSapAccountOfiResponseReduxProperty } from '../../reducers/sap-account/sap-account-store-type';
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
                    dropdownStyle={{ width: "400px" }} // TODO_TKB: update this
                    value={x.original.bscsAccount}
                    options={
                        getBscsAccountsResponseReduxProperty(that.props, "GET", "data", [])
                            .map(item => item.account)
                            .sort()
                    }
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
                    options={
                        getSegmentsResponseReduxProperty(that.props, "GET", "data", [])
                            .filter(item => item.newRow !== true)
                            .map(item => item.modified !== undefined ? item.initial.csTradeRef : item.csTradeRef)
                            .sort()
                    }
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
                {x.original.newRow === true || x.original.modified === true ?
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
            filteredCount: DEFAULT_FILTERED_COUNT,
            validFromDateToGenerate: null
        };

        this.props.getAllOrders();
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

        if (getOrderMappingsReduxProperty(this.props, "POST", "fetching", true) === false
            && getOrderMappingsReduxProperty(prevProps, "POST", "fetching", false) === true) {
            let data = getOrderMappingsResponseReduxProperty(this.props, "POST", "data", {});

            if (getOrderMappingsReduxProperty(this.props, "POST", "fail", true) !== true) {
                this.props.handleOrderMappingPostOrPatchInRedux(data.bscsAccount, data.segmCategory);
            }
            else {
                Modal.error({
                    title: 'Wystąpił błąd przy zapisie mapowania:',
                    content: data.error,
                });
            }
        }

        if (getOrderMappingsReduxProperty(this.props, "PATCH", "fetching", true) === false
            && getOrderMappingsReduxProperty(prevProps, "PATCH", "fetching", false) === true) {
            let data = getOrderMappingsResponseReduxProperty(this.props, "POST", "data", {});

            if (getOrderMappingsReduxProperty(this.props, "PATCH", "fail", true) !== true) {
                this.props.handleOrderMappingPostOrPatchInRedux(data.bscsAccount, data.segmCategory);
            }
            else {
                Modal.error({
                    title: 'Wystąpił błąd przy aktualizacji danych mapowania:',
                    content: data.error,
                });
            }
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
        orderMappingData.newRow = true;
        this.props.unshiftOrderMappingInRedux(orderMappingData);
    }

    handleCellModification(rowId, key, value) {
        let orderMappingData = new Order();
        orderMappingData[key] = value;
        if (getOrderMappingsResponseReduxProperty(this.props, "GET", "data", [])[rowId].newRow !== true) {
            orderMappingData.updateDate = Date.now();
            orderMappingData.updateOwner = AuthType.getUserData(this.props.auth).user;
        }
        this.props.editOrderMappingPropertiesInRedux(rowId, orderMappingData);
    }

    handleSaveRowChanges(rowId, rowData) {
        if (getOrderMappingsResponseReduxProperty(this.props, "GET", "data", [])[rowId].newRow === true) {
            this.props.insertOrderMapping(rowData.bscsAccount, rowData.segmentCode, rowData.orderNumber, rowData.validFromDate);
        }
        else {
            alert("Not handled.");
        }
    }

    handleCancelRowChanges(rowId) {
        if (getOrderMappingsResponseReduxProperty(this.props, "GET", "data", [])[rowId].newRow === true) {
            this.props.deleteOrderMappingInRedux(rowId);
        }
        else {
            this.props.cancelEditionOfOrderMappingPropertiesInRedux(rowId);
        }
    }

    handleDataExport() {
        alert("Not handled.");
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
                                {
                                    getSapAccountOfiResponseReduxProperty(this.props, "GET", "data", [])
                                        .map(item => { return <Option key={item.sapOfiAccount} value={item.sapOfiAccount}> {item.sapOfiAccount} </Option> })
                                }
                            </Select>
                            <MonthPicker
                                format="YYYY-MM-01"
                                value={this.state.validFromDateToGenerate}
                                placeholder="Wybierz miesiąc"
                                onChange={(date, dateString) => { this.setState({ validFromDateToGenerate: date }) }}
                            />
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
                            this.props.getAllOrders();
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
    segments: state.segments,
    sapAccountOfi: state.sapAccountOfi
});

export default connect(
    mapStateToProps,
    dispatch => ({
        getAllOrders: () => {
            dispatch(
                GetOrder()
            )
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
        deleteOrderMappingInRedux: (rowId) => {
            dispatch(
                deleteOrderMappingInRedux(rowId)
            )
        },
        handleOrderMappingPostOrPatchInRedux: (bscsAccount, segmCategory) => {
            dispatch(
                handleOrderMappingPostOrPatchInRedux(bscsAccount, segmCategory)
            )
        },
        insertOrderMapping: (bscsAccount, segmentCode, orderNumber, validFromDate) => {
            dispatch(
                PostOrder(new RequestSetOrder.Builder()
                    .withData(new Order.Builder()
                        .withBscsAccount(bscsAccount)
                        .withSegmentCode(segmentCode)
                        .withOrderNumber(orderNumber)
                        .withValidFromDate(validFromDate)
                        .build()
                    )
                    .build()
                )
            )
        }
    })
)(BscsToSegmentAndOrderMappings);