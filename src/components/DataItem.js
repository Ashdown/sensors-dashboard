import React, {Component, PropTypes} from "react";

export default class DataItem extends Component {

    static propTypes = {
        time: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
    };

    render() {

        return (
            <li className="data-item">
                <ul>
                    <li><strong>Time: </strong><span className="time">{this.props.time}</span></li>
                    <li><strong>Value </strong><span className="value">{this.props.value}</span></li>
                </ul>
            </li>
        );
    }
}
