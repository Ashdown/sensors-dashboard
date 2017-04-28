import React, {Component, PropTypes} from "react";

export default class AverageValue extends Component {

    static propTypes = {
        recordings: PropTypes.array.isRequired
    };

    getAverageValue(data){
        let sum = 0;
        for( let i = 0; i < data.length; i++ ){
            sum += parseInt( data[i].value, 10 );
        }

        if(sum !== 0) {
            return sum / data.length;
        } else {
            return 0;
        }
    };

    render() {

        return (
            <p>{this.getAverageValue(this.props.recordings)}</p>
        );
    }
}
