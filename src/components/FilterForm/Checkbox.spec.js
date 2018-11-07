import React from "react";
import { shallow } from "enzyme";

import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  let props;

  beforeEach(() => {
    props = {
      filterKey: "isAwesome",
      text: "Is this thing awesome or what?",
      addFilter: jest.fn(),
      removeFilter: jest.fn()
    };
  });

  it("renders a component with input and label tags", () => {
    const wrapper = shallow(<Checkbox {...props} />);
    expect(wrapper.find("input").length).toBe(1);
    expect(wrapper.find("label").length).toBe(1);
  });

  it("calls addFilter with `{filterKey: true}` when changed", () => {
    const wrapper = shallow(<Checkbox {...props} />);
    wrapper.find("input").simulate("change");
    expect(props.addFilter.mock.calls.length).toBe(1);
    expect(props.addFilter.mock.calls[0][0]).toEqual({
      [props.filterKey]: true
    });
  });

  it("calls removeFilter with `filterKey` when changed again", () => {
    const wrapper = shallow(<Checkbox {...props} />);
    wrapper.find("input").simulate("change");
    wrapper.find("input").simulate("change");
    expect(props.removeFilter.mock.calls.length).toBe(1);
    expect(props.removeFilter.mock.calls[0][0]).toEqual(props.filterKey);
  });
});
