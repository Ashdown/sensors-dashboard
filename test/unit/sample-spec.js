/*global describe, it, expect*/

import * as actions from "../../src/actions/FriendsActions";
import * as types from "../../src/constants/ActionTypes";

describe("actions", () => {

    it("should create an action to add a friend", () => {
        const name = "Lorem Ipsum";
        const expectedAction = {
            type: types.ADD_FRIEND,
            name
        };
        expect(actions.addFriend(name)).toEqual(expectedAction);
    });
});