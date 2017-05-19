/*global describe, it, expect*/

import React from "react";
import {shallow} from "enzyme";
import DataItem from "../../../src/components/DataItem";

function setup() {

    const props = {
        time: 1472100054,
        value: "12.3"
    };

    const enzymeWrapper = shallow(<DataItem {...props}/>);

    return {
        props,
        enzymeWrapper
    };
}

describe("DataItem Component", () => {

    describe("render", () => {

        it("should render self and subcomponents", () => {
            const {enzymeWrapper, props} = setup();
            expect(enzymeWrapper.find(".data-item").hasClass("data-item")).toBe(true);
            expect(enzymeWrapper.find(".time").text()).toBe("25 Aug 2016 5:40:54");
            expect(enzymeWrapper.find(".value").text()).toBe(props.value);
        });
    });

    describe("getTimeString", () => {
        it("should convert timestrings correctly", () => {
            let mockDataItem = new DataItem();
            expect(mockDataItem.getTimeString(1472100054)).toBe("25 Aug 2016 5:40:54");
        });

    });
});

