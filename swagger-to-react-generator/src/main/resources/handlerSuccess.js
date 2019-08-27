const handlerFunctionSuccess = (response:any) => {
    // magic with redux

    dispatch(
        _.successActionCreator(props.successType, requestAction, "OK", 200)
    );

};