import { ActionRequestData, ActionResponseData } from "../../api/common-middleware";
import { RequestSetSegment, ResultSetSegment, ResultSetSegments } from "../../api/api-models";
import React from 'react';
import { Modal } from 'antd';

export class SegmentsType {
    GET: ActionResponseData<ResultSetSegments, ActionRequestData<RequestSetSegment, null>>;
    POST: ActionResponseData<ResultSetSegment, ActionRequestData<RequestSetSegment, null>>;
    PATCH: ActionResponseData<ResultSetCount, ActionRequestData<RequestSetSegment, null>>;
    DELETE: ActionResponseData<ResultSetCount, ActionRequestData<null, DeleteDictionarySegmentByIdQueryParams>>;
}

export const getSegmentsReduxProperty = (root, requestType, property, negativeResult) => {
    return root.segments !== undefined
        && root.segments[requestType] !== undefined
        && root.segments[requestType][property] !== undefined
        ?
        root.segments[requestType][property]
        :
        negativeResult;
}

export const getSegmentsResponseReduxProperty = (root, requestType, property, negativeResult) => {
    return root.segments !== undefined
        && root.segments[requestType] !== undefined
        && root.segments[requestType].response !== undefined
        && root.segments[requestType].response[property] !== undefined
        ?
        root.segments[requestType].response[property]
        :
        negativeResult;
}

export const handleApiError = (requestType, previousProps, currentProps) => {
    if (getSegmentsReduxProperty(currentProps, requestType, "fetching", true) === false
        && getSegmentsReduxProperty(previousProps, requestType, "fetching", false) === true
        && getSegmentsReduxProperty(currentProps, requestType, "fail", true) === true) {
        Modal.error({
            title: "Wystąpił błąd!",
            content: (
                <div>
                    <br />
                    <label className="bold-text italic-text">Rodzaj:</label>
                    <br />
                    <label>
                        {getSegmentsResponseReduxProperty(currentProps, requestType, "data", {}).error}
                    </label>
                    <br />
                    <br />
                    <label className="bold-text italic-text">Opis:</label>
                    <br />
                    <label>
                        {getSegmentsResponseReduxProperty(currentProps, requestType, "data", {}).message}
                    </label>
                </div>
            )
        });
    }
}