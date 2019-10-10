export const GetOrderByStatusByReleaseHandler = () => {
    return {
        GetOrderByStatusByReleaseRequest: (state: OrderMappingsType, action: ActionRequestData<null, GetOrderByStatusByReleaseQueryParams>) => {
            return { ...state, GET: action };
        },
        GetOrderByStatusByReleaseSuccess: (state: OrderMappingsType, action: ActionResponseData<ResultSetOrders, ActionRequestData<null, GetOrderByStatusByReleaseQueryParams>>) => {
            return { ...state, GET: action };
        },
        GetOrderByStatusByReleaseFail: (state: OrderMappingsType, action: ActionResponseData<ResultSetError, ActionRequestData<null, GetOrderByStatusByReleaseQueryParams>>) => {
            return { ...state, GET: action };
        },
    }
};

export const PostOrderHandler = () => {
    return {
        PostOrderRequest: (state: OrderMappingsType, action: ActionRequestData<RequestSetOrder, null>) => {
            return { ...state, POST: action };
        },
        PostOrderSuccess: (state: OrderMappingsType, action: ActionResponseData<ResultSetOrder, ActionRequestData<RequestSetOrder, null>>) => {
            return { ...state, POST: action };
        },
        PostOrderFail: (state: OrderMappingsType, action: ActionResponseData<ResultSetError, ActionRequestData<RequestSetOrder, null>>) => {
            return { ...state, POST: action };
        },
    }
};

export const OrderMappingPropertiesInReduxHandler = () => {
    return {
        editOrderMappingPropertiesInRedux: (state, action) => {
            return {
                ...state,
                GET: {
                    ...state.GET,
                    response: {
                        ...state.GET.response,
                        data: state.GET.response.data.map((content, index) => index === action.rowId
                            ? {
                                ...content,
                                bscsAccount: action.orderMappingData.bscsAccount !== undefined
                                    ? action.orderMappingData.bscsAccount : content.bscsAccount,
                                segmentCode: action.orderMappingData.segmentCode !== undefined
                                    ? action.orderMappingData.segmentCode : content.segmentCode,
                                orderNumber: action.orderMappingData.orderNumber !== undefined
                                    ? action.orderMappingData.orderNumber : content.orderNumber,
                                validFromDate: action.orderMappingData.validFromDate !== undefined
                                    ? action.orderMappingData.validFromDate : content.validFromDate,
                                updateDate: action.orderMappingData.updateDate,
                                updateOwner: action.orderMappingData.updateOwner,
                                originalBscsAccount: action.orderMappingData.bscsAccount !== undefined && content.originalBscsAccount === undefined
                                    ? content.bscsAccount : content.originalBscsAccount,
                                originalSegmentCode: action.orderMappingData.segmentCode !== undefined && content.originalSegmentCode === undefined
                                    ? content.segmentCode : content.originalSegmentCode,
                                originalOrderNumber: action.orderMappingData.orderNumber !== undefined && content.originalOrderNumber === undefined
                                    ? content.orderNumber : content.originalOrderNumber,
                                originalValidFromDate: action.orderMappingData.validFromDate !== undefined && content.originalValidFromDate === undefined
                                    ? content.validFromDate : content.originalValidFromDate,
                                originalUpdateDate: content.originalUpdateDate === undefined ? content.updateDate : content.originalUpdateDate,
                                originalUpdateOwner: content.originalUpdateOwner === undefined ? content.updateOwner : content.originalUpdateOwner,
                                modified: true
                            }
                            : content)
                    }
                }
            };
        },
        unshiftOrderMappingInRedux: (state, action) => {
            return {
                ...state,
                GET: {
                    ...state.GET,
                    response: {
                        ...state.GET.response,
                        data: [action.orderMappingData, ...state.GET.response.data],
                        count: state.GET.response.count + 1
                    }
                }
            };
        }
    }
};