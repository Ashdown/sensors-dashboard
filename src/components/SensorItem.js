import React, {Component, PropTypes} from "react";
import DataList from "./DataList";

export default class SensorItem extends Component {

    static propTypes = {
        sensorData: PropTypes.object.isRequired,
    };

    constructor () {
        super();
        this.state = {
            status: 'closed'
        };
    }

    render() {

        function fetchRecordingData(sensorId, dispatch, actions, callback) {
            fetch("/sensor/" + sensorId)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    dispatch(actions.addRecordingData(sensorId, data));
                    callback();
                });
        }

        function toggleAccordion(component) {

            let newStatus = "open";

            if(component.state.status === 'open') {
                newStatus = 'closed';
            }

            component.setState({
                status: newStatus
            });
        }

        function showData(id, event, component) {
            event.preventDefault();
            fetchRecordingData(id, component.props.dispatch, component.props.actions, function() {
                toggleAccordion(component);
            });

        }

        return (
            <li className={"sensor-item " + this.state.status}>
                <a className="sensor-link" onClick={(event) => showData(this.props.sensorData.id, event, this)} href="/">{this.props.sensorData.name}</a>
                <DataList recordings={this.props.sensorData.data} />
            </li>
        );
    }
}
