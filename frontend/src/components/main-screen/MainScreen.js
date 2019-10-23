
import React, { Component } from 'react';
import MainScreenHeader from './MainScreenHeader';
import MainScreenBody from './MainScreenBody';

export default class MainScreen extends Component {

    render() {
        return (
            <div className='main-screen'>
                <MainScreenHeader />
                <MainScreenBody />
            </div>
        );
    }
}