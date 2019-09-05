import React from 'react';
import { connect } from "react-redux";
import { Icon } from 'antd';
import './style.css';

class RequestQuequePanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            show: false
        }
    }

    render() {
        return (
            <div className="request-queue-panel">
                <div className="stats">
                    <div>In progress: 0</div>
                    <div>Success: 0</div>
                    <div>Failed: 0</div>
                    <div className="drop-down-icon">
                        <Icon
                            type={this.state.show ? "up" : "down"}
                            onClick={() => this.setState((prev) => ({ show: !prev.show }))}
                        />
                    </div>
                </div>
            </div >
        )
    }
}

export default connect(
    state => ({
        store: state
    })
)(RequestQuequePanel);