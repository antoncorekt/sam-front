import React from "react";
import {Input} from "antd";
import "./style.css"

export default class SearchColumn extends React.Component{

    state = {
        isFocused: false,
    };

    handleFocus = () => this.setState({ isFocused: true });
    handleBlur = () => this.setState({ isFocused: false });

    render() {
        const { label, ...props } = this.props;
        const { isFocused } = this.state;
        const labelStyle = {
            position: 'absolute',
            left: 0,
            top: !isFocused ? 18 : 0,
            fontSize: !isFocused ? 20 : 14,
            color: !isFocused ? '#aaa' : '#000',
        };
        return (
            <div style={{ paddingTop: 18 }}>
                <div style={labelStyle}>
                    {label}
                </div>
                <Input
                    {...props}
                    style={{ height: 26, fontSize: 20, color: '#000', borderBottomWidth: 1, borderBottomColor: '#555' }}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                />
            </div>
        );
    }
}