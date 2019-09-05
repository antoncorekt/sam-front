import React, { Component } from 'react';
import './WelcomePage.css';
import {connect} from "react-redux";
import {Button} from "antd";
import {ActionResponseData, API, FinancialAccount} from "./api/common-middleware";
import {getAccountGl2} from "./api/api-func";
import type {ActionRequestData} from "./api/common-middleware";
import {GetAccountGlQueryParams} from "./api/api-models";

const renderIfSuccess = (data: {acc:ActionResponseData<Array<FinancialAccount>,ActionRequestData<null, GetAccountGlQueryParams>>}) => {
    if (data.response !== undefined){
        return data.response.map(
            x => <div>
                                <span>{x.id}</span>
                                <span style={{marginLeft:"15px"}}>{x.type}</span>
                            </div>
        )
    }
    return "not content"
};


const f = <T>(func) => (data) => {
    return func(data)
};

class WelcomePage extends Component<{
    accountOfi: ActionResponseData<Array<FinancialAccount>,ActionRequestData<null, GetAccountGlQueryParams>>
}> {


  render() {

        const finAccount =  new API.MODELS.FinancialAccount();
        finAccount.status = "active";
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

          const finAccount = new FinancialAccount();
          finAccount.status = "inactive";
          finAccount.id = "_id";
          finAccount.name = "accountName";
          finAccount.type = "finType";

          dispatch(
              // API.CALL.postAccountOfi(finAccount)
              getAccountGl2()
          )
        }
    })
)(WelcomePage);
