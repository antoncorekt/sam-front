import React from "react";
import {Button} from "antd";
import SecuredComponent from "../common/SecuredComponent";
import {Role} from "../../../api/api-models";


export class AccountOperationPanel extends React.Component{

    render() {

        const {releaseVersion, userRole} = this.props;

        return <div className="width100 flex space-between">
            <div>
                Current release: {releaseVersion}
            </div>
            <div className="flex">
                <Button onClick={()=>{alert("Handler Exportuj wszystkie")}}>Exportuj wszystkie</Button>
                <SecuredComponent group={Role.BOOKER} renderIfAccessDenied={false}>
                    <Button onClick={this.props.addUserAccount}>Dodaj mapowanie</Button>
                </SecuredComponent>
                <SecuredComponent group={Role.CONTROL} renderIfAccessDenied={false}>
                    <Button onClick={()=>{this.props.releaseHandle()}}>Zaaceptuj wszystko</Button>
                </SecuredComponent>
                <SecuredComponent group={Role.CONTROL} renderIfAccessDenied={false}>
                    <Button onClick={()=>{alert("Handler revert release")}}>Revert release</Button>
                </SecuredComponent>
                <SecuredComponent group={Role.BOOKER} renderIfAccessDenied={false}>
                    <Button onClick={()=>{alert("Handler revert release")}}>Wszystko do kontrolingu</Button>
                </SecuredComponent>
            </div>
        </div>;
    }

}