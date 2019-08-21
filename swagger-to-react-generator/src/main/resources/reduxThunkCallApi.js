
class ApiProperties {
    contentType: string;
    url: string;
    httpMethod: string;
    body: any;
    headers: HeadersInit;
    msg: string = "Proszę czekać...";
}

const commonCallApi = (props: ApiProperties) => (dispatch) => {

    // idGen already have from ApiCallGeneralFunctions
    const idRequest = _.idMaker.next().value;

    // setting for fetch function
    const settings = {
        method: props.httpMethod,
        mode: 'cors',
        headers: props.headers,
        body: props.body
    };
    const url = props.url;

    const dispFail = res =>
        (failAction === undefined)
            ? dispatch(failedAction(Object.assign(res, {request: data})))
            : dispatch(failAction(Object.assign(res, {request: data})));

    const request = Object.assign({url:url}, data, {message: msg});

    dispatch(
        _.requestActionCreator(request)
    );

    // this will be return fetch function like this
    // return fetch(url, settings)
    //     .then(f)
    //     .then(f1)
    //     .catch(f2)
};