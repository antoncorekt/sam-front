import {ActionRequestData, ActionResponseData} from "../../api/common-middleware";
import {
    Account,
    AccountDictSap,
    DeleteAccountByStatusByReleaseByBscsAccountQueryParams,
    GetAccountByStatusByReleaseQueryParams,
    PatchAccountByStatusByReleaseByBscsAccountQueryParams,
    PutAccountByStatusByReleaseByBscsAccountQueryParams,
    RequestSetAccount,
    ResultSetAccount,
    ResultSetAccountDictSaps,
    ResultSetAccounts,
    ResultSetCount,
    Status,
    Status15
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

    static isAccountFromBackend(account: Account):boolean {
        return account.status === Status15.W || account.status === Status15.C || account.status === Status15.P
    }

    static getOriginalAccountIfModified(store: AccountMappingType, account: Account): AccountEntry{
        return store.backendAccountsOriginal.find(accEntry => accEntry.frontendId === account.frontendId)
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
        const maxRelease =  Math.max(arr.map(acc => acc.releaseId));
        return isNaN(maxRelease)?0:maxRelease;
    }

    static getAllAccounts(store: AccountMappingType): Array<Account> {
        return [...store.usersAccounts.accounts, ...this.getBackendAccount(store)];
    }

    static isDeleteAccountSuccessful(store: AccountMappingType):boolean {
        return store.deleteAccount.response !== undefined
            && store.deleteAccount.response.count !== 0;
    }

    static isPatchAccountSuccessful(store: AccountMappingType):boolean {
        return store.patchAccount.response !== undefined
            && store.patchAccount.response.count !== 0;
    }

}