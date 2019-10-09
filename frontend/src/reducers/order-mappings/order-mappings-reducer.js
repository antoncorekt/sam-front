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