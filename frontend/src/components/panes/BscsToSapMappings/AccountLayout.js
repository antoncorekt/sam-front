import React, { Component } from 'react';
import OneTableAccountView from "./OneTableAccountView";
import DoubleTableAccountView from "./DoubleTableAccountView";
import {AccountOperationPanel} from "./AccountOperationPanel";

export class ViewMode {
    static get OneTableView() { return "oneTableView"}
    static get DoubleTableView() { return "doubleTableView"}
}

export default class AccountLayout extends Component{

    renderAccountView = (viewMode: ViewMode) => {

        const viewProps = {
            accounts: [],
            isAccountsFetching: false
        };

        if (viewMode === ViewMode.OneTableView){
            return <OneTableAccountView {...viewProps}/>
        }
        if (viewMode === ViewMode.DoubleTableView){
            return <DoubleTableAccountView {...viewProps}/>
        }

        throw new Error("Please, define view mode")
    };

    render(){

        const doubleTableViewMode = false;

        return (
            <div>
                <div>
                    <AccountOperationPanel/>
                </div>
                <div>
                    {this.renderAccountView(doubleTableViewMode)}
                </div>
            </div>
        )
    }

}