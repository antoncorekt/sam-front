export const UPDATE_SEGMENT_PROPERTIES_IN_REDUX = "updateSegmentPropertiesInRedux";

export const updateSegmentPropertiesInRedux = (segmentData: Segment, rowId) => ({
    type: UPDATE_SEGMENT_PROPERTIES_IN_REDUX,
    segmentData: segmentData,
    rowId: rowId
});