import React from "react";
import { shallow } from "enzyme";

import Select from "./Select";

describe("Select", () => {
  let props;

  beforeEach(() => {
    props = {
      addFilter: jest.fn(),
      removeFilter: jest.fn(),
      filterKey: "FILTER_KEY",
      data: ["Alan", "Bob", "Charlie"]
    };
  });

  it("renders a select tag...", () => {
    const wrapper = shallow(<Select {...props} />);
    expect(wrapper.find("select").length).toBe(1);
  });

  it("...with a default option, disabled", () => {
    const wrapper = shallow(<Select {...props} />);
    expect(
      wrapper
        .children()
        .find("option")
        .first()
        .prop("disabled")
    ).toBe(true);
  });

  it("...with a 'No preference' option", () => {
    const wrapper = shallow(<Select {...props} />);
    expect(
      wrapper
        .children()
        .find("option")
        .at(1)
        .text()
    ).toBe("No preference");
  });

  it("...with a 'No preference' option with no value", () => {
    const wrapper = shallow(<Select {...props} />);
    expect(
      wrapper
        .children()
        .find("option")
        .at(1)
        .prop("value")
    ).toBe("");
  });

  it("...with option children", () => {
    const wrapper = shallow(<Select {...props} />);
    expect(wrapper.children().find("option").length).toBe(
      props.data.length + 2
    );
  });

  it("calls addFilter when changed", () => {
    const wrapper = shallow(<Select {...props} />);
    wrapper.simulate("change", { target: { value: {} } });
    expect(props.addFilter.mock.calls.length).toBe(1);
  });

  it("calls addFilter with value of selected option", () => {
    const wrapper = shallow(<Select {...props} />);
    wrapper.simulate("change", { target: { value: "SPROCKET" } });
    expect(props.addFilter.mock.calls[0][0]).toEqual({
      [props.filterKey]: "SPROCKET"
    });
  });

  it("calls addFilter with value of selected option with parent filter key", () => {
    props = { ...props, parentKey: "PARENT_KEY" };
    const wrapper = shallow(<Select {...props} />);
    wrapper.simulate("change", { target: { value: "SPROCKET" } });
    expect(props.addFilter.mock.calls[0][0]).toEqual({
      [props.parentKey]: [{ [props.filterKey]: "SPROCKET" }]
    });
  });

  it("calls removeFilter with key when No Preference option selected", () => {
    const wrapper = shallow(<Select {...props} />);
    wrapper.simulate("change", { target: { value: "" } });
    expect(props.removeFilter.mock.calls.length).toBe(1);
  });

  it("calls removeFilter with key when No Preference option selected", () => {
    const wrapper = shallow(<Select {...props} />);
    wrapper.simulate("change", { target: { value: "" } });
    expect(props.removeFilter.mock.calls[0][0]).toBe(props.filterKey);
  });

  it("calls removeFilter with parentKey when parentKey is passed", () => {
    props = { ...props, parentKey: "PARENT_KEY" };
    const wrapper = shallow(<Select {...props} />);
    wrapper.simulate("change", { target: { value: "" } });
    expect(props.removeFilter.mock.calls[0][0]).toBe(props.parentKey);
  });
});
