/*global describe, it, expect*/

import * as actions from "../../src/actions/sensorActions";
import * as types from "../../src/constants/ActionTypes";

describe("actions", () => {
    it("should create an action to add sensor data", () => {
        const data = "Lorem Ipsum";
        const expectedAction = {
            type: types.ADD_SENSOR_DATA,
            data
        };
        expect(actions.addSensorData(data)).toEqual(expectedAction);
    });
    it("should create an action to add recording data", () => {
        const sensorId = 1234
        const data = "Lorem Ipsum";
        const expectedAction = {
            type: types.ADD_RECORDING_DATA,
            sensorId,
            data
        };
        expect(actions.addRecordingData(sensorId, data)).toEqual(expectedAction);
    });
});