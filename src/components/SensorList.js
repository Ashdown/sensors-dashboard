import React, {Component, PropTypes} from "react";
import SensorItem from "./SensorItem";
import { connect } from 'react-redux';

@connect(state => ({
    sensorlist: state.sensorlist
}))

export default class SensorList extends Component {

    render() {

        const { sensorlist: { sensors }, dispatch } = this.props;

        let sensorItems = [];

        for(let sensorData of sensors) {
            sensorItems.push(<SensorItem sensorData={sensorData} />);
        }

        return (
            <ul className="sensor-list">{sensorItems}</ul>
        );
    }
}
