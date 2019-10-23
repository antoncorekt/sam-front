import {ActionRequestData} from "../api/common-middleware";
import {any} from "prop-types";

export const REQ_ACTION = "REQ_ACTION";
export const FAIL_ACTION = "FAIL_ACTION";
export const SUCCESS_ACTION = "SUCCESS_ACTION";

export class AddToRequestPanelActionBuilder {

    static REQ_ACTION(requestId: number, payload: any){
        return {
            type: REQ_ACTION,
            requestId: requestId,
            payload: payload
        }
    }

    static SUCCESS_ACTION(requestId: number, payload: any){
        return {
            type: SUCCESS_ACTION,
            requestId: requestId,
            payload: payload
        }
    }

    static FAIL_ACTION(requestId: number, payload: any){
        return {
            type: FAIL_ACTION,
            requestId: requestId,
            payload: payload
        }
    }

}

export type RequestPanelActionType = {
    requestId: number,
    payload: any
}

export class RequestPanelType {
    reqActions: Array<RequestPanelActionType> = [];
    failActions: Array<RequestPanelActionType> = [];
    successActions: Array<RequestPanelActionType> = [];
}

export const RequestPanelHandler = () => {

    return {
        REQ_ACTION:(state:RequestPanelType, action:RequestPanelActionType)=>{
            return {
                ...state,
                reqActions: [...state.reqActions, action]
            };
        },
        SUCCESS_ACTION:(state:RequestPanelType, action:RequestPanelActionType)=>{
            return {
                ...state,
                reqActions: state.reqActions.filter(act => act.requestId !== action.requestId),
                successActions: [...state.successActions, action]
            };
        },
        FAIL_ACTION:(state:RequestPanelType, action:RequestPanelActionType)=>{
            console.error("Backend error: ", action);

            return {
                ...state,
                reqActions: state.reqActions.filter(act => act.requestId !== action.requestId),
                failActions: [...state.failActions, action]
            };
        },
    }
};