
import React, { Component } from 'react';
import { Button } from 'antd';
import RequestQueuePanel from './RequestQueuePanel';
import Reporter from './Reporter';
import logo from '../../media/logo_small.jpg';
import './style.css';

export default class MainScreenHeader extends Component {

    render() {
        return (
            <div className='main-screen-header'>
                <div className="logo-img">
                    <img src={logo} alt="logo" height={20} />
                </div>
                <div className="horizontal-container">
                    <div className="revision vertical-middle">backend_version = ? deployment_time = ?</div>
                    <RequestQueuePanel />
                    <div className="reporter-container">
                        <Reporter />
                    </div>
                    <div className="user vertical-middle">User: ? </div>
                    <Button className="logout-button" size="small" onClick={this.logout}>Logout</Button>
                </div>
            </div >
        );
    }
}