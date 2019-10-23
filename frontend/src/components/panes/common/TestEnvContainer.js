import React, {Component} from 'react';



export class TestEnvContainer extends React.Component{

    render() {

        if (process.env.NODE_ENV === "production")
            return <></>;
        else
            return <>{this.props.children}</>;


    }
}