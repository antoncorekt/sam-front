import * as ACT from "../api/api-actions-defs";
import {ActionRequestData, ActionResponseData} from "../api/common-middleware";
import {ResultSetError, ResultSetStatus} from "../api/api-models";

export const UNAUTHORIZED_ACTION = "UNAUTHORIZED_ACTION";

export const UnauthorizedHandler = () => {

    return {
        UNAUTHORIZED_ACTION:(state:any, action:ActionRequestData<null, null>)=>{

            if (state.token !== undefined){
                console.warn(`Token ${state.token} is invalid.`)
            }

            return {
                ...state,
                token: undefined
            };
        }
    }
};
