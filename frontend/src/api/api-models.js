
// ----- Enums ------

export class Status15 {
    static get C(){ return 'C'; } // to control
    static get P(){ return 'P'; } // prod
    static get W(){ return 'W'; } // work
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
}

export class UserLogin {
    user:string;
    role:Role;
    password:string;

    static get Builder() {class Builder { _model: UserLogin = new UserLogin();withUser(user:string): Builder { this._model.user=user; return this;}withRole(role:Role): Builder { this._model.role=role; return this;}withPassword(password:string): Builder { this._model.password=password; return this;}build(){return this._model;}}return Builder;}
}

export class ResultSetUserLogin {
    data:UserLoginConf;

    static get Builder() {class Builder { _model: ResultSetUserLogin = new ResultSetUserLogin();withData(data:UserLoginConf): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
}

export class UserLoginConf {
    user:User;
    token:string;

    static get Builder() {class Builder { _model: UserLoginConf = new UserLoginConf();withUser(user:User): Builder { this._model.user=user; return this;}withToken(token:string): Builder { this._model.token=token; return this;}build(){return this._model;}}return Builder;}
}

export class ResultSetUserInfo {
    data:UserLoginInfo;

    static get Builder() {class Builder { _model: ResultSetUserInfo = new ResultSetUserInfo();withData(data:UserLoginInfo): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
}

export class UserLoginInfo {
    user:User;

    static get Builder() {class Builder { _model: UserLoginInfo = new UserLoginInfo();withUser(user:User): Builder { this._model.user=user; return this;}build(){return this._model;}}return Builder;}
}

export class User {
    user:string;
    role:Role;

    static get Builder() {class Builder { _model: User = new User();withUser(user:string): Builder { this._model.user=user; return this;}withRole(role:Role): Builder { this._model.role=role; return this;}build(){return this._model;}}return Builder;}
}

export class RequestSetUserLogoff {
    data:UserLogoffConf;

    static get Builder() {class Builder { _model: RequestSetUserLogoff = new RequestSetUserLogoff();withData(data:UserLogoffConf): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
}

export class UserLogoffConf {
    user:string;

    static get Builder() {class Builder { _model: UserLogoffConf = new UserLogoffConf();withUser(user:string): Builder { this._model.user=user; return this;}build(){return this._model;}}return Builder;}
}

export class RequestSetAccount {
    data:Account;

    static get Builder() {class Builder { _model: RequestSetAccount = new RequestSetAccount();withData(data:Account): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
}

export class ResultSetAccount {
    status:Status;
    data:Account;

    static get Builder() {class Builder { _model: ResultSetAccount = new ResultSetAccount();withStatus(status:Status): Builder { this._model.status=status; return this;}withData(data:Account): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
}

export class Account {
    status:Status15; // => W
    releaseId:string; // => 0
    bscsAccount:string; // set
    ofiSapAccount:string; // set from dict
    validFromDate:Date; // set
    vatCodeInd:string; // ?
    ofiSapWbsCode:string; // set only Control
    citMarkerVatFlag:number; // set 1 | 0
    entryDate:Date; // => empty
    entryOwner:string; // => empty
    updateDate:Date; // => empty
    updateOwner:string; // => empty
    releaseDate:Date; // => empty
    releaseOwner:string; // => empty

    frontendId:string;
    modified:false;

    static get Builder() {class Builder { _model: Account = new Account();withFrontendId(frontendId:string): Builder {this._model.frontendId = frontendId; return this;}withStatus(status:string): Builder { this._model.status=status; return this;}withReleaseId(releaseId:number): Builder { this._model.releaseId=releaseId; return this;}withBscsAccount(bscsAccount:string): Builder { this._model.bscsAccount=bscsAccount; return this;}withOfiSapAccount(ofiSapAccount:string): Builder { this._model.ofiSapAccount=ofiSapAccount; return this;}withValidFromDate(validFromDate:Date): Builder { this._model.validFromDate=validFromDate; return this;}withVatCodeInd(vatCodeInd:string): Builder { this._model.vatCodeInd=vatCodeInd; return this;}withOfiSapWbsCode(ofiSapWbsCode:string): Builder { this._model.ofiSapWbsCode=ofiSapWbsCode; return this;}withCitMarkerVatFlag(citMarkerVatFlag:number): Builder { this._model.citMarkerVatFlag=citMarkerVatFlag; return this;}withEntryDate(entryDate:Date): Builder { this._model.entryDate=entryDate; return this;}withEntryOwner(entryOwner:string): Builder { this._model.entryOwner=entryOwner; return this;}withUpdateDate(updateDate:Date): Builder { this._model.updateDate=updateDate; return this;}withUpdateOwner(updateOwner:string): Builder { this._model.updateOwner=updateOwner; return this;}withReleaseDate(releaseDate:Date): Builder { this._model.releaseDate=releaseDate; return this;}withReleaseOwner(releaseOwner:string): Builder { this._model.releaseOwner=releaseOwner; return this;}build(){return this._model;}}return Builder;}
}

export class ResultSetAccounts {
    status:Status;
    count:number;
    data:Array<Account>;

    static get Builder() {class Builder { _model: ResultSetAccounts = new ResultSetAccounts();withStatus(status:Status): Builder { this._model.status=status; return this;}withCount(count:number): Builder { this._model.count=count; return this;}withData(data:Array<Account>): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
}

export class RequestSetOrder {
    data:Order;

    static get Builder() {class Builder { _model: RequestSetOrder = new RequestSetOrder();withData(data:Order): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
}

export class ResultSetOrder {
    status:Status;
    data:Order;

    static get Builder() {class Builder { _model: ResultSetOrder = new ResultSetOrder();withStatus(status:Status): Builder { this._model.status=status; return this;}withData(data:Order): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
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
}

export class ResultSetOrders {
    status:Status;
    count:number;
    data:Array<Order>;

    static get Builder() {class Builder { _model: ResultSetOrders = new ResultSetOrders();withStatus(status:Status): Builder { this._model.status=status; return this;}withCount(count:number): Builder { this._model.count=count; return this;}withData(data:Array<Order>): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
}

export class RequestSetAccountDictSap {
    data:AccountDictSap;

    static get Builder() {class Builder { _model: RequestSetAccountDictSap = new RequestSetAccountDictSap();withData(data:AccountDictSap): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
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
}

export class ResultSetAccountDictSap {
    status:Status;
    data:AccountDictSap;

    static get Builder() {class Builder { _model: ResultSetAccountDictSap = new ResultSetAccountDictSap();withStatus(status:Status): Builder { this._model.status=status; return this;}withData(data:AccountDictSap): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
}

export class ResultSetAccountDictSaps {
    status:Status;
    count:number;
    data:Array<AccountDictSap>;

    static get Builder() {class Builder { _model: ResultSetAccountDictSaps = new ResultSetAccountDictSaps();withStatus(status:Status): Builder { this._model.status=status; return this;}withCount(count:number): Builder { this._model.count=count; return this;}withData(data:Array<AccountDictSap>): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
}

export class RequestSetAccountDictBscs {
    data:AccountDictBscs;

    static get Builder() {class Builder { _model: RequestSetAccountDictBscs = new RequestSetAccountDictBscs();withData(data:AccountDictBscs): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
}

export class ResultSetAccountDictBscs {
    status:Status;
    data:AccountDictBscs;

    static get Builder() {class Builder { _model: ResultSetAccountDictBscs = new ResultSetAccountDictBscs();withStatus(status:Status): Builder { this._model.status=status; return this;}withData(data:AccountDictBscs): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
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
}

export class ResultSetAccountDictBscss {
    status:Status;
    count:number;
    data:Array<AccountDictBscs>;

    static get Builder() {class Builder { _model: ResultSetAccountDictBscss = new ResultSetAccountDictBscss();withStatus(status:Status): Builder { this._model.status=status; return this;}withCount(count:number): Builder { this._model.count=count; return this;}withData(data:Array<AccountDictBscs>): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
}

export class RequestSetSegment {
    data:Segment;

    static get Builder() {class Builder { _model: RequestSetSegment = new RequestSetSegment();withData(data:Segment): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
}

export class Segment {
    csTradeRef:string;
    segmCategory:string;
    entryDate:Date;
    entryOwner:string;
    updateDate:Date;
    updateOwner:string;

    static get Builder() {class Builder { _model: Segment = new Segment();withCsTradeRef(csTradeRef:string): Builder { this._model.csTradeRef=csTradeRef; return this;}withSegmCategory(segmCategory:string): Builder { this._model.segmCategory=segmCategory; return this;}withEntryDate(entryDate:Date): Builder { this._model.entryDate=entryDate; return this;}withEntryOwner(entryOwner:string): Builder { this._model.entryOwner=entryOwner; return this;}withUpdateDate(updateDate:Date): Builder { this._model.updateDate=updateDate; return this;}withUpdateOwner(updateOwner:string): Builder { this._model.updateOwner=updateOwner; return this;}build(){return this._model;}}return Builder;}
}

export class ResultSetSegment {
    status:Status;
    data:Segment;

    static get Builder() {class Builder { _model: ResultSetSegment = new ResultSetSegment();withStatus(status:Status): Builder { this._model.status=status; return this;}withData(data:Segment): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
}

export class ResultSetSegments {
    status:Status;
    count:number;
    data:Array<Segment>;

    static get Builder() {class Builder { _model: ResultSetSegments = new ResultSetSegments();withStatus(status:Status): Builder { this._model.status=status; return this;}withCount(count:number): Builder { this._model.count=count; return this;}withData(data:Array<Segment>): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
}

export class ResultSetStat {
    status:Status;
    data:Stat;

    static get Builder() {class Builder { _model: ResultSetStat = new ResultSetStat();withStatus(status:Status): Builder { this._model.status=status; return this;}withData(data:Stat): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
}

export class Stat {
    alloc:number;
    totalalloc:number;
    sys:number;
    numgc:number;

    static get Builder() {class Builder { _model: Stat = new Stat();withAlloc(alloc:number): Builder { this._model.alloc=alloc; return this;}withTotalalloc(totalalloc:number): Builder { this._model.totalalloc=totalalloc; return this;}withSys(sys:number): Builder { this._model.sys=sys; return this;}withNumgc(numgc:number): Builder { this._model.numgc=numgc; return this;}build(){return this._model;}}return Builder;}
}

export class ResultSetVersion {
    status:Status;
    data:Version;

    static get Builder() {class Builder { _model: ResultSetVersion = new ResultSetVersion();withStatus(status:Status): Builder { this._model.status=status; return this;}withData(data:Version): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
}

export class Version {
    version:string;

    static get Builder() {class Builder { _model: Version = new Version();withVersion(version:string): Builder { this._model.version=version; return this;}build(){return this._model;}}return Builder;}
}

export class ResultSetError {
    status:Status;
    message:string;

    static get Builder() {class Builder { _model: ResultSetError = new ResultSetError();withStatus(status:Status): Builder { this._model.status=status; return this;}withMessage(message:string): Builder { this._model.message=message; return this;}build(){return this._model;}}return Builder;}
}

export class ResultSetOk {
    status:Status;

    static get Builder() {class Builder { _model: ResultSetOk = new ResultSetOk();withStatus(status:Status): Builder { this._model.status=status; return this;}build(){return this._model;}}return Builder;}
}

export class ResultSetCount {
    status:Status;
    count:number;

    static get Builder() {class Builder { _model: ResultSetCount = new ResultSetCount();withStatus(status:Status): Builder { this._model.status=status; return this;}withCount(count:number): Builder { this._model.count=count; return this;}build(){return this._model;}}return Builder;}
}

export class GetAccountByStatusByReleaseQueryParams {
    status:Status15;
    release:Release;

    static get Builder() {class Builder { _model: GetAccountByStatusByReleaseQueryParams = new GetAccountByStatusByReleaseQueryParams();withStatus(status:Status15): Builder { this._model.status=status; return this;}withRelease(release:Release): Builder { this._model.release=release; return this;}build(){return this._model;}}return Builder;}
}

export class PutAccountByStatusByReleaseByBscsAccountQueryParams {
    status:Status15;
    release:Release;
    bscsAccount:string;

    static get Builder() {class Builder { _model: PutAccountByStatusByReleaseByBscsAccountQueryParams = new PutAccountByStatusByReleaseByBscsAccountQueryParams();withStatus(status:Status15): Builder { this._model.status=status; return this;}withRelease(release:Release): Builder { this._model.release=release; return this;}withBscsAccount(bscsAccount:string): Builder { this._model.bscsAccount=bscsAccount; return this;}build(){return this._model;}}return Builder;}
}

export class DeleteAccountByStatusByReleaseByBscsAccountQueryParams {
    status:Status15;
    release:Release;
    bscsAccount:string;

    static get Builder() {class Builder { _model: DeleteAccountByStatusByReleaseByBscsAccountQueryParams = new DeleteAccountByStatusByReleaseByBscsAccountQueryParams();withStatus(status:Status15): Builder { this._model.status=status; return this;}withRelease(release:Release): Builder { this._model.release=release; return this;}withBscsAccount(bscsAccount:string): Builder { this._model.bscsAccount=bscsAccount; return this;}build(){return this._model;}}return Builder;}
}

export class GetOrderByStatusByReleaseQueryParams {
    status:Status15;
    release:Release;

    static get Builder() {class Builder { _model: GetOrderByStatusByReleaseQueryParams = new GetOrderByStatusByReleaseQueryParams();withStatus(status:Status15): Builder { this._model.status=status; return this;}withRelease(release:Release): Builder { this._model.release=release; return this;}build(){return this._model;}}return Builder;}
}

export class PutOrderByStatusByReleaseByBscsAccountBySegmentQueryParams {
    status:Status15;
    release:Release;
    bscsAccount:string;
    segment:string;

    static get Builder() {class Builder { _model: PutOrderByStatusByReleaseByBscsAccountBySegmentQueryParams = new PutOrderByStatusByReleaseByBscsAccountBySegmentQueryParams();withStatus(status:Status15): Builder { this._model.status=status; return this;}withRelease(release:Release): Builder { this._model.release=release; return this;}withBscsAccount(bscsAccount:string): Builder { this._model.bscsAccount=bscsAccount; return this;}withSegment(segment:string): Builder { this._model.segment=segment; return this;}build(){return this._model;}}return Builder;}
}

export class DeleteOrderByStatusByReleaseByBscsAccountBySegmentQueryParams {
    status:Status15;
    release:Release;
    bscsAccount:string;
    segment:string;

    static get Builder() {class Builder { _model: DeleteOrderByStatusByReleaseByBscsAccountBySegmentQueryParams = new DeleteOrderByStatusByReleaseByBscsAccountBySegmentQueryParams();withStatus(status:Status15): Builder { this._model.status=status; return this;}withRelease(release:Release): Builder { this._model.release=release; return this;}withBscsAccount(bscsAccount:string): Builder { this._model.bscsAccount=bscsAccount; return this;}withSegment(segment:string): Builder { this._model.segment=segment; return this;}build(){return this._model;}}return Builder;}
}
