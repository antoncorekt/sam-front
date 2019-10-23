
// ----- Enums ------

export class Status15 {
    static get C(){ return 'C'; } // to control
    static get P(){ return 'P'; } // prod
    static get W(){ return 'W'; } // work
    static get F(){ return 'F'; } // frontend
}

export class Release {
    static get 0(){ return '0'; }
    static get LAST(){ return 'last'; }
}

export class Role {
    static get BOOKER(){ return 'Booker'; }
    static get CONTROL(){ return 'Control'; }
    static get ADMIN(){ return 'Admin'; }
}


export class Status {
    static get OK(){ return 'Ok'; }
    static get ERROR(){ return 'Error'; }
}


// ----- Models ------

export class RequestSetUserLogin {
    data:UserLogin;

    static get Builder() {class Builder { _model: RequestSetUserLogin = new RequestSetUserLogin();withData(data:UserLogin): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get data() { return 'data';} } return ObjectProps;}
}

export class UserLogin {
    user:string;
    role:Role;
    password:string;

    static get Builder() {class Builder { _model: UserLogin = new UserLogin();withUser(user:string): Builder { this._model.user=user; return this;}withRole(role:Role): Builder { this._model.role=role; return this;}withPassword(password:string): Builder { this._model.password=password; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get user() { return 'user';} static get role() { return 'role';} static get password() { return 'password';} } return ObjectProps;}
}

export class ResultSetUserLogin {
    data:UserLoginConf;

    static get Builder() {class Builder { _model: ResultSetUserLogin = new ResultSetUserLogin();withData(data:UserLoginConf): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get data() { return 'data';} } return ObjectProps;}
}

export class UserLoginConf {
    user:User;
    token:string;

    static get Builder() {class Builder { _model: UserLoginConf = new UserLoginConf();withUser(user:User): Builder { this._model.user=user; return this;}withToken(token:string): Builder { this._model.token=token; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get user() { return 'user';} static get token() { return 'token';} } return ObjectProps;}
}

export class ResultSetUserInfo {
    data:UserLoginInfo;

    static get Builder() {class Builder { _model: ResultSetUserInfo = new ResultSetUserInfo();withData(data:UserLoginInfo): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get data() { return 'data';} } return ObjectProps;}
}

export class UserLoginInfo {
    user:User;

    static get Builder() {class Builder { _model: UserLoginInfo = new UserLoginInfo();withUser(user:User): Builder { this._model.user=user; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get user() { return 'user';} } return ObjectProps;}
}

export class User {
    user:string;
    role:Role;

    static get Builder() {class Builder { _model: User = new User();withUser(user:string): Builder { this._model.user=user; return this;}withRole(role:Role): Builder { this._model.role=role; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get user() { return 'user';} static get role() { return 'role';} } return ObjectProps;}
}

export class RequestSetUserLogoff {
    data:UserLogoffConf;

    static get Builder() {class Builder { _model: RequestSetUserLogoff = new RequestSetUserLogoff();withData(data:UserLogoffConf): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get data() { return 'data';} } return ObjectProps;}
}

export class UserLogoffConf {
    user:string;

    static get Builder() {class Builder { _model: UserLogoffConf = new UserLogoffConf();withUser(user:string): Builder { this._model.user=user; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get user() { return 'user';} } return ObjectProps;}
}

export class RequestSetAccount {
    data:Account;

    static get Builder() {class Builder { _model: RequestSetAccount = new RequestSetAccount();withData(data:Account): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get data() { return 'data';} } return ObjectProps;}
}

export class ResultSetAccount {
    status:Status;
    data:Account;

    static get Builder() {class Builder { _model: ResultSetAccount = new ResultSetAccount();withStatus(status:Status): Builder { this._model.status=status; return this;}withData(data:Account): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get status() { return 'status';} static get data() { return 'data';} } return ObjectProps;}
}

export class Account {
    status:string;
    releaseId:number;
    bscsAccount:string;
    ofiSapAccount:string;
    validFromDate:Date;
    vatCodeInd:string;
    ofiSapWbsCode:string;
    citMarkerVatFlag:number;
    entryDate:Date;
    entryOwner:string;
    updateDate:Date;
    updateOwner:string;
    releaseDate:Date;
    releaseOwner:string;

    frontendId:string;
    modified:false;

    static get Builder() {class Builder { _model: Account = new Account();withModifiedFrontProp(modified:string): Builder { this._model.modified=modified; return this;}withFrontendIdFrontProp(frontendId:string): Builder { this._model.frontendId=frontendId; return this;}withStatus(status:string): Builder { this._model.status=status; return this;}withReleaseId(releaseId:number): Builder { this._model.releaseId=releaseId; return this;}withBscsAccount(bscsAccount:string): Builder { this._model.bscsAccount=bscsAccount; return this;}withOfiSapAccount(ofiSapAccount:string): Builder { this._model.ofiSapAccount=ofiSapAccount; return this;}withValidFromDate(validFromDate:Date): Builder { this._model.validFromDate=validFromDate; return this;}withVatCodeInd(vatCodeInd:string): Builder { this._model.vatCodeInd=vatCodeInd; return this;}withOfiSapWbsCode(ofiSapWbsCode:string): Builder { this._model.ofiSapWbsCode=ofiSapWbsCode; return this;}withCitMarkerVatFlag(citMarkerVatFlag:number): Builder { this._model.citMarkerVatFlag=citMarkerVatFlag; return this;}withEntryDate(entryDate:Date): Builder { this._model.entryDate=entryDate; return this;}withEntryOwner(entryOwner:string): Builder { this._model.entryOwner=entryOwner; return this;}withUpdateDate(updateDate:Date): Builder { this._model.updateDate=updateDate; return this;}withUpdateOwner(updateOwner:string): Builder { this._model.updateOwner=updateOwner; return this;}withReleaseDate(releaseDate:Date): Builder { this._model.releaseDate=releaseDate; return this;}withReleaseOwner(releaseOwner:string): Builder { this._model.releaseOwner=releaseOwner; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get status() { return 'status';} static get releaseId() { return 'releaseId';} static get bscsAccount() { return 'bscsAccount';} static get ofiSapAccount() { return 'ofiSapAccount';} static get validFromDate() { return 'validFromDate';} static get vatCodeInd() { return 'vatCodeInd';} static get ofiSapWbsCode() { return 'ofiSapWbsCode';} static get citMarkerVatFlag() { return 'citMarkerVatFlag';} static get entryDate() { return 'entryDate';} static get entryOwner() { return 'entryOwner';} static get updateDate() { return 'updateDate';} static get updateOwner() { return 'updateOwner';} static get releaseDate() { return 'releaseDate';} static get releaseOwner() { return 'releaseOwner';} } return ObjectProps;}
}

export class ResultSetAccounts {
    status:Status;
    count:number;
    data:Array<Account>;

    static get Builder() {class Builder { _model: ResultSetAccounts = new ResultSetAccounts();withStatus(status:Status): Builder { this._model.status=status; return this;}withCount(count:number): Builder { this._model.count=count; return this;}withData(data:Array<Account>): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get status() { return 'status';} static get count() { return 'count';} static get data() { return 'data';} } return ObjectProps;}
}

export class ResultSetAccountLogs {
    status:Status;
    count:number;
    data:Array<AccountLog>;

    static get Builder() {class Builder { _model: ResultSetAccountLogs = new ResultSetAccountLogs();withStatus(status:Status): Builder { this._model.status=status; return this;}withCount(count:number): Builder { this._model.count=count; return this;}withData(data:Array<AccountLog>): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get status() { return 'status';} static get count() { return 'count';} static get data() { return 'data';} } return ObjectProps;}
}

export class AccountLog {
    opcode:string;
    opdate:Date;
    bscsAccount:string;
    ofiSapAccount:string;
    validFromDate:Date;
    vatCodeInd:string;
    ofiSapWbsCode:string;
    citMarkerVatFlag:number;
    entryDate:Date;
    entryOwner:string;
    updateDate:Date;
    updateOwner:string;
    releaseDate:Date;
    releaseOwner:string;

    static get Builder() {class Builder { _model: AccountLog = new AccountLog();withOpcode(opcode:string): Builder { this._model.opcode=opcode; return this;}withOpdate(opdate:Date): Builder { this._model.opdate=opdate; return this;}withBscsAccount(bscsAccount:string): Builder { this._model.bscsAccount=bscsAccount; return this;}withOfiSapAccount(ofiSapAccount:string): Builder { this._model.ofiSapAccount=ofiSapAccount; return this;}withValidFromDate(validFromDate:Date): Builder { this._model.validFromDate=validFromDate; return this;}withVatCodeInd(vatCodeInd:string): Builder { this._model.vatCodeInd=vatCodeInd; return this;}withOfiSapWbsCode(ofiSapWbsCode:string): Builder { this._model.ofiSapWbsCode=ofiSapWbsCode; return this;}withCitMarkerVatFlag(citMarkerVatFlag:number): Builder { this._model.citMarkerVatFlag=citMarkerVatFlag; return this;}withEntryDate(entryDate:Date): Builder { this._model.entryDate=entryDate; return this;}withEntryOwner(entryOwner:string): Builder { this._model.entryOwner=entryOwner; return this;}withUpdateDate(updateDate:Date): Builder { this._model.updateDate=updateDate; return this;}withUpdateOwner(updateOwner:string): Builder { this._model.updateOwner=updateOwner; return this;}withReleaseDate(releaseDate:Date): Builder { this._model.releaseDate=releaseDate; return this;}withReleaseOwner(releaseOwner:string): Builder { this._model.releaseOwner=releaseOwner; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get opcode() { return 'opcode';} static get opdate() { return 'opdate';} static get bscsAccount() { return 'bscsAccount';} static get ofiSapAccount() { return 'ofiSapAccount';} static get validFromDate() { return 'validFromDate';} static get vatCodeInd() { return 'vatCodeInd';} static get ofiSapWbsCode() { return 'ofiSapWbsCode';} static get citMarkerVatFlag() { return 'citMarkerVatFlag';} static get entryDate() { return 'entryDate';} static get entryOwner() { return 'entryOwner';} static get updateDate() { return 'updateDate';} static get updateOwner() { return 'updateOwner';} static get releaseDate() { return 'releaseDate';} static get releaseOwner() { return 'releaseOwner';} } return ObjectProps;}
}


export class GetAccountLogQueryParams {
    account:string;

    static get Builder() {class Builder { _model: GetAccountLogQueryParams = new GetAccountLogQueryParams();withAccount(account:string): Builder { this._model.account=account; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get account() { return 'account';} } return ObjectProps;}
}

export class RequestSetOrder {
    data:Order;

    static get Builder() {class Builder { _model: RequestSetOrder = new RequestSetOrder();withData(data:Order): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get data() { return 'data';} } return ObjectProps;}
}

export class ResultSetOrder {
    status:Status;
    data:Order;

    static get Builder() {class Builder { _model: ResultSetOrder = new ResultSetOrder();withStatus(status:Status): Builder { this._model.status=status; return this;}withData(data:Order): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get status() { return 'status';} static get data() { return 'data';} } return ObjectProps;}
}

export class Order {
    status:string;
    releaseId:number;
    bscsAccount:string;
    segmentCode:string;
    orderNumber:string;
    validFromDate:Date;
    entryDate:Date;
    entryOwner:string;
    updateDate:Date;
    updateOwner:string;
    releaseDate:Date;
    releaseOwner:string;

    static get Builder() {class Builder { _model: Order = new Order();withStatus(status:string): Builder { this._model.status=status; return this;}withReleaseId(releaseId:number): Builder { this._model.releaseId=releaseId; return this;}withBscsAccount(bscsAccount:string): Builder { this._model.bscsAccount=bscsAccount; return this;}withSegmentCode(segmentCode:string): Builder { this._model.segmentCode=segmentCode; return this;}withOrderNumber(orderNumber:string): Builder { this._model.orderNumber=orderNumber; return this;}withValidFromDate(validFromDate:Date): Builder { this._model.validFromDate=validFromDate; return this;}withEntryDate(entryDate:Date): Builder { this._model.entryDate=entryDate; return this;}withEntryOwner(entryOwner:string): Builder { this._model.entryOwner=entryOwner; return this;}withUpdateDate(updateDate:Date): Builder { this._model.updateDate=updateDate; return this;}withUpdateOwner(updateOwner:string): Builder { this._model.updateOwner=updateOwner; return this;}withReleaseDate(releaseDate:Date): Builder { this._model.releaseDate=releaseDate; return this;}withReleaseOwner(releaseOwner:string): Builder { this._model.releaseOwner=releaseOwner; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get status() { return 'status';} static get releaseId() { return 'releaseId';} static get bscsAccount() { return 'bscsAccount';} static get segmentCode() { return 'segmentCode';} static get orderNumber() { return 'orderNumber';} static get validFromDate() { return 'validFromDate';} static get entryDate() { return 'entryDate';} static get entryOwner() { return 'entryOwner';} static get updateDate() { return 'updateDate';} static get updateOwner() { return 'updateOwner';} static get releaseDate() { return 'releaseDate';} static get releaseOwner() { return 'releaseOwner';} } return ObjectProps;}
}

export class ResultSetOrders {
    status:Status;
    count:number;
    data:Array<Order>;

    static get Builder() {class Builder { _model: ResultSetOrders = new ResultSetOrders();withStatus(status:Status): Builder { this._model.status=status; return this;}withCount(count:number): Builder { this._model.count=count; return this;}withData(data:Array<Order>): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get status() { return 'status';} static get count() { return 'count';} static get data() { return 'data';} } return ObjectProps;}
}

export class RequestSetAccountDictSap {
    data:AccountDictSap;

    static get Builder() {class Builder { _model: RequestSetAccountDictSap = new RequestSetAccountDictSap();withData(data:AccountDictSap): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get data() { return 'data';} } return ObjectProps;}
}

export class AccountDictSap {
    sapOfiAccount:string;
    name:string;
    status:string;
    entryDate:Date;
    entryOwner:string;
    updateDate:Date;
    updateOwner:string;

    static get Builder() {class Builder { _model: AccountDictSap = new AccountDictSap();withSapOfiAccount(sapOfiAccount:string): Builder { this._model.sapOfiAccount=sapOfiAccount; return this;}withName(name:string): Builder { this._model.name=name; return this;}withStatus(status:string): Builder { this._model.status=status; return this;}withEntryDate(entryDate:Date): Builder { this._model.entryDate=entryDate; return this;}withEntryOwner(entryOwner:string): Builder { this._model.entryOwner=entryOwner; return this;}withUpdateDate(updateDate:Date): Builder { this._model.updateDate=updateDate; return this;}withUpdateOwner(updateOwner:string): Builder { this._model.updateOwner=updateOwner; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get sapOfiAccount() { return 'sapOfiAccount';} static get name() { return 'name';} static get status() { return 'status';} static get entryDate() { return 'entryDate';} static get entryOwner() { return 'entryOwner';} static get updateDate() { return 'updateDate';} static get updateOwner() { return 'updateOwner';} } return ObjectProps;}
}

export class ResultSetAccountDictSap {
    status:Status;
    data:AccountDictSap;

    static get Builder() {class Builder { _model: ResultSetAccountDictSap = new ResultSetAccountDictSap();withStatus(status:Status): Builder { this._model.status=status; return this;}withData(data:AccountDictSap): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get status() { return 'status';} static get data() { return 'data';} } return ObjectProps;}
}

export class ResultSetAccountDictSaps {
    status:Status;
    count:number;
    data:Array<AccountDictSap>;

    static get Builder() {class Builder { _model: ResultSetAccountDictSaps = new ResultSetAccountDictSaps();withStatus(status:Status): Builder { this._model.status=status; return this;}withCount(count:number): Builder { this._model.count=count; return this;}withData(data:Array<AccountDictSap>): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get status() { return 'status';} static get count() { return 'count';} static get data() { return 'data';} } return ObjectProps;}
}

export class RequestSetAccountDictBscs {
    data:AccountDictBscs;

    static get Builder() {class Builder { _model: RequestSetAccountDictBscs = new RequestSetAccountDictBscs();withData(data:AccountDictBscs): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get data() { return 'data';} } return ObjectProps;}
}

export class ResultSetAccountDictBscs {
    status:Status;
    data:AccountDictBscs;

    static get Builder() {class Builder { _model: ResultSetAccountDictBscs = new ResultSetAccountDictBscs();withStatus(status:Status): Builder { this._model.status=status; return this;}withData(data:AccountDictBscs): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get status() { return 'status';} static get data() { return 'data';} } return ObjectProps;}
}

export class AccountDictBscs {
    glCode:string;
    glDes:string;
    glType:string;
    glActive:string;
    entryDate:Date;
    entryOwner:string;
    updateDate:Date;
    updateOwner:string;

    static get Builder() {class Builder { _model: AccountDictBscs = new AccountDictBscs();withGlCode(glCode:string): Builder { this._model.glCode=glCode; return this;}withGlDes(glDes:string): Builder { this._model.glDes=glDes; return this;}withGlType(glType:string): Builder { this._model.glType=glType; return this;}withGlActive(glActive:string): Builder { this._model.glActive=glActive; return this;}withEntryDate(entryDate:Date): Builder { this._model.entryDate=entryDate; return this;}withEntryOwner(entryOwner:string): Builder { this._model.entryOwner=entryOwner; return this;}withUpdateDate(updateDate:Date): Builder { this._model.updateDate=updateDate; return this;}withUpdateOwner(updateOwner:string): Builder { this._model.updateOwner=updateOwner; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get glCode() { return 'glCode';} static get glDes() { return 'glDes';} static get glType() { return 'glType';} static get glActive() { return 'glActive';} static get entryDate() { return 'entryDate';} static get entryOwner() { return 'entryOwner';} static get updateDate() { return 'updateDate';} static get updateOwner() { return 'updateOwner';} } return ObjectProps;}
}

export class ResultSetAccountDictBscss {
    status:Status;
    count:number;
    data:Array<AccountDictBscs>;

    static get Builder() {class Builder { _model: ResultSetAccountDictBscss = new ResultSetAccountDictBscss();withStatus(status:Status): Builder { this._model.status=status; return this;}withCount(count:number): Builder { this._model.count=count; return this;}withData(data:Array<AccountDictBscs>): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get status() { return 'status';} static get count() { return 'count';} static get data() { return 'data';} } return ObjectProps;}
}

export class RequestSetSegment {
    data:Segment;

    static get Builder() {class Builder { _model: RequestSetSegment = new RequestSetSegment();withData(data:Segment): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get data() { return 'data';} } return ObjectProps;}
}

export class Segment {
    csTradeRef:string;
    segmCategory:string;
    entryDate:Date;
    entryOwner:string;
    updateDate:Date;
    updateOwner:string;

    static get Builder() {class Builder { _model: Segment = new Segment();withCsTradeRef(csTradeRef:string): Builder { this._model.csTradeRef=csTradeRef; return this;}withSegmCategory(segmCategory:string): Builder { this._model.segmCategory=segmCategory; return this;}withEntryDate(entryDate:Date): Builder { this._model.entryDate=entryDate; return this;}withEntryOwner(entryOwner:string): Builder { this._model.entryOwner=entryOwner; return this;}withUpdateDate(updateDate:Date): Builder { this._model.updateDate=updateDate; return this;}withUpdateOwner(updateOwner:string): Builder { this._model.updateOwner=updateOwner; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get csTradeRef() { return 'csTradeRef';} static get segmCategory() { return 'segmCategory';} static get entryDate() { return 'entryDate';} static get entryOwner() { return 'entryOwner';} static get updateDate() { return 'updateDate';} static get updateOwner() { return 'updateOwner';} } return ObjectProps;}
}

export class ResultSetSegment {
    status:Status;
    data:Segment;

    static get Builder() {class Builder { _model: ResultSetSegment = new ResultSetSegment();withStatus(status:Status): Builder { this._model.status=status; return this;}withData(data:Segment): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get status() { return 'status';} static get data() { return 'data';} } return ObjectProps;}
}

export class ResultSetSegments {
    status:Status;
    count:number;
    data:Array<Segment>;

    static get Builder() {class Builder { _model: ResultSetSegments = new ResultSetSegments();withStatus(status:Status): Builder { this._model.status=status; return this;}withCount(count:number): Builder { this._model.count=count; return this;}withData(data:Array<Segment>): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get status() { return 'status';} static get count() { return 'count';} static get data() { return 'data';} } return ObjectProps;}
}

export class ResultSetStat {
    status:Status;
    data:Stat;

    static get Builder() {class Builder { _model: ResultSetStat = new ResultSetStat();withStatus(status:Status): Builder { this._model.status=status; return this;}withData(data:Stat): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get status() { return 'status';} static get data() { return 'data';} } return ObjectProps;}
}

export class Stat {
    alloc:number;
    totalalloc:number;
    sys:number;
    numgc:number;

    static get Builder() {class Builder { _model: Stat = new Stat();withAlloc(alloc:number): Builder { this._model.alloc=alloc; return this;}withTotalalloc(totalalloc:number): Builder { this._model.totalalloc=totalalloc; return this;}withSys(sys:number): Builder { this._model.sys=sys; return this;}withNumgc(numgc:number): Builder { this._model.numgc=numgc; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get alloc() { return 'alloc';} static get totalalloc() { return 'totalalloc';} static get sys() { return 'sys';} static get numgc() { return 'numgc';} } return ObjectProps;}
}

export class ResultSetVersion {
    status:Status;
    data:Version;

    static get Builder() {class Builder { _model: ResultSetVersion = new ResultSetVersion();withStatus(status:Status): Builder { this._model.status=status; return this;}withData(data:Version): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get status() { return 'status';} static get data() { return 'data';} } return ObjectProps;}
}

export class Version {
    version:string;

    static get Builder() {class Builder { _model: Version = new Version();withVersion(version:string): Builder { this._model.version=version; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get version() { return 'version';} } return ObjectProps;}
}

export class ResultSetError {
    status:Status12;
    message:string;

    static get Builder() {class Builder { _model: ResultSetError = new ResultSetError();withStatus(status:Status12): Builder { this._model.status=status; return this;}withMessage(message:string): Builder { this._model.message=message; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get status() { return 'status';} static get message() { return 'message';} } return ObjectProps;}
}

export class ResultSetOk {
    status:Status;

    static get Builder() {class Builder { _model: ResultSetOk = new ResultSetOk();withStatus(status:Status): Builder { this._model.status=status; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get status() { return 'status';} } return ObjectProps;}
}

export class ResultSetCount {
    status:Status;
    count:number;

    static get Builder() {class Builder { _model: ResultSetCount = new ResultSetCount();withStatus(status:Status): Builder { this._model.status=status; return this;}withCount(count:number): Builder { this._model.count=count; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get status() { return 'status';} static get count() { return 'count';} } return ObjectProps;}
}

export class GetAccountByStatusByReleaseQueryParams {
    status:Status15;
    release:Release;

    static get Builder() {class Builder { _model: GetAccountByStatusByReleaseQueryParams = new GetAccountByStatusByReleaseQueryParams();withStatus(status:Status15): Builder { this._model.status=status; return this;}withRelease(release:Release): Builder { this._model.release=release; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get status() { return 'status';} static get release() { return 'release';} } return ObjectProps;}
}

export class PutAccountByStatusByReleaseByBscsAccountQueryParams {
    status:Status15;
    release:Release;
    bscsAccount:string;

    static get Builder() {class Builder { _model: PutAccountByStatusByReleaseByBscsAccountQueryParams = new PutAccountByStatusByReleaseByBscsAccountQueryParams();withStatus(status:Status15): Builder { this._model.status=status; return this;}withRelease(release:Release): Builder { this._model.release=release; return this;}withBscsAccount(bscsAccount:string): Builder { this._model.bscsAccount=bscsAccount; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get status() { return 'status';} static get release() { return 'release';} static get bscsAccount() { return 'bscsAccount';} } return ObjectProps;}
}

export class DeleteAccountByStatusByReleaseByBscsAccountQueryParams {
    status:Status15;
    release:Release;
    bscsAccount:string;

    static get Builder() {class Builder { _model: DeleteAccountByStatusByReleaseByBscsAccountQueryParams = new DeleteAccountByStatusByReleaseByBscsAccountQueryParams();withStatus(status:Status15): Builder { this._model.status=status; return this;}withRelease(release:Release): Builder { this._model.release=release; return this;}withBscsAccount(bscsAccount:string): Builder { this._model.bscsAccount=bscsAccount; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get status() { return 'status';} static get release() { return 'release';} static get bscsAccount() { return 'bscsAccount';} } return ObjectProps;}
}

export class PatchAccountByStatusByReleaseByBscsAccountQueryParams {
    status:Status15;
    release:Release;
    bscsAccount:string;

    static get Builder() {class Builder { _model: PatchAccountByStatusByReleaseByBscsAccountQueryParams = new PatchAccountByStatusByReleaseByBscsAccountQueryParams();withStatus(status:Status15): Builder { this._model.status=status; return this;}withRelease(release:Release): Builder { this._model.release=release; return this;}withBscsAccount(bscsAccount:string): Builder { this._model.bscsAccount=bscsAccount; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get status() { return 'status';} static get release() { return 'release';} static get bscsAccount() { return 'bscsAccount';} } return ObjectProps;}
}

export class GetOrderByStatusByReleaseQueryParams {
    status:Status15;
    release:Release;

    static get Builder() {class Builder { _model: GetOrderByStatusByReleaseQueryParams = new GetOrderByStatusByReleaseQueryParams();withStatus(status:Status15): Builder { this._model.status=status; return this;}withRelease(release:Release): Builder { this._model.release=release; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get status() { return 'status';} static get release() { return 'release';} } return ObjectProps;}
}

export class PutOrderByStatusByReleaseByBscsAccountBySegmentQueryParams {
    status:Status15;
    release:Release;
    bscsAccount:string;
    segment:string;

    static get Builder() {class Builder { _model: PutOrderByStatusByReleaseByBscsAccountBySegmentQueryParams = new PutOrderByStatusByReleaseByBscsAccountBySegmentQueryParams();withStatus(status:Status15): Builder { this._model.status=status; return this;}withRelease(release:Release): Builder { this._model.release=release; return this;}withBscsAccount(bscsAccount:string): Builder { this._model.bscsAccount=bscsAccount; return this;}withSegment(segment:string): Builder { this._model.segment=segment; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get status() { return 'status';} static get release() { return 'release';} static get bscsAccount() { return 'bscsAccount';} static get segment() { return 'segment';} } return ObjectProps;}
}

export class DeleteOrderByStatusByReleaseByBscsAccountBySegmentQueryParams {
    status:Status15;
    release:Release;
    bscsAccount:string;
    segment:string;

    static get Builder() {class Builder { _model: DeleteOrderByStatusByReleaseByBscsAccountBySegmentQueryParams = new DeleteOrderByStatusByReleaseByBscsAccountBySegmentQueryParams();withStatus(status:Status15): Builder { this._model.status=status; return this;}withRelease(release:Release): Builder { this._model.release=release; return this;}withBscsAccount(bscsAccount:string): Builder { this._model.bscsAccount=bscsAccount; return this;}withSegment(segment:string): Builder { this._model.segment=segment; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get status() { return 'status';} static get release() { return 'release';} static get bscsAccount() { return 'bscsAccount';} static get segment() { return 'segment';} } return ObjectProps;}
}

export class PatchOrderByStatusByReleaseByBscsAccountBySegmentQueryParams {
    status:Status15;
    release:Release;
    bscsAccount:string;
    segment:string;

    static get Builder() {class Builder { _model: PatchOrderByStatusByReleaseByBscsAccountBySegmentQueryParams = new PatchOrderByStatusByReleaseByBscsAccountBySegmentQueryParams();withStatus(status:Status15): Builder { this._model.status=status; return this;}withRelease(release:Release): Builder { this._model.release=release; return this;}withBscsAccount(bscsAccount:string): Builder { this._model.bscsAccount=bscsAccount; return this;}withSegment(segment:string): Builder { this._model.segment=segment; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get status() { return 'status';} static get release() { return 'release';} static get bscsAccount() { return 'bscsAccount';} static get segment() { return 'segment';} } return ObjectProps;}
}

export class DeleteReleaseByReleaseQueryParams {
    status:Status15;
    release:Release;

    static get Builder() {class Builder { _model: DeleteReleaseByReleaseQueryParams = new DeleteReleaseByReleaseQueryParams();withStatus(status:Status15): Builder { this._model.status=status; return this;}withRelease(release:Release): Builder { this._model.release=release; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get status() { return 'status';} static get release() { return 'release';} } return ObjectProps;}
}

export class PutDictionarySegmentByIdQueryParams {
    id:string;

    static get Builder() {class Builder { _model: PutDictionarySegmentByIdQueryParams = new PutDictionarySegmentByIdQueryParams();withId(id:string): Builder { this._model.id=id; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get id() { return 'id';} } return ObjectProps;}
}

export class DeleteDictionarySegmentByIdQueryParams {
    id:string;

    static get Builder() {class Builder { _model: DeleteDictionarySegmentByIdQueryParams = new DeleteDictionarySegmentByIdQueryParams();withId(id:string): Builder { this._model.id=id; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get id() { return 'id';} } return ObjectProps;}
}

export class PatchDictionarySegmentByIdQueryParams {
    id:string;

    static get Builder() {class Builder { _model: PatchDictionarySegmentByIdQueryParams = new PatchDictionarySegmentByIdQueryParams();withId(id:string): Builder { this._model.id=id; return this;}build(){return this._model;}}return Builder;}
    static get ObjectProps() {class ObjectProps {static get id() { return 'id';} } return ObjectProps;}
}
