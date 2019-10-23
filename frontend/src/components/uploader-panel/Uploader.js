import React, { Component } from 'react';
import {Button, Upload} from "antd";
import "./style.css";

export class Uploader extends React.Component{

    static defaultProps={
        type: "primary",
        textBefore: "Wybierz plik",
        textAfter: "Wczytaj plik",
        icon: "upload",
        onUpload: ()=>{},
        accept: "xlsx",
        showUploadList: true,
        fetching: false
    };

    constructor(props){
        super(props);
        this.state = {
            fileList: [],
        };
    }

    uploadFile = () => {
        const { fileList } = this.state;
        const formData = new FormData();
        formData.append("file", fileList[0]);


        console.log("fileFromFileList", fileList[0]);
        console.log("formData", formData);

        this.props.onUpload(fileList[0]);

    };

    render() {
        const {type, textBefore, textAfter, accept, fetching, icon, onClick, showUploadList} = this.props;

        console.log("this.uploadRef", this.state.fileList);

        return <div className="in-one-line">
            <Upload {...this.getUploadProps()} >
                <Button type={type} icon={icon}>
                    {textBefore}
                </Button>
            </Upload>
            <Button disabled={this.state.fileList.length === 0}
                    type={type}
                    loading={fetching}
                    onClick={()=>this.uploadFile()}>
                {textAfter}
            </Button>
        </div>;
    }

    getUploadProps() {
        return {
            accept: this.props.accept,
            showUploadList: this.props.showUploadList,
            onChange: (e)=>console.log("OnChange ", e),
            onRemove: (file) => {
                this.setState(({ fileList }) => {
                    return {
                        fileList: [],
                    };
                });
            },
            beforeUpload: (file) => {
                this.setState(({ fileList }) => ({
                    fileList: [file],

                }));
                return false;
            },
            fileList: this.state.fileList
        };
    }
}