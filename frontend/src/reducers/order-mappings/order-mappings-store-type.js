import { ActionRequestData, ActionResponseData } from "../../api/common-middleware";
import { GetOrderByStatusByReleaseQueryParams, ResultSetOrders } from "../../api/api-models";

export class OrderMappingsType {
    GET: ActionResponseData<ResultSetOrders, ActionRequestData<GetOrderByStatusByReleaseQueryParams, null>>;
}