import React, { Component } from 'react';
import './WelcomePage.css';
import {connect} from "react-redux";
import {Button} from "antd";
import {API} from "./api/common-middleware";

class WelcomePage extends Component {



  render() {

        const finAccount =  new API.MODELS.FinancialAccount();
        finAccount.status = "active";

        return (
          <div className="App">
            <Button onClick={()=>this.props.testRedux("hello test redux")}>Test redux</Button>
          </div>
        );
  }
}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        testRedux: (param) => {
          dispatch(
              API.CALL.deleteSegmentBySegmentId("SEGMENT_ID")
              // getAccountOfiByAccountId("sd")
          )
        }
    })
)(WelcomePage);
