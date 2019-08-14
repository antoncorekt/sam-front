import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WelcomePage from './WelcomePage';
import * as serviceWorker from './serviceWorker';
import { notification } from "antd";
import { CookiesProvider } from 'react-cookie';
import plPL from 'antd/lib/locale-provider/pl_PL';
import {LocaleProvider} from 'antd';
import './ngkew.less';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import ErrorBoundaryWrapper from "./components/error-boundary/ErrorBoundaryWrapper";

export const reducer = combineReducers({
    // add reducers
});

const middleware = [thunk];

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundaryWrapper>
            <CookiesProvider>
                <LocaleProvider locale={plPL}>
                    <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ''}>
                        <Switch>
                            <Route exact path="*" component={WelcomePage} />
                        </Switch>
                    </BrowserRouter>
                </LocaleProvider>
            </CookiesProvider>
        </ErrorBoundaryWrapper>
    </Provider>
    , document.getElementById('root'));

// ReactDOM.render(<WelcomePage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
