import * as React from "react";
import {connect} from "react-redux";
import type {MainStateType} from "../../reducers";
import {PostUserInfo, PostUserLogin} from "../../api/api-func";
import {
    RequestSetUserLogin,
    Role,
    UserLogin
} from "../../api/api-models";
import {Button, Input} from 'antd';
import { Radio } from 'antd';
import "./style.css"
import {AuthType} from "../../reducers/auth/auth-store-type";

type LoginPageStateType = {
    group: Role,
    user: string,
    password: string
}

class LoginPage extends React.Component<{
    auth: AuthType
}>{
    state:LoginPageStateType = {
        group: Role.ADMIN,
        user: null,
        password: null
    };

    constructor(props){
        super(props);

        this.props.getUserName();
    }

    componentDidUpdate(prevProps: Readonly<{auth: AuthType}>, prevState: Readonly<S>, snapshot: SS): void {
        if (!AuthType.isLoginOk(prevProps)
            && prevProps.auth.login.response === undefined
            && this.props.auth.login.response !== undefined
            && this.props.auth.login.response.data !== undefined){
            this.props.getUserName();
        }
    }

    loginRender = () => (
        <div className="login-container">

            <div style={{width: "300px", color: "red"}}>
                {this.props.auth.login.fail
                    ? "Error type: " + this.props.auth.login.errorType + " ; msg: " + this.props.auth.login.msg
                    : undefined
                }
            </div>


            <div className="login-inputs">
                <Input placeholder="Login" onChange={(e)=>this.setState({user: e.target.value})}/>
            </div>
            <div className="login-inputs">
                <Input.Password placeholder="Hasło" onChange={(e)=>this.setState({password: e.target.value})}/>
            </div>
            <Radio.Group onChange={(e)=>this.setState({group: e.target.value})} value={this.state.group}>
                <Radio value={Role.CONTROL}>{Role.CONTROL}</Radio>
                {/*<Radio value={Role.ADMIN}>{Role.ADMIN}</Radio>*/}
                <Radio value={Role.BOOKER}>{Role.BOOKER}</Radio>
            </Radio.Group>

            <Button
                className={"login-button"}
                loading={this.props.auth.login.fetching}
                onClick={()=>this.props.loginHandle(this.state.user, this.state.password, this.state.group)}
            >
                Login
            </Button>
        </div>
    );

    render() {

        if (AuthType.isLoginOk(this.props.auth)){
            return this.props.children;
        }
        else {
            if (this.props.auth.userInfo.fetching){
                return <div className="logo">

                </div>;
            }
            else {
                return this.loginRender();
            }
        }


    }
}

const mapStateToProps = (state: MainStateType) => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,

    dispatch => ({
        loginHandle : (user: string, password: string, role: Role = Role.CONTROL) => {
            dispatch(
                PostUserLogin(new RequestSetUserLogin.Builder()
                    .withData(new UserLogin.Builder()
                        .withUser(user)
                        .withRole(role)
                        .withPassword(password)
                        .build()
                    )
                    .build()
                )

            )
        },
        getUserName: () => {
            dispatch(
                PostUserInfo()
            )
        }
    })
)(LoginPage);

