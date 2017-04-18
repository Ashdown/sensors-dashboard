import React, {Component, PropTypes} from "react";

function getTimeString(timestamp) {
    let a = new Date(timestamp * 1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    return date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
}

export default class DataItem extends Component {
    static propTypes = {
        time: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
    };

    render() {

        return (
            <li className="data-item">
                <ul className="value-list">
                    <li className="time">{getTimeString(this.props.time)}</li>
                    <li className="value">{this.props.value}</li>
                </ul>
            </li>
        );
    }
}
