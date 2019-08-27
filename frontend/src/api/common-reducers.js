// @flow

import {API, FinancialAccount, SegmentMapEntry} from "./common-middleware";
import type {ActionRequestData} from "./common-middleware";

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
    handlers: THandlers<TState, TAction>
): TReducer<TState, TAction> {
    return function reducer(state: TState = initialState, action: TAction): TState {

        console.log("action ", action);
        console.log("handlers ", handlers);

        if (handlers[action.type]) {
            console.log("We found handler's for " + action.type + " ;", handlers[action.type]);
            return handlers[action.type](state, action);
        }
        return state;
    };
}


export const postAccountOfiHandler = <S, A:ActionRequestData<FinancialAccount>>() => {

        return {
            "PostAccountOfiRequest": (state: S, action: ActionRequestData<FinancialAccount>):S => {
                console.warn("TTTTT", action);
                return {
                    ...state,
                    ["rnd"]: "ok",
                    ...action
                }
            }
        }
        // "GetAccountGlSuccess": function (state: S, action: A): any {
        //
        // },
        // "GetAccountGlFail": function (state: S, action: A): any {
        //
        // }
};


// createReducer({}, exampleHandler());

