import * as types from "../constants/ActionTypes";

const initialState = {
    sensors: []
};

function sortRecordingDataByTime(data) {

    return data.sort(function(a, b) {
        return a.time = b.time;
    });

}

export default function sensorlist(state = initialState, action) {

    switch (action.type) {
        case types.ADD_SENSOR_DATA:

            //update existing sensor

            for (let sensor of state.sensors) {
                if (sensor.id === action.data.id) {
                    sensor.name = action.data.name;
                    return state;
                }
            }

            //add a new sensor recording

            return {
                sensors: [
                    ...state.sensors,
                    {
                        id: action.data.id,
                        name: action.data.name,
                        data: []
                    }
                ]
            };


        case types.ADD_RECORDING_DATA:

            for (let sensor of state.sensors) {
                if(sensor.id === action.sensorId) {

                    sensor.data = sortRecordingDataByTime(action.data);
                }
            }
            return state;

        default:
            return state;
    }
}
