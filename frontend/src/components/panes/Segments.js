// @flow

import React, { Component } from 'react';
import ReactTable from 'react-table';
import { Button, Icon, Modal, Pagination } from 'antd';
import { EditableCell } from './common/EditableCell.js';
import { SelectableCell } from './common/SelectableCell.js';
import { renderDateTime } from '../../utils/Utils.js';
import './style.css';
import { connect } from "react-redux";
import { RequestSetSegment, Segment } from "../../api/api-models";
import { GetDictionarySegment, PostDictionarySegment } from "../../api/api-func";
import {
    cancelEditionOfSegmentPropertiesInRedux,
    deleteSegmentInRedux,
    editSegmentPropertiesInRedux,
    handleSegmentPostInRedux,
    unshiftSegmentInRedux
} from "../../actions/segmentsActions";
import { getSegmentsReduxProperty, getSegmentsResponseReduxProperty, SegmentsType } from '../../reducers/segments/segments-store-type.js';

const DEFAULT_CURRENT_PAGE = 0;
const DEFAULT_PAGE_SIZE = 30;
const DEFAULT_FILTERED_COUNT = 1000000;
const DEFAULT_SEGM_CATEGORY = "PRIV";

const columns = (that) => [
    {
        Header: 'Segment',
        accessor: 'csTradeRef',
        Cell: x => (
            <div>
                <EditableCell
                    rowId={x.index}
                    field_key='csTradeRef'
                    value={x.original.csTradeRef}
                    upperCased={true}
                    handleCellModification={(key, value) => { that.handleCellModification(x.index, key, value) }}
                />
            </div>
        )
    },
    {
        Header: 'Kategoria',
        accessor: 'segmCategory',
        Cell: x => (
            <div>
                <SelectableCell
                    rowId={x.index}
                    field_key='segmCategory'
                    value={x.original.segmCategory}
                    options={["PRIV", "BIZ"]}
                    handleCellModification={(key, value) => { that.handleCellModification(x.index, key, value) }}
                />
            </div>
        )
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
];

class Segments extends Component<{
    segments: SegmentsType
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
        this.props.getAllSegments();
    }

    componentDidUpdate(prevProps) {
        if (getSegmentsReduxProperty(this.props, "GET", "fail", true) !== true
            && getSegmentsReduxProperty(this.props, "GET", "fetching", true) === false
            && getSegmentsReduxProperty(prevProps, "GET", "fetching", false) === true) {
            this.setState({
                currentPage: DEFAULT_CURRENT_PAGE,
                pageSize: DEFAULT_PAGE_SIZE,
                filtered: []
            });
        }

        if (getSegmentsResponseReduxProperty(this.props, "GET", "count", -1)
            !== getSegmentsResponseReduxProperty(prevProps, "GET", "count", -1)) {
            this.setState({ filteredCount: this.reactTable.getResolvedState().sortedData.length });
        }

        if (getSegmentsReduxProperty(this.props, "POST", "fetching", true) === false
            && getSegmentsReduxProperty(prevProps, "POST", "fetching", false) === true) {
            if (getSegmentsReduxProperty(this.props, "POST", "fail", true) !== true) {
                this.props.handleSegmentPostInRedux(getSegmentsResponseReduxProperty(this.props, "POST", "data", {}).csTradeRef);
            }
            else {
                Modal.error({
                    title: 'Wystąpił błąd przy zapisie segmentu:',
                    content: getSegmentsResponseReduxProperty(this.props, "POST", "data", {}).error,
                });
            }
        }
    }

    handleRowAddition() {
        this.setState({
            currentPage: DEFAULT_CURRENT_PAGE
        });
        let segmentData = new Segment.Builder()
            .withCsTradeRef("")
            .withSegmCategory(DEFAULT_SEGM_CATEGORY)
            .withEntryDate(Date.now())
            .withEntryOwner("TODO_User3")
            .withUpdateDate(Date.now())
            .withUpdateOwner("TODO_User3")
            .build();
        segmentData.modified = true;
        segmentData.newRow = true;
        this.props.unshiftSegmentInRedux(segmentData);
    }

    handleCellModification(rowId, key, value) {
        let segmentData = new Segment();
        segmentData[key] = value;
        segmentData.updateDate = Date.now();
        segmentData.updateOwner = "TODO_User1";
        this.props.editSegmentPropertiesInRedux(rowId, segmentData);
    }

    handleSaveRowChanges(rowId, rowData) {
        if (getSegmentsResponseReduxProperty(this.props, "GET", "data", [])[rowId].newRow === true) {
            this.props.insertSegment(rowData.csTradeRef, rowData.segmCategory);
        }
        else {
            alert("PATCH request has NOT been handled yet!");
        }
    }

    handleCancelRowChanges(rowId) {
        if (getSegmentsResponseReduxProperty(this.props, "GET", "data", [])[rowId].newRow === true) {
            this.props.deleteSegmentInRedux(rowId);
        }
        else {
            this.props.cancelEditionOfSegmentPropertiesInRedux(rowId, Date.now(), "TODO_User2");
        }
    }

    render() {
        const pageSizeOptions = [
            2,
            5,
            10,
            50,
            100,
            getSegmentsResponseReduxProperty(this.props, "GET", "count", 0)
        ]
            .filter(item => item !== 0)
            .filter((item, pos, arr) => arr.indexOf(item) === pos)
            .sort((a, b) => a - b)
            .map(x => "" + x);
        const fc = this.state.filteredCount;

        return (
            <div className="segments">
                <div className="flex-end-row">
                    <Button
                        type="primary"
                        icon="plus-circle"
                        onClick={() => { this.handleRowAddition() }}
                    >Dodaj segment
                    </Button>
                </div >
                <div className="table-container">
                    <ReactTable
                        data={getSegmentsReduxProperty(this.props, "GET", "fetching", false) === true
                            ? []
                            : getSegmentsResponseReduxProperty(this.props, "GET", "data", [])}
                        columns={columns(this)}
                        noDataText={getSegmentsReduxProperty(this.props, "GET", "fetching", false) === true
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
                        total={Math.min(getSegmentsResponseReduxProperty(this.props, "GET", "count", 0), this.state.filteredCount)}
                        showQuickJumper
                        showSizeChanger
                        showTotal={() => {
                            return "Ilość pozycji: "
                                + (getSegmentsReduxProperty(this.props, "GET", "fetching", false) === true
                                    ? 0
                                    : Math.min(getSegmentsResponseReduxProperty(this.props, "GET", "count", 0), this.state.filteredCount));
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
                            this.props.getAllSegments();
                        }}
                        spin={getSegmentsReduxProperty(this.props, "GET", "fetching", false)}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    segments: state.segments,
});

export default connect(
    mapStateToProps,
    dispatch => ({
        getAllSegments: () => {
            dispatch(
                GetDictionarySegment()
            )
        },
        editSegmentPropertiesInRedux: (rowId, segmentData: Segment) => {
            dispatch(
                editSegmentPropertiesInRedux(rowId, segmentData)
            )
        },
        cancelEditionOfSegmentPropertiesInRedux: (rowId) => {
            dispatch(
                cancelEditionOfSegmentPropertiesInRedux(rowId)
            )
        },
        unshiftSegmentInRedux: (segmentData: Segment) => {
            dispatch(
                unshiftSegmentInRedux(segmentData)
            )
        },
        deleteSegmentInRedux: (rowId) => {
            dispatch(
                deleteSegmentInRedux(rowId)
            )
        },
        handleSegmentPostInRedux: (csTradeRef) => {
            dispatch(
                handleSegmentPostInRedux(csTradeRef)
            )
        },
        insertSegment: (csTradeRef, segmCategory) => {
            dispatch(
                PostDictionarySegment(new RequestSetSegment.Builder()
                    .withData(new Segment.Builder()
                        .withCsTradeRef(csTradeRef)
                        .withSegmCategory(segmCategory)
                        .build()
                    )
                    .build()
                )
            )
        }
    })
)(Segments);