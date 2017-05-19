/*global describe, it, expect*/

import React from "react";
import {mount} from "enzyme";
import {SensorItem} from "../../../src/components/SensorItem";

function setup() {

    const props = {
        sensorData: {
            id: "1234",
            name: "Lorem Ipsum",
            data: "data",
            dispatch: {},
            actions: {}
        }

    };

    const enzymeWrapper = mount(<SensorItem {...props}/>);

    return {
        props,
        enzymeWrapper
    };
}

describe("SensorItem Component", () => {

    describe("render", () => {

        it("should render self and subcomponents", () => {
            const {enzymeWrapper, props} = setup();
            expect(enzymeWrapper.find(".sensor-item").hasClass("sensor-item")).toBe(true);
            const averageValueProps = enzymeWrapper.find("AverageValue").props();
            expect(averageValueProps.recordings).toBe(props.sensorData.data);
            // const dataListProps = enzymeWrapper.find("DataList").props();
            // expect(dataListProps.recordings).toBe(props.sensorData.data);
        });
    });

    describe("toggleAccordion", () => {
        const {enzymeWrapper} = setup();
        expect(enzymeWrapper.state("status")).toBe("closed");
        enzymeWrapper.instance().toggleAccordion();
        expect(enzymeWrapper.state("status")).toBe("open");
        enzymeWrapper.instance().toggleAccordion();
        expect(enzymeWrapper.state("status")).toBe("closed");
    });

    describe("fetchRecordingData", () => {

    });

    describe("rollOver and rollOut", () => {

        it("set the rollover state correctly", () => {
            const {enzymeWrapper} = setup();
            expect(enzymeWrapper.state("rollover")).toBe(false);
            enzymeWrapper.instance().rollOver();
            expect(enzymeWrapper.state("rollover")).toBe(true);
            enzymeWrapper.instance().rollOut();
            expect(enzymeWrapper.state("rollover")).toBe(false);
        });


    });


});

