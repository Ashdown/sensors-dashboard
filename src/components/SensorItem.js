import React, {Component, PropTypes} from "react";
import DataList from "./DataList";

export default class SensorItem extends Component {

    static propTypes = {
        sensorData: PropTypes.object.isRequired,
    };

    render() {

        function fetchRecordingData(sensorId, dispatch, actions) {
            console.log('fetch recording data');
            fetch("/sensor/" + sensorId)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);

                    dispatch(actions.addRecordingData(sensorId, data));
                });
        }

        function showData(id, event, dispatch, actions) {
            event.preventDefault();
            console.log('show data');
            fetchRecordingData(id, dispatch, actions)
        }

        return (
            <li className="sensor-item">
                <a onClick={(event) => showData(this.props.sensorData.id, event, this.props.dispatch, this.props.actions)} href="/">{this.props.sensorData.name}</a>
                <DataList recordings={this.props.sensorData.data} />
            </li>
        );
    }
}
