
import React, { Component } from 'react';
import { Button } from 'antd';
import RequestQueuePanel from './RequestQueuePanel';
import Reporter from './Reporter';
import logo from '../../media/logo_small.jpg';
import './style.css';
import {connect} from "react-redux";
import type {MainStateType} from "../../reducers";
import {GetSystemVersion, PostUserLogoff} from "../../api/api-func";
import {ResultSetVersion, UserLoginInfo, Version} from "../../api/api-models";

class MainScreenHeader extends Component<{
    auth: UserLoginInfo,
    backendInfo: Version
}> {

    constructor(props){
        super(props);

        this.props.getBackendVersion();
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
                    <div className="user vertical-middle">User: {this.props.auth.user.user} </div>
                    <Button className="logout-button" size="small" onClick={()=>this.props.logout(this.props.auth.user.user)}>Logout</Button>
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
            dispatch(
                PostUserLogoff(user)
            )
        },
        getBackendVersion: () => {
            dispatch(
                GetSystemVersion()
            )
        }
    })
)(MainScreenHeader)