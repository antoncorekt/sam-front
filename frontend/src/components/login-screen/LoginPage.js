import * as React from "react";
import {connect} from "react-redux";
import type {MainStateType} from "../../reducers";
import {PostUserLogin} from "../../api/api-func";
import {RequestSetUserLogin, Role, UserLogin, UserLoginInfo} from "../../api/api-models";
import {BackendAction} from "../../api/common-middleware";
import {Button, Input} from 'antd';
import { Radio } from 'antd';
import "./style.css"

class LoginPagePropsType extends UserLoginInfo implements BackendAction {

}

type LoginPageStateType = {
    group: Role,
    user: string,
    password: string
}

class LoginPage extends React.Component<{
    auth: LoginPagePropsType
}>{
    state:LoginPageStateType = {
        group: Role.ADMIN,
        user: null,
        password: null
    };

    render() {

        if (this.props.auth.token !== undefined){
            return this.props.children;
        }

        return <div className="login-container">

            <div style={{width: "300px", color: "red"}}>
                {this.props.auth.fail
                    ? "Error type: " + this.props.auth.errorType + " ; msg: " + this.props.auth.msg
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
                <Radio value={Role.ADMIN}>{Role.ADMIN}</Radio>
                <Radio value={Role.BOOKER}>{Role.BOOKER}</Radio>
            </Radio.Group>

            <Button
                className={"login-button"}
                loading={this.props.auth.fetching}
                onClick={()=>this.props.login(this.state.user, this.state.password, this.state.group)}
            >
                Login
            </Button>
        </div>;
    }
}

const mapStateToProps = (state: MainStateType) => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,

    dispatch => ({
        login : (user: string, password: string, role: Role = Role.CONTROL) => {
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
        }
    })
)(LoginPage);

