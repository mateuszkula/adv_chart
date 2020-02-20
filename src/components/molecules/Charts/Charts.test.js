import { shallow } from "enzyme";
import React from "react";
import "jest-styled-components";

import { Charts } from ".";

describe("<Charts />", () => {
  it("should exist", () => {
    const wrapper = shallow(<Charts />);

    expect(wrapper.exists()).toEqual(true);
  });
});
