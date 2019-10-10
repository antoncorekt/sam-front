import {ActionRequestData, ActionResponseData} from "../../api/common-middleware";
import {
    Account,
    AccountDictSap,
    DeleteAccountByStatusByReleaseByBscsAccountQueryParams, GetAccountByStatusByReleaseQueryParams,
    PutAccountByStatusByReleaseByBscsAccountQueryParams,
    RequestSetAccount,
    ResultSetAccount,
    ResultSetAccountDictSaps,
    ResultSetAccounts,
    ResultSetCount, Status, Status15
} from "../../api/api-models";

export class AddEmptyAccountActionType {
    user: string;

    static createAction(user: string){
        return {
            type: "AddEmptyAccountAction",
            user: user
        }
    }
}

export class DeleteUsersAccountActionType {
    account: Account;

    static createAction(account: Account){
        return {
            type: "DeleteUsersAccountAction",
            account: account
        }
    }
}

export class ModifyUsersAccountActionType {
    account: Account;

    static createAction(account: Account){
        return {
            type: "ModifyUsersAccountAction",
            account: account
        }
    }
}

export class UserAccountType {
    accounts: Array<Account> = [];
}

export class AccountMappingType {
    backendAccounts: ActionResponseData<ResultSetAccounts,ActionRequestData<null, GetAccountByStatusByReleaseQueryParams>> = {};
    usersAccounts: UserAccountType = new UserAccountType();
    postAccount: ActionResponseData<ResultSetAccount,ActionRequestData<RequestSetAccount, null>> = {};
    deleteAccount: ActionResponseData<ResultSetCount,ActionRequestData<DeleteAccountByStatusByReleaseByBscsAccountQueryParams, null>> = {};
    putAccount: ActionResponseData<ResultSetAccounts,ActionRequestData<PutAccountByStatusByReleaseByBscsAccountQueryParams, null>> = {};

    static getBackendAccount(store: AccountMappingType): Array<Account> {
        if (store.backendAccounts.response !== undefined
            && store.backendAccounts.response.data !== undefined
            && store.backendAccounts.response.data.length > 0) {
            return store.backendAccounts.response.data
        }

        return [];
    }

    static isLoading(store: AccountMappingType):boolean {

        return store.backendAccounts.fetching === true
            || store.postAccount.fetching  === true;
    }

    static isAccountFromBackend(account: Account){
        return account.status === Status15.W || account.status === Status15.C || account.status === Status15.P
    }

    static isAccountsEquals(acc1:Account, acc2: Account): boolean{
        return acc1.bscsAccount === acc2.bscsAccount
        && acc1.ofiSapAccount === acc2.ofiSapAccount
        && acc1.validFromDate === acc2.validFromDate;
    }

    static getAllAccounts(store: AccountMappingType): Array<Account> {
        return [...store.usersAccounts.accounts, ...this.getBackendAccount(store)];
    }

    static isPostAccountSuccessful(store: AccountMappingType):boolean {
        return store.postAccount.response !== undefined
            && store.postAccount.response.status === Status.OK;
    }

    static isDeleteAccountSuccessful(store: AccountMappingType):boolean {
        return store.deleteAccount.response !== undefined
            && store.deleteAccount.response.count !== 0;
    }

    static isPutAccountSuccessful(store: AccountMappingType):boolean {
        return store.putAccount.response !== undefined
            && store.putAccount.response.status === Status.OK;
    }

}