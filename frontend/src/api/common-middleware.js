// @flow
class Pet { id:number; name:string; tag:string;  }
class Error { code:number; message:string;  }

class CallApiBuilder {

    props: ApiProperties;

    withContentType(contentType){this.props.contentType = contentType;}
    withUrl(url){this.props.url = url;}
    withHttpMethod(httpMethod){this.props.httpMethod = httpMethod;}
    withBody(body){this.props.body = body;}
    withHeaders(headers){this.props.headers = headers;}

    // todo add validation for props
    static _validate(props:{CallApiProperties}){
        return true;
    }
}

function* idMaker() {
    let index = 0;
    while (true)
        yield index++;
}

const idGenerator = idMaker();

class ApiProperties {
    contentType: string;
    url: string;
    httpMethod: string;
    body: any;
    headers: HeadersInit;
}



const fetchFunction = (url: string, props: ApiProperties): Promise<Response> => {


    const settings: RequestInit = {
        method: props.httpMethod,
        mode: 'cors',
        headers: props.headers,
        body: props.body
    };

    return fetch(props.url, settings)
        .then(typeResolver)
        .then(responseHandler)
        .catch(errorHandler);
};

const typeResolver = (response: Response): Promise<any> => {

    return response.json();
};

const responseHandler = (response: any): Promise<any> => {

};

const errorHandler = (response: any): Promise<any> => {

};

const commonCallApi = (props: ApiProperties) => (dispatch) => {

    const idRequest = idGenrator.next().value;

    const settings = {
        method: props.httpMethod,
        mode: 'cors',
        headers: props.headers,
        body: props.body
    };

    let entryPoint = props.url;

    const dispFail = res =>
        (failAction === undefined)
            ? dispatch(failedAction(Object.assign(res, {request: data})))
            : dispatch(failAction(Object.assign(res, {request: data})));

    if (param === undefined || param.msg === undefined) param = {msg:"Proszę czekać..."};

    const msg = param.msg;

    const request = Object.assign({url:url}, data, {message: msg});

    dispatch(
        requestAction(request)
    );

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


