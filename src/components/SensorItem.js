import React, {Component, PropTypes} from "react";
import AverageValue from "./AverageValue";
import { connect } from 'react-redux';
import ChevronSvg from "../svgs/ChevronSvg";

export class SensorItem extends Component {

    static propTypes = {
        sensorData: PropTypes.object.isRequired,
    };

    toggleAccordion = () => {

        this.setState({
            status: this.state.status === 'open' ? 'closed' : 'open'
        });

    };

    fetchRecordingData = () => {

        let id = this.props.sensorData.id;

        return fetch("/sensor/" + id)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.props.dispatch(this.props.actions.addRecordingData(id, data));
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

        this.fetchRecordingData().then(this.toggleAccordion());
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

export default connect(state => ({sensorlist: state.sensorlist}))(SensorItem);
