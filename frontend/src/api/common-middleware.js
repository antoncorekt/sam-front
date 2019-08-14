/**
 * @author Anton Kozlovskyi
 * @date 05 May 2019
 */

import {actionSuccess, failedAction} from "../actions/connectToBackendActions";

function* idMaker() {
    let index = 0;
    while (true)
        yield index++;
}

const gen = idMaker();


// kiwi
// emu
// winkom

export const commonCallApi = (url, data, requestAction, successAction, failAction, param) => (dispatch) => {

    const idRequest = gen.next().value;

    const customHeader =  {
        "Content-Type": "application/json; charset=utf-8",

    };

    const customBody = JSON.stringify({
        header: {},
        data: data,
        routedData: {id: idRequest}
    });

    const settings = {
        method: "POST",
        mode: 'cors',
        headers: customHeader,
        body: customBody
    };

    let entryPoint = url;

    const dispFail = res =>
        (failAction === undefined)
            ? dispatch(failedAction(Object.assign(res, {request: data})))
            : dispatch(failAction(Object.assign(res, {request: data})));

    if (param === undefined || param.msg === undefined) param = {msg:"Proszę czekać..."};

    const msg = param.msg;

    const request = Object.assign({url:url}, data, {message: msg});

    const dateNow = Date.now();

    dispatch(
        requestAction(request)
    );

    console.log(`send to ${entryPoint}; body:`,customBody);

    return fetch(entryPoint, settings)

        .then(response => {

            let contentType = response.headers.get("content-type");

            if (contentType && contentType.includes("application/json")) {
                return response.json();
            }

        })
        .then(json => {
            console.log("response: ", json);
            // check if status code start < 220. other codes are errors
            if (json.status.code <299) {
                dispatch(successAction(Object.assign(json, {request: request})));

                // if (json.status.code < 400) {
                //     dispatch(REQUEST_QUEQUE_ACTION.removeRequestQueueSuccess(idRequest, msg, (Date.now() - dateNow), false, json.status.trace));
                //     Log.warn({
                //         message: "Warn " + json.status.code,
                //         description: "" + json.status.message
                //     })
                // } else {
                //     dispatch(REQUEST_QUEQUE_ACTION.removeRequestQueueFail(idRequest, msg, (Date.now() - dateNow), "ERROR " + json.status.code + " " + json.status.message, customRequest(request).type, "test", header, data, request, false, json.status.trace));
                //     Log.error({
                //         message: "Error " + json.status.code,
                //         description: "" + json.status.message,
                //         trace: json.status.trace
                //     })
                // }
            } else {



                dispFail(json);

                // dispatch(REQUEST_QUEQUE_ACTION.removeRequestQueueSuccess(idRequest, msg, (Date.now() - dateNow), false));
            }
        })
        .catch((err) => {
            dispFail({
                status: {
                    code: 503,
                    message: err + " " + entryPoint
                }
            });

        });

};

const kiwiCallApi = () => {

    return "";
};

// callApi()();





