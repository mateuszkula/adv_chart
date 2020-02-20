import { mount, shallow } from "enzyme";
import React from "react";
import "jest-styled-components";
import Select, { components } from "react-select";

import { Filters } from ".";

const fakeData = [
  {
    value: "fake1",
    label: "fake1"
  },
  {
    value: "fake2",
    label: "fake2"
  },
  {
    value: "fake3",
    label: "fake3"
  }
];

describe("<Filters />", () => {
  it("should exist", () => {
    const wrapper = shallow(<Filters />);

    expect(wrapper.exists()).toEqual(true);
  });

  it("should contain two select components", () => {
    const wrapper = mount(<Filters />);

    expect(wrapper.find(Select).length).toEqual(2);
  });

  it("should show correct number of options for datasources", () => {
    const wrapper = mount(<Filters datasources={fakeData} />);

    wrapper
      .find(".select_datasources__dropdown-indicator")
      .at(1)
      .simulate("mouseDown", {
        button: 0
      });

    expect(wrapper.find(components.Option).length).toEqual(fakeData.length);
  });

  it("should show correct number of options for campaigns", () => {
    const wrapper = mount(<Filters campaigns={fakeData} />);

    wrapper
      .find(".select_campaigns__dropdown-indicator")
      .at(1)
      .simulate("mouseDown", {
        button: 0
      });

    expect(wrapper.find(components.Option).length).toEqual(fakeData.length);
  });

  it("should show run correct function when picking up option for datasources", () => {
    const onChangeDatasourcesMock = jest.fn();
    const wrapper = mount(
      <Filters
        datasources={fakeData}
        onDatasourcesChange={onChangeDatasourcesMock}
      />
    );

    wrapper
      .find(".select_datasources__dropdown-indicator")
      .at(0)
      .simulate("mouseDown", {
        button: 0
      });
    wrapper
      .find(components.Option)
      .at(0)
      .simulate("click");

    expect(onChangeDatasourcesMock).toHaveBeenCalled();
  });

  it("should show run correct function when picking up option for campaigns", () => {
    const onCampaignsChangeMock = jest.fn();
    const wrapper = mount(
      <Filters campaigns={fakeData} onCampaignsChange={onCampaignsChangeMock} />
    );

    wrapper
      .find(".select_campaigns__dropdown-indicator")
      .at(0)
      .simulate("mouseDown", {
        button: 0
      });
    wrapper
      .find(components.Option)
      .at(0)
      .simulate("click");

    expect(onCampaignsChangeMock).toHaveBeenCalled();
  });
});
