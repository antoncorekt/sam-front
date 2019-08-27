const additionalFunctions = ( ) => {

    function* idMaker() {
        let index = 0;
        while (true)
            yield index++;
    }

    class ActionRequestData {
        request: any;
        date: Date;
        url: string;
        type: string;
        method: string;
    }

    class ResponseData {
        requestAction: any;
        response: any;
        date: Date;
        timeDiff: Date;
        fail: boolean;
        msg: string;
        code: string;
        errorType: string;
    }

    function requestActionCreatorFunction(props: ApiProperties): ActionRequestData {
        return {
            request: props.body,
            date: new Date(),
            url: props.url,
            method: props.httpMethod,
            type: props.requestType
        }
    }

    function successActionCreatorFunction(response: any, requestAction: ActionRequestData, msg: string, code: string): ResponseData {
        const date = new Date();
        return {
            requestAction: requestAction,
            date: date,
            response: response,
            type: requestAction.type,
            msg: msg,
            code: code,
            timeDiff: Math.abs(date.getTime() - requestAction.date.getTime()),
            fail: false
        }
    }

    function failActionCreatorFunctionBackendError(response: any, requestAction: ActionRequestData,  msg: string, code: string): ResponseData {
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