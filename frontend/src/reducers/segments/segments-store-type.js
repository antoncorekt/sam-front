import { ActionRequestData, ActionResponseData } from "../../api/common-middleware";
import { RequestSetSegment, ResultSetSegment, ResultSetSegments } from "../../api/api-models";

export class SegmentsType {
    GET: ActionResponseData<ResultSetSegments, ActionRequestData<RequestSetSegment, null>>;
    POST: ActionResponseData<ResultSetSegment, ActionRequestData<RequestSetSegment, null>>;
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