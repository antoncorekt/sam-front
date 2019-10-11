import React, { Component } from 'react';
import BscsToSapMappings from '../panes/BscsToSapMappings';
import Logs from '../panes/Logs';
import SapAccounts from '../panes/SapAccounts';
import BscsToSegmentAndOrderMappings from '../panes/BscsToSegmentAndOrderMappings';
import Segments from '../panes/Segments';
import { Tabs } from 'antd';
import './style.css';

const TabPane = Tabs.TabPane;

const tabPanes = [
    {
        id: 1,
        title: 'Konta SAP OFI',
        content: <SapAccounts />
    },
    {
        id: 2,
        title: 'Segmenty rynku',
        content: <Segments key="2" />
    },
    {
        id: 3,
        title: 'Mapowania kont BSCS na konta SAP OFI',
        content: <BscsToSapMappings />
    },
    {
        id: 4,
        title: 'Mapowania kont BSCS na segmenty rynku i numery zamówień',
        content: <BscsToSegmentAndOrderMappings />
    },
    {
        id: 5,
        title: 'Logi',
        content: <Logs />
    }
];

export default class MainScreenBody extends Component {

    constructor(props) {
        super(props);

        // TODO FEATURE change activeKey to cookie value
        this.state = { activeKey: "4" };
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
                        tabPanes.map((x) => (
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