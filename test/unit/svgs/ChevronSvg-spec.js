/*global describe, it, expect*/

import React from "react";
import {shallow} from "enzyme";
import ChevronSvg from "../../../src/svgs/ChevronSvg";

function setup() {
    const props = {};
    const enzymeWrapper = shallow(<ChevronSvg/>);
    return {
        props,
        enzymeWrapper
    };
}

describe("ChevronSvg Svg Component ", () => {
    it("should render the component", () => {
        const {enzymeWrapper} = setup();
        expect(enzymeWrapper.find(".chevron-svg").hasClass("chevron-svg")).toBe(true);
    });
});

