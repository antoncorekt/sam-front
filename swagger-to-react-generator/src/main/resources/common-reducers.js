
type TActionDefault<T> = ActionData<T>;

type THandlers<TState, TAction> = {
    [key: string]: (state: TState, action: TAction) => TState
}

type TReducer<TState, TAction = any> = (state: TState, action: TAction) => TState

// export default combineHandlers(handlers: THandlers<TState, TAction>)

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


// function for fetches
export const commonCallApi = (props: ApiProperties )=> <A>( dispatch: Dispatch<A>) => {



    const idRequest = _.idMaker.next().value;

    // setting for fetch function
    const settings = {
        method: props.httpMethod,
        mode: 'cors',
        headers: props.headers,
        body: props.body
    };
    const url = props.url;

    const requestAction =  _.requestActionCreator(props);

    dispatch(
        requestAction
    );

    return fetch(url, settings)
        .then(typeResolveFunctionBody)
        .then(handlerFunctionSuccess(props, requestAction, dispatch))
        .catch(handlerFunctionError(props, requestAction, dispatch));
};




export function createReducer<TState, TAction: TActionDefault<any>>(
    initialState: TState,
    handlers: THandlers<TState, TAction>
): TReducer<TState, TAction> {
    return function reducer(state: TState = initialState, action: TAction): TState {
    if (handlers[action.type]) {
        return handlers[action.type](state, action);
    }
    return state;
};
}
