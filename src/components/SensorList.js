import React, {Component, PropTypes} from "react";
import SensorItem from "./SensorItem";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sensorActions from "../actions/sensorActions";
import fetch from "isomorphic-fetch";
import Masonry from "masonry-layout";

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

    componentDidUpdate() {

        let sensorList = React.findDOMNode(this);

        if(this.grid === undefined) {
            this.grid = new Masonry('.sensor-list', {
                itemSelector: '.sensor-item',
                transitionDuration: 0
            });
        } else {

            let sensorItems = sensorList.getElementsByClassName('sensor-item');

            if (this.grid.getItemElements().length < sensorItems.length) {

                this.grid.appended(sensorItems[sensorItems.length - 1]);

            }
            this.grid.layout();
        }
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
