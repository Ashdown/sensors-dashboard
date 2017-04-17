import * as types from "../constants/ActionTypes";

const initialState = {
    sensors: []
};

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
            // //add a new sensor data

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


        //TODO: add data for a sensor

        default:
            return state;
    }
}
