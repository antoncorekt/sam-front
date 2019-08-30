// @flow

import {
    AccountMapLog,
    ActionResponseData,
    API,
    FinancialAccount,
    GetAccountOfiUrlParameters,
    SegmentMapEntry
} from "./common-middleware";
import type {ActionRequestData} from "./common-middleware";
import {GetAccountGlQueryParams} from "./api-models";

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
        console.log("action.type", action.type);
        if (handlers[action.type]) {
            return handlers[action.type](state, action);
        }
        return state;
    };
}

export const GetAccountOfiHandler = <S>() => {
    return {
        'GetAccountOfiRequest':(state:S, action:ActionRequestData<null, GetAccountOfiUrlParameters>)=>{
            console.log("RRRRRR");
            return {
                ...state,
                ...action
            };
        },
        'GetAccountOfiSuccess':(state:S, action:ActionResponseData<Array<FinancialAccount>, ActionRequestData<AccountMapLog>>)=>{
            console.log("YYYYYY");
            return {
                ...state,
                ...action
            };
        },
        'GetAccountOfiFail':(state:S, action:ActionResponseData<Error, ActionRequestData<AccountMapLog>>)=>{ // todo add error in Swagger

            return {
                ...state,
                ...action
            };
        },
    }
};

export const GetAccountGlHandler = <S>() => {
    return {
        'GetAccountGlRequest':(state:S, action:ActionRequestData<null, GetAccountGlQueryParams>)=>{
            return {
                ...state,
                ...action
            };
        },
        'GetAccountGlSuccess':(state:S, action:ActionResponseData<Array<FinancialAccount>,ActionRequestData<null, GetAccountGlQueryParams>>)=>{
            return {
                ...state,
                ...action
            };
        },
        'GetAccountGlFail':(state:S, action:ActionRequestData<null>)=>{
            return {
                ...state,
                ...action
            };
        },
    }
}

// createReducer({}, exampleHandler());

