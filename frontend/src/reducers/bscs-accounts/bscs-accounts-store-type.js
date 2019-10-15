import { ActionRequestData, ActionResponseData } from "../../api/common-middleware";
import {AccountDictBscs, ResultSetAccountDictBscss} from "../../api/api-models";

export class BscsAccountsType {
    GET: ActionResponseData<ResultSetAccountDictBscss, ActionRequestData<null, null>>;

    static getBscsAccounts = (store: BscsAccountsType): Array<AccountDictBscs> => {
        if (store.GET.response === undefined || !Array.isArray(store.GET.response.data))
            return [];
        return store.GET.response.data;
    }

}

export const getBscsAccountsDictReduxProperty = (root, requestType, property, negativeResult) => {
    return root.bscsAccounts !== undefined
        && root.bscsAccounts[requestType] !== undefined
        && root.bscsAccounts[requestType][property] !== undefined
        ?
        root.bscsAccounts[requestType][property]
        :
        negativeResult;
}

export const getBscsAccountsResponseReduxProperty = (root, requestType, property, negativeResult) => {
    return root.bscsAccounts !== undefined
        && root.bscsAccounts[requestType] !== undefined
        && root.bscsAccounts[requestType].response !== undefined
        && root.bscsAccounts[requestType].response[property] !== undefined
        ?
        root.bscsAccounts[requestType].response[property]
        :
        negativeResult;
}