export const EDIT_SEGMENT_PROPERTIES_IN_REDUX = "editSegmentPropertiesInRedux";
export const CANCEL_EDITION_OF_SEGMENT_PROPERTIES_IN_REDUX = "cancelEditionOfSegmentPropertiesInRedux";
export const UNSHIFT_SEGMENT_IN_REDUX = "unshiftSegmentInRedux";
export const DELETE_SEGMENT_IN_REDUX = "deleteSegmentInRedux";
export const HANDLE_SEGMENT_POST_IN_REDUX = "handleSegmentPostInRedux";

export const editSegmentPropertiesInRedux = (rowId, segmentData: Segment) => ({
    type: EDIT_SEGMENT_PROPERTIES_IN_REDUX,
    rowId: rowId,
    segmentData: segmentData
});

export const cancelEditionOfSegmentPropertiesInRedux = (rowId) => ({
    type: CANCEL_EDITION_OF_SEGMENT_PROPERTIES_IN_REDUX,
    rowId: rowId
});

export const unshiftSegmentInRedux = (segmentData: Segment) => ({
    type: UNSHIFT_SEGMENT_IN_REDUX,
    segmentData: segmentData
});

export const deleteSegmentInRedux = (rowId) => ({
    type: DELETE_SEGMENT_IN_REDUX,
    rowId: rowId
})

export const handleSegmentPostInRedux = (csTradeRef) => ({
    type: HANDLE_SEGMENT_POST_IN_REDUX,
    csTradeRef: csTradeRef
})