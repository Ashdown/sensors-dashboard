import React, {Component} from "react";
import {combineReducers} from "redux";
// import {Provider} from "react-redux";

// import {createStore, renderDevTools} from "../store_enhancers/devTools";

// import DashboardApp from "./DashboardApp";
// import * as reducers from "../reducers";

// const reducer = combineReducers(reducers);
// const store = createStore(reducer);

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <h2 className="dashboard-title">Dashboard</h2>
                {/*{renderDevTools(store)}*/}
            </div>
        );
    }
}
