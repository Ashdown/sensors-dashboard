import * as types from "../constants/ActionTypes";

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


