import React, { Component } from 'react';
import { connect } from "react-redux";
import { initTabPanes, TAB_IDS } from "../../actions/tabActions";
import BscsToSapMappings from '../panes/BscsToSapMappings';
import Logs from '../panes/Logs';
import SapAccounts from '../panes/SapAccounts';
import SapToSegmentAndOrderMappings from '../panes/SapToSegmentAndOrderMappings';
import Segments from '../panes/Segments';
import { Tabs } from 'antd';
import './style.css';

const TabPane = Tabs.TabPane;

class MainScreenBody extends Component {

    constructor(props) {
        super(props);

        const tabPanes = [
            {
                id: TAB_IDS.SAP_ACCOUNTS,
                title: 'Konta SAP OFI',
                content: <SapAccounts />
            },
            {
                id: TAB_IDS.SEGMENTS,
                title: 'Segmenty rynku',
                content: <Segments key="2" />
            },
            {
                id: TAB_IDS.BSCS_TO_SAP_MAPPINGS,
                title: 'Mapowania kont BSCS na konta SAP OFI',
                content: <BscsToSapMappings />
            },
            {
                id: TAB_IDS.SAP_TO_SEGMENT_AND_ORDER_MAPPINGS,
                title: 'Mapowania kont SAP OFI na segmenty rynku i numery zamówień',
                content: <SapToSegmentAndOrderMappings />
            },
            {
                id: TAB_IDS.LOGS,
                title: 'Logi',
                content: <Logs />
            }];

        this.props.initDefaultTabs(tabPanes);

        this.state = {
            activeKey: "" + TAB_IDS.SAP_TO_SEGMENT_AND_ORDER_MAPPINGS
        };
    }

    onChange = (activeKey) => {
        this.setState({ activeKey });
    };

    render() {
        return (
            <div className='main-screen-body'>
                <Tabs
                    className='tab-panes'
                    activeKey={this.state.activeKey}
                    onChange={this.onChange}
                >
                    {
                        this.props.store.tabsState.map((x) => (
                            <TabPane
                                tab={x.title}
                                key={"" + (x.id)}
                            >
                                {x.content}
                            </TabPane>
                        ))
                    }
                </Tabs>
            </div>
        );
    }
}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        initDefaultTabs: tabPanesData => {
            dispatch(
                initTabPanes(tabPanesData)
            )
        }
    })
)(MainScreenBody);