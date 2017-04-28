import React, {Component, PropTypes} from "react";
import AverageValue from "./AverageValue";
import DataList from "./DataList";
import ChevronSvg from "../svgs/ChevronSvg";

export default class SensorItem extends Component {

    static propTypes = {
        sensorData: PropTypes.object.isRequired,
    };

    toggleAccordion = () => {

        let newStatus = "open";

        if(this.state.status === 'open') {
            newStatus = 'closed';
        }

        this.setState({
            status: newStatus
        });
    };

    fetchRecordingData = (callback) => {

        let id = this.props.sensorData.id,
            component = this;

        fetch("/sensor/" + id)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                component.props.dispatch(component.props.actions.addRecordingData(id, data));
                callback();
            });
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

        let component = this;

        this.fetchRecordingData(this.toggleAccordion);
    };

    constructor () {
        super();
        this.state = {
            status: 'closed',
            rollover: false
        };
    }

    render() {

        let rolloverClassName = this.state.rollover ? 'hover' : '';

        return (
            <li className={"sensor-item " + this.state.status + " " + rolloverClassName}>
                <div className="content">
                    <p className="descriptor">Sensor</p>
                    <h3 className="title">{this.props.sensorData.name}<span className="sling"></span></h3>
                    <a className="sensor-link" onMouseEnter={this.rollOver} onMouseLeave={this.rollOut} onClick={this.showMore} href="/">
                        <span className="link-text">Show all Recordings<ChevronSvg/></span>
                    </a>
                    <AverageValue recordings={this.props.sensorData.data} />
                    {/*<DataList recordings={this.props.sensorData.data} />*/}
                </div>




            </li>
        );
    }
}
