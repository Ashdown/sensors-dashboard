/*global describe, it, expect*/

import React from "react";
import {shallow} from "enzyme";
import SensorItem from "../../../src/components/SensorItem";

function setup() {

    const props = {
        sensorData: {
            id: '1234',
            name: 'Lorem Ipsum',
            data: 'data',
            dispatch: {},
            actions: {}
        }

    };

    const enzymeWrapper = shallow(<SensorItem {...props}/>);

    return {
        props,
        enzymeWrapper
    };
}

describe("SensorItem Component", () => {

    it("should render self and subcomponents", () => {
        const {enzymeWrapper, props} = setup();
        expect(enzymeWrapper.find(".sensor-item").hasClass("sensor-item")).toBe(true);
        const averageValueProps = enzymeWrapper.find("AverageValue").props();
        expect(averageValueProps.recordings).toBe(props.sensorData.data);
        // const dataListProps = enzymeWrapper.find("DataList").props();
        // expect(dataListProps.recordings).toBe(props.sensorData.data);
    });
});

