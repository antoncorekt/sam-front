const commonCallApi = (props: ApiProperties) => (dispatch) => {


    const idRequest = _.idMaker.next().value;

    // setting for fetch function
    const settings = {
        method: props.httpMethod,
        mode: 'cors',
        headers: props.headers,
        body: props.body
    };
    const url = BACKEND_URL + props.url;

    // const dispFail = res =>
    //     (failAction === undefined)
    //         ? dispatch(failedAction(Object.assign(res, {request: data})))
    //         : dispatch(failAction(Object.assign(res, {request: data})));
    //
    // const request = Object.assign({url:url}, data, {message: msg});

    const requestAction =  _.requestActionCreator(props);

    dispatch(
        requestAction
    );

    // this will be return fetch function like this
    // return fetch(url, settings)
    //     .then(f)
    //     .then(f1)
    //     .catch(f2)
};