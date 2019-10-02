import {ActionRequestData, ActionResponseData} from "../../api/common-middleware";
import {ResultSetAccountDictSaps, ResultSetCount, ResultSetError, ResultSetOk} from "../../api/api-models";
import {SapAccountStoreType} from "./sap-account-store-type";


export const PostDictionaryAccountSapHandler = () => {
    return {
        PostDictionaryAccountSapRequest:(state:SapAccountStoreType, action:ActionRequestData<File, null>)=>{
            return {...state, fileUploadStatus: action};
        },
        PostDictionaryAccountSapSuccess:(state:SapAccountStoreType, action:ActionResponseData<ResultSetOk,ActionRequestData<File, null>>)=>{
            return {...state, fileUploadStatus: action};
        },
        PostDictionaryAccountSapFail:(state:SapAccountStoreType, action:ActionResponseData<ResultSetError,ActionRequestData<File, null>>)=>{
            return {...state, fileUploadStatus: action};
        },
    }
};

export const GetDictionaryAccountSapHandler = () => {
    return {
        GetDictionaryAccountSapRequest:(state:SapAccountStoreType, action:ActionRequestData<null, null>)=>{
            return {...state, dict: action};
        },
        GetDictionaryAccountSapSuccess:(state:SapAccountStoreType, action:ActionResponseData<ResultSetAccountDictSaps,ActionRequestData<null, null>>)=>{
            return {...state, dict: action};
        },
        GetDictionaryAccountSapFail:(state:SapAccountStoreType, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
            return {...state, dict: action};
        },
    }
};

export const DeleteDictionaryAccountSapHandler = () => {
    return {
        DeleteDictionaryAccountSapRequest:(state:any, action:ActionRequestData<null, null>)=>{
            return {...state, deleteDict:action};
        },
        DeleteDictionaryAccountSapSuccess:(state:any, action:ActionResponseData<ResultSetCount,ActionRequestData<null, null>>)=>{
            return {...state,
                deleteDict:action,
                dict: new ResultSetAccountDictSaps.Builder()
                    .withData([])
                    .build()

            };
        },
        DeleteDictionaryAccountSapFail:(state:any, action:ActionResponseData<ResultSetError,ActionRequestData<null, null>>)=>{
            return {...state,  deleteDict:action};
        },
    }
};