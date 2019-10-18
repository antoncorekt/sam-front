import React, { Component } from 'react';
import ReactTable from 'react-table';
import { Button, DatePicker, Icon, Input, Pagination, Select } from 'antd';
import { EditableCell } from './common/EditableCell';
import { SelectableCell } from "./common/SelectableCell";
import { renderDateTime } from '../../utils/Utils';
import './style.css';
import { connect } from "react-redux";
import { RequestSetOrder, Order } from "../../api/api-models";
import {
    DeleteOrderByStatusByReleaseByBscsAccountBySegment,
    GetOrder,
    PatchOrderByStatusByReleaseByBscsAccountBySegment,
    PostOrder
} from "../../api/api-func";
import {
    cancelEditionOfOrderMappingPropertiesInRedux,
    deleteOrderMappingInRedux,
    editOrderMappingPropertiesInRedux,
    unshiftOrderMappingInRedux
} from "../../actions/orderMappingsActions";
import { AuthType } from "../../reducers/auth/auth-store-type";
import { getOrderMappingsReduxProperty, getOrderMappingsResponseReduxProperty, handleApiError } from '../../reducers/order-mappings/order-mappings-store-type';
import { getSegmentsResponseReduxProperty } from '../../reducers/segments/segments-store-type';
import moment from 'moment';

const DEFAULT_CURRENT_PAGE = 0;
const DEFAULT_PAGE_SIZE = 30;
const DEFAULT_FILTERED_COUNT = 1000000;

const InputGroup = Input.Group;
const { MonthPicker } = DatePicker;

const columns = (that) => [
    {
        width: 26,
        filterable: false,
        Cell: x =>
            <Icon
                onClick={() => that.handleRowDeletion(x.index, x.original)}
                style={{ cursor: "pointer" }}
                type="delete"
            />,
    },
    {
        Header: 'Konto BSCS',
        accessor: Order.ObjectProps.bscsAccount,
        Cell: x => (
            <div>
                <SelectableCell
                    field_key='bscsAccount'
                    dropdownStyle={{ width: "480px" }}
                    value={x.original.bscsAccount}
                    optionsJSX={that.props.bscsAccountsOptionsJSX}
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
                    field_key='segmentCode'
                    value={x.original.segmentCode}
                    options={
                        getSegmentsResponseReduxProperty(that.props, "GET", "data", [])
                            .filter(item => item.newRow !== true)
                            .map(item => item.modified === true ? item.initial.csTradeRef : item.csTradeRef)
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
                    format="YYYY-MM-DD"
                    value={x.original.validFromDate !== null && x.original.validFromDate !== undefined ? moment(x.original.validFromDate) : null}
                    placeholder="Wybierz miesiąc"
                    onChange={(date, dateString) => {
                        that.handleCellModification(x.index, "validFromDate", date === null
                            ? null
                            : moment(date).startOf('month').format('YYYY-MM-DDTHH:mm:ssZ').toString());
                        moment(date).startOf('month').format('YYYY-MM-DDTHH:mm:ssZ').toString()
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
            rowGeneration: {
                selectMode: false,
                bscsAccount: undefined,
                validFromDate: null
            }
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

        handleApiError("POST", prevProps, this.props);
        handleApiError("PATCH", prevProps, this.props);
        handleApiError("DELETE", prevProps, this.props);
    }

    handleRowDeletion(rowId, rowData) {
        if (getOrderMappingsResponseReduxProperty(this.props, "GET", "data", [])[rowId].newRow === true) {
            this.props.deleteOrderMappingInRedux(rowId);
        }
        else {
            this.props.deleteOrderMapping(
                rowData.status,
                rowData.releaseId,
                rowData.initial !== undefined ? rowData.initial.bscsAccount : rowData.bscsAccount,
                rowData.initial !== undefined ? rowData.initial.segmentCode : rowData.segmentCode
            );
        }
    }

    handleRowAddition() {
        this.setState({
            currentPage: DEFAULT_CURRENT_PAGE
        });
        let orderMappingData = new Order.Builder()
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
        let orderMappingData = new Order();
        orderMappingData.bscsAccount = rowData.bscsAccount;
        orderMappingData.segmentCode = rowData.segmentCode;
        orderMappingData.orderNumber = rowData.orderNumber;
        orderMappingData.validFromDate = rowData.validFromDate;
        if (getOrderMappingsResponseReduxProperty(this.props, "GET", "data", [])[rowId].newRow === true) {
            this.props.insertOrderMapping(orderMappingData);
        }
        else {
            this.props.patchOrderMapping(
                rowData.status,
                rowData.releaseId,
                rowData.initial.bscsAccount,
                rowData.initial.segmentCode,
                orderMappingData
            );
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

    handleRowGeneration() {
        let segmentsToSkip = getOrderMappingsResponseReduxProperty(this.props, "GET", "data", [])
            .filter(item => item.bscsAccount === this.state.rowGeneration.bscsAccount)
            .map(item => item.segmentCode);

        getSegmentsResponseReduxProperty(this.props, "GET", "data", [])
            .filter(item => item.newRow !== true)
            .map(item => item.modified === true ? item.initial.csTradeRef : item.csTradeRef)
            .filter(item => !segmentsToSkip.includes(item))
            .reverse()
            .map(item => {
                let orderMappingData = new Order.Builder()
                    .withBscsAccount(this.state.rowGeneration.bscsAccount)
                    .withSegmentCode(item)
                    .withValidFromDate(this.state.rowGeneration.validFromDate)
                    .withStatus("W")
                    .withEntryDate(Date.now())
                    .withEntryOwner(AuthType.getUserData(this.props.auth).user)
                    .build();
                orderMappingData.newRow = true;
                this.props.unshiftOrderMappingInRedux(orderMappingData);
            });

        this.setState({
            currentPage: DEFAULT_CURRENT_PAGE,
            filtered: [],
            filteredCount: DEFAULT_FILTERED_COUNT,
            rowGeneration: {
                bscsAccount: undefined,
                validFromDate: null
            }
        });
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
                            {
                                this.state.rowGeneration.selectMode ?
                                    <Select
                                        className="row-generation-select"
                                        dropdownMatchSelectWidth={false}
                                        dropdownStyle={{ width: "480px" }}
                                        showSearch
                                        defaultOpen
                                        placeholder={this.state.rowGeneration.bscsAccount !== undefined
                                            ? this.state.rowGeneration.bscsAccount
                                            : "Wybierz konto BSCS"}
                                        onChange={(value, option) => {
                                            this.setState(state => ({
                                                rowGeneration: {
                                                    ...state.rowGeneration,
                                                    bscsAccount: value,
                                                    selectMode: !state.rowGeneration.selectMode
                                                }
                                            }))
                                        }}
                                        onBlur={() => {
                                            this.setState(state => ({
                                                rowGeneration: {
                                                    ...state.rowGeneration,
                                                    selectMode: !state.rowGeneration.selectMode
                                                }
                                            }))
                                        }}
                                    >
                                        {this.props.bscsAccountsOptionsJSX}
                                    </Select>
                                    :
                                    <Input
                                        className="row-generation-input"
                                        placeholder="Wybierz konto BSCS"
                                        value={this.state.rowGeneration.bscsAccount}
                                        onClick={() => this.setState((state, props) => ({
                                            ...state,
                                            rowGeneration: {
                                                ...state.rowGeneration,
                                                selectMode: !state.rowGeneration.selectMode
                                            }
                                        }))
                                        }
                                    />
                            }
                            <MonthPicker
                                format="YYYY-MM-DD"
                                value={this.state.rowGeneration.validFromDate !== null && this.state.rowGeneration.validFromDate !== undefined
                                    ? moment(this.state.rowGeneration.validFromDate)
                                    : null
                                }
                                placeholder="Wybierz miesiąc"
                                onChange={(date, dateString) => {
                                    this.setState((state, props) => ({
                                        ...state,
                                        rowGeneration: {
                                            ...state.rowGeneration,
                                            validFromDate: date === null
                                                ? null
                                                : moment(date).startOf('month').format('YYYY-MM-DDTHH:mm:ssZ').toString()
                                        }
                                    }))
                                }}
                            />
                            <Button
                                type="primary"
                                disabled={this.state.rowGeneration.bscsAccount === undefined}
                                onClick={() => this.handleRowGeneration()}
                            >
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
                        current={this.state.currentPage + 1}
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
                                filteredCount: DEFAULT_FILTERED_COUNT,
                                rowGeneration: {
                                    selectMode: false,
                                    bscsAccount: undefined,
                                    validFromDate: null
                                }
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

const mapStateToProps = (state: MainStateType) => ({
    auth: state.auth,
    orderMappings: state.orderMappings,
    segments: state.segments
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
        insertOrderMapping: (orderMappingData: Order) => {
            dispatch(
                PostOrder(new RequestSetOrder.Builder()
                    .withData(orderMappingData)
                    .build()
                )
            )
        },
        patchOrderMapping: (status, releaseId, bscsAccount, segmentCode, orderMappingData: Order) => {
            dispatch(
                PatchOrderByStatusByReleaseByBscsAccountBySegment(status, releaseId, bscsAccount, segmentCode,
                    new RequestSetOrder.Builder()
                        .withData(orderMappingData)
                        .build()
                )
            )
        },
        deleteOrderMapping: (status, releaseId, bscsAccount, segmentCode) => {
            dispatch(
                DeleteOrderByStatusByReleaseByBscsAccountBySegment(status, releaseId, bscsAccount, segmentCode)
            )
        }
    })
)(BscsToSegmentAndOrderMappings);