/*global describe, it, expect*/

import React from "react";
import {shallow} from "enzyme";
import DataList from "../../../src/components/DataList";

function setup() {

    const props = {
        recordings: [
            {
                time: 1234,
                value: 1234
            }]
    };

    const enzymeWrapper = shallow(<DataList {...props}/>);

    return {
        props,
        enzymeWrapper
    };
}

describe("DataList Component", () => {

    it("should render self and subcomponents", () => {
        const {enzymeWrapper, props} = setup();
        expect(enzymeWrapper.find(".data-list").hasClass("data-list")).toBe(true);
        const dataItemProps = enzymeWrapper.find("DataItem").props();
        expect(dataItemProps.time).toBe(props.recordings[0].time);
        expect(dataItemProps.value).toEqual(props.recordings[0].time);
    });
});

