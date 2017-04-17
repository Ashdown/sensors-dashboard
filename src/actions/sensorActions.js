import * as types from "../constants/ActionTypes";
import fetch from "isomorphic-fetch";

var sensorDataLoaded = false;

export function addSensorData(data) {
    return {
        type: types.ADD_SENSOR_DATA,
        data
    };
}

export function fetchAll(dispatch) {

    if(sensorDataLoaded === false) {

        sensorDataLoaded = true;

        fetch("/sensors")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                for (let sensorData of data) {
                    dispatch(addSensorData(sensorData));
                    // addSensorData(sensorData);
                }
            });
    }

    return {
        type: types.GET_SENSOR_DATA,
        false
    };

}


