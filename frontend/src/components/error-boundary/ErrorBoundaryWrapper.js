/**
 * @author Anton Kozlovskyi
 * @date 28 Apr 2019
 */
import React, {Component} from 'react';

const errorElement = (error, info) => (
    <div className="Container">
        <h1 className="MainTitle">
            {JSON.stringify(error)}
        </h1>
        <p className="Main Description">
            {JSON.stringify(info)}
        </p>

    </div>
);

class ErrorBoundaryWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, info: null };
    }
    componentDidCatch(error, info) {

        this.setState({ hasError: true, error: error, info: info });
    }

    render() {
        if (this.state.hasError) {
            const error = this.state.error;
            const info = this.state.info;

            console.log(error);
            console.log(info);


            return errorElement(error, info);
        }
        return this.props.children;
    }
}

ErrorBoundaryWrapper.propTypes = {};

export default ErrorBoundaryWrapper;

