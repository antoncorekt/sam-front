export const EDIT_SEGMENT_PROPERTIES_IN_REDUX = "editSegmentPropertiesInRedux";
export const CANCEL_EDITION_OF_SEGMENT_PROPERTIES_IN_REDUX = "cancelEditionOfSegmentPropertiesInRedux";

export const editSegmentPropertiesInRedux = (rowId, segmentData: Segment) => ({
    type: EDIT_SEGMENT_PROPERTIES_IN_REDUX,
    rowId: rowId,
    segmentData: segmentData
});

export const cancelEditionOfSegmentPropertiesInRedux = (rowId) => ({
    type: CANCEL_EDITION_OF_SEGMENT_PROPERTIES_IN_REDUX,
    rowId: rowId
});