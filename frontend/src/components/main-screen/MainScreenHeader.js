
import React, { Component } from 'react';
import { Button } from 'antd';
import RequestQueuePanel from './RequestQueuePanel';
import Reporter from './Reporter';
import logo from '../../media/logo_small.jpg';
import './style.css';
import {connect} from "react-redux";
import type {MainStateType} from "../../reducers";
import {GetSystemVersion, PostUserInfo, PostUserLogoff} from "../../api/api-func";
import {
    RequestSetUserLogoff,
    ResultSetVersion, Status,
    UserLoginInfo,
    UserLogoffConf,
    Version
} from "../../api/api-models";
import {AuthType} from "../../reducers";
import {globalLoginContext} from "../../api/common-middleware";

class MainScreenHeader extends Component<{
    auth: AuthType,
    backendInfo: Version
}> {

    constructor(props){
        super(props);

        this.props.getBackendVersion();
    }

    componentDidUpdate(prevProps: Readonly<{auth: AuthType}>, prevState: Readonly<S>, snapshot: SS): void {
        if (prevProps.auth.logoutInfo.response === undefined
            && this.props.auth.logoutInfo.response !== undefined
            && this.props.auth.logoutInfo.response.status === Status.OK){
            this.props.getUserName();
        }
    }

    render() {

        console.warn("this.props", this.props)

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
                    <div className="user vertical-middle">User: {AuthType.getUserData(this.props.auth).user} </div>
                    <Button className="logout-button" size="small"
                            onClick={()=>this.props.logout(AuthType.getUserData(this.props.auth).user)}>Logout</Button>
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
        logout: (user: string)=>{
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
        }
    })
)(MainScreenHeader)