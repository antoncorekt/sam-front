// @flow

import React, { Component } from 'react';
import ReactTable from 'react-table';
import { Button, Icon, Pagination } from 'antd';
import { EditableCell } from './common/EditableCell.js';
import { renderDateTime } from '../../utils/Utils.js';
import './style.css';
import { connect } from "react-redux";
import { RequestSetSegment, Segment } from "../../api/api-models";
import { GetDictionarySegment, PostDictionarySegment } from "../../api/api-func";
import { cancelEditionOfSegmentPropertiesInRedux, editSegmentPropertiesInRedux } from "../../actions/segmentsActions";

const DEFAULT_CURRENT_PAGE = 0;
const DEFAULT_PAGE_SIZE = 10;

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
                <EditableCell
                    rowId={x.index}
                    field_key='segmCategory'
                    value={x.original.segmCategory}
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
                            onClick={() => that.handleSaveRowChanges(x.index)}
                        >Zapisz zmiany</Button>
                        <Button
                            className="cancel-button"
                            size="small"
                            onClick={() => that.handleCancelRowChanges(x.index)}
                        >Anuluj zmiany</Button>
                    </div> : null
                }
            </div>
        ),
    }
];

class Segments extends Component<{
    segments: ActionResponseData<ResultSetSegments, ActionRequestData<null, null>>
}> {

    constructor(props) {
        super(props);

        this.reactTable = React.createRef();
        this.state = {
            currentPage: DEFAULT_CURRENT_PAGE,
            pageSize: DEFAULT_PAGE_SIZE,
            filtered: []
        };
        this.props.getAllSegments();
    }

    componentDidUpdate(prevProps) {
        if (this.props.segments !== undefined
            && this.props.segments.fail !== undefined
            && this.props.segments.fail !== true
            && this.props.segments.fetching === false
            && prevProps.segments.fetching === true) {
            this.setState({
                currentPage: DEFAULT_CURRENT_PAGE,
                pageSize: DEFAULT_PAGE_SIZE,
                filtered: []
            });
        }
    }

    getSegmentsData(property, negativeResult) {
        return this.props.segments !== undefined
            && this.props.segments.fail === false
            && this.props.segments.response !== undefined
            && this.props.segments.response[property] !== undefined
            ?
            this.props.segments.response[property]
            :
            negativeResult;
    }

    handleCellModification(rowId, key, value) {
        let segmentData = new Segment();
        segmentData[key] = value;
        segmentData.updateDate = Date.now();
        segmentData.updateOwner = "TODO_User1";
        this.props.editSegmentPropertiesInRedux(rowId, segmentData);
    }

    handleSaveRowChanges(rowId) {
        alert("Not handled yet.");
    }

    handleCancelRowChanges(rowId) {
        this.props.cancelEditionOfSegmentPropertiesInRedux(rowId, Date.now(), "TODO_User2");
    }

    render() {
        const pageSizeOptions = [
            5,
            10,
            50,
            100,
            this.props.segments !== undefined && this.props.segments.response !== undefined
                ? this.props.segments.response.count
                : 0
        ]
            .filter(item => item !== 0)
            .filter((item, pos, arr) => arr.indexOf(item) === pos)
            .sort((a, b) => a - b)
            .map(x => "" + x);

        return (
            <div className="segments">
                <div className="flex-end-row">
                    <Button type="primary" icon="plus-circle" onClick={() => { }}>
                        Dodaj segment
                    </Button>
                </div >
                <div className="table-container">
                    <ReactTable
                        data={this.props.segments.fetching ? [] : this.getSegmentsData("data", [])}
                        columns={columns(this)}
                        noDataText={this.props.segments ? (this.props.segments.fetching ? "Wczytuję..." : "Brak danych") : ""}
                        ref={(r) => { this.reactTable = r; }} // TODO: fix pagination after filtering (using this ref)
                        filterable
                        filtered={this.state.filtered}
                        onFilteredChange={filtered => {
                            // console.log(this.reactTable.getResolvedState().sortedData);
                            this.setState({ filtered });
                        }}
                        showPagination={false}
                        minRows={0}
                        page={this.state.currentPage}
                        pageSize={Math.min(this.getSegmentsData("count", 0), this.state.pageSize)}
                    />
                </div>
                <div className="pagination-container">
                    <Pagination
                        size="small"
                        total={this.getSegmentsData("count", 0)}
                        showQuickJumper
                        showSizeChanger
                        showTotal={() => {
                            return "Ilość pozycji: " + (this.props.segments.fetching ? 0 : this.getSegmentsData("count", 0));
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
                            this.props.getAllSegments();
                            this.rowModification(null, "unmark-all");
                        }}
                        spin={this.props.segments.fetching}
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
        // insertSegments: () => {
        //     dispatch(
        //         PostDictionarySegment(new RequestSetSegment.Builder()
        //             .withData(new Segment.Builder()
        //                 .withCsType(99)
        //                 .withCsTradefer("tradeRef")
        //                 .build()
        //             )
        //             .build()
        //         )
        //     )
        // }
    })
)(Segments);