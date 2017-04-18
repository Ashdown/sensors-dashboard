/*global describe, it, expect*/

import React from "react";
import { shallow } from "enzyme";
import DataItem from "../../src/components/DataItem";

function setup() {

    const props = {
        time: "0",
        value: "12.3"
    };

    const enzymeWrapper = shallow(<DataItem {...props}/>);

    return {
        props,
        enzymeWrapper
    };
}

describe("DataItem Component", () => {

    it("should render self and subcomponents", () => {
        const { enzymeWrapper, props } = setup();
        expect(enzymeWrapper.find(".data-item").hasClass("data-item")).toBe(true);
        expect(enzymeWrapper.find(".time").text()).toBe("1 Jan 1970 0:0:0");
        expect(enzymeWrapper.find(".value").text()).toBe(props.value);
    });
});

