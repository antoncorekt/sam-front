import * as React from "react";
import {connect} from "react-redux";
import type {MainStateType} from "../../reducers";
import {PostUserLogin} from "../../api/api-func";
import {RequestSetUserLogin, RolePropEnum, UserLogin, UserLoginInfo} from "../../api/api-models";
import {BackendAction} from "../../api/common-middleware";
import {Button, Input} from 'antd';
import { Radio } from 'antd';

class LoginPagePropsType extends UserLoginInfo implements BackendAction {

}

type LoginPageStateType = {
    group: RolePropEnum,
    user: string,
    password: string
}

class LoginPage extends React.Component<{
    auth: LoginPagePropsType
}>{
    state:LoginPageStateType = {
        group: RolePropEnum.ADMIN,
        user: null,
        password: null
    };

    render() {

        if (this.props.auth.token !== undefined){
            return this.props.children;
        }

        return <div>
            <Input placeholder="Login" onChange={(e)=>this.setState({user: e.target.value})}/>
            <Input.Password placeholder="Hasło" onChange={(e)=>this.setState({password: e.target.value})}/>
            <Radio.Group onChange={(e)=>this.setState({group: e.target.value})} value={this.state.group}>
                <Radio value={RolePropEnum.CONTROL}>{RolePropEnum.CONTROL}</Radio>
                <Radio value={RolePropEnum.ADMIN}>{RolePropEnum.ADMIN}</Radio>
                <Radio value={RolePropEnum.BOOKER}>{RolePropEnum.BOOKER}</Radio>
            </Radio.Group>

            <Button loading={this.props.auth.fetching} onClick={()=>this.props.login(this.state.user, this.state.password, this.state.group)}>Login</Button>
        </div>;
    }
}

const mapStateToProps = (state: MainStateType) => ({
    auth: state.auth,
});

export default connect(
    mapStateToProps,

    dispatch => ({
        login : (user: string, password: string, role: RolePropEnum = RolePropEnum.CONTROL) => {
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

