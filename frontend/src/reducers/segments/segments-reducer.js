export const GetDictionarySegmentHandler = () => {
    return {
        GetDictionarySegmentRequest: (state: SegmentsType, action: ActionRequestData<RequestSetSegment, null>) => {
            return { ...state, GET: action };
        },
        GetDictionarySegmentSuccess: (state: SegmentsType, action: ActionResponseData<ResultSetSegments, ActionRequestData<RequestSetSegment, null>>) => {
            action.response.data.sort(function (a, b) {
                if (a.csTradeRef > b.csTradeRef) {
                    return 1;
                }
                else if (a.csTradeRef === b.csTradeRef) {
                    return 0;
                }
                else
                    return -1;
            });
            return { ...state, GET: action };
        },
        GetDictionarySegmentFail: (state: SegmentsType, action: ActionResponseData<ResultSetError, ActionRequestData<RequestSetSegment, null>>) => {
            return { ...state, GET: action };
        },
    }
};

export const PostDictionarySegmentHandler = () => {
    return {
        PostDictionarySegmentRequest: (state: SegmentsType, action: ActionRequestData<RequestSetSegment, null>) => {
            return { ...state, POST: action };
        },
        PostDictionarySegmentSuccess: (state: SegmentsType, action: ActionResponseData<ResultSetSegment, ActionRequestData<RequestSetSegment, null>>) => {
            return { ...state, POST: action };
        },
        PostDictionarySegmentFail: (state: SegmentsType, action: ActionResponseData<ResultSetError, ActionRequestData<RequestSetSegment, null>>) => {
            return { ...state, POST: action };
        },
    }
};

export const SegmentPropertiesInReduxHandler = () => {
    return {
        editSegmentPropertiesInRedux: (state, action) => {
            return {
                ...state,
                GET: {
                    ...state.GET,
                    response: {
                        ...state.GET.response,
                        data: state.GET.response.data.map((content, index) => index === action.rowId
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

                }
            };
        },
        cancelEditionOfSegmentPropertiesInRedux: (state, action) => {
            return {
                ...state,
                GET: {
                    ...state.GET,
                    response: {
                        ...state.GET.response,
                        data: state.GET.response.data.map((content, index) => index === action.rowId
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
                }
            };
        },
        unshiftSegmentInRedux: (state, action) => {
            return {
                ...state,
                GET: {
                    ...state.GET,
                    response: {
                        ...state.GET.response,
                        data: [action.segmentData, ...state.GET.response.data],
                        count: state.GET.response.count + 1
                    }
                }
            };
        },
        deleteSegmentInRedux: (state, action) => {
            return {
                ...state,
                GET: {
                    ...state.GET,
                    response: {
                        ...state.GET.response,
                        data: state.GET.response.data.filter((item, index) => index !== action.rowId),
                        count: state.GET.response.count - 1
                    }
                }
            };
        },
        handleSegmentPostInRedux: (state, action) => {
            return {
                ...state,
                GET: {
                    ...state.GET,
                    response: {
                        ...state.GET.response,
                        data: state.GET.response.data.map((content, index) => content.csTradeRef === action.csTradeRef
                            ? {
                                ...content,
                                originalCsTradeRef: undefined,
                                originalSegmCategory: undefined,
                                originalUpdateDate: undefined,
                                originalUpdateOwner: undefined,
                                modified: false,
                                newRow: undefined
                            }
                            : content)
                    }
                }
            };
        }
    }
};