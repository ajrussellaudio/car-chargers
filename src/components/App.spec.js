import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";
import Loading from "./Loading";
import FilteredMap from "./FilteredMap";
import Error from "./Error";

describe("App", () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      locations: {
        list: [],
        isLoading: false,
        error: null
      },
      fetchLocations: () => {}
    };
  });

  it("renders Loading component if request is loading", () => {
    const props = {
      ...defaultProps,
      locations: {
        ...defaultProps.locations,
        isLoading: true
      }
    };
    const wrapper = shallow(<App {...props} />);
    expect(wrapper.find(Loading).length).toBe(1);
  });

  it("renders FilteredMap component when loading done", () => {
    const locationsList = [1, 2, 3, 4, 5, 6];
    const props = {
      ...defaultProps,
      locations: {
        ...defaultProps.locations,
        list: locationsList
      }
    };
    const wrapper = shallow(<App {...props} />);
    expect(wrapper.find(FilteredMap).length).toBe(1);
  });

  it("renders Error component if error occured", () => {
    const errorMessage = "I made a boo-boo.";
    const props = {
      ...defaultProps,
      locations: {
        ...defaultProps.locations,
        error: errorMessage
      }
    };
    const wrapper = shallow(<App {...props} />);
    expect(wrapper.find(Error).length).toBe(1);
  });

  it("passes message to Error component if error occured", () => {
    const errorMessage = "I made a boo-boo.";
    const props = {
      ...defaultProps,
      locations: {
        ...defaultProps.locations,
        error: errorMessage
      }
    };
    const wrapper = shallow(<App {...props} />);
    expect(
      wrapper
        .find(Error)
        .first()
        .props().message
    ).toBe(errorMessage);
  });
});
