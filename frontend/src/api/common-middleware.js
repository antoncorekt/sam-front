// @flow

import {Dispatch} from "redux";
import {BACKEND_URL} from "./conf";

export class ActionRequestData<T, P> {
    body: T;
    parameners: P;
    date: Date;
    url: string;
    type: string;
    method: string;
}

export class ActionResponseData<T, R>  {
    requestAction: R;
    response: T;
    date: Date;
    timeDiff: number;
    fail: boolean;
    msg: string;
    code: string;
    errorType: string;
}

// general components for function
const additionalFunctions = ( ) => {


    function* idMaker(): any {
        let index = 0;
        while (true)
            yield index++;
    }


    function requestActionCreatorFunction(props: ApiProperties): ActionRequestData {
        return {
            body: props.body,
            date: new Date(),
            url: props.url,
            method: props.httpMethod,
            type: props.requestType
        }
    }

    function successActionCreatorFunction(type:string, response: any, requestAction: ActionRequestData, msg: string, code: string): ActionResponseData {
        const date = new Date();
        return {
            requestAction: requestAction,
            date: date,
            response: response,
            type: type,
            msg: msg,
            code: code,
            timeDiff: Math.abs(date.getTime() - requestAction.date.getTime()),
            fail: false
        }
    }

    function failActionCreatorFunctionBackendError(response: any, requestAction: ActionRequestData,  msg: string, code: string): ActionResponseData {
        return {
            ...successActionCreatorFunction(response, requestAction, msg, code),
            fail: true,
            errorType: "backend"
        }
    }

    function failActionCreatorFunctionNetworkError(type:string, reason:string, requestAction: ActionRequestData,  msg: string, code: string): ResponseData {
        const date = new Date();
        return {
            type: type,
            requestAction: requestAction,
            date: date,
            msg: msg + " reason[" + reason + "]",
            code: code,
            timeDiff: Math.abs(date.getTime() - requestAction.date.getTime()),
            fail: true,
            errorType: "network"
        }
    }

    return {
        idMaker: idMaker(),
        requestActionCreator: requestActionCreatorFunction,
        successActionCreator: successActionCreatorFunction,
        failActionCreatorBackendError: failActionCreatorFunctionBackendError,
        failActionCreatorNetworkError: failActionCreatorFunctionNetworkError
    }


};

export const _ = additionalFunctions();
type ApiProperties = {
    contentType?: string;
    url: string;
    httpMethod: string;
    body: any;
    failType: string;
    successType: string;
    requestType: string;
    headers?: HeadersInit;
}
// function for fetches
export const commonCallApi = (props: ApiProperties )=> <A>( dispatch: Dispatch<A>) => {


    const idRequest = _.idMaker.next().value;

    // setting for fetch function
    const settings = {
        method: props.httpMethod,
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        },
        body: props.body
    };
    const url = BACKEND_URL + props.url;

    const requestAction =  _.requestActionCreator(props);

    dispatch(
        requestAction
    );

    return fetch(url, settings)
        .then(typeResolveFunctionBody)
        .then(handlerFunctionSuccess(props, requestAction, dispatch))
        .catch(handlerFunctionError(props, requestAction, dispatch));
};

const typeResolveFunctionBody = (response:any) => {

    // typeResolveFunctionBody

    console.log("typeResolveFunctionBody response", response);

    return response.json();

};

const handlerFunctionError = (props:ApiProperties, requestAction: any, dispatch )=>( error:any) => {


    console.error("handlerFunctionError", error);
    dispatch(
        _.failActionCreatorNetworkError(props.failType, error, requestAction, "Network error: ", "404")
    );

};

const handlerFunctionSuccess = (props:ApiProperties, requestAction: any, dispatch ) => <T>(response:T) => {

    // magic with redux
    dispatch(
        _.successActionCreator(props.successType, response, requestAction, "OK", "200")
    )
};
