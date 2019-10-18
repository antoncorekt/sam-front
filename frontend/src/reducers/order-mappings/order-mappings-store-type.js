import { ActionRequestData, ActionResponseData } from "../../api/common-middleware";
import { GetOrderByStatusByReleaseQueryParams, ResultSetOrders } from "../../api/api-models";
import React from 'react';
import { Modal } from 'antd';

export class OrderMappingsType {
    GET: ActionResponseData<ResultSetOrders, ActionRequestData<GetOrderByStatusByReleaseQueryParams, null>>;
    POST: ActionResponseData<ResultSetOrder, ActionRequestData<RequestSetOrder, null>>;
    PATCH: ActionResponseData<ResultSetOrders, ActionRequestData<RequestSetOrder, PatchOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>>;
    DELETE: ActionResponseData<ResultSetCount, ActionRequestData<null, DeleteOrderByStatusByReleaseByBscsAccountBySegmentQueryParams>>
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

export const handleApiError = (requestType, previousProps, currentProps) => {
    if (getOrderMappingsReduxProperty(currentProps, requestType, "fetching", true) === false
        && getOrderMappingsReduxProperty(previousProps, requestType, "fetching", false) === true
        && getOrderMappingsReduxProperty(currentProps, requestType, "fail", true) === true) {
        Modal.error({
            title: "Wystąpił błąd!",
            content: (
                <div>
                    <br />
                    <label className="bold-text italic-text">Rodzaj:</label>
                    <br />
                    <label>
                        {getOrderMappingsResponseReduxProperty(currentProps, requestType, "data", {}).error}
                    </label>
                    <br />
                    <br />
                    <label className="bold-text italic-text">Opis:</label>
                    <br />
                    <label>
                        {getOrderMappingsResponseReduxProperty(currentProps, requestType, "data", {}).message}
                    </label>
                </div>
            )
        });
    }
}