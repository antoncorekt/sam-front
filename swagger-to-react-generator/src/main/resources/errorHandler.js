const handlerFunctionError = (props:ApiProperties, requestAction: any, dispatch) => (error:any) => {

    console.error("handlerFunctionError", error);
    dispatch(
        _.failActionCreatorNetworkError(props.failType,error, requestAction, "Network error: ", 404)
    );
};