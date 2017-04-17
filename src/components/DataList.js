import React, {Component, PropTypes} from "react";
import DataItem from "./DataItem";

export default class DataList extends Component {

    static propTypes = {
        recordings: PropTypes.array.isRequired
    };

    render() {

        let dataItems = [];

        for(let recording of this.props.recordings) {
            dataItems.push(<DataItem time={recording.time} value={recording.value}/>);
        }

        return (
            <ul className="data-list">{dataItems}</ul>
        );
    }
}
