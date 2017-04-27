import React, {Component, PropTypes} from "react";
import DataList from "./DataList";
import ChevronSvg from "../svgs/ChevronSvg";

export default class SensorItem extends Component {

    static propTypes = {
        sensorData: PropTypes.object.isRequired,
    };

    rollOver = () => {
        this.setState({
            rollover: true
        });
    };

    rollOut = () => {
        this.setState({
            rollover: false
        });
    };

    showMore = (event) => {

        event.preventDefault();
        console.log('click');
    };

    constructor () {
        super();
        this.state = {
            status: 'closed',
            rollover: false
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

        let rolloverClassName = this.state.rollover ? 'hover' : '';

        return (
            <li className={"sensor-item " + this.state.status + " " + rolloverClassName}>
                <div className="content">
                    <p className="descriptor">Sensor</p>
                    <h3 className="title">{this.props.sensorData.name}<span className="sling"></span></h3>

                </div>
                <a className="sensor-link" onMouseEnter={this.rollOver} onMouseLeave={this.rollOut} onClick={this.showMore} href="/">
                    <span className="link-text">Show all Recordings<ChevronSvg/></span>
                </a>


                {/*<a className="sensor-link" onClick={(event) => showData(this.props.sensorData.id, event, this)} href="/">{this.props.sensorData.name}</a>*/}
                {/*<DataList recordings={this.props.sensorData.data} />*/}
            </li>
        );
    }
}
