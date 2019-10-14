export const GetDictionaryAccountBscsHandler = () => {
    return {
        GetDictionaryAccountBscsRequest: (state: BscsAccountsType, action: ActionRequestData<null, null>) => {
            return { ...state, GET: action };
        },
        GetDictionaryAccountBscsSuccess: (state: BscsAccountsType, action: ActionResponseData<ResultSetAccountDictBscss, ActionRequestData<null, null>>) => {
            return { ...state, GET: action };
        },
        GetDictionaryAccountBscsFail: (state: BscsAccountsType, action: ActionResponseData<ResultSetError, ActionRequestData<null, null>>) => {
            return { ...state, GET: action };
        },
    }
};