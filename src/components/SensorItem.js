import React, {Component, PropTypes} from "react";
import DataList from "./DataList";

export default class SensorItem extends Component {

    static propTypes = {
        sensorData: PropTypes.object.isRequired,
    };

    render() {

        return (
            <li className="sensor-item">
                <a href="/">{this.props.sensorData.name}</a>
                <DataList recordings={this.props.sensorData.data} />
            </li>
        );
    }
}
