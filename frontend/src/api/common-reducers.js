// @flow

class ActionData<T> {
    data: T;
    type: string;
}

type TActionDefault<T> = ActionData<T>;

type THandlers<TState, TAction> = {
    [key: string]: (state: TState, action: TAction) => TState
}

type TReducer<TState, TAction = any> = (state: TState, action: TAction) => TState

// export default combineHandlers(handlers: THandlers<TState, TAction>)

export function createReducer<TState, TAction: TActionDefault<any>>(
    initialState: TState,
    handlers: Array<THandlers<TState, TAction>>
): TReducer<TState, TAction> {
    return function reducer(state: TState = initialState, action: TAction): TState {

        const allHandlers = handlers.reduce((h1, h2) => ({...h1, ...h2}),{});

        if (allHandlers[action.type]) {
            return allHandlers[action.type](state, action);
        }
        return state;
    };
}

