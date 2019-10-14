import { ActionRequestData, ActionResponseData } from "../../api/common-middleware";
import { ResultSetAccountDictBscss } from "../../api/api-models";

export class BscsAccountsType {
    GET: ActionResponseData<ResultSetAccountDictBscss, ActionRequestData<null, null>>;
}

export const getbscsAccountsDictReduxProperty = (root, requestType, property, negativeResult) => {
    return root.bscsAccounts !== undefined
        && root.bscsAccounts[requestType] !== undefined
        && root.bscsAccounts[requestType][property] !== undefined
        ?
        root.bscsAccounts[requestType][property]
        :
        negativeResult;
}

export const getbscsAccountsResponseReduxProperty = (root, requestType, property, negativeResult) => {
    return root.bscsAccounts !== undefined
        && root.bscsAccounts[requestType] !== undefined
        && root.bscsAccounts[requestType].response !== undefined
        && root.bscsAccounts[requestType].response[property] !== undefined
        ?
        root.bscsAccounts[requestType].response[property]
        :
        negativeResult;
}