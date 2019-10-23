import React from 'react';
import { connect } from "react-redux";
import { Icon } from 'antd';
import './style.less';

export const downloadReport = (data) => {
    createAndDownloadFile(data, "Crash_Raport_SAM_" + (Date.now() / 1000 | 0) + ".log");
};

export const createAndDownloadFile = (data, fileName) => {
    const file = new Blob([data], { type: 'text/plain;charset=utf-8' });
    downloadBlob(file, fileName);
};

export const downloadBlob = (blob, fileName) => {
    const element = document.createElement("a");
    const url = fileName.includes("Crash") ? window.URL.createObjectURL(blob) : blob;
    element.href = url;
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    setTimeout(() => {
        document.body.removeChild(element);
        window.URL.revokeObjectURL(url);
    }, 100);
};

export const createData = (store, frontendError) => {
    // let t = "User: " + store.securityState.data.login + "\n";
    // t += "FrontError: \n" + (frontendError === undefined ? "No errors" : JSON.stringify(frontendError, null, "\t")) + "\n";
    // t += "Requests: \n" + JSON.stringify(store.requestQueueReducer, null, "\t") + "\n";
    // t += "Tabs: \n" + JSON.stringify(store.tabsState, null, "\t") + "\n";
    // return t;
};


class Reporter extends React.Component {
    render() {
        return (
            <div>
                <Icon
                    className="reporter-icon"
                    style={{ cursor: "pointer", color: "lightblue" }}
                    theme="outlined"
                    type="exception"
                    onClick={() => downloadReport(createData(this.props.store))}
                />
            </div>
        )
    }
}

export default connect(
    state => ({
        store: state
    })
)(Reporter);