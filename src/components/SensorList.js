import React, {Component, PropTypes} from "react";
import SensorItem from "./SensorItem";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sensorActions from "../actions/sensorActions";

@connect(state => ({
    sensorlist: state.sensorlist
}))

export default class SensorList extends Component {

    componentWillMount() {
        const { sensorlist: { sensors }, dispatch } = this.props;
        const actions = bindActionCreators(sensorActions, dispatch);
        actions.fetchAll(dispatch);
    }

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
