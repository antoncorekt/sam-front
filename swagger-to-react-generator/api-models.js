
// ----- Enums ------

class TypePropEnum {
 	 static get DEPOSITION_RECORD(){ return 'DEPOSITION_RECORD'; }
	 static get FIND_RECORD(){ return 'FIND_RECORD'; }
}


// ----- Models ------

export class BaseRecordContextRecordRefDTO { 
	id:string;
 	type:TypePropEnum;
 	uuid:string;
 
	static get Builder() {
		class Builder {
			 _model: BaseRecordContextRecordRefDTO = new BaseRecordContextRecordRefDTO();
			withId(id:string): Builder { 
				this._model.id=id;
 				return this;
			}

			withType(type:TypePropEnum): Builder { 
				this._model.type=type;
 				return this;
			}

			withUuid(uuid:string): Builder { 
				this._model.uuid=uuid;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class BaseRecordSignatureDTO { 
	auditedBy:string;
 	enteredBy:string;
 	recordedBy:string;
 
	static get Builder() {
		class Builder {
			 _model: BaseRecordSignatureDTO = new BaseRecordSignatureDTO();
			withAuditedBy(auditedBy:string): Builder { 
				this._model.auditedBy=auditedBy;
 				return this;
			}

			withEnteredBy(enteredBy:string): Builder { 
				this._model.enteredBy=enteredBy;
 				return this;
			}

			withRecordedBy(recordedBy:string): Builder { 
				this._model.recordedBy=recordedBy;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class File { 
	absolute:boolean;
 	absoluteFile:File;
 	absolutePath:string;
 	canonicalFile:File;
 	canonicalPath:string;
 	directory:boolean;
 	file:boolean;
 	freeSpace:number;
 	hidden:boolean;
 	name:string;
 	parent:string;
 	parentFile:File;
 	path:string;
 	totalSpace:number;
 	usableSpace:number;
 
	static get Builder() {
		class Builder {
			 _model: File = new File();
			withAbsolute(absolute:boolean): Builder { 
				this._model.absolute=absolute;
 				return this;
			}

			withAbsoluteFile(absoluteFile:File): Builder { 
				this._model.absoluteFile=absoluteFile;
 				return this;
			}

			withAbsolutePath(absolutePath:string): Builder { 
				this._model.absolutePath=absolutePath;
 				return this;
			}

			withCanonicalFile(canonicalFile:File): Builder { 
				this._model.canonicalFile=canonicalFile;
 				return this;
			}

			withCanonicalPath(canonicalPath:string): Builder { 
				this._model.canonicalPath=canonicalPath;
 				return this;
			}

			withDirectory(directory:boolean): Builder { 
				this._model.directory=directory;
 				return this;
			}

			withFile(file:boolean): Builder { 
				this._model.file=file;
 				return this;
			}

			withFreeSpace(freeSpace:number): Builder { 
				this._model.freeSpace=freeSpace;
 				return this;
			}

			withHidden(hidden:boolean): Builder { 
				this._model.hidden=hidden;
 				return this;
			}

			withName(name:string): Builder { 
				this._model.name=name;
 				return this;
			}

			withParent(parent:string): Builder { 
				this._model.parent=parent;
 				return this;
			}

			withParentFile(parentFile:File): Builder { 
				this._model.parentFile=parentFile;
 				return this;
			}

			withPath(path:string): Builder { 
				this._model.path=path;
 				return this;
			}

			withTotalSpace(totalSpace:number): Builder { 
				this._model.totalSpace=totalSpace;
 				return this;
			}

			withUsableSpace(usableSpace:number): Builder { 
				this._model.usableSpace=usableSpace;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class FindRecordDTO { 
	category:string;
 	condition:string;
 	dating:string;
 	description:string;
 	dimensions:FindRecordDimensionsDTO;
 	elevation:ItemRecordElevationDTO;
 	fileNames:Array<null>;
 	id:FindRecordIdDTO;
 	info:ItemRecordInfoDTO;
 	lastModificationTime:string;
 	primaryMaterial:string;
 	remarks:string;
 	secondaryMaterial:string;
 	signature:BaseRecordSignatureDTO;
 	state:FindRecordStateDTO;
 	technology:string;
 	todo:FindRecordToDoDTO;
 	uuid:string;
 
	static get Builder() {
		class Builder {
			 _model: FindRecordDTO = new FindRecordDTO();
			withCategory(category:string): Builder { 
				this._model.category=category;
 				return this;
			}

			withCondition(condition:string): Builder { 
				this._model.condition=condition;
 				return this;
			}

			withDating(dating:string): Builder { 
				this._model.dating=dating;
 				return this;
			}

			withDescription(description:string): Builder { 
				this._model.description=description;
 				return this;
			}

			withDimensions(dimensions:FindRecordDimensionsDTO): Builder { 
				this._model.dimensions=dimensions;
 				return this;
			}

			withElevation(elevation:ItemRecordElevationDTO): Builder { 
				this._model.elevation=elevation;
 				return this;
			}

			withFileNames(fileNames:Array<null>): Builder { 
				this._model.fileNames=fileNames;
 				return this;
			}

			withId(id:FindRecordIdDTO): Builder { 
				this._model.id=id;
 				return this;
			}

			withInfo(info:ItemRecordInfoDTO): Builder { 
				this._model.info=info;
 				return this;
			}

			withLastModificationTime(lastModificationTime:string): Builder { 
				this._model.lastModificationTime=lastModificationTime;
 				return this;
			}

			withPrimaryMaterial(primaryMaterial:string): Builder { 
				this._model.primaryMaterial=primaryMaterial;
 				return this;
			}

			withRemarks(remarks:string): Builder { 
				this._model.remarks=remarks;
 				return this;
			}

			withSecondaryMaterial(secondaryMaterial:string): Builder { 
				this._model.secondaryMaterial=secondaryMaterial;
 				return this;
			}

			withSignature(signature:BaseRecordSignatureDTO): Builder { 
				this._model.signature=signature;
 				return this;
			}

			withState(state:FindRecordStateDTO): Builder { 
				this._model.state=state;
 				return this;
			}

			withTechnology(technology:string): Builder { 
				this._model.technology=technology;
 				return this;
			}

			withTodo(todo:FindRecordToDoDTO): Builder { 
				this._model.todo=todo;
 				return this;
			}

			withUuid(uuid:string): Builder { 
				this._model.uuid=uuid;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class FindRecordDimensionsDTO { 
	diameter:number;
 	height:number;
 	length:number;
 	percentage:number;
 	remarks:string;
 	thickness:number;
 	weight:number;
 	width:number;
 
	static get Builder() {
		class Builder {
			 _model: FindRecordDimensionsDTO = new FindRecordDimensionsDTO();
			withDiameter(diameter:number): Builder { 
				this._model.diameter=diameter;
 				return this;
			}

			withHeight(height:number): Builder { 
				this._model.height=height;
 				return this;
			}

			withLength(length:number): Builder { 
				this._model.length=length;
 				return this;
			}

			withPercentage(percentage:number): Builder { 
				this._model.percentage=percentage;
 				return this;
			}

			withRemarks(remarks:string): Builder { 
				this._model.remarks=remarks;
 				return this;
			}

			withThickness(thickness:number): Builder { 
				this._model.thickness=thickness;
 				return this;
			}

			withWeight(weight:number): Builder { 
				this._model.weight=weight;
 				return this;
			}

			withWidth(width:number): Builder { 
				this._model.width=width;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class FindRecordIdDTO { 
	inventoryNumber:number;
 	objectFieldNumber:string;
 	potteryInventoryNumber:number;
 
	static get Builder() {
		class Builder {
			 _model: FindRecordIdDTO = new FindRecordIdDTO();
			withInventoryNumber(inventoryNumber:number): Builder { 
				this._model.inventoryNumber=inventoryNumber;
 				return this;
			}

			withObjectFieldNumber(objectFieldNumber:string): Builder { 
				this._model.objectFieldNumber=objectFieldNumber;
 				return this;
			}

			withPotteryInventoryNumber(potteryInventoryNumber:number): Builder { 
				this._model.potteryInventoryNumber=potteryInventoryNumber;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class FindRecordStateDTO { 
	fragmentsNo:number;
 	inscribed:boolean;
 	reused:boolean;
 
	static get Builder() {
		class Builder {
			 _model: FindRecordStateDTO = new FindRecordStateDTO();
			withFragmentsNo(fragmentsNo:number): Builder { 
				this._model.fragmentsNo=fragmentsNo;
 				return this;
			}

			withInscribed(inscribed:boolean): Builder { 
				this._model.inscribed=inscribed;
 				return this;
			}

			withReused(reused:boolean): Builder { 
				this._model.reused=reused;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class FindRecordToDoDTO { 
	analysis:FindRecordWorkDTO;
 	analysisDescription:string;
 	drawing:FindRecordWorkDTO;
 	photo:FindRecordWorkDTO;
 
	static get Builder() {
		class Builder {
			 _model: FindRecordToDoDTO = new FindRecordToDoDTO();
			withAnalysis(analysis:FindRecordWorkDTO): Builder { 
				this._model.analysis=analysis;
 				return this;
			}

			withAnalysisDescription(analysisDescription:string): Builder { 
				this._model.analysisDescription=analysisDescription;
 				return this;
			}

			withDrawing(drawing:FindRecordWorkDTO): Builder { 
				this._model.drawing=drawing;
 				return this;
			}

			withPhoto(photo:FindRecordWorkDTO): Builder { 
				this._model.photo=photo;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class FindRecordWorkDTO { 
	dateDone:string;
 	done:boolean;
 	doneBy:string;
 
	static get Builder() {
		class Builder {
			 _model: FindRecordWorkDTO = new FindRecordWorkDTO();
			withDateDone(dateDone:string): Builder { 
				this._model.dateDone=dateDone;
 				return this;
			}

			withDone(done:boolean): Builder { 
				this._model.done=done;
 				return this;
			}

			withDoneBy(doneBy:string): Builder { 
				this._model.doneBy=doneBy;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class IdDTO { 
	id:string;
 
	static get Builder() {
		class Builder {
			 _model: IdDTO = new IdDTO();
			withId(id:string): Builder { 
				this._model.id=id;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class ItemRecordElevationDTO { 
	lower:number;
 	remarks:string;
 	upper:number;
 
	static get Builder() {
		class Builder {
			 _model: ItemRecordElevationDTO = new ItemRecordElevationDTO();
			withLower(lower:number): Builder { 
				this._model.lower=lower;
 				return this;
			}

			withRemarks(remarks:string): Builder { 
				this._model.remarks=remarks;
 				return this;
			}

			withUpper(upper:number): Builder { 
				this._model.upper=upper;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class ItemRecordInfoDTO { 
	contextRef:BaseRecordContextRecordRefDTO;
 	creationDate:string;
 	sector:number;
 	supervisor:string;
 	unit:number;
 
	static get Builder() {
		class Builder {
			 _model: ItemRecordInfoDTO = new ItemRecordInfoDTO();
			withContextRef(contextRef:BaseRecordContextRecordRefDTO): Builder { 
				this._model.contextRef=contextRef;
 				return this;
			}

			withCreationDate(creationDate:string): Builder { 
				this._model.creationDate=creationDate;
 				return this;
			}

			withSector(sector:number): Builder { 
				this._model.sector=sector;
 				return this;
			}

			withSupervisor(supervisor:string): Builder { 
				this._model.supervisor=supervisor;
 				return this;
			}

			withUnit(unit:number): Builder { 
				this._model.unit=unit;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class MissionDTO { 
	createdAt:string;
 	id:string;
 	name:string;
 
	static get Builder() {
		class Builder {
			 _model: MissionDTO = new MissionDTO();
			withCreatedAt(createdAt:string): Builder { 
				this._model.createdAt=createdAt;
 				return this;
			}

			withId(id:string): Builder { 
				this._model.id=id;
 				return this;
			}

			withName(name:string): Builder { 
				this._model.name=name;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class Pageable { 
	offset:number;
 	pageNumber:number;
 	pageSize:number;
 	paged:boolean;
 	sort:Sort;
 	unpaged:boolean;
 
	static get Builder() {
		class Builder {
			 _model: Pageable = new Pageable();
			withOffset(offset:number): Builder { 
				this._model.offset=offset;
 				return this;
			}

			withPageNumber(pageNumber:number): Builder { 
				this._model.pageNumber=pageNumber;
 				return this;
			}

			withPageSize(pageSize:number): Builder { 
				this._model.pageSize=pageSize;
 				return this;
			}

			withPaged(paged:boolean): Builder { 
				this._model.paged=paged;
 				return this;
			}

			withSort(sort:Sort): Builder { 
				this._model.sort=sort;
 				return this;
			}

			withUnpaged(unpaged:boolean): Builder { 
				this._model.unpaged=unpaged;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class PageFindRecordDTO { 
	content;
 	empty:boolean;
 	first:boolean;
 	last:boolean;
 	number:number;
 	numberOfElements:number;
 	pageable:Pageable;
 	size:number;
 	sort:Sort;
 	totalElements:number;
 	totalPages:number;
 
	static get Builder() {
		class Builder {
			 _model: PageFindRecordDTO = new PageFindRecordDTO();
			withContent(content): Builder { 
				this._model.content=content;
 				return this;
			}

			withEmpty(empty:boolean): Builder { 
				this._model.empty=empty;
 				return this;
			}

			withFirst(first:boolean): Builder { 
				this._model.first=first;
 				return this;
			}

			withLast(last:boolean): Builder { 
				this._model.last=last;
 				return this;
			}

			withNumber(number:number): Builder { 
				this._model.number=number;
 				return this;
			}

			withNumberOfElements(numberOfElements:number): Builder { 
				this._model.numberOfElements=numberOfElements;
 				return this;
			}

			withPageable(pageable:Pageable): Builder { 
				this._model.pageable=pageable;
 				return this;
			}

			withSize(size:number): Builder { 
				this._model.size=size;
 				return this;
			}

			withSort(sort:Sort): Builder { 
				this._model.sort=sort;
 				return this;
			}

			withTotalElements(totalElements:number): Builder { 
				this._model.totalElements=totalElements;
 				return this;
			}

			withTotalPages(totalPages:number): Builder { 
				this._model.totalPages=totalPages;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class Resource { 
	description:string;
 	file:File;
 	filename:string;
 	inputStream:InputStream;
 	open:boolean;
 	readable:boolean;
 	uri:URI;
 	url:URL;
 
	static get Builder() {
		class Builder {
			 _model: Resource = new Resource();
			withDescription(description:string): Builder { 
				this._model.description=description;
 				return this;
			}

			withFile(file:File): Builder { 
				this._model.file=file;
 				return this;
			}

			withFilename(filename:string): Builder { 
				this._model.filename=filename;
 				return this;
			}

			withInputStream(inputStream:InputStream): Builder { 
				this._model.inputStream=inputStream;
 				return this;
			}

			withOpen(open:boolean): Builder { 
				this._model.open=open;
 				return this;
			}

			withReadable(readable:boolean): Builder { 
				this._model.readable=readable;
 				return this;
			}

			withUri(uri:URI): Builder { 
				this._model.uri=uri;
 				return this;
			}

			withUrl(url:URL): Builder { 
				this._model.url=url;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class Sort { 
	empty:boolean;
 	sorted:boolean;
 	unsorted:boolean;
 
	static get Builder() {
		class Builder {
			 _model: Sort = new Sort();
			withEmpty(empty:boolean): Builder { 
				this._model.empty=empty;
 				return this;
			}

			withSorted(sorted:boolean): Builder { 
				this._model.sorted=sorted;
 				return this;
			}

			withUnsorted(unsorted:boolean): Builder { 
				this._model.unsorted=unsorted;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class URI { 
	absolute:boolean;
 	authority:string;
 	fragment:string;
 	host:string;
 	opaque:boolean;
 	path:string;
 	port:number;
 	query:string;
 	rawAuthority:string;
 	rawFragment:string;
 	rawPath:string;
 	rawQuery:string;
 	rawSchemeSpecificPart:string;
 	rawUserInfo:string;
 	scheme:string;
 	schemeSpecificPart:string;
 	userInfo:string;
 
	static get Builder() {
		class Builder {
			 _model: URI = new URI();
			withAbsolute(absolute:boolean): Builder { 
				this._model.absolute=absolute;
 				return this;
			}

			withAuthority(authority:string): Builder { 
				this._model.authority=authority;
 				return this;
			}

			withFragment(fragment:string): Builder { 
				this._model.fragment=fragment;
 				return this;
			}

			withHost(host:string): Builder { 
				this._model.host=host;
 				return this;
			}

			withOpaque(opaque:boolean): Builder { 
				this._model.opaque=opaque;
 				return this;
			}

			withPath(path:string): Builder { 
				this._model.path=path;
 				return this;
			}

			withPort(port:number): Builder { 
				this._model.port=port;
 				return this;
			}

			withQuery(query:string): Builder { 
				this._model.query=query;
 				return this;
			}

			withRawAuthority(rawAuthority:string): Builder { 
				this._model.rawAuthority=rawAuthority;
 				return this;
			}

			withRawFragment(rawFragment:string): Builder { 
				this._model.rawFragment=rawFragment;
 				return this;
			}

			withRawPath(rawPath:string): Builder { 
				this._model.rawPath=rawPath;
 				return this;
			}

			withRawQuery(rawQuery:string): Builder { 
				this._model.rawQuery=rawQuery;
 				return this;
			}

			withRawSchemeSpecificPart(rawSchemeSpecificPart:string): Builder { 
				this._model.rawSchemeSpecificPart=rawSchemeSpecificPart;
 				return this;
			}

			withRawUserInfo(rawUserInfo:string): Builder { 
				this._model.rawUserInfo=rawUserInfo;
 				return this;
			}

			withScheme(scheme:string): Builder { 
				this._model.scheme=scheme;
 				return this;
			}

			withSchemeSpecificPart(schemeSpecificPart:string): Builder { 
				this._model.schemeSpecificPart=schemeSpecificPart;
 				return this;
			}

			withUserInfo(userInfo:string): Builder { 
				this._model.userInfo=userInfo;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class URL { 
	authority:string;
 	content:object;
 	defaultPort:number;
 	file:string;
 	host:string;
 	path:string;
 	port:number;
 	protocol:string;
 	query:string;
 	ref:string;
 	userInfo:string;
 
	static get Builder() {
		class Builder {
			 _model: URL = new URL();
			withAuthority(authority:string): Builder { 
				this._model.authority=authority;
 				return this;
			}

			withContent(content:object): Builder { 
				this._model.content=content;
 				return this;
			}

			withDefaultPort(defaultPort:number): Builder { 
				this._model.defaultPort=defaultPort;
 				return this;
			}

			withFile(file:string): Builder { 
				this._model.file=file;
 				return this;
			}

			withHost(host:string): Builder { 
				this._model.host=host;
 				return this;
			}

			withPath(path:string): Builder { 
				this._model.path=path;
 				return this;
			}

			withPort(port:number): Builder { 
				this._model.port=port;
 				return this;
			}

			withProtocol(protocol:string): Builder { 
				this._model.protocol=protocol;
 				return this;
			}

			withQuery(query:string): Builder { 
				this._model.query=query;
 				return this;
			}

			withRef(ref:string): Builder { 
				this._model.ref=ref;
 				return this;
			}

			withUserInfo(userInfo:string): Builder { 
				this._model.userInfo=userInfo;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class UserDTO { 
	lastModificationTime:string;
 	password:string;
 	role:string;
 	username:string;
 
	static get Builder() {
		class Builder {
			 _model: UserDTO = new UserDTO();
			withLastModificationTime(lastModificationTime:string): Builder { 
				this._model.lastModificationTime=lastModificationTime;
 				return this;
			}

			withPassword(password:string): Builder { 
				this._model.password=password;
 				return this;
			}

			withRole(role:string): Builder { 
				this._model.role=role;
 				return this;
			}

			withUsername(username:string): Builder { 
				this._model.username=username;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class GetHelloWorldQueryParams { 
	name:string = 'Stranger';
 
	static get Builder() {
		class Builder {
			 _model: GetHelloWorldQueryParams = new GetHelloWorldQueryParams();
			withName(name:string = 'Stranger'): Builder { 
				this._model.name=name;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class PostLoginQueryParams { 
	password:string;
 	username:string;
 
	static get Builder() {
		class Builder {
			 _model: PostLoginQueryParams = new PostLoginQueryParams();
			withPassword(password:string): Builder { 
				this._model.password=password;
 				return this;
			}

			withUsername(username:string): Builder { 
				this._model.username=username;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class GetMissionsByIdQueryParams { 
	id:string;
 
	static get Builder() {
		class Builder {
			 _model: GetMissionsByIdQueryParams = new GetMissionsByIdQueryParams();
			withId(id:string): Builder { 
				this._model.id=id;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class DeleteMissionsByIdQueryParams { 
	id:string;
 
	static get Builder() {
		class Builder {
			 _model: DeleteMissionsByIdQueryParams = new DeleteMissionsByIdQueryParams();
			withId(id:string): Builder { 
				this._model.id=id;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class GetMissionsByMissionNameFindRecordsQueryParams { 
	missionName:string;
 	offset:number;
 	pageNumber:number;
 	pageSize:number;
 	paged:boolean;
 	"sort.sorted":boolean;
 	"sort.unsorted":boolean;
 	unpaged:boolean;
 	get sortSorted(){return this["sort.sorted"];}
	set sortSorted(param: boolean){this["sort.sorted"]=param;}
	get sortUnsorted(){return this["sort.unsorted"];}
	set sortUnsorted(param: boolean){this["sort.unsorted"]=param;}
	static get Builder() {
		class Builder {
			 _model: GetMissionsByMissionNameFindRecordsQueryParams = new GetMissionsByMissionNameFindRecordsQueryParams();
			withMissionName(missionName:string): Builder { 
				this._model.missionName=missionName;
 				return this;
			}

			withOffset(offset:number): Builder { 
				this._model.offset=offset;
 				return this;
			}

			withPageNumber(pageNumber:number): Builder { 
				this._model.pageNumber=pageNumber;
 				return this;
			}

			withPageSize(pageSize:number): Builder { 
				this._model.pageSize=pageSize;
 				return this;
			}

			withPaged(paged:boolean): Builder { 
				this._model.paged=paged;
 				return this;
			}

			withSortSorted(sortSorted:boolean): Builder { 
				this._model.sortSorted=sortSorted;
 				return this;
			}

			withSortUnsorted(sortUnsorted:boolean): Builder { 
				this._model.sortUnsorted=sortUnsorted;
 				return this;
			}

			withUnpaged(unpaged:boolean): Builder { 
				this._model.unpaged=unpaged;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class PutMissionsByMissionNameFindRecordsQueryParams { 
	missionName:string;
 
	static get Builder() {
		class Builder {
			 _model: PutMissionsByMissionNameFindRecordsQueryParams = new PutMissionsByMissionNameFindRecordsQueryParams();
			withMissionName(missionName:string): Builder { 
				this._model.missionName=missionName;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class PostMissionsByMissionNameFindRecordsQueryParams { 
	missionName:string;
 
	static get Builder() {
		class Builder {
			 _model: PostMissionsByMissionNameFindRecordsQueryParams = new PostMissionsByMissionNameFindRecordsQueryParams();
			withMissionName(missionName:string): Builder { 
				this._model.missionName=missionName;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class GetMissionsByMissionNameFindRecordsByUuidQueryParams { 
	missionName:string;
 	uuid:string;
 
	static get Builder() {
		class Builder {
			 _model: GetMissionsByMissionNameFindRecordsByUuidQueryParams = new GetMissionsByMissionNameFindRecordsByUuidQueryParams();
			withMissionName(missionName:string): Builder { 
				this._model.missionName=missionName;
 				return this;
			}

			withUuid(uuid:string): Builder { 
				this._model.uuid=uuid;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class DeleteMissionsByMissionNameFindRecordsByUuidQueryParams { 
	missionName:string;
 	uuid:string;
 
	static get Builder() {
		class Builder {
			 _model: DeleteMissionsByMissionNameFindRecordsByUuidQueryParams = new DeleteMissionsByMissionNameFindRecordsByUuidQueryParams();
			withMissionName(missionName:string): Builder { 
				this._model.missionName=missionName;
 				return this;
			}

			withUuid(uuid:string): Builder { 
				this._model.uuid=uuid;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class PostMissionsByMissionNameFindRecordsByUuidPhotosQueryParams { 
	missionName:string;
 	uuid:string;
 
	static get Builder() {
		class Builder {
			 _model: PostMissionsByMissionNameFindRecordsByUuidPhotosQueryParams = new PostMissionsByMissionNameFindRecordsByUuidPhotosQueryParams();
			withMissionName(missionName:string): Builder { 
				this._model.missionName=missionName;
 				return this;
			}

			withUuid(uuid:string): Builder { 
				this._model.uuid=uuid;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class PostMissionsByMissionNameFindRecordsByUuidPhotosOriginalByPhotoNameQueryParams { 
	missionName:string;
 	"photo-name":string;
 	uuid:string;
 	get photoName(){return this["photo-name"];}
	set photoName(param: string){this["photo-name"]=param;}
	static get Builder() {
		class Builder {
			 _model: PostMissionsByMissionNameFindRecordsByUuidPhotosOriginalByPhotoNameQueryParams = new PostMissionsByMissionNameFindRecordsByUuidPhotosOriginalByPhotoNameQueryParams();
			withMissionName(missionName:string): Builder { 
				this._model.missionName=missionName;
 				return this;
			}

			withPhotoName(photoName:string): Builder { 
				this._model.photoName=photoName;
 				return this;
			}

			withUuid(uuid:string): Builder { 
				this._model.uuid=uuid;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class PostMissionsByMissionNameFindRecordsByUuidPhotosScaledByPhotoNameQueryParams { 
	missionName:string;
 	"photo-name":string;
 	uuid:string;
 	get photoName(){return this["photo-name"];}
	set photoName(param: string){this["photo-name"]=param;}
	static get Builder() {
		class Builder {
			 _model: PostMissionsByMissionNameFindRecordsByUuidPhotosScaledByPhotoNameQueryParams = new PostMissionsByMissionNameFindRecordsByUuidPhotosScaledByPhotoNameQueryParams();
			withMissionName(missionName:string): Builder { 
				this._model.missionName=missionName;
 				return this;
			}

			withPhotoName(photoName:string): Builder { 
				this._model.photoName=photoName;
 				return this;
			}

			withUuid(uuid:string): Builder { 
				this._model.uuid=uuid;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class DeleteMissionsByMissionNameFindRecordsByUuidPhotosByPhotoNameQueryParams { 
	missionName:string;
 	"photo-name":string;
 	uuid:string;
 	get photoName(){return this["photo-name"];}
	set photoName(param: string){this["photo-name"]=param;}
	static get Builder() {
		class Builder {
			 _model: DeleteMissionsByMissionNameFindRecordsByUuidPhotosByPhotoNameQueryParams = new DeleteMissionsByMissionNameFindRecordsByUuidPhotosByPhotoNameQueryParams();
			withMissionName(missionName:string): Builder { 
				this._model.missionName=missionName;
 				return this;
			}

			withPhotoName(photoName:string): Builder { 
				this._model.photoName=photoName;
 				return this;
			}

			withUuid(uuid:string): Builder { 
				this._model.uuid=uuid;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class GetMissionsByMissionNameSampleRecordsQueryParams { 
	missionName:string;
 	offset:number;
 	pageNumber:number;
 	pageSize:number;
 	paged:boolean;
 	"sort.sorted":boolean;
 	"sort.unsorted":boolean;
 	unpaged:boolean;
 	get sortSorted(){return this["sort.sorted"];}
	set sortSorted(param: boolean){this["sort.sorted"]=param;}
	get sortUnsorted(){return this["sort.unsorted"];}
	set sortUnsorted(param: boolean){this["sort.unsorted"]=param;}
	static get Builder() {
		class Builder {
			 _model: GetMissionsByMissionNameSampleRecordsQueryParams = new GetMissionsByMissionNameSampleRecordsQueryParams();
			withMissionName(missionName:string): Builder { 
				this._model.missionName=missionName;
 				return this;
			}

			withOffset(offset:number): Builder { 
				this._model.offset=offset;
 				return this;
			}

			withPageNumber(pageNumber:number): Builder { 
				this._model.pageNumber=pageNumber;
 				return this;
			}

			withPageSize(pageSize:number): Builder { 
				this._model.pageSize=pageSize;
 				return this;
			}

			withPaged(paged:boolean): Builder { 
				this._model.paged=paged;
 				return this;
			}

			withSortSorted(sortSorted:boolean): Builder { 
				this._model.sortSorted=sortSorted;
 				return this;
			}

			withSortUnsorted(sortUnsorted:boolean): Builder { 
				this._model.sortUnsorted=sortUnsorted;
 				return this;
			}

			withUnpaged(unpaged:boolean): Builder { 
				this._model.unpaged=unpaged;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class PutMissionsByMissionNameSampleRecordsQueryParams { 
	missionName:string;
 
	static get Builder() {
		class Builder {
			 _model: PutMissionsByMissionNameSampleRecordsQueryParams = new PutMissionsByMissionNameSampleRecordsQueryParams();
			withMissionName(missionName:string): Builder { 
				this._model.missionName=missionName;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class PostMissionsByMissionNameSampleRecordsQueryParams { 
	missionName:string;
 
	static get Builder() {
		class Builder {
			 _model: PostMissionsByMissionNameSampleRecordsQueryParams = new PostMissionsByMissionNameSampleRecordsQueryParams();
			withMissionName(missionName:string): Builder { 
				this._model.missionName=missionName;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class GetMissionsByMissionNameSampleRecordsByUuidQueryParams { 
	missionName:string;
 	uuid:string;
 
	static get Builder() {
		class Builder {
			 _model: GetMissionsByMissionNameSampleRecordsByUuidQueryParams = new GetMissionsByMissionNameSampleRecordsByUuidQueryParams();
			withMissionName(missionName:string): Builder { 
				this._model.missionName=missionName;
 				return this;
			}

			withUuid(uuid:string): Builder { 
				this._model.uuid=uuid;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class DeleteMissionsByMissionNameSampleRecordsByUuidQueryParams { 
	missionName:string;
 	uuid:string;
 
	static get Builder() {
		class Builder {
			 _model: DeleteMissionsByMissionNameSampleRecordsByUuidQueryParams = new DeleteMissionsByMissionNameSampleRecordsByUuidQueryParams();
			withMissionName(missionName:string): Builder { 
				this._model.missionName=missionName;
 				return this;
			}

			withUuid(uuid:string): Builder { 
				this._model.uuid=uuid;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class PostMissionsByMissionNameSampleRecordsByUuidPhotosQueryParams { 
	missionName:string;
 	uuid:string;
 
	static get Builder() {
		class Builder {
			 _model: PostMissionsByMissionNameSampleRecordsByUuidPhotosQueryParams = new PostMissionsByMissionNameSampleRecordsByUuidPhotosQueryParams();
			withMissionName(missionName:string): Builder { 
				this._model.missionName=missionName;
 				return this;
			}

			withUuid(uuid:string): Builder { 
				this._model.uuid=uuid;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class PostMissionsByMissionNameSampleRecordsByUuidPhotosOriginalByPhotoNameQueryParams { 
	missionName:string;
 	"photo-name":string;
 	uuid:string;
 	get photoName(){return this["photo-name"];}
	set photoName(param: string){this["photo-name"]=param;}
	static get Builder() {
		class Builder {
			 _model: PostMissionsByMissionNameSampleRecordsByUuidPhotosOriginalByPhotoNameQueryParams = new PostMissionsByMissionNameSampleRecordsByUuidPhotosOriginalByPhotoNameQueryParams();
			withMissionName(missionName:string): Builder { 
				this._model.missionName=missionName;
 				return this;
			}

			withPhotoName(photoName:string): Builder { 
				this._model.photoName=photoName;
 				return this;
			}

			withUuid(uuid:string): Builder { 
				this._model.uuid=uuid;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class PostMissionsByMissionNameSampleRecordsByUuidPhotosScaledByPhotoNameQueryParams { 
	missionName:string;
 	"photo-name":string;
 	uuid:string;
 	get photoName(){return this["photo-name"];}
	set photoName(param: string){this["photo-name"]=param;}
	static get Builder() {
		class Builder {
			 _model: PostMissionsByMissionNameSampleRecordsByUuidPhotosScaledByPhotoNameQueryParams = new PostMissionsByMissionNameSampleRecordsByUuidPhotosScaledByPhotoNameQueryParams();
			withMissionName(missionName:string): Builder { 
				this._model.missionName=missionName;
 				return this;
			}

			withPhotoName(photoName:string): Builder { 
				this._model.photoName=photoName;
 				return this;
			}

			withUuid(uuid:string): Builder { 
				this._model.uuid=uuid;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class DeleteMissionsByMissionNameSampleRecordsByUuidPhotosByPhotoNameQueryParams { 
	missionName:string;
 	"photo-name":string;
 	uuid:string;
 	get photoName(){return this["photo-name"];}
	set photoName(param: string){this["photo-name"]=param;}
	static get Builder() {
		class Builder {
			 _model: DeleteMissionsByMissionNameSampleRecordsByUuidPhotosByPhotoNameQueryParams = new DeleteMissionsByMissionNameSampleRecordsByUuidPhotosByPhotoNameQueryParams();
			withMissionName(missionName:string): Builder { 
				this._model.missionName=missionName;
 				return this;
			}

			withPhotoName(photoName:string): Builder { 
				this._model.photoName=photoName;
 				return this;
			}

			withUuid(uuid:string): Builder { 
				this._model.uuid=uuid;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class GetMissionsByMissionNameSearchFindRecordsQueryParams { 
	idPattern:string;
 	missionName:string;
 
	static get Builder() {
		class Builder {
			 _model: GetMissionsByMissionNameSearchFindRecordsQueryParams = new GetMissionsByMissionNameSearchFindRecordsQueryParams();
			withIdPattern(idPattern:string): Builder { 
				this._model.idPattern=idPattern;
 				return this;
			}

			withMissionName(missionName:string): Builder { 
				this._model.missionName=missionName;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class GetMissionsByMissionNameSearchSampleRecordsQueryParams { 
	idPattern:string;
 	missionName:string;
 
	static get Builder() {
		class Builder {
			 _model: GetMissionsByMissionNameSearchSampleRecordsQueryParams = new GetMissionsByMissionNameSearchSampleRecordsQueryParams();
			withIdPattern(idPattern:string): Builder { 
				this._model.idPattern=idPattern;
 				return this;
			}

			withMissionName(missionName:string): Builder { 
				this._model.missionName=missionName;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class GetSetBackupDownscalerQueryParams { 
	enabled:boolean;
 
	static get Builder() {
		class Builder {
			 _model: GetSetBackupDownscalerQueryParams = new GetSetBackupDownscalerQueryParams();
			withEnabled(enabled:boolean): Builder { 
				this._model.enabled=enabled;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class GetSyncFileRootQueryParams { 
	missionName:string;
 
	static get Builder() {
		class Builder {
			 _model: GetSyncFileRootQueryParams = new GetSyncFileRootQueryParams();
			withMissionName(missionName:string): Builder { 
				this._model.missionName=missionName;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class GetSyncOpenRegistrationQueryParams { 
	externalId:string;
 
	static get Builder() {
		class Builder {
			 _model: GetSyncOpenRegistrationQueryParams = new GetSyncOpenRegistrationQueryParams();
			withExternalId(externalId:string): Builder { 
				this._model.externalId=externalId;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class GetSyncRemoveNodeQueryParams { 
	nodeId:string;
 
	static get Builder() {
		class Builder {
			 _model: GetSyncRemoveNodeQueryParams = new GetSyncRemoveNodeQueryParams();
			withNodeId(nodeId:string): Builder { 
				this._model.nodeId=nodeId;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class GetSyncSetAutoSyncQueryParams { 
	enabled:boolean;
 
	static get Builder() {
		class Builder {
			 _model: GetSyncSetAutoSyncQueryParams = new GetSyncSetAutoSyncQueryParams();
			withEnabled(enabled:boolean): Builder { 
				this._model.enabled=enabled;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class GetSyncByMissionNamePullFilesQueryParams { 
	missionName:string;
 
	static get Builder() {
		class Builder {
			 _model: GetSyncByMissionNamePullFilesQueryParams = new GetSyncByMissionNamePullFilesQueryParams();
			withMissionName(missionName:string): Builder { 
				this._model.missionName=missionName;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class GetSyncByMissionNamePushFilesQueryParams { 
	missionName:string;
 
	static get Builder() {
		class Builder {
			 _model: GetSyncByMissionNamePushFilesQueryParams = new GetSyncByMissionNamePushFilesQueryParams();
			withMissionName(missionName:string): Builder { 
				this._model.missionName=missionName;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class GetSyncByMissionNameSynchroniseFilesQueryParams { 
	missionName:string;
 
	static get Builder() {
		class Builder {
			 _model: GetSyncByMissionNameSynchroniseFilesQueryParams = new GetSyncByMissionNameSynchroniseFilesQueryParams();
			withMissionName(missionName:string): Builder { 
				this._model.missionName=missionName;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class GetUserQueryParams { 
	username:string;
 
	static get Builder() {
		class Builder {
			 _model: GetUserQueryParams = new GetUserQueryParams();
			withUsername(username:string): Builder { 
				this._model.username=username;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 

export class DeleteUserQueryParams { 
	username:string;
 
	static get Builder() {
		class Builder {
			 _model: DeleteUserQueryParams = new DeleteUserQueryParams();
			withUsername(username:string): Builder { 
				this._model.username=username;
 				return this;
			}
			build(){
				return this._model;
			}
		}
		return Builder;
	}
 } 
