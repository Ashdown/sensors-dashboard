import React, {Component, PropTypes} from "react";
import SensorItem from "./SensorItem";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sensorActions from "../actions/sensorActions";
import fetch from "isomorphic-fetch";

@connect(state => ({
    sensorlist: state.sensorlist
}))

export default class SensorList extends Component {

    fetchAllSensorData(actions, dispatch) {

        fetch("/sensors")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                for (let sensorData of data) {
                    dispatch(actions.addSensorData(sensorData));
                }
            });

    }

    componentWillMount() {
        const { sensorlist: { sensors }, dispatch } = this.props;
        const actions = bindActionCreators(sensorActions, dispatch);
        this.fetchAllSensorData(actions, dispatch);
    }

    render() {

        const { sensorlist: { sensors }, dispatch } = this.props;
        const actions = bindActionCreators(sensorActions, dispatch);
        let sensorItems = [];

        for(let sensorData of sensors) {
            sensorItems.push(<SensorItem sensorData={sensorData} dispatch={dispatch} actions={actions} />);
        }
        return (
            <ul className="sensor-list">{sensorItems}</ul>
        );
    }

}
