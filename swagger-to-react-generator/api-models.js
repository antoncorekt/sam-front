
// ----- Enums ------

export class StatusPropEnum {
 	 static get OK(){ return 'Ok'; }
}

export class StatusPropEnum {
 	 static get ERROR(){ return 'Error'; }
}

export class RolePropEnum {
 	 static get ADMIN(){ return 'Admin'; }
	 static get BOOKER(){ return 'Booker'; }
	 static get CONTROL(){ return 'Control'; }
}


// ----- Models ------

export class ResultSetOk { 
	status:StatusPropEnum;
 
	static get Builder() {class Builder { _model: ResultSetOk = new ResultSetOk();withStatus(status:StatusPropEnum): Builder { this._model.status=status; return this;}build(){return this._model;}}return Builder;}
 } 

export class ResultSetError { 
	status:StatusPropEnum;
 	message:string;
 
	static get Builder() {class Builder { _model: ResultSetError = new ResultSetError();withStatus(status:StatusPropEnum): Builder { this._model.status=status; return this;}withMessage(message:string): Builder { this._model.message=message; return this;}build(){return this._model;}}return Builder;}
 } 

export class ResultSetCount { 
	status:StatusPropEnum;
 	count:number;
 
	static get Builder() {class Builder { _model: ResultSetCount = new ResultSetCount();withStatus(status:StatusPropEnum): Builder { this._model.status=status; return this;}withCount(count:number): Builder { this._model.count=count; return this;}build(){return this._model;}}return Builder;}
 } 

export class Segment { 
	csTradefer:string;
 	csType:number;
 
	static get Builder() {class Builder { _model: Segment = new Segment();withCsTradefer(csTradefer:string): Builder { this._model.csTradefer=csTradefer; return this;}withCsType(csType:number): Builder { this._model.csType=csType; return this;}build(){return this._model;}}return Builder;}
 } 

const SegmentsVar: Array<Segment> = []; // example usage of type Segments

export class RequestSetSegment { 
	data:Segment;
 
	static get Builder() {class Builder { _model: RequestSetSegment = new RequestSetSegment();withData(data:Segment): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
 } 

export class ResultSetSegment { 
	status:StatusPropEnum;
 	data:Segment;
 
	static get Builder() {class Builder { _model: ResultSetSegment = new ResultSetSegment();withStatus(status:StatusPropEnum): Builder { this._model.status=status; return this;}withData(data:Segment): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
 } 

export class ResultSetSegments { 
	status:StatusPropEnum;
 	count:number;
 	data:Array<Segment>;
 
	static get Builder() {class Builder { _model: ResultSetSegments = new ResultSetSegments();withStatus(status:StatusPropEnum): Builder { this._model.status=status; return this;}withCount(count:number): Builder { this._model.count=count; return this;}withData(data:Array<Segment>): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
 } 

export class Account { 
	releaseId:number;
 	status:string;
 	bscsAccount:string;
 	ofiSapAccount:string;
 	validFromDate:Date;
 	vatCodeInd:string;
 	sapSegmText:string;
 	ofiSapWbsCode:string;
 	citMarkerVatFlag:number;
 
	static get Builder() {class Builder { _model: Account = new Account();withReleaseId(releaseId:number): Builder { this._model.releaseId=releaseId; return this;}withStatus(status:string): Builder { this._model.status=status; return this;}withBscsAccount(bscsAccount:string): Builder { this._model.bscsAccount=bscsAccount; return this;}withOfiSapAccount(ofiSapAccount:string): Builder { this._model.ofiSapAccount=ofiSapAccount; return this;}withValidFromDate(validFromDate:Date): Builder { this._model.validFromDate=validFromDate; return this;}withVatCodeInd(vatCodeInd:string): Builder { this._model.vatCodeInd=vatCodeInd; return this;}withSapSegmText(sapSegmText:string): Builder { this._model.sapSegmText=sapSegmText; return this;}withOfiSapWbsCode(ofiSapWbsCode:string): Builder { this._model.ofiSapWbsCode=ofiSapWbsCode; return this;}withCitMarkerVatFlag(citMarkerVatFlag:number): Builder { this._model.citMarkerVatFlag=citMarkerVatFlag; return this;}build(){return this._model;}}return Builder;}
 } 

const AccountsVar: Array<Account> = []; // example usage of type Accounts

export class RequestSetAccount { 
	data:Account;
 
	static get Builder() {class Builder { _model: RequestSetAccount = new RequestSetAccount();withData(data:Account): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
 } 

export class ResultSetAccounts { 
	status:StatusPropEnum;
 	count:number;
 	data:Array<Account>;
 
	static get Builder() {class Builder { _model: ResultSetAccounts = new ResultSetAccounts();withStatus(status:StatusPropEnum): Builder { this._model.status=status; return this;}withCount(count:number): Builder { this._model.count=count; return this;}withData(data:Array<Account>): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
 } 

export class ResultSetAccount { 
	status:StatusPropEnum;
 	data:Account;
 
	static get Builder() {class Builder { _model: ResultSetAccount = new ResultSetAccount();withStatus(status:StatusPropEnum): Builder { this._model.status=status; return this;}withData(data:Account): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
 } 

export class Order { 
	releaseId:number;
 	status:string;
 	bscsAccount:string;
 	segmentCode:string;
 	orderNumber:string;
 	validFromDate:Date;
 
	static get Builder() {class Builder { _model: Order = new Order();withReleaseId(releaseId:number): Builder { this._model.releaseId=releaseId; return this;}withStatus(status:string): Builder { this._model.status=status; return this;}withBscsAccount(bscsAccount:string): Builder { this._model.bscsAccount=bscsAccount; return this;}withSegmentCode(segmentCode:string): Builder { this._model.segmentCode=segmentCode; return this;}withOrderNumber(orderNumber:string): Builder { this._model.orderNumber=orderNumber; return this;}withValidFromDate(validFromDate:Date): Builder { this._model.validFromDate=validFromDate; return this;}build(){return this._model;}}return Builder;}
 } 

const OrdersVar: Array<Order> = []; // example usage of type Orders

export class RequestSetOrder { 
	data:Order;
 
	static get Builder() {class Builder { _model: RequestSetOrder = new RequestSetOrder();withData(data:Order): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
 } 

export class ResultSetOrder { 
	status:StatusPropEnum;
 	data:Order;
 
	static get Builder() {class Builder { _model: ResultSetOrder = new ResultSetOrder();withStatus(status:StatusPropEnum): Builder { this._model.status=status; return this;}withData(data:Order): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
 } 

export class ResultSetOrders { 
	status:StatusPropEnum;
 	count:number;
 	data:Array<Order>;
 
	static get Builder() {class Builder { _model: ResultSetOrders = new ResultSetOrders();withStatus(status:StatusPropEnum): Builder { this._model.status=status; return this;}withCount(count:number): Builder { this._model.count=count; return this;}withData(data:Array<Order>): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
 } 

export class RequestSetUserLogin { 
	data:UserLogin;
 
	static get Builder() {class Builder { _model: RequestSetUserLogin = new RequestSetUserLogin();withData(data:UserLogin): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
 } 

export class ResultSetUserLogin { 
	data:UserLoginInfo;
 
	static get Builder() {class Builder { _model: ResultSetUserLogin = new ResultSetUserLogin();withData(data:UserLoginInfo): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
 } 

export class UserLogin { 
	user:string;
 	role:RolePropEnum;
 	password:string;
 
	static get Builder() {class Builder { _model: UserLogin = new UserLogin();withUser(user:string): Builder { this._model.user=user; return this;}withRole(role:RolePropEnum): Builder { this._model.role=role; return this;}withPassword(password:string): Builder { this._model.password=password; return this;}build(){return this._model;}}return Builder;}
 } 

export class UserLoginInfo { 
	user:string;
 	role:RolePropEnum;
 	token:string;
 
	static get Builder() {class Builder { _model: UserLoginInfo = new UserLoginInfo();withUser(user:string): Builder { this._model.user=user; return this;}withRole(role:RolePropEnum): Builder { this._model.role=role; return this;}withToken(token:string): Builder { this._model.token=token; return this;}build(){return this._model;}}return Builder;}
 } 

export class RequestSetUserLogoff { 
	data:UserLogoff;
 
	static get Builder() {class Builder { _model: RequestSetUserLogoff = new RequestSetUserLogoff();withData(data:UserLogoff): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
 } 

export class UserLogoff { 
	user:string;
 
	static get Builder() {class Builder { _model: UserLogoff = new UserLogoff();withUser(user:string): Builder { this._model.user=user; return this;}build(){return this._model;}}return Builder;}
 } 

export class AccountDictSap { 
	sapOfiAccount:string;
 	name:string;
 	status:string;
 
	static get Builder() {class Builder { _model: AccountDictSap = new AccountDictSap();withSapOfiAccount(sapOfiAccount:string): Builder { this._model.sapOfiAccount=sapOfiAccount; return this;}withName(name:string): Builder { this._model.name=name; return this;}withStatus(status:string): Builder { this._model.status=status; return this;}build(){return this._model;}}return Builder;}
 } 

const AccountDictSapsVar: Array<AccountDictSap> = []; // example usage of type AccountDictSaps

export class RequestSetAccountDictSap { 
	data:AccountDictSap;
 
	static get Builder() {class Builder { _model: RequestSetAccountDictSap = new RequestSetAccountDictSap();withData(data:AccountDictSap): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
 } 

export class ResultSetAccountDictSap { 
	status:StatusPropEnum;
 	data:AccountDictSap;
 
	static get Builder() {class Builder { _model: ResultSetAccountDictSap = new ResultSetAccountDictSap();withStatus(status:StatusPropEnum): Builder { this._model.status=status; return this;}withData(data:AccountDictSap): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
 } 

export class ResultSetAccountDictSaps { 
	status:StatusPropEnum;
 	count:number;
 	data:Array<AccountDictSap>;
 
	static get Builder() {class Builder { _model: ResultSetAccountDictSaps = new ResultSetAccountDictSaps();withStatus(status:StatusPropEnum): Builder { this._model.status=status; return this;}withCount(count:number): Builder { this._model.count=count; return this;}withData(data:Array<AccountDictSap>): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
 } 

export class AccountDictBscs { 
	glCode:string;
 	glDes:string;
 	glType:string;
 	glActive:string;
 
	static get Builder() {class Builder { _model: AccountDictBscs = new AccountDictBscs();withGlCode(glCode:string): Builder { this._model.glCode=glCode; return this;}withGlDes(glDes:string): Builder { this._model.glDes=glDes; return this;}withGlType(glType:string): Builder { this._model.glType=glType; return this;}withGlActive(glActive:string): Builder { this._model.glActive=glActive; return this;}build(){return this._model;}}return Builder;}
 } 

const AccountDictBscssVar: Array<AccountDictBscs> = []; // example usage of type AccountDictBscss

export class RequestSetAccountDictBscs { 
	data:AccountDictBscs;
 
	static get Builder() {class Builder { _model: RequestSetAccountDictBscs = new RequestSetAccountDictBscs();withData(data:AccountDictBscs): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
 } 

export class ResultSetAccountDictBscs { 
	status:StatusPropEnum;
 	data:AccountDictBscs;
 
	static get Builder() {class Builder { _model: ResultSetAccountDictBscs = new ResultSetAccountDictBscs();withStatus(status:StatusPropEnum): Builder { this._model.status=status; return this;}withData(data:AccountDictBscs): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
 } 

export class ResultSetAccountDictBscss { 
	status:StatusPropEnum;
 	count:number;
 	data:Array<AccountDictBscs>;
 
	static get Builder() {class Builder { _model: ResultSetAccountDictBscss = new ResultSetAccountDictBscss();withStatus(status:StatusPropEnum): Builder { this._model.status=status; return this;}withCount(count:number): Builder { this._model.count=count; return this;}withData(data:Array<AccountDictBscs>): Builder { this._model.data=data; return this;}build(){return this._model;}}return Builder;}
 } 

export class ResultSetVersion { 
	status:StatusPropEnum;
 	version:string;
 
	static get Builder() {class Builder { _model: ResultSetVersion = new ResultSetVersion();withStatus(status:StatusPropEnum): Builder { this._model.status=status; return this;}withVersion(version:string): Builder { this._model.version=version; return this;}build(){return this._model;}}return Builder;}
 } 

export class ResultSetStatus { 
	status:StatusPropEnum;
 	memoryAlloc:number;
 	memoryTotalAlloc:number;
 	memorySys:number;
 	memoryNMalloc:number;
 	memoryNFree:number;
 	processedRequests:number;
 	processedRequestsErrors:number;
 	processedRequestsOk:number;
 	processingTimeTotalSec:number;
 	runningSince:string;
 
	static get Builder() {class Builder { _model: ResultSetStatus = new ResultSetStatus();withStatus(status:StatusPropEnum): Builder { this._model.status=status; return this;}withMemoryAlloc(memoryAlloc:number): Builder { this._model.memoryAlloc=memoryAlloc; return this;}withMemoryTotalAlloc(memoryTotalAlloc:number): Builder { this._model.memoryTotalAlloc=memoryTotalAlloc; return this;}withMemorySys(memorySys:number): Builder { this._model.memorySys=memorySys; return this;}withMemoryNMalloc(memoryNMalloc:number): Builder { this._model.memoryNMalloc=memoryNMalloc; return this;}withMemoryNFree(memoryNFree:number): Builder { this._model.memoryNFree=memoryNFree; return this;}withProcessedRequests(processedRequests:number): Builder { this._model.processedRequests=processedRequests; return this;}withProcessedRequestsErrors(processedRequestsErrors:number): Builder { this._model.processedRequestsErrors=processedRequestsErrors; return this;}withProcessedRequestsOk(processedRequestsOk:number): Builder { this._model.processedRequestsOk=processedRequestsOk; return this;}withProcessingTimeTotalSec(processingTimeTotalSec:number): Builder { this._model.processingTimeTotalSec=processingTimeTotalSec; return this;}withRunningSince(runningSince:string): Builder { this._model.runningSince=runningSince; return this;}build(){return this._model;}}return Builder;}
 } 

export class GetAccountByStatusByReleaseQueryParams { 
	status:string;
 	release:string;
 
	static get Builder() {class Builder { _model: GetAccountByStatusByReleaseQueryParams = new GetAccountByStatusByReleaseQueryParams();withStatus(status:string): Builder { this._model.status=status; return this;}withRelease(release:string): Builder { this._model.release=release; return this;}build(){return this._model;}}return Builder;}
 } 

export class PutAccountByStatusByReleaseByBscsAccountQueryParams { 
	status:string;
 	release:string;
 	bscsAccount:string;
 
	static get Builder() {class Builder { _model: PutAccountByStatusByReleaseByBscsAccountQueryParams = new PutAccountByStatusByReleaseByBscsAccountQueryParams();withStatus(status:string): Builder { this._model.status=status; return this;}withRelease(release:string): Builder { this._model.release=release; return this;}withBscsAccount(bscsAccount:string): Builder { this._model.bscsAccount=bscsAccount; return this;}build(){return this._model;}}return Builder;}
 } 

export class DeleteAccountByStatusByReleaseByBscsAccountQueryParams { 
	status:string;
 	release:string;
 	bscsAccount:string;
 
	static get Builder() {class Builder { _model: DeleteAccountByStatusByReleaseByBscsAccountQueryParams = new DeleteAccountByStatusByReleaseByBscsAccountQueryParams();withStatus(status:string): Builder { this._model.status=status; return this;}withRelease(release:string): Builder { this._model.release=release; return this;}withBscsAccount(bscsAccount:string): Builder { this._model.bscsAccount=bscsAccount; return this;}build(){return this._model;}}return Builder;}
 } 

export class GetOrderByStatusByReleaseQueryParams { 
	status:string;
 	release:string;
 
	static get Builder() {class Builder { _model: GetOrderByStatusByReleaseQueryParams = new GetOrderByStatusByReleaseQueryParams();withStatus(status:string): Builder { this._model.status=status; return this;}withRelease(release:string): Builder { this._model.release=release; return this;}build(){return this._model;}}return Builder;}
 } 

export class PutOrderByStatusByReleaseByBscsAccountBySegmentQueryParams { 
	status:string;
 	release:string;
 	bscsAccount:string;
 	segment:string;
 
	static get Builder() {class Builder { _model: PutOrderByStatusByReleaseByBscsAccountBySegmentQueryParams = new PutOrderByStatusByReleaseByBscsAccountBySegmentQueryParams();withStatus(status:string): Builder { this._model.status=status; return this;}withRelease(release:string): Builder { this._model.release=release; return this;}withBscsAccount(bscsAccount:string): Builder { this._model.bscsAccount=bscsAccount; return this;}withSegment(segment:string): Builder { this._model.segment=segment; return this;}build(){return this._model;}}return Builder;}
 } 

export class DeleteOrderByStatusByReleaseByBscsAccountBySegmentQueryParams { 
	status:string;
 	release:string;
 	bscsAccount:string;
 	segment:string;
 
	static get Builder() {class Builder { _model: DeleteOrderByStatusByReleaseByBscsAccountBySegmentQueryParams = new DeleteOrderByStatusByReleaseByBscsAccountBySegmentQueryParams();withStatus(status:string): Builder { this._model.status=status; return this;}withRelease(release:string): Builder { this._model.release=release; return this;}withBscsAccount(bscsAccount:string): Builder { this._model.bscsAccount=bscsAccount; return this;}withSegment(segment:string): Builder { this._model.segment=segment; return this;}build(){return this._model;}}return Builder;}
 } 
