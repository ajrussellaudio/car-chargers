import React from "react";
import { shallow } from "enzyme";
import GeolocationButton from "./GeolocationButton";

describe("GeolocationButton", () => {
  let props;

  beforeEach(() => {
    props = { text: "Click me!", onClick: jest.fn() };
  });

  it("renders a button", () => {
    const wrapper = shallow(<GeolocationButton {...props} />);
    expect(wrapper.find("button").length).toBe(1);
  });

  it("renders a button with text", () => {
    const wrapper = shallow(<GeolocationButton {...props} />);
    expect(wrapper.find("button").text()).toContain(props.text);
  });

  it("disables button if navigator does not support geolocation", () => {
    navigator.geolocation = null;
    const wrapper = shallow(<GeolocationButton {...props} />);
    expect(wrapper.find("button").prop("disabled")).toBe(true);
  });

  it("enables button if navigator supports geolocation", () => {
    navigator.geolocation = { getCurrentPosition: {} };
    const wrapper = shallow(<GeolocationButton {...props} />);
    expect(wrapper.find("button").prop("disabled")).toBe(false);
  });

  it("calls navigator.geolocation.getCurrentPosition on click", () => {
    navigator.geolocation = { getCurrentPosition: jest.fn() };
    const wrapper = shallow(<GeolocationButton {...props} />);
    wrapper.simulate("click");
    expect(navigator.geolocation.getCurrentPosition.mock.calls.length).toBe(1);
  });

  it("passes onClick prop to navigator.geolocation.getCurrentPosition", () => {
    navigator.geolocation = { getCurrentPosition: jest.fn() };
    const wrapper = shallow(<GeolocationButton {...props} />);
    wrapper.simulate("click");
    expect(navigator.geolocation.getCurrentPosition.mock.calls[0][0]).toEqual(
      props.onClick
    );
  });
});
