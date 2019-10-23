import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Button, Input, notification, Radio} from "antd";
import { CookiesProvider } from 'react-cookie';
import plPL from 'antd/lib/locale-provider/pl_PL';
import { LocaleProvider } from 'antd';
import './main-style.less';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import MainScreen from './components/main-screen/MainScreen';
import "react-table/react-table.css";
import {mainReducer} from "./reducers";
import LoginPage from "./components/login-screen/LoginPage";



const middleware = [thunk];

// function historyWriter({getState}) {
//     return (next) => (action) => {
//         if (changedActionTypes.includes(action.type)) {
//             ACTIONS_HISTORY.push({id: action.id, type: action.type});
//         }
//         return next(action)
//     }
// }
//
// middleware.push(historyWriter);

export const store = createStore(mainReducer, composeWithDevTools(applyMiddleware(...middleware)));

const LoginWrapper = () => (
    <LoginPage>
        <MainScreen/>
    </LoginPage>
);

class GroupChecker extends React.Component {
    state = {
        user: null,
        password: null,
        groups:[],
        fetching: false,
        error: false
    };

    fetchLdap = (login, pass) => {
        fetch("http://localhost:8080/api/ldap/user", {
            method: "POST",
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                login: login,
                password: pass
            })
        })
            .then(r => {
                console.log("fetch for user " + login);
                this.setState({groups: [], fetching: true});
                return r.json();
            })
            .then(json => {
                console.log("End fetching", json);
                this.setState({groups: json.groups === undefined? [] : json.groups, fetching: false, error: json.groups === undefined ? json.message : undefined})
            })
    };

    render()  {
        return <div className="login-container" >

            <div className="login-inputs">
                <Input placeholder="Login" onChange={(e)=>this.setState({user: e.target.value})}/>
            </div>
            <div className="login-inputs">
                <Input.Password placeholder="Hasło" onChange={(e)=>this.setState({password: e.target.value})}/>
            </div>

            <Button
                className={"login-button"}
                loading={this.state.fetching}
                onClick={()=>this.fetchLdap(this.state.user, this.state.password)}
            >
                Login
            </Button>
            {this.state.error === undefined
                ? undefined
                : this.state.error
            }
            <div>
                <ul>
                    {this.state.groups.map(
                        str => <li>{str}></li>
                    )}
                </ul>
            </div>
        </div>;
    }
}

class Logger {

    constructor(store){
        this.store = store;
    }

    _dispatch = (message, description, level) => {
        this.store.dispatch({type: "MESSAGE_LOG", level:level, message: message, description:description});
    };

    warn = (param) => {
        notification.warn({
            message: param.message,
            description: param.description,
        });
        this._dispatch(param.message, param.description, "Warning");
    };
    info = (param) => {
        notification.info({
            message: param.message,
            description: param.description,
        });
        this._dispatch(param.message, param.description, "Info");
    };
    success = (param) => {
        notification.success({
            message: param.message,
            description: param.description,
        });
        this._dispatch(param.message, param.description, "Success");
    };
    error = (param) => {
        notification.error({
            message: param.message,
            description: param.description,
        });
        //this._dispatch(param.message, param.description, "Error");
    };
}

export const Log = new Logger(store);


ReactDOM.render(
    <Provider store={store}>
        {/*<ErrorBoundaryWrapper>*/}
            <CookiesProvider>
                <LocaleProvider locale={plPL}>
                    <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ''}>
                        <Switch>
                            <Route exact path="/" component={LoginWrapper} />
                            <Route exact path="/groups" component={GroupChecker} />
                        </Switch>
                    </BrowserRouter>
                </LocaleProvider>
            </CookiesProvider>
        {/*</ErrorBoundaryWrapper>*/}
    </Provider>
    , document.getElementById('root'));

// ReactDOM.render(<WelcomePage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();