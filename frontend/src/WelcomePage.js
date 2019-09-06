import React, { Component } from 'react';
import './WelcomePage.css';
import {connect} from "react-redux";
import {Button} from "antd";
import {ActionResponseData} from "./api/common-middleware";
import { postUserLogin} from "./api/api-func";
import type {ActionRequestData} from "./api/common-middleware";
import { RequestSetUserLogin, ResultSetUserLogin, UserLogin} from "./api/api-models";



class WelcomePage extends Component<{
    accountOfi: ActionResponseData<ResultSetUserLogin,ActionRequestData<RequestSetUserLogin, null>>
}> {


  render() {


        return (
          <div className="App">
            <Button onClick={()=>this.props.testRedux("hello test redux")}>Test redux</Button>
              {

              }

          </div>
        );
  }
}

const mapStateToProps = (state: any) => ({
    accountOfi:state.accountOfi,
});

export default connect(
    mapStateToProps,
    dispatch => ({
        testRedux: (param) => {

          dispatch(
              postUserLogin(new RequestSetUserLogin.Builder()
                  .withData(new UserLogin.Builder()
                      .withPassword("pass")
                      .withRole("role")
                      .withUser("user")
                      .build())
                  .build())
          )
        }
    })
)(WelcomePage);
