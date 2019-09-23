// @flow

import {Dispatch} from "redux";
import {BACKEND_URL} from "./conf";
import {UNAUTHORIZED_ACTION} from "../reducers/auth-reducer";

export interface BackendAction {
    get fetching(): boolean;
    get fail(): boolean;
    get msg(): string;
    get errorType(): string;
}

export class ActionRequestData<T, P> implements BackendAction{
    body: T;
    parameters: P;
    date: Date;
    url: string;
    type: string;
    method: string;
    fetching: true;
}

export class ActionResponseData<T, R> implements BackendAction {
    requestAction: R;
    response: T;
    date: Date;
    timeDiff: number;
    fail: boolean;
    msg: string;
    code: string;
    errorType: string;
    fetching: false;
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
            fetching: true,
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
            fetching: false,
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
            fetching: false,
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

type CallApiContextType = {
    id: number,
    responseStatus?: number,
    responseText?: string
}

class GlobalLoginContext {
    bearerToken: string
}

export const globalLoginContext = new GlobalLoginContext();

// function for fetches
export const commonCallApi = (props: ApiProperties )=> <A>( dispatch: Dispatch<A>) => {
    const idRequest = _.idMaker.next().value;

    // setting for fetch function
    const settings = {
        method: props.httpMethod,
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${globalLoginContext.bearerToken}`
        },
        body: props.body
    };
    const url = BACKEND_URL + props.url;


    let callApiContext : CallApiContextType = {
        id: idRequest
    };

    const requestAction =  _.requestActionCreator(props);
    dispatch(
        requestAction
    );

    return fetch(url, settings)
        .then((response:Response) => {
            console.log("typeResolveFunctionBody response", response);

            let contentType = response.headers.get("content-type");

            callApiContext.responseStatus = response.status;
            callApiContext.responseText = response.statusText;

            if (contentType && contentType.includes("application/json")) {
                console.log("response is json =) try to response.json() ");
                return response.json();
            }
            else {
                console.warn("response.headers", response.headers);
            }


            response.text().then(text => {
                console.error("error TExt", text)

            }).catch(er => console.error("BLOB Error", er));


            // todo return error json if json parse error
            return {
                status: {
                    code: "NOT_JSON_ERROR",
                    message: "Not json"
                }
            }
        })
        .then(<T>(response:T) => {

            console.log("handlerFunctionSuccess", response);

            if (callApiContext.responseStatus >= 300){

                if (callApiContext.responseStatus === 401){
                    // todo call unauthorized
                    dispatch(
                        {
                            type: UNAUTHORIZED_ACTION
                        }
                    )
                }
                else {
                    dispatch(
                        _.failActionCreatorBackendError(response, requestAction, callApiContext.responseText, callApiContext.responseStatus)
                    )
                }

            }
            else {
                dispatch(
                    _.successActionCreator(props.successType, response, requestAction, callApiContext.responseText, callApiContext.responseStatus)
                )
            }
        })
        .catch(( error:any) => {


        console.error("handlerFunctionError", error);
        dispatch(
            _.failActionCreatorNetworkError(props.failType, error, requestAction, "Network error: ", "404")
        );

    });
};
