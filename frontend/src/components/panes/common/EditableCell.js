import React from 'react';
import { Input } from 'antd';
import './style.css';

export class EditableCell extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            editable: false,
            value: this.props.value,
            changed: false
        }
    }

    componentDidUpdate() {
        if (this.inputRef !== undefined && this.state.editable)
            this.inputRef.focus();
    }

    render() {
        return (
            <div
                className="editable-cell"
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
                            onChange={(e) => {
                                this.setState({ value: this.props.upperCased ? e.target.value.toUpperCase() : e.target.value, changed: true });
                            }}
                            onBlur={() => {
                                if (this.state.changed === true) {
                                    this.props.handleCellModification(this.props.field_key, this.state.value);
                                }
                                this.setState({ editable: false, changed: false });
                            }}
                            onPressEnter={() => {
                                if (this.state.changed === true) {
                                    this.props.handleCellModification(this.props.field_key, this.state.value);
                                }
                                this.setState({ editable: false, changed: false });
                            }}
                        />
                        :
                        <div className="label">
                            {this.props.value}
                        </div>
                }
            </div>
        )
    }
}