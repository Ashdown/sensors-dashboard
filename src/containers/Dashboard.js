import React, {Component} from "react";
import {combineReducers, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createStore, renderDevTools} from "../store_enhancers/devTools";
import SensorList from "../components/SensorList";
import * as reducers from "../reducers";

const reducer = combineReducers(reducers);
const store = createStore(
    reducer,
    {},
    applyMiddleware(thunk)
);

export default class Dashboard extends Component {
    render() {

        return (
            <div className="dashboard">
                <h2 className="dashboard-title">Dashboard</h2>
                <Provider store={store}>
                    {() => <SensorList /> }
                </Provider>

                {renderDevTools(store)}
            </div>
        );
    }
}
