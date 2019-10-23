import {ActionRequestData, ActionResponseData} from "../../api/common-middleware";
import {
    Account,
    AccountDictSap, AccountLog,
    DeleteAccountByStatusByReleaseByBscsAccountQueryParams, DeleteReleaseByReleaseQueryParams,
    GetAccountByStatusByReleaseQueryParams, GetAccountLogQueryParams,
    PatchAccountByStatusByReleaseByBscsAccountQueryParams,
    PutAccountByStatusByReleaseByBscsAccountQueryParams,
    RequestSetAccount,
    ResultSetAccount,
    ResultSetAccountDictSaps, ResultSetAccountLogs,
    ResultSetAccounts,
    ResultSetCount, ResultSetError, ResultSetOk,
    Status,
    Status15
} from "../../api/api-models";
import {getObjectDiff} from "../../utils/Utils";

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

export class ModifyAccountActionType {
    account: Account;

    static createAction(account: Account){

        if (AccountMappingType.isAccountFromBackend(account)) {
            return {
                type: "ModifyBackendAccountAction",
                account: account
            }
        }
        else {
            return {
                type: "ModifyUsersAccountAction",
                account: account
            }
        }
    }
}

export class UserAccountType {
    accounts: Array<Account> = [];
}

export type AccountEntry = {
    frontendId: string,
    account: Account
}

export class AccountMappingType {
    backendAccounts: ActionResponseData<ResultSetAccounts,ActionRequestData<null, GetAccountByStatusByReleaseQueryParams>> = {};
    backendAccountsOriginal: Array<AccountEntry> = [];
    usersAccounts: UserAccountType = new UserAccountType();
    postAccount: ActionResponseData<ResultSetAccount,ActionRequestData<RequestSetAccount, null>> = {};
    patchAccount: ActionResponseData<ResultSetAccounts,ActionRequestData<null, PatchAccountByStatusByReleaseByBscsAccountQueryParams>> = {};
    deleteAccount: ActionResponseData<ResultSetCount,ActionRequestData<DeleteAccountByStatusByReleaseByBscsAccountQueryParams, null>> = {};
    accountLog: ActionResponseData<ResultSetAccountLogs,ActionRequestData<null, GetAccountLogQueryParams>> = {};
    postRelease: ActionResponseData<ResultSetOk,ActionRequestData<null, null>> = {};
    revertRelease: ActionResponseData<ResultSetError,ActionRequestData<null, DeleteReleaseByReleaseQueryParams>> = {};

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

    static isAccountFromBackend(account: Account):boolean {
        return account.status === Status15.W || account.status === Status15.C || account.status === Status15.P
    }

    static getOriginalAccountIfModified(store: AccountMappingType, account: Account): AccountEntry{
        return store.backendAccountsOriginal.find(accEntry => accEntry.frontendId === account.frontendId)
    }

    static getModifiedAccountForPatch(store: AccountMappingType, account: Account): AccountEntry{
        const accountEntry:AccountEntry = store.backendAccountsOriginal.find(accEntry => accEntry.frontendId === account.frontendId);
        if (accountEntry === undefined) return {};
        return getObjectDiff(accountEntry.account, account);
    }

    static isAccountsDataDeepEquals(acc1:Account, acc2: Account): boolean{
        return JSON.stringify(acc1) === JSON.stringify(acc2);
    }

    static isAccountsEquals(acc1:Account, acc2: Account): boolean{

        if (acc1.frontendId !== undefined && acc2.frontendId !== undefined){
            return acc1.frontendId === acc2.frontendId;
        }

        return acc1.bscsAccount === acc2.bscsAccount
        && acc1.ofiSapAccount === acc2.ofiSapAccount
        && acc1.validFromDate === acc2.validFromDate;
    }

    static getCurrentRelease(arr: Array<Account>): number{
        return Math.max(...arr.map(acc => Number.parseInt(acc.releaseId,10)));
    }

    static getAllAccounts(store: AccountMappingType): Array<Account> {
        return [...store.usersAccounts.accounts, ...this.getBackendAccount(store)];
    }

    static isDeleteAccountSuccessful(store: AccountMappingType):boolean {
        return store.deleteAccount.response !== undefined
            && store.deleteAccount.response.count !== 0;
    }

    static isPostReleaseSuccessful(store: AccountMappingType):boolean {
        return store.postRelease.response !== undefined
            && store.postRelease.response.text === "OK";
    }

    static isPatchAccountSuccessful(store: AccountMappingType):boolean {
        return store.patchAccount.response !== undefined
            && store.patchAccount.response.count !== 0;
    }

    static isRevertReleaseSuccessful(store: AccountMappingType):boolean {
        return store.revertRelease.response !== undefined
            && store.revertRelease.response.text === "OK";
    }

    static getAccountLogs(accountLogStore: ActionResponseData<ResultSetAccountLogs,ActionRequestData<null, GetAccountLogQueryParams>>): Array<AccountLog> {

        if (accountLogStore.response !== undefined && accountLogStore.response.data !== undefined){
            return accountLogStore.response.data;
        }

        return [];
    }

}