import React, { Component } from 'react';
import { Button } from 'antd';
import RequestQueuePanel from './RequestQueuePanel';
import Reporter from './Reporter';
import logo from '../../media/logo_small.jpg';
import './style.less';
import { connect } from "react-redux";
import type { MainStateType } from "../../reducers";

import {
    RequestSetUserLogoff,
    Status,
    UserLogoffConf,
    Version
} from "../../api/api-models";
import { globalLoginContext } from "../../api/common-middleware";
import { AuthType } from "../../reducers/auth/auth-store-type";
import {
    GetDictionaryAccountBscs,
    GetDictionaryAccountSap,
    GetDictionarySegment, GetSystemVersion,
    PostUserInfo, PostUserLogoff
} from "../../api/api-func";

class MainScreenHeader extends Component<{
    auth: AuthType,
    backendInfo: Version
}> {

    constructor(props) {
        super(props);

        this.props.getBackendVersion();
        this.props.getSegmentsDictionary();
        this.props.getBscsAccountsDictionary();
        this.props.getSapOfiAccountDictionary();
    }

    render() {
        const userLogin = AuthType.getUserData(this.props.auth).user;

        return (
            <div className='main-screen-header'>
                <div className="logo-img">
                    <img src={logo} alt="logo" height={20} />
                </div>
                <div className="horizontal-container">
                    <div className="revision vertical-middle">backend_version = {this.props.backendInfo.version} deployment_time = ?</div>
                    <RequestQueuePanel />
                    <div className="reporter-container">
                        <Reporter />
                    </div>
                    <div className="user vertical-middle">User: {userLogin} </div>
                    <Button className="logout-button" size="small"
                        onClick={() => this.props.logout(userLogin)}>Logout</Button>
                </div>
            </div >
        );
    }
}

const mapStateToProps = (state: MainStateType) => ({
    auth: state.auth,
    backendInfo: state.backendInfo
});

export default connect(
    mapStateToProps,
    dispatch => ({
        logout: (user: string) => {
            globalLoginContext.bearerToken = null;
            dispatch(
                PostUserLogoff(new RequestSetUserLogoff.Builder()
                    .withData(new UserLogoffConf.Builder()
                        .withUser(user)
                        .build()
                    )
                    .build()
                )
            );
            dispatch(
                PostUserInfo()
            )
        },
        getBackendVersion: () => {
            dispatch(
                GetSystemVersion()
            );
        },
        getUserName: () => {
            dispatch(
                PostUserInfo()
            )
        },
        getSegmentsDictionary: () => {
            dispatch(
                GetDictionarySegment()
            )
        },
        getBscsAccountsDictionary: () => {
            dispatch(
                GetDictionaryAccountBscs()
            )
        },
        getSapOfiAccountDictionary: () => {
            dispatch(
                GetDictionaryAccountSap()
            )
        }
    })
)(MainScreenHeader)