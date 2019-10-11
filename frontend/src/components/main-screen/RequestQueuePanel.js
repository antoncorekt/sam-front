import React from 'react';
import { connect } from "react-redux";
import { Icon, Modal } from 'antd';
import './style.less';
import type { MainStateType } from "../../reducers";
import { RequestPanelType } from "../../reducers/request-panel-reducer";

const millisToMinutesAndSeconds = (duration) => {
    let milliseconds = parseInt((duration % 1000), 10)
        , seconds = parseInt((duration / 1000) % 60, 10)
        , minutes = parseInt((duration / (1000 * 60)) % 60, 10);


    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return minutes + ":" + seconds + "." + milliseconds;
};

class RequestQueuePanel extends React.Component<{
    requestPanel: RequestPanelType
}> {

    constructor(props) {
        super(props);

        this.state = {
            show: false
        }
    }

    render() {
        return (
            <div className=" req-que-panel">
                <div className="top-part">
                    <div>In progress: {this.props.requestPanel.reqActions.length}</div>
                    <div>Success: {this.props.requestPanel.successActions.length}</div>
                    <div>Failed: {this.props.requestPanel.failActions.length}</div>
                    <div className="drop-down-icon">
                        <Icon
                            type={this.state.show ? "up" : "down"}
                            onClick={() => this.setState((prev) => ({ show: !prev.show }))}
                        />
                    </div>
                </div>
                <div className={this.state.show ? "bottom-part-block" : "bottom-part-none"}>

                    <div className="part in-progress-part">
                        {this.props.requestPanel.reqActions.map((el, i) =>
                            (<div className="el" key={"" + i}><div>{el.payload.type}</div></div>)
                        )}
                    </div>

                    <div className="part success-part">
                        {this.props.requestPanel.successActions.map((el, i) =>
                            (<div className="el" key={"" + i}><div>{el.payload.type}</div><div>{millisToMinutesAndSeconds(el.payload.timeDiff)}</div></div>)
                        )}
                    </div>

                    <div className="part error-part">
                        {this.props.requestPanel.failActions.map((el, i) =>
                            (<div className="el">
                                <div>{el.payload.requestAction.type}</div>
                                <div style={{ cursor: "poiner" }} onClick={() =>
                                    Modal.error({
                                        title: 'Error json ' + el.payload.type,
                                        maskClosable: true,
                                        content: <div>{JSON.stringify(el.payload.response, null, 2)}</div>,
                                        width: 1100,
                                        className: "trace-modal"
                                    })}>Show trace</div>
                                {/*<div><Icon key={""+i} type="reload" onClick={()=>this.props.repeat(el)}/></div>*/}
                                <div>{millisToMinutesAndSeconds(el.payload.response.timeDiff)}</div>
                            </div>)
                        )}
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state: MainStateType) => ({
    requestPanel: state.requestPanel
});


export default connect(
    mapStateToProps
)(RequestQueuePanel);