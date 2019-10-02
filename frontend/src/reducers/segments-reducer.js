export const SegmentPropertiesInReduxHandler = () => {
    return {
        editSegmentPropertiesInRedux: (state, action) => {
            return {
                ...state,
                response: {
                    ...state.response,
                    data: state.response.data.map((content, i) => i === action.rowId
                        ? {
                            ...content,
                            csTradeRef: action.segmentData.csTradeRef !== undefined
                                ? action.segmentData.csTradeRef : content.csTradeRef,
                            segmCategory: action.segmentData.segmCategory !== undefined
                                ? action.segmentData.segmCategory : content.segmCategory,
                            updateDate: action.segmentData.updateDate,
                            updateOwner: action.segmentData.updateOwner,
                            originalCsTradeRef: action.segmentData.csTradeRef !== undefined && content.originalCsTradeRef === undefined
                                ? content.csTradeRef : content.originalCsTradeRef,
                            originalSegmCategory: action.segmentData.segmCategory !== undefined && content.originalSegmCategory === undefined
                                ? content.segmCategory : content.originalSegmCategory,
                            originalUpdateDate: content.originalUpdateDate === undefined ? content.updateDate : content.originalUpdateDate,
                            originalUpdateOwner: content.originalUpdateOwner === undefined ? content.updateOwner : content.originalUpdateOwner,
                            modified: true
                        }
                        : content)
                }
            };
        },
        cancelEditionOfSegmentPropertiesInRedux: (state, action) => {
            return {
                ...state,
                response: {
                    ...state.response,
                    data: state.response.data.map((content, i) => i === action.rowId
                        ? {
                            ...content,
                            csTradeRef: content.originalCsTradeRef !== undefined ? content.originalCsTradeRef : content.csTradeRef,
                            segmCategory: content.originalSegmCategory !== undefined ? content.originalSegmCategory : content.segmCategory,
                            updateDate: content.originalUpdateDate,
                            updateOwner: content.originalUpdateOwner,
                            originalCsTradeRef: undefined,
                            originalSegmCategory: undefined,
                            originalUpdateDate: undefined,
                            originalUpdateOwner: undefined,
                            modified: false
                        }
                        : content)
                }
            };
        }
    }
};