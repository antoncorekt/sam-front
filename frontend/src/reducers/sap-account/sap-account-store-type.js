import { ActionRequestData, ActionResponseData } from "../../api/common-middleware";
import { AccountDictSap, ResultSetAccountDictSaps, ResultSetCount } from "../../api/api-models";


export class SapAccountStoreType {
    fileUploadStatus: ActionResponseData<any, any> = {};
    GET: ActionResponseData<ResultSetAccountDictSaps, ActionRequestData<null, null>> = {};
    DELETE: ActionResponseData<ResultSetCount, ActionRequestData<null, null>> = {};

    static isFileUploadSuccess(sapAccountStore: SapAccountStoreType): boolean {
        return sapAccountStore.fileUploadStatus.response !== undefined;
    }

    static getSapAccounts(sapAccountStore: SapAccountStoreType): Array<AccountDictSap> {
        if (sapAccountStore.GET.response === undefined)
            return [];

        return sapAccountStore.GET.response.data;
    }

}

export const getSapAccountOfiResponseReduxProperty = (root, requestType, property, negativeResult) => {
    return root.sapAccountOfi !== undefined
        && root.sapAccountOfi[requestType] !== undefined
        && root.sapAccountOfi[requestType].response !== undefined
        && root.sapAccountOfi[requestType].response[property] !== undefined
        ?
        root.sapAccountOfi[requestType].response[property]
        :
        negativeResult;
}