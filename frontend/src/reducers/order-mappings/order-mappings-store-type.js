import { ActionRequestData, ActionResponseData } from "../../api/common-middleware";
import { GetOrderByStatusByReleaseQueryParams, ResultSetOrders } from "../../api/api-models";

export class OrderMappingsType {
    GET: ActionResponseData<ResultSetOrders, ActionRequestData<GetOrderByStatusByReleaseQueryParams, null>>;
    POST: ActionResponseData<ResultSetOrder, ActionRequestData<RequestSetOrder, null>>;
    PATCH: ActionResponseData<ResultSetOrders, ActionRequestData<RequestSetOrder, PatchOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>>;
    DELETE: ActionResponseData<ResultSetCount,ActionRequestData<null, DeleteOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>>
}

export const getOrderMappingsReduxProperty = (root, requestType, property, negativeResult) => {
    return root.orderMappings !== undefined
        && root.orderMappings[requestType] !== undefined
        && root.orderMappings[requestType][property] !== undefined
        ?
        root.orderMappings[requestType][property]
        :
        negativeResult;
}

export const getOrderMappingsResponseReduxProperty = (root, requestType, property, negativeResult) => {
    return root.orderMappings !== undefined
        && root.orderMappings[requestType] !== undefined
        && root.orderMappings[requestType].response !== undefined
        && root.orderMappings[requestType].response[property] !== undefined
        ?
        root.orderMappings[requestType].response[property]
        :
        negativeResult;
}