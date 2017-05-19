/*global it, describe, expect */

import React from "react";
import {shallow} from "enzyme";
import DashboardSvg from "../../../src/svgs/DashboardSvg";

function setup() {
    const props = {};
    const enzymeWrapper = shallow(<DashboardSvg/>);
    return {
        props,
        enzymeWrapper
    };
}

describe("DashboardSvg Svg Component", () => {
    it("should render the component", () => {
        const {enzymeWrapper} = setup();
        expect(enzymeWrapper.find(".dashboard-svg").hasClass("dashboard-svg")).toBe(true);
    });
});