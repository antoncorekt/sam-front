import {ActionRequestData, ActionResponseData} from "../../api/common-middleware";
import {Account, AccountDictSap, ResultSetAccountDictSaps, ResultSetCount} from "../../api/api-models";

class UserAccountType {
    accounts: Array<Account> = [];
}

export class AccountMappingType {
    accounts: ActionResponseData<any, any> = {};
    usersAccounts: UserAccountType = new UserAccountType();

}