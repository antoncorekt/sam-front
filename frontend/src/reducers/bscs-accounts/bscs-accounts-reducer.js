export const GetDictionaryAccountBscsHandler = () => {
    return {
        GetDictionaryAccountBscsRequest: (state: BscsAccountsType, action: ActionRequestData<null, null>) => {
            return { ...state, GET: action };
        },
        GetDictionaryAccountBscsSuccess: (state: BscsAccountsType, action: ActionResponseData<ResultSetAccountDictBscss, ActionRequestData<null, null>>) => {
            let sortedAction = action;
            sortedAction.response.data = sortedAction.response.data
                .filter(item => item.active === "A")
                .sort((a, b) => {
                    if (a.account > b.account) {
                        return 1;
                    }
                    else if (a.account === b.account) {
                        return 0;
                    }
                    else
                        return -1;
                })

            return { ...state, GET: sortedAction };
        },
        GetDictionaryAccountBscsFail: (state: BscsAccountsType, action: ActionResponseData<ResultSetError, ActionRequestData<null, null>>) => {
            return { ...state, GET: action };
        },
    }
};