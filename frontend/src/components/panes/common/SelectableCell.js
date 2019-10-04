import React from 'react';
import { Select } from 'antd';
import './style.css';

const { Option } = Select;

export class SelectableCell extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            editable: false,
            value: this.props.value
        }
    }

    componentDidUpdate() {
        if (this.selectRef !== undefined && this.state.editable)
            this.selectRef.focus();
    }

    render() {
        return (
            <div
                className="selectable-cell"
                onClick={() => {
                    if (!this.state.editable)
                        this.setState({ editable: true });
                }}
            >
                {
                    this.state.editable ?
                        <Select
                            className="select"
                            size="small"
                            ref={ref => this.selectRef = ref}
                            value={this.state.value}
                            onChange={(value) => {
                                this.setState({ editable: false });
                                this.props.handleCellModification(this.props.field_key, value);
                            }}
                            onBlur={() => {
                                this.setState({ editable: false });
                            }}
                        >
                            {
                                this.props.options.map(option => { return <Option key={option} value={option}> {option} </Option> })
                            }
                        </Select>
                        :
                        <div className="label">
                            {this.props.value}
                        </div>
                }
            </div>
        )
    }
}