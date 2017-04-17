import * as types from "../constants/ActionTypes";

var sensorDataLoaded = false;

export function addSensorData(data) {
    return {
        type: types.ADD_SENSOR_DATA,
        data
    };
}

export function addRecordingData(sensorId, data) {
    return {
        type: types.ADD_RECORDING_DATA,
        sensorId,
        data
    };
}


