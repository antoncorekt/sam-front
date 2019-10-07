import React, {ReactNode} from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import './style.css';

const { Option } = Select;

type SelectableCellStateType = {
    editable: boolean,
    value: string,
    loadDictionary: false
}

export class SelectableCell extends React.Component{

    state: SelectableCellStateType = {
        editable: false,
        value: this.props.value
    };

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<SelectableCellStateType>, snapshot: SS): void {
        if (this.selectRef !== undefined && this.state.editable)
            this.selectRef.focus();
    }

    render() {
        return (
            <div
                className="selectable-cell"
                onClick={() => {
                    if (!this.state.editable) {
                        this.setState({editable: true});
                    }
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
                            onFocus={this.onFocus}
                        >
                            {
                                this.props.options.map((option, i) => { return <Option key={option + "_" + i} value={option}> {option} </Option> })
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

SelectableCell.propTypes = {
    handleCellModification: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    loadDictionaryHandler: PropTypes.func
};