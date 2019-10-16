export const GetDictionarySegmentHandler = () => {
    return {
        GetDictionarySegmentRequest: (state: SegmentsType, action: ActionRequestData<RequestSetSegment, null>) => {
            return { ...state, GET: action };
        },
        GetDictionarySegmentSuccess: (state: SegmentsType, action: ActionResponseData<ResultSetSegments, ActionRequestData<RequestSetSegment, null>>) => {
            action.response.data.sort((a, b) => {
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
            return {
                ...state,
                GET: {
                    ...state.GET,
                    response: {
                        ...state.GET.response,
                        data: state.GET.response.data.map((content, index) => content.csTradeRef === action.response.data.csTradeRef
                            ? {
                                ...content,
                                entryDate: action.response.data.entryDate,
                                entryOwner: action.response.data.entryOwner,
                                initial: undefined,
                                modified: undefined,
                                newRow: undefined
                            }
                            : content)
                    }
                },
                POST: action
            };
        },
        PostDictionarySegmentFail: (state: SegmentsType, action: ActionResponseData<ResultSetError, ActionRequestData<RequestSetSegment, null>>) => {
            return { ...state, POST: action };
        },
    }
};

export const PatchDictionarySegmentByIdHandler = () => {
    return {
        PatchDictionarySegmentByIdRequest: (state: SegmentsType, action: ActionRequestData<RequestSetSegment, PatchDictionarySegmentByIdQueryParams>) => {
            return { ...state, PATCH: action };
        },
        PatchDictionarySegmentByIdSuccess: (state: SegmentsType, action: ActionResponseData<ResultSetCount, ActionRequestData<RequestSetSegment, PatchDictionarySegmentByIdQueryParams>>) => {
            return { ...state, PATCH: action };
        },
        PatchDictionarySegmentByIdFail: (state: SegmentsType, action: ActionResponseData<ResultSetError, ActionRequestData<RequestSetSegment, PatchDictionarySegmentByIdQueryParams>>) => {
            return { ...state, PATCH: action };
        },
    }
};

export const DeleteDictionarySegmentByIdHandler = () => {
    return {
        DeleteDictionarySegmentByIdRequest: (state: SegmentsType, action: ActionRequestData<null, DeleteDictionarySegmentByIdQueryParams>) => {
            return { ...state, DELETE: action };
        },
        DeleteDictionarySegmentByIdSuccess: (state: SegmentsType, action: ActionResponseData<ResultSetCount, ActionRequestData<null, DeleteDictionarySegmentByIdQueryParams>>) => {
            return { ...state, DELETE: action };
        },
        DeleteDictionarySegmentByIdFail: (state: SegmentsType, action: ActionResponseData<ResultSetError, ActionRequestData<null, DeleteDictionarySegmentByIdQueryParams>>) => {
            return { ...state, DELETE: action };
        },
    }
};

export const SegmentPropertiesInReduxHandler = () => {
    function getValue(action, content, property) {
        return action.segmentData[property] !== undefined ? action.segmentData[property] : content[property];
    }

    function getInitialValue(content, property) {
        return content.initial !== undefined ? content.initial[property] : content[property];
    }

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
                                csTradeRef: getValue(action, content, 'csTradeRef'),
                                segmCategory: getValue(action, content, 'segmCategory'),
                                updateDate: getValue(action, content, 'updateDate'),
                                updateOwner: getValue(action, content, 'updateOwner'),
                                initial: {
                                    csTradeRef: getInitialValue(content, 'csTradeRef'),
                                    segmCategory: getInitialValue(content, 'segmCategory'),
                                    updateDate: getInitialValue(content, 'updateDate'),
                                    updateOwner: getInitialValue(content, 'updateOwner')
                                },
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
                                csTradeRef: content.initial.csTradeRef,
                                segmCategory: content.initial.segmCategory,
                                updateDate: content.initial.updateDate,
                                updateOwner: content.initial.updateOwner,
                                initial: undefined,
                                modified: undefined
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
        }
    }
};