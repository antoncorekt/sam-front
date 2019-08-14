// @date 06 May 2019
// @author Anton Kozlovskyi

export const ACTION_REQUEST = 'ACTION_REQUEST';
export const ACTION_SUCCESS = 'ACTION_SUCCESS';
export const ACTION_FAIL = 'ACTION_FAIL';

export const actionRequest = (request) => ({
    type: ACTION_REQUEST,
    fetching: true,
    lastRequestTime: Date.now(),
    request
});

export const actionSuccess = responseJsonFromBackend => ({
    type: ACTION_SUCCESS,
    fetching: false,
    data: responseJsonFromBackend.data,
    status: responseJsonFromBackend.status,
    routedData: responseJsonFromBackend.routedData,
    request: responseJsonFromBackend.request,
    fail: false,
    lastResponseTime: Date.now()
});

export const failedAction = responseJsonFromBackend => ({
    type: ACTION_FAIL,
    fetching: false,
    status: responseJsonFromBackend.status,
    routedData: responseJsonFromBackend.routedData,
    request: responseJsonFromBackend.request,
    fail: true,
    lastResponseTime: Date.now(),
    errorMsg: responseJsonFromBackend.error,
    trace: responseJsonFromBackend.message
});

export const connectToBackendAction = (type) => {
    if (type.indexOf("_REQUEST") !== -1) {
        return (request) => ({
            ...actionRequest(request),
            type: type,
            id: request.id,
            request
        })
    }
    else {
        if (type.indexOf("_FAIL") !== -1 ) {
            return (response) => ({
                ...failedAction(response),
                type: type,
                bla: "bla",
                request: response.request,
                id: response.request.id,
            })
        }
        else{
            return (response) => ({
                ...actionSuccess(response),
                type: type,
                request: response.request,
                id: response.request.id,
            })
        }
    }
};

