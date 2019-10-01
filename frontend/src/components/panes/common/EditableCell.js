import React from 'react';
import { Input } from 'antd';
import './style.css';
import { Segment } from '../../../api/api-models';

export class EditableCell extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            editable: false,
            value: this.props.value
        }
    }

    // componentWillUpdate() {
    //     if (this.props.forceRender) {
    //         this.setState({value: this.props.value});
    //         this.props.unRender();
    //     }
    // }

    componentDidUpdate() {
        if (this.inputRef !== undefined && this.state.editable)
            this.inputRef.focus();
    }

    updateSingleObjectPropertyInRedux(key, value, rowId) {
        let objectData = new Object();
        objectData[key] = value;
        this.props.handleChange(objectData, rowId);
    }

    render() {
        return (
            <div className="editable-cell"
                onClick={() => {
                    if (!this.state.editable)
                        this.setState({ editable: true });
                }}
            >
                {
                    this.state.editable ?
                        <Input
                            className="input"
                            ref={ref => this.inputRef = ref}
                            value={this.state.value}
                            onChange={(e) => this.setState({ value: e.target.value })}
                            onBlur={() => {
                                this.setState({ editable: false });
                            }}
                            onPressEnter={() => {
                                this.setState({ editable: false });
                                this.updateSingleObjectPropertyInRedux(this.props.field_key, this.state.value, this.props.rowId);
                            }}
                        />
                        :
                        this.props.value
                }
            </div>
        )
    }
}