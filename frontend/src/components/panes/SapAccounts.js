import React, {Component} from 'react';
import ReactTable from 'react-table';
import {Button, Checkbox, Pagination, Spin} from 'antd';
import {renderDateTime} from '../../utils/Utils.js';
import './style.css';
import {connect} from "react-redux";
import {DeleteDictionaryAccountSap, GetDictionaryAccountSap} from "../../api/api-func";
import {AccountDictSap, ResultSetAccountDictSaps, Role} from "../../api/api-models";
import type {BackendAction} from "../../api/common-middleware";
import type {MainStateType} from "../../reducers";
import AccountSapUploader from "../uploader-panel/AccountSapUploader";
import {ActionRequestData, ActionResponseData} from "../../api/common-middleware";
import {SapAccountStoreType} from "../../reducers/sap-account/sap-account-store-type";
import {TestEnvContainer} from "./common/TestEnvContainer";
import {getPageSizeOption, getPaginationArray} from "../../utils/Utils";
import SecuredComponent from "./common/SecuredComponent";

const data = [
    {
        account: '70130200',
        name: 'Sprzed\Usage SMS FMS',
        createdDate: renderDateTime(Date.now() - 100000000),
        createdBy: 'CGSYSADM',
        modifiedDate: renderDateTime(Date.now()),
        modifiedBy: 'CGSYSADM',
    },
    {
        account: '27800020',
        name: 'Vendor Stores - Microsoft',
        createdDate: renderDateTime(Date.now() - 100000000),
        createdBy: 'CGSYSADM',
        modifiedDate: renderDateTime(Date.now()),
        modifiedBy: 'CGSYSADM',
    }
];
// sapOfiAccount:string;
// name:string;
// status:string;
const columns = [
    {
        Header: 'Konto',
        accessor: 'sapOfiAccount'
    },
    {
        Header: 'Nazwa',
        accessor: 'name'
    },
    {
        Header: 'Data utworzenia',
        accessor: 'entryDate'
    },
    {
        Header: 'Utworzył',
        accessor: 'entryOwner'
    },
    {
        Header: 'Data modyfikacji',
        accessor: 'updateDate'
    },
    {
        Header: 'Zmodyfikował',
        accessor: 'modifiedBy'
    }
];

class SapAccounts extends Component<{
    sapOfi: SapAccountStoreType
}> {

    constructor(props) {
        super(props);

        this.state = {
            checked: false,
            pageSize: 10,
            page: 1,
            filtered: []
        };

        this.props.getSapOfi();
    }

    onChange = e => {
        this.setState({
            checked: e.target.checked,
        });
    };

    componentDidUpdate(prevProps: Readonly<{ sapOfi: SapAccountStoreType }>, prevState: Readonly<S>, snapshot: SS): void {

        if (prevProps.sapOfi.fileUploadStatus.fetching === true
            && SapAccountStoreType.isFileUploadSuccess(this.props.sapOfi)
        ) {
            this.props.getSapOfi();
        }

        if (prevProps.sapOfi.DELETE.fetching === true &&
            this.props.sapOfi.DELETE.fetching === false
        ) {
            this.props.getSapOfi();
        }

    }

    render() {

        const data = SapAccountStoreType.getSapAccounts(this.props.sapOfi);

        return (
            <div className="sap-accounts">
                <div className="flex-end-row">
                    <TestEnvContainer>
                        <Button style={{margin:"0px 10px 0px 10px"}} onClick={()=>this.props.deleteDict()} loading={this.props.sapOfi.DELETE.fetching}>Usuń wszystko</Button>
                    </TestEnvContainer>
                    <Checkbox className="checkbox" onChange={null}>
                        Aktualizuj opisy istniejących kont
                    </Checkbox>

                    <AccountSapUploader fileFetching={this.props.sapOfi.fileUploadStatus.fetching}/>

                </div>
                <div className="table-container">
                    <Spin tip={"Pobieram słownik"} spinning={this.props.sapOfi.GET.fetching}>
                        <ReactTable
                            data={getPaginationArray(data, this.state.page, this.state.pageSize)}
                            columns={columns}
                            noDataText="Brak danych"
                            filterable
                            filtered={this.state.filtered}
                            showPagination={false}
                            pageSize={this.state.pageSize}
                            onFilteredChange={filtered => this.setState({filtered})}
                        />
                    </Spin>
                </div>
                <div className="pagination-container">
                    <Pagination
                        size="small"
                        total={data.length}
                        showQuickJumper
                        showSizeChanger
                        showTotal={() => {
                            return "Ilość pozycji: " + data.length;
                        }}
                        onChange={(page, pageSize) => {
                            this.setState({pageSize: pageSize, page: page});
                        }}
                        onShowSizeChange={(current, size) => {
                            this.setState({pageSize: size});
                        }}
                        pageSizeOptions={getPageSizeOption(data)}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: MainStateType) => ({
    sapOfi: state.sapAccountOfi,
});

export default connect(
    mapStateToProps,
    dispatch => ({
        getSapOfi: () => {
            dispatch(
                GetDictionaryAccountSap()
            )
        },
        deleteDict: () => {
            dispatch(
                DeleteDictionaryAccountSap()
            )
        }
    }))(SapAccounts)