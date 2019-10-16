export const GetOrderHandler = () => {
    return {
        GetOrderRequest: (state: OrderMappingsType, action: ActionRequestData<null, null>) => {
            return { ...state, GET: action };
        },
        GetOrderSuccess: (state: OrderMappingsType, action: ActionResponseData<ResultSetOrders, ActionRequestData<null, null>>) => {
            action.response.data.sort((a, b) => {
                if (a.bscsAccount > b.bscsAccount) {
                    return 1;
                }
                else if (a.bscsAccount === b.bscsAccount) {
                    if (a.segmentCode > b.segmentCode)
                        return 1;
                    else
                        return -1;
                }
                else
                    return -1;
            });

            return { ...state, GET: action };
        },
        GetOrderFail: (state: OrderMappingsType, action: ActionResponseData<ResultSetError, ActionRequestData<null, null>>) => {
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

export const PatchOrderByStatusByReleaseByBscsAccountBySegmentHandler = () => {
    return {
        PatchOrderByStatusByReleaseByBscsAccountBySegmentRequest: (state: OrderMappingsType, action: ActionRequestData<RequestSetOrder, PatchOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>) => {
            return { ...state, PATCH: action };
        },
        PatchOrderByStatusByReleaseByBscsAccountBySegmentSuccess: (state: OrderMappingsType, action: ActionResponseData<ResultSetOrders, ActionRequestData<RequestSetOrder, PatchOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>>) => {
            return { ...state, PATCH: action };
        },
        PatchOrderByStatusByReleaseByBscsAccountBySegmentFail: (state: OrderMappingsType, action: ActionResponseData<ResultSetError, ActionRequestData<RequestSetOrder, PatchOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>>) => {
            return { ...state, PATCH: action };
        },
    }
};

export const DeleteOrderHandler = () => {
    return {
        DeleteOrderRequest: (state: OrderMappingsType, action: ActionRequestData<null, null>) => {
            return { ...state, DELETE: action };
        },
        DeleteOrderSuccess: (state: OrderMappingsType, action: ActionResponseData<ResultSetOrders, ActionRequestData<null, null>>) => {
            return { ...state, DELETE: action };
        },
        DeleteOrderFail: (state: OrderMappingsType, action: ActionResponseData<ResultSetError, ActionRequestData<null, null>>) => {
            return { ...state, DELETE: action };
        },
    }
};

export const OrderMappingPropertiesInReduxHandler = () => {
    function getValue(action, content, property) {
        return action.orderMappingData[property] !== undefined ? action.orderMappingData[property] : content[property];
    }

    function getInitialValue(content, property) {
        return content.initial !== undefined ? content.initial[property] : content[property];
    }

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
                                bscsAccount: getValue(action, content, 'bscsAccount'),
                                segmentCode: getValue(action, content, 'segmentCode'),
                                orderNumber: getValue(action, content, 'orderNumber'),
                                validFromDate: getValue(action, content, 'validFromDate'),
                                updateDate: getValue(action, content, 'updateDate'),
                                updateOwner: getValue(action, content, 'updateOwner'),
                                initial: {
                                    bscsAccount: getInitialValue(content, 'bscsAccount'),
                                    segmentCode: getInitialValue(content, 'segmentCode'),
                                    orderNumber: getInitialValue(content, 'orderNumber'),
                                    validFromDate: getInitialValue(content, 'validFromDate'),
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
        cancelEditionOfOrderMappingPropertiesInRedux: (state, action) => {
            return {
                ...state,
                GET: {
                    ...state.GET,
                    response: {
                        ...state.GET.response,
                        data: state.GET.response.data.map((content, index) => index === action.rowId
                            ? {
                                ...content,
                                bscsAccount: content.initial.bscsAccount,
                                segmentCode: content.initial.segmentCode,
                                orderNumber: content.initial.orderNumber,
                                validFromDate: content.initial.validFromDate,
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
        },
        deleteOrderMappingInRedux: (state, action) => {
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