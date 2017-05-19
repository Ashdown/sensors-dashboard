/*global describe, it, expect*/

import reducer from "../../../src/reducers/sensorlist";
import * as types from "../../../src/constants/ActionTypes";

describe("sensorlist reducer", () => {
    it("should return the initial state", () => {
        expect(
            reducer(undefined, {})
        ).toEqual({
            "sensors": []
        });
    });

    it("should handle ADD_SENSOR_DATA", () => {
        expect(
            reducer(undefined, {
                type: types.ADD_SENSOR_DATA,
                data: {
                    id: "some_id",
                    name: "Lorem ipsum"
                }
            })
        ).toEqual({
            "sensors": [{
                id: "some_id",
                name: "Lorem ipsum",
                data: []
            }]
        });
    });

    it("should handle ADD_RECORDING_DATA", () => {

        expect(
            reducer(undefined, {
                type: types.ADD_RECORDING_DATA,
                data: {
                    sensorId: "some_id",
                    data: "Some data"
                }
            })
        ).toEqual({
            "sensors": []
        });
    });

});