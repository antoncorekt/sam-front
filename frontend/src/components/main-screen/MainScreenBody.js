import React, { Component } from 'react';
import BscsToSapMappings from '../panes/BscsToSapMappings/AccountMappingTab';
import Logs from '../panes/Logs';
import SapAccounts from '../panes/SapAccounts';
import BscsToSegmentAndOrderMappings from '../panes/BscsToSegmentAndOrderMappings';
import Segments from '../panes/Segments';
import { Tabs } from 'antd';
import { connect } from "react-redux";
import {
    GetDictionaryAccountBscs,
    GetDictionaryAccountSap,
    GetDictionarySegment
} from "../../api/api-func";
import { Select } from 'antd';
import { getBscsAccountsReduxProperty, getBscsAccountsResponseReduxProperty } from '../../reducers/bscs-accounts/bscs-accounts-store-type';

const TabPane = Tabs.TabPane;
const { Option } = Select;

class MainScreenBody extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeKey: "3",   // TODO FEATURE change activeKey to cookie value
            bscsAccountsOptionsJSX: []
        };

        this.props.getSegmentsDictionary();
        this.props.getBscsAccountsDictionary();
        this.props.getSapOfiAccountDictionary();
    }

    componentDidUpdate(prevProps) {
        if (getBscsAccountsReduxProperty(this.props, "GET", "fail", true) !== true
            && getBscsAccountsReduxProperty(this.props, "GET", "fetching", true) === false
            && getBscsAccountsReduxProperty(prevProps, "GET", "fetching", false) === true) {
            this.setState((state, props) => ({
                ...state,
                bscsAccountsOptionsJSX: getBscsAccountsResponseReduxProperty(this.props, "GET", "data", []).map(item => {
                    return <Option key={item.account} value={item.account}> {item.account + " - " + item.name} </Option>
                })
            }));
        }
    }

    getTabPanes = () => [
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
            content:
                <BscsToSegmentAndOrderMappings
                    bscsAccountsOptionsJSX={this.state.bscsAccountsOptionsJSX}
                />
        },
        {
            id: 5,
            title: 'Logi',
            content: <Logs />
        }
    ];

    onChange = (activeKey) => {
        this.setState({ activeKey });
    };

    render() {
        let tabPanes = this.getTabPanes();

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

export default connect(
    state => ({
        store: state,
        bscsAccounts: state.bscsAccounts
    }),
    dispatch => ({
        getSegmentsDictionary: () => {
            dispatch(
                GetDictionarySegment()
            )
        },
        getBscsAccountsDictionary: () => {
            dispatch(
                GetDictionaryAccountBscs()
            )
        },
        getSapOfiAccountDictionary: () => {
            dispatch(
                GetDictionaryAccountSap()
            )
        }
    })
)(MainScreenBody);