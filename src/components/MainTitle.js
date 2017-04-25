import React, {Component, PropTypes} from "react";

export default class MainTitle extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired
    };

    render() {

        return (
            <h1 className="main-title title">
                <span className="text">{this.props.text}<span className="shadow">{this.props.text}</span></span>
            </h1>
        );
    }
}
