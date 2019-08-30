
// ----- Enums ------

class FinancialAccountStatusEnum {
	static get ACTIVE(){ return 'active'; }
	static get INACTIVE(){ return 'inactive'; }
}

class MarketSegmentCategoryEnum {
	static get BIZ(){ return 'BIZ'; }
	static get PRIV(){ return 'PRIV'; }
}

class MarketSegmentReqCategoryEnum {
	static get PRIV(){ return 'PRIV'; }
}

class AccountMapStatusEnum {
	static get APPROVED(){ return 'approved'; }
	static get UNAPPROVED(){ return 'unapproved'; }
}

class AccountMapLogActionEnum {
	static get INSERT(){ return 'insert'; }
	static get UPDATE(){ return 'update'; }
	static get DELETE(){ return 'delete'; }
}


// ----- Models ------

export class FinancialAccount {
	id:string;
	name:string;
	status:FinancialAccountStatusEnum;
	type:string;

	static get Builder() {
		class Builder {
			_model: FinancialAccount = new FinancialAccount();
			withId(id:string): Builder {
				this._model.id=id;
				return this;
			}

			withName(name:string): Builder {
				this._model.name=name;
				return this;
			}

			withStatus(status:FinancialAccountStatusEnum): Builder {
				this._model.status=status;
				return this;
			}

			withType(type:string): Builder {
				this._model.type=type;
				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
}

export class MarketSegment {
	id:string;
	category:MarketSegmentCategoryEnum;
	entryDate:Date;

	static get Builder() {
		class Builder {
			_model: MarketSegment = new MarketSegment();
			withId(id:string): Builder {
				this._model.id=id;
				return this;
			}

			withCategory(category:MarketSegmentCategoryEnum): Builder {
				this._model.category=category;
				return this;
			}

			withEntryDate(entryDate:Date): Builder {
				this._model.entryDate=entryDate;
				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
}

export class MarketSegmentReq {
	id:string;
	category:MarketSegmentReqCategoryEnum;

	static get Builder() {
		class Builder {
			_model: MarketSegmentReq = new MarketSegmentReq();
			withId(id:string): Builder {
				this._model.id=id;
				return this;
			}

			withCategory(category:MarketSegmentReqCategoryEnum): Builder {
				this._model.category=category;
				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
}

export class AccountMap {
	glAccount:FinancialAccount;
	ofiAccount:FinancialAccount;
	validFrom:Date;
	vatCodeInd:boolean;
	sapSegmentText:string;
	ofiWbsCode:string;
	citMarkerVatFlag:number;
	status:AccountMapStatusEnum;

	static get Builder() {
		class Builder {
			_model: AccountMap = new AccountMap();
			withGlAccount(glAccount:FinancialAccount): Builder {
				this._model.glAccount=glAccount;
				return this;
			}

			withOfiAccount(ofiAccount:FinancialAccount): Builder {
				this._model.ofiAccount=ofiAccount;
				return this;
			}

			withValidFrom(validFrom:Date): Builder {
				this._model.validFrom=validFrom;
				return this;
			}

			withVatCodeInd(vatCodeInd:boolean): Builder {
				this._model.vatCodeInd=vatCodeInd;
				return this;
			}

			withSapSegmentText(sapSegmentText:string): Builder {
				this._model.sapSegmentText=sapSegmentText;
				return this;
			}

			withOfiWbsCode(ofiWbsCode:string): Builder {
				this._model.ofiWbsCode=ofiWbsCode;
				return this;
			}

			withCitMarkerVatFlag(citMarkerVatFlag:number): Builder {
				this._model.citMarkerVatFlag=citMarkerVatFlag;
				return this;
			}

			withStatus(status:AccountMapStatusEnum): Builder {
				this._model.status=status;
				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
}

export class AccountMapReq {
	glAccountId:string;
	ofiAccountId:string;
	validFrom:Date;
	vatCodeInd:boolean;
	sapSegmentText:string;
	ofiWbsCode:string;
	citMarkerVatFlag:number;

	static get Builder() {
		class Builder {
			_model: AccountMapReq = new AccountMapReq();
			withGlAccountId(glAccountId:string): Builder {
				this._model.glAccountId=glAccountId;
				return this;
			}

			withOfiAccountId(ofiAccountId:string): Builder {
				this._model.ofiAccountId=ofiAccountId;
				return this;
			}

			withValidFrom(validFrom:Date): Builder {
				this._model.validFrom=validFrom;
				return this;
			}

			withVatCodeInd(vatCodeInd:boolean): Builder {
				this._model.vatCodeInd=vatCodeInd;
				return this;
			}

			withSapSegmentText(sapSegmentText:string): Builder {
				this._model.sapSegmentText=sapSegmentText;
				return this;
			}

			withOfiWbsCode(ofiWbsCode:string): Builder {
				this._model.ofiWbsCode=ofiWbsCode;
				return this;
			}

			withCitMarkerVatFlag(citMarkerVatFlag:number): Builder {
				this._model.citMarkerVatFlag=citMarkerVatFlag;
				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
}

export class AccountMapLog {
	old:AccountMap;
	new:AccountMap;
	user:string;
	action:AccountMapLogActionEnum;
	actionDate:Date;

	static get Builder() {
		class Builder {
			_model: AccountMapLog = new AccountMapLog();
			withOld(old:AccountMap): Builder {
				this._model.old=old;
				return this;
			}

			withNew(newv:AccountMap): Builder {
				this._model.new=newv;
				return this;
			}

			withUser(user:string): Builder {
				this._model.user=user;
				return this;
			}

			withAction(action:AccountMapLogActionEnum): Builder {
				this._model.action=action;
				return this;
			}

			withActionDate(actionDate:Date): Builder {
				this._model.actionDate=actionDate;
				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
}

export class SegmentMapEntry {
	segmentId:string;
	orderNumber:number;

	static get Builder() {
		class Builder {
			_model: SegmentMapEntry = new SegmentMapEntry();
			withSegmentId(segmentId:string): Builder {
				this._model.segmentId=segmentId;
				return this;
			}

			withOrderNumber(orderNumber:number): Builder {
				this._model.orderNumber=orderNumber;
				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
}

export class SegmentMap {
	glAccount:FinancialAccount;
	validFrom:Date;
	segments:Array<SegmentMapEntry>;

	static get Builder() {
		class Builder {
			_model: SegmentMap = new SegmentMap();
			withGlAccount(glAccount:FinancialAccount): Builder {
				this._model.glAccount=glAccount;
				return this;
			}

			withValidFrom(validFrom:Date): Builder {
				this._model.validFrom=validFrom;
				return this;
			}

			withSegments(segments:Array<SegmentMapEntry>): Builder {
				this._model.segments=segments;
				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
}

export class SegmentMapReq {
	validFrom:Date;

	static get Builder() {
		class Builder {
			_model: SegmentMapReq = new SegmentMapReq();
			withValidFrom(validFrom:Date): Builder {
				this._model.validFrom=validFrom;
				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
}

export class GetAccountOfiQueryParams {
	status:string = 'active';

	static get Builder() {
		class Builder {
			_model: GetAccountOfiQueryParams = new GetAccountOfiQueryParams();
			withStatus(status:string = 'active'): Builder {
				this._model.status=status;
				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
}

export class GetAccountOfiByAccountIdQueryParams {
	accountId:number;

	static get Builder() {
		class Builder {
			_model: GetAccountOfiByAccountIdQueryParams = new GetAccountOfiByAccountIdQueryParams();
			withAccountId(accountId:number): Builder {
				this._model.accountId=accountId;
				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
}

export class DeleteAccountOfiByAccountIdQueryParams {
	accountId:number;

	static get Builder() {
		class Builder {
			_model: DeleteAccountOfiByAccountIdQueryParams = new DeleteAccountOfiByAccountIdQueryParams();
			withAccountId(accountId:number): Builder {
				this._model.accountId=accountId;
				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
}

export class PatchAccountOfiByAccountIdQueryParams {
	accountId:number;

	static get Builder() {
		class Builder {
			_model: PatchAccountOfiByAccountIdQueryParams = new PatchAccountOfiByAccountIdQueryParams();
			withAccountId(accountId:number): Builder {
				this._model.accountId=accountId;
				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
}

export class GetAccountGlQueryParams {
	status:string = 'active';

	static get Builder() {
		class Builder {
			_model: GetAccountGlQueryParams = new GetAccountGlQueryParams();
			withStatus(status:string = 'active'): Builder {
				this._model.status=status;
				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
}

export class GetAccountGlByAccountIdQueryParams {
	accountId:string;

	static get Builder() {
		class Builder {
			_model: GetAccountGlByAccountIdQueryParams = new GetAccountGlByAccountIdQueryParams();
			withAccountId(accountId:string): Builder {
				this._model.accountId=accountId;
				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
}

export class GetSegmentBySegmentIdQueryParams {
	segmentId:string;

	static get Builder() {
		class Builder {
			_model: GetSegmentBySegmentIdQueryParams = new GetSegmentBySegmentIdQueryParams();
			withSegmentId(segmentId:string): Builder {
				this._model.segmentId=segmentId;
				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
}

export class DeleteSegmentBySegmentIdQueryParams {
	segmentId:string;

	static get Builder() {
		class Builder {
			_model: DeleteSegmentBySegmentIdQueryParams = new DeleteSegmentBySegmentIdQueryParams();
			withSegmentId(segmentId:string): Builder {
				this._model.segmentId=segmentId;
				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
}

export class GetAccountMapQueryParams {
	status:string = 'all';
	glAccount:string;
	ofiAccount:string;

	static get Builder() {
		class Builder {
			_model: GetAccountMapQueryParams = new GetAccountMapQueryParams();
			withStatus(status:string = 'all'): Builder {
				this._model.status=status;
				return this;
			}

			withGlAccount(glAccount:string): Builder {
				this._model.glAccount=glAccount;
				return this;
			}

			withOfiAccount(ofiAccount:string): Builder {
				this._model.ofiAccount=ofiAccount;
				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
}

export class GetAccountMapHistoryQueryParams {
	dateFrom:string;
	dateTo:string;
	user:string;
	glAccount:string;
	ofiAccount:string;

	static get Builder() {
		class Builder {
			_model: GetAccountMapHistoryQueryParams = new GetAccountMapHistoryQueryParams();
			withDateFrom(dateFrom:string): Builder {
				this._model.dateFrom=dateFrom;
				return this;
			}

			withDateTo(dateTo:string): Builder {
				this._model.dateTo=dateTo;
				return this;
			}

			withUser(user:string): Builder {
				this._model.user=user;
				return this;
			}

			withGlAccount(glAccount:string): Builder {
				this._model.glAccount=glAccount;
				return this;
			}

			withOfiAccount(ofiAccount:string): Builder {
				this._model.ofiAccount=ofiAccount;
				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
}
