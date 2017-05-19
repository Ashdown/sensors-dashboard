import React, {Component} from "react";
import {combineReducers} from "redux";
import {Provider} from "react-redux";
import {createStore, renderDevTools} from "../store_enhancers/devTools";
import MainTitle from "../components/MainTitle";
import SensorList from "../components/SensorList";
import Divider from "../components/divider";
import * as reducers from "../reducers";

const reducer = combineReducers(reducers);
const store = createStore(
    reducer,
    {}
);

export default class Dashboard extends Component {
    render() {

        return (
            <div className="dashboard">
                <MainTitle text="Sensors Dashboard" />
                <Divider />
                <h2 className="title dashboard-title">Dashboard</h2>
                <p className="para">Select from below to view the recording results for that sensor</p>
                <Divider />
                <Provider store={store}>
                    {() => <SensorList /> }
                </Provider>

                {renderDevTools(store)}
            </div>
        );
    }
}
