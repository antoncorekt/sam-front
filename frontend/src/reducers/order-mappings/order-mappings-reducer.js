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