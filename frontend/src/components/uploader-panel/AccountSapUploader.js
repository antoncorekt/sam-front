import React, { Component } from 'react';
import {connect} from "react-redux";
import {PostDictionaryAccountSap} from "../../api/api-func";
import {Uploader} from "./Uploader";

class AccountSapUploader extends React.Component {

    render() {
        return  <Uploader fetching={this.props.fileFetching} onUpload={this.props.uploadSapAccountViaFile}/>;
    }

}

export default connect(
    state => ({

    }),
    dispatch => ({
        uploadSapAccountViaFile: (file)=>{
            dispatch(
                PostDictionaryAccountSap(file)
            )
        }
    })
)(AccountSapUploader)