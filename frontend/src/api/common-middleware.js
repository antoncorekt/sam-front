// @flow

import {BACKEND_URL} from './conf';
import {func} from "prop-types";
import {Dispatch} from "redux";

// ----- Enums ------
type FinancialAccountStatusEnum = 'active' | 'inactive';
type MarketSegmentCategoryEnum = 'BIZ' | 'PRIV';
type MarketSegmentReqCategoryEnum = 'PRIV';
type AccountMapStatusEnum = 'approved' | 'unapproved';
type AccountMapLogActionEnum = 'insert' | 'update' | 'delete';

// ----- Models ------
export class FinancialAccount {
    id:string; // Account number
    name:string;
    status:FinancialAccountStatusEnum = 'active';
    "@type":string;

    get type():string {return this["@type"]}
    set type(s:string):void {this["@type"]=s}

    static get Builder() {
        class Builder {
            _model: FinancialAccount = new FinancialAccount();
            withId(id: string):Builder {
                this._model.id = id;
                if (id.length > 120) throw new Error("Data error. Max id length is " + 120);
                return this;
            }
            withName(name: string):Builder {
                this._model.name = name;
                return this;
            }
            withType(type: string):Builder {
                this._model.type = type;
                return this;
            }
            withStatus(status: FinancialAccountStatusEnum):Builder {
                this._model.type = status;
                return this;
            }
            build():FinancialAccount {
                return this._model;
            }
        }
        return Builder;
    }
}

class MarketSegment { id:string; category:MarketSegmentCategoryEnum; entryDate:Date;  }
class MarketSegmentReq { id:string; category:MarketSegmentReqCategoryEnum;  }
class AccountMap { glAccount:FinancialAccount; ofiAccount:FinancialAccount; validFrom:Date; vatCodeInd:boolean; sapSegmentText:string; ofiWbsCode:string; citMarkerVatFlag:number; status:AccountMapStatusEnum;  }
export class AccountMapReq { glAccountId:string; ofiAccountId:string; validFrom:Date; vatCodeInd:boolean; sapSegmentText:string; ofiWbsCode:string; citMarkerVatFlag:number;  }
export class AccountMapLog { old:AccountMap; new:AccountMap; user:string; action:AccountMapLogActionEnum; actionDate:Date;  }
export class SegmentMapEntry { segmentId:string; orderNumber:number;  }
export class SegmentMap { glAccount:FinancialAccount; validFrom:Date; segments:Array<SegmentMapEntry>;  }
class SegmentMapReq { validFrom:Date;  }

export class ActionRequestData<T> {
    body: T;
    date: Date;
    url: string;
    type: string;
    method: string;
}

// general components for function
const additionalFunctions = ( ) => {


    function* idMaker(): any {
        let index = 0;
        while (true)
            yield index++;
    }



    type ResponseData = {
        requestAction: any;
        response?: any;
        date: Date;
        timeDiff: number;
        fail: boolean;
        msg?: string;
        code?: string;
        errorType?: string;
    }

    function requestActionCreatorFunction(props: ApiProperties): ActionRequestData {
        return {
            body: props.body,
            date: new Date(),
            url: props.url,
            method: props.httpMethod,
            type: props.requestType
        }
    }

    function successActionCreatorFunction(response: any, requestAction: ActionRequestData, msg: string, code: string): ResponseData {
        const date = new Date();
        return {
            requestAction: requestAction,
            date: date,
            response: response,
            type: requestAction.type,
            msg: msg,
            code: code,
            timeDiff: Math.abs(date.getTime() - requestAction.date.getTime()),
            fail: false
        }
    }

    function failActionCreatorFunctionBackendError(response: any, requestAction: ActionRequestData,  msg: string, code: string): ResponseData {
        return {
            ...successActionCreatorFunction(response, requestAction, msg, code),
            fail: true,
            errorType: "backend"
        }
    }

    function failActionCreatorFunctionNetworkError(type:string, reason:string, requestAction: ActionRequestData,  msg: string, code: string): ResponseData {
        const date = new Date();
        return {
            type: type,
            requestAction: requestAction,
            date: date,
            msg: msg + " reason[" + reason + "]",
            code: code,
            timeDiff: Math.abs(date.getTime() - requestAction.date.getTime()),
            fail: true,
            errorType: "network"
        }
    }

    return {
        idMaker: idMaker(),
        requestActionCreator: requestActionCreatorFunction,
        successActionCreator: successActionCreatorFunction,
        failActionCreatorBackendError: failActionCreatorFunctionBackendError,
        failActionCreatorNetworkError: failActionCreatorFunctionNetworkError
    }


};

export const _ = additionalFunctions();const idGen = _.idMaker;
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
// function for fetches
const commonCallApi = (props: ApiProperties )=> <A>( dispatch: Dispatch<A>) => {



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
    return fetch(url, settings)
        .then(typeResolveFunctionBody)
        .then(handlerFunctionSuccess)
        .catch(handlerFunctionError(props, requestAction, dispatch));
};

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

};


// functions
// call Add a new SAP OFI account to dictionary
const postAccountOfi = (body:FinancialAccount) => {
    const settings = {		// set settings data
        url:`/account/ofi`,
        httpMethod: 'POST',
        body:JSON.stringify(body),
        requestType: 'PostAccountOfiRequest',
        successType: 'PostAccountOfiSuccess',
        failType: 'PostAccountOfiFail'
    };
    return commonCallApi(settings);
};

// call Import SAP OFI accounts from a file
const postAccountImportOfi = () => {
    const settings = {		// set settings data
        url:`/account/import/ofi`,
        httpMethod: 'POST',
        body:undefined,
        requestType: 'PostAccountImportOfiRequest',
        successType: 'PostAccountImportOfiSuccess',
        failType: 'PostAccountImportOfiFail'
    };
    return commonCallApi(settings);
};

// call Add a new market segment to dictionary
const postSegment = (body:MarketSegmentReq) => {
    const settings = {		// set settings data
        url:`/segment`,
        httpMethod: 'POST',
        body:JSON.stringify(body),
        requestType: 'PostSegmentRequest',
        successType: 'PostSegmentSuccess',
        failType: 'PostSegmentFail'
    };
    return commonCallApi(settings);
};

// call Return list of SAP OFI accounts
const getAccountOfi = (status:string = 'active') => {
    const settings = {		// set settings data
        url:`/account/ofi?status=${status}`,
        httpMethod: 'GET',
        body:undefined,
        requestType: 'GetAccountOfiRequest',
        successType: 'GetAccountOfiSuccess',
        failType: 'GetAccountOfiFail'
    };
    return commonCallApi(settings);
};

// call Return SAP OFI account by ID
const getAccountOfiByAccountId = (accountId:number) => {
    const settings = {		// set settings data
        url:`/account/ofi/${accountId}`,
        httpMethod: 'GET',
        body:undefined,
        requestType: 'GetAccountOfiByAccountIdRequest',
        successType: 'GetAccountOfiByAccountIdSuccess',
        failType: 'GetAccountOfiByAccountIdFail'
    };
    return commonCallApi(settings);
};

// call Return list of BSCS GL accounts
const getAccountGl = (status:string = 'active') => {
    const settings = {		// set settings data
        url:`/account/gl?status=${status}`,
        httpMethod: 'GET',
        body:undefined,
        requestType: 'GetAccountGlRequest',
        successType: 'GetAccountGlSuccess',
        failType: 'GetAccountGlFail'
    };
    return commonCallApi(settings);
};

// call Return BSCS GL account by ID
const getAccountGlByAccountId = (accountId:string) => {
    const settings = {		// set settings data
        url:`/account/gl/${accountId}`,
        httpMethod: 'GET',
        body:undefined,
        requestType: 'GetAccountGlByAccountIdRequest',
        successType: 'GetAccountGlByAccountIdSuccess',
        failType: 'GetAccountGlByAccountIdFail'
    };
    return commonCallApi(settings);
};

// call Return list of Market Segments
const getSegment = () => {
    const settings = {		// set settings data
        url:`/segment`,
        httpMethod: 'GET',
        body:undefined,
        requestType: 'GetSegmentRequest',
        successType: 'GetSegmentSuccess',
        failType: 'GetSegmentFail'
    };
    return commonCallApi(settings);
};

// call Return a single Market Segment
const getSegmentBySegmentId = (segmentId:string) => {
    const settings = {		// set settings data
        url:`/segment/${segmentId}`,
        httpMethod: 'GET',
        body:undefined,
        requestType: 'GetSegmentBySegmentIdRequest',
        successType: 'GetSegmentBySegmentIdSuccess',
        failType: 'GetSegmentBySegmentIdFail'
    };
    return commonCallApi(settings);
};

// call Return account mapping
const getAccountMap = (status:string = 'all',glAccount:string,ofiAccount:string) => {
    const settings = {		// set settings data
        url:`/account/map?status=${status}&glAccount=${glAccount}&ofiAccount=${ofiAccount}`,
        httpMethod: 'GET',
        body:undefined,
        requestType: 'GetAccountMapRequest',
        successType: 'GetAccountMapSuccess',
        failType: 'GetAccountMapFail'
    };
    return commonCallApi(settings);
};

// call Return history of changes in account mapping
const getAccountMapHistory = (dateFrom:string,dateTo:string,user:string,glAccount:string,ofiAccount:string) => {
    const settings = {		// set settings data
        url:`/account/map/history?dateFrom=${dateFrom}&dateTo=${dateTo}&user=${user}&glAccount=${glAccount}&ofiAccount=${ofiAccount}`,
        httpMethod: 'GET',
        body:undefined,
        requestType: 'GetAccountMapHistoryRequest',
        successType: 'GetAccountMapHistorySuccess',
        failType: 'GetAccountMapHistoryFail'
    };
    return commonCallApi(settings);
};

// call Update SAP OFI account
const patchAccountOfiByAccountId = (accountId:number,body:FinancialAccount) => {
    const settings = {		// set settings data
        url:`/account/ofi/${accountId}`,
        httpMethod: 'PATCH',
        body:JSON.stringify(body),
        requestType: 'PatchAccountOfiByAccountIdRequest',
        successType: 'PatchAccountOfiByAccountIdSuccess',
        failType: 'PatchAccountOfiByAccountIdFail'
    };
    return commonCallApi(settings);
};

// call Remove SAP OFI account
const deleteAccountOfiByAccountId = (accountId:number,body:FinancialAccount) => {
    const settings = {		// set settings data
        url:`/account/ofi/${accountId}`,
        httpMethod: 'DELETE',
        body:JSON.stringify(body),
        requestType: 'DeleteAccountOfiByAccountIdRequest',
        successType: 'DeleteAccountOfiByAccountIdSuccess',
        failType: 'DeleteAccountOfiByAccountIdFail'
    };
    return commonCallApi(settings);
};

// call Remove an existing market segment
const deleteSegmentBySegmentId = (segmentId:string) => {
    const settings = {		// set settings data
        url:`/segment/${segmentId}`,
        httpMethod: 'DELETE',
        body:undefined,
        requestType: 'DeleteSegmentBySegmentIdRequest',
        successType: 'DeleteSegmentBySegmentIdSuccess',
        failType: 'DeleteSegmentBySegmentIdFail'
    };
    return commonCallApi(settings);
};

export const API = {
    CALL: {
        postAccountOfi,
        postAccountImportOfi,
        postSegment,
        getAccountOfi,
        getAccountOfiByAccountId,
        getAccountGl,
        getAccountGlByAccountId,
        getSegment,
        getSegmentBySegmentId,
        getAccountMap,
        getAccountMapHistory,
        patchAccountOfiByAccountId,
        deleteAccountOfiByAccountId,
        deleteSegmentBySegmentId	},
    MODELS: {
        FinancialAccount,
        MarketSegment,
        MarketSegmentReq,
        AccountMap,
        AccountMapReq,
        AccountMapLog,
        SegmentMapEntry,
        SegmentMap,
        SegmentMapReq	}
};