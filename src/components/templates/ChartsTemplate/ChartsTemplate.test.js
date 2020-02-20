import { shallow } from "enzyme";
import React from "react";
import "jest-styled-components";

import { ChartsTemplate } from ".";

describe("<ChartsTemplate />", () => {
  it("should exist", () => {
    const wrapper = shallow(<ChartsTemplate />);

    expect(wrapper.exists()).toEqual(true);
  });

  it("should render charts if passed", () => {
    const charts = "charts";
    const wrapper = shallow(<ChartsTemplate charts={charts} />);

    expect(wrapper.text()).toContain(charts);
  });

  it("should render filters if passed", () => {
    const filters = "filters";
    const wrapper = shallow(<ChartsTemplate filters={filters} />);

    expect(wrapper.text()).toContain(filters);
  });
});
