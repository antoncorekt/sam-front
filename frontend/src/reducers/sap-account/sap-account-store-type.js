import {ActionRequestData, ActionResponseData} from "../../api/common-middleware";
import {AccountDictSap, ResultSetAccountDictSaps} from "../../api/api-models";


export class SapAccountStoreType {
    fileUploadStatus: ActionResponseData<any, any> = {};
    dict: ActionResponseData<ResultSetAccountDictSaps,ActionRequestData<null, null>> = {};

    static isFileUploadSuccess(sapAccountStore: SapAccountStoreType): boolean{
        return sapAccountStore.fileUploadStatus.response === undefined;
    }

    static getSapAccounts(sapAccountStore: SapAccountStoreType): Array<AccountDictSap> {
        if (sapAccountStore.dict.response === undefined)
            return [];

        return sapAccountStore.dict.response.data;
    }

}