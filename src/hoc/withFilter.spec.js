import React from "react";
import { shallow } from "enzyme";
import { withFilter } from "./withFilter";

describe("withFilter", () => {
  let testPeople, ChildComponent;

  beforeEach(() => {
    testPeople = [
      { name: "Alan", sex: "male", isAwesome: true },
      { name: "Bob", sex: "male", isAwesome: false },
      { name: "Charlie", sex: "female", isAwesome: true }
    ];
    ChildComponent = () => {};
  });

  it("should pass all the things when no filter", () => {
    const FilteredComponent = withFilter(ChildComponent);
    const wrapper = shallow(<FilteredComponent locations={testPeople} />);
    expect(wrapper.props().locations).toEqual(testPeople);
  });

  it("should pass only things which meet the condition", () => {
    const awesomePeople = [
      { name: "Alan", sex: "male", isAwesome: true },
      { name: "Charlie", sex: "female", isAwesome: true }
    ];
    const FilteredComponent = withFilter(ChildComponent);
    const wrapper = shallow(
      <FilteredComponent locations={testPeople} filter={{ isAwesome: true }} />
    );
    expect(wrapper.props().locations).toEqual(awesomePeople);
  });
});
