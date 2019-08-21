const additionalFunctions = ():any => {
    function* idMaker() {
        let index = 0;
        while (true)
            yield index++;
    }

    class ActionRequestData {
        request: any;
        date: Date;
        url: string;
        method: string;
    }

    class ResponseData {
        requestAction: any;
        response: any;
        date: Date;
        timeDiff: Date;
        fail: boolean
    }

    function requestActionCreatorFunction(props: ApiProperties): ActionRequestData {
        return {
            request: props.body,
            date: new Date(),
            url: props.url,
            method: props.httpMethod
        }
    }

    function successActionCreatorFunction(response: any, requestAction: ActionRequestData): ResponseData {
        const date = new Date();
        return {
            requestAction: requestAction,
            date: date,
            response: response,
            timeDiff: Math.abs(date.getTime() - requestAction.date.getTime()),
            fail: false
        }
    }

    function failActionCreatorFunction(response: any, requestAction: ActionRequestData): ResponseData {
        return {
            ...successActionCreatorFunction(response, requestAction),
            fail: true
        }
    }

    return {
        idMaker: idMaker(),
        requestActionCreator: requestActionCreatorFunction,
        successActionCreator: successActionCreatorFunction,
        failActionCreator: failActionCreatorFunction
    }
};