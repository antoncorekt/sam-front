import React from "react";
import type {MainStateType} from "../../../reducers";
import {connect} from "react-redux";
import {RequestSetUserLogin, Role, UserLogin} from "../../../api/api-models";
import {PostUserInfo, PostUserLogin} from "../../../api/api-func";
import {AuthType} from "../../../reducers/auth/auth-store-type";
import {Button, Popover} from "antd";


class SecuredComponent extends React.Component<{
    group:any,
    renderIfAccessDenied: boolean,
    auth:AuthType
}> {
    render() {
        const userRole = AuthType.getUserData(this.props.auth).role;

        let divClassName = "";
        let title=undefined;

        if (Array.isArray(this.props.group) && this.props.group.includes(userRole)){
            return this.props.children;
        }
        else {
            if (this.props.group === userRole){
                return this.props.children;
            }
            else {
                if (this.props.renderIfAccessDenied === false) {
                    return "";
                }
                divClassName = "secure-denied";

                return <Popover title={`Dla dostępu zaloguj się jako '${this.props.group}'`}>
                    <div className={divClassName} title={title}>
                        {this.props.children}
                    </div>
                    <div/>
                </Popover>
            }
        }
    }
}

const mapStateToProps = (state: MainStateType) => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
)(SecuredComponent);