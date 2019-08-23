
import {BACKEND_URL} from './conf';

// ----- Enums ------
type FinancialAccountStatusEnum = 'active' | 'inactive';
type MarketSegmentCategoryEnum = 'BIZ' | 'PRIV';
type MarketSegmentReqCategoryEnum = 'PRIV';
type AccountMapStatusEnum = 'approved' | 'unapproved';
type AccountMapLogActionEnum = 'insert' | 'update' | 'delete';

// ----- Models ------
class FinancialAccount { id:string; name:string; status:FinancialAccountStatusEnum; type:string;  }
class MarketSegment { id:string; category:MarketSegmentCategoryEnum; entryDate:Date;  }
class MarketSegmentReq { id:string; category:MarketSegmentReqCategoryEnum;  }
class AccountMap { glAccount:FinancialAccount; ofiAccount:FinancialAccount; validFrom:Date; vatCodeInd:boolean; sapSegmentText:string; ofiWbsCode:string; citMarkerVatFlag:number; status:AccountMapStatusEnum;  }
class AccountMapReq { glAccountId:string; ofiAccountId:string; validFrom:Date; vatCodeInd:boolean; sapSegmentText:string; ofiWbsCode:string; citMarkerVatFlag:number;  }
class AccountMapLog { old:AccountMap; new:AccountMap; user:string; action:AccountMapLogActionEnum; actionDate:Date;  }
class SegmentMapEntry { segmentId:string; orderNumber:number;  }
class SegmentMap { glAccount:FinancialAccount; validFrom:Date; segments:Array<SegmentMapEntry>;  }
class SegmentMapReq { validFrom:Date;  }

// general components for function
const additionalFunctions = ( ) => {

    function* idMaker() {
        let index = 0;
        while (true)
            yield index++;
    }

    class ActionRequestData {
        request: any;
        date: Date;
        url: string;
        type: string;
        method: string;
    }

    class ResponseData {
        requestAction: any;
        response: any;
        date: Date;
        timeDiff: Date;
        fail: boolean;
        msg: string;
        code: string;
        errorType: string;
    }

    function requestActionCreatorFunction(props: ApiProperties): ActionRequestData {
        return {
            request: props.body,
            date: new Date(),
            url: props.url,
            method: props.httpMethod,
            type: props.type
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
            msg: msg,
            code: code,
            timeDiff: Math.abs(date.getTime() - requestAction.date.getTime()),
            fail: true,
            errorType: "network"
        }
    }

    return {
        ActionRequestData,
        idMaker: idMaker(),
        requestActionCreator: requestActionCreatorFunction,
        successActionCreator: successActionCreatorFunction,
        failActionCreatorBackendError: failActionCreatorFunctionBackendError,
        failActionCreatorNetworkError: failActionCreatorFunctionNetworkError
    }

};

export const _ = additionalFunctions();

class ApiProperties {
    contentType: string;
    url: string;
    httpMethod: string;
    body: any;
    type: string;
    headers: HeadersInit;
}
// function for fetches
const commonCallApi = (props: ApiProperties )=>( dispatch) => {



    // class ApiProperties {
    //     contentType: string;
    //     url: string;
    //     httpMethod: string;
    //     body: any;
    //     headers: HeadersInit;
    //     msg: string = "Proszę czekać...";
    // }

    // idGen already have from ApiCallGeneralFunctions
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

const handlerFunctionError = (props:ApiProperties, requestAction: any, dispatch) => (error:any) => {

    console.error("handlerFunctionError", error);
    dispatch(
        _.failActionCreatorNetworkError(props.errorType,error, requestAction, "Network error: ", 404)
    );
};

const handlerFunctionSuccess = (response:any) => {

    // magic with redux

};


// functions
// call Add a new SAP OFI account to dictionary
const postAccountOfi = (body:FinancialAccount) => {
    const settings = {		// set settings data
        url:`/account/ofi`,
        httpMethod: 'POST',
        body:JSON.stringify(body),
        type: 'PostAccountOfi'
    };
    return commonCallApi(settings);
};

// call Import SAP OFI accounts from a file
const postAccountImportOfi = () => {
    const settings = {		// set settings data
        url:`/account/import/ofi`,
        httpMethod: 'POST',
        body:undefined,
        type: 'PostAccountImportOfi'
    };
    return commonCallApi(settings);
};

// call Add a new market segment to dictionary
const postSegment = (body:MarketSegmentReq) => {
    const settings = {		// set settings data
        url:`/segment`,
        httpMethod: 'POST',
        body:JSON.stringify(body),
        type: 'PostSegment'
    };
    return commonCallApi(settings);
};

// call Return list of SAP OFI accounts
const getAccountOfi = (status:string = 'active') => {
    const settings = {		// set settings data
        url:`/account/ofi?status=${status}`,
        httpMethod: 'GET',
        body:undefined,
        type: 'GetAccountOfi'
    };
    return commonCallApi(settings);
};

// call Return SAP OFI account by ID
const getAccountOfiByAccountId = (accountId:number) => {
    const settings = {		// set settings data
        url:`/account/ofi/${accountId}`,
        httpMethod: 'GET',
        body:undefined,
        type: 'GetAccountOfiByAccountId'
    };
    return commonCallApi(settings);
};

// call Return list of BSCS GL accounts
const getAccountGl = (status:string = 'active') => {
    const settings = {		// set settings data
        url:`/account/gl?status=${status}`,
        httpMethod: 'GET',
        body:undefined,
        type: 'GetAccountGl'
    };
    return commonCallApi(settings);
};

// call Return BSCS GL account by ID
const getAccountGlByAccountId = (accountId:string) => {
    const settings = {		// set settings data
        url:`/account/gl/${accountId}`,
        httpMethod: 'GET',
        body:undefined,
        type: 'GetAccountGlByAccountId'
    };
    return commonCallApi(settings);
};

// call Return list of Market Segments
const getSegment = () => {
    const settings = {		// set settings data
        url:`/segment`,
        httpMethod: 'GET',
        body:undefined,
        type: 'GetSegment'
    };
    return commonCallApi(settings);
};

// call Return a single Market Segment
const getSegmentBySegmentId = (segmentId:string) => {
    const settings = {		// set settings data
        url:`/segment/${segmentId}`,
        httpMethod: 'GET',
        body:undefined,
        type: 'GetSegmentBySegmentId'
    };
    return commonCallApi(settings);
};

// call Return account mapping
const getAccountMap = (status:string = 'all',glAccount:string,ofiAccount:string) => {
    const settings = {		// set settings data
        url:`/account/map?status=${status}&glAccount=${glAccount}&ofiAccount=${ofiAccount}`,
        httpMethod: 'GET',
        body:undefined,
        type: 'GetAccountMap'
    };
    return commonCallApi(settings);
};

// call Return history of changes in account mapping
const getAccountMapHistory = (dateFrom:string,dateTo:string,user:string,glAccount:string,ofiAccount:string) => {
    const settings = {		// set settings data
        url:`/account/map/history?dateFrom=${dateFrom}&dateTo=${dateTo}&user=${user}&glAccount=${glAccount}&ofiAccount=${ofiAccount}`,
        httpMethod: 'GET',
        body:undefined,
        type: 'GetAccountMapHistory'
    };
    return commonCallApi(settings);
};

// call Update SAP OFI account
const patchAccountOfiByAccountId = (accountId:number,body:FinancialAccount) => {
    const settings = {		// set settings data
        url:`/account/ofi/${accountId}`,
        httpMethod: 'PATCH',
        body:JSON.stringify(body),
        type: 'PatchAccountOfiByAccountId'
    };
    return commonCallApi(settings);
};

// call Remove SAP OFI account
const deleteAccountOfiByAccountId = (accountId:number,body:FinancialAccount) => {
    const settings = {		// set settings data
        url:`/account/ofi/${accountId}`,
        httpMethod: 'DELETE',
        body:JSON.stringify(body),
        type: 'DeleteAccountOfiByAccountId'
    };
    return commonCallApi(settings);
};

// call Remove an existing market segment
const deleteSegmentBySegmentId = (segmentId:string) => {
    const settings = {		// set settings data
        url:`/segment/${segmentId}`,
        httpMethod: 'DELETE',
        body:undefined,
        type: 'DeleteSegmentBySegmentId'
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