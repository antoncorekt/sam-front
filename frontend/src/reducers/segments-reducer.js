export const UpdateSegmentPropertiesInReduxHandler = () => {
    return {
        updateSegmentPropertiesInRedux: (state, action) => {
            return {
                ...state,
                response: {
                    ...state.response,
                    data: state.response.data.map((content, i) => i === action.rowId
                        ? {
                            ...content,
                            csTradeRef: action.segmentData.csTradeRef !== undefined ? action.segmentData.csTradeRef : content.csTradeRef,
                            segmCategory: action.segmentData.segmCategory !== undefined ? action.segmentData.segmCategory : content.segmCategory
                        }
                        : content)
                }
            };
        }
    }
};