// @date 30 Apr 2019
// @author Anton Kozlovskyi

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Tabs} from "antd";

class Panel extends Component {

    renderChild = () => ( this.props.children );

    renderTabPane = (renderChildFunction) => {

        return (
            <Tabs
                defaultActiveKey="1"
                style={{ height: 220 }}
            >
                <Tabs.TabPane tab="1" key="1">{renderChildFunction()}</Tabs.TabPane>
            </Tabs>
        )
    };

    render() {
        return (
            <div className="common-panel">
                {this.props.children}
            </div>
        );
    }
}

Panel.defaultProps = {
    type: 'div',
    resizable: false
};

Panel.propTypes = {
    type: PropTypes.oneOf(['div', 'tab']),
    resizable: PropTypes.bool
};

export default Panel;
