import React from "react";
import { shallow } from "enzyme";
import InfoWindow from "./InfoWindow";

describe("InfoWindow", () => {
  let props;

  beforeEach(() => {
    props = {
      location: {
        ChargeDeviceId: "UNIQUE",
        ChargeDeviceName: "Big Al's Vehicle Charging Station",
        ChargeDeviceLocation: {
          Address: {
            BuildingNumber: "138",
            Street: "Buchanan Street",
            PostTown: "Glasgow",
            County: "City of Glasgow"
          }
        },
        Accessible24Hours: true,
        Connector: [
          {
            ConnectorType: "Plug"
          },
          {
            ConnectorType: "Socket"
          }
        ]
      }
    };
  });

  it("should render a heading with the device name", () => {
    const wrapper = shallow(<InfoWindow {...props} />);
    const headerText = wrapper.find("h1").text();
    const deviceName = props.location.ChargeDeviceName;
    expect(headerText).toBe(deviceName);
  });

  it("should render the full address", () => {
    const wrapper = shallow(<InfoWindow {...props} />);
    const address = wrapper.find(".address");
    const expectedAddress = "138 Buchanan Street, Glasgow, City of Glasgow";
    expect(address.text()).toBe(expectedAddress);
  });

  it("should render icon", () => {
    const wrapper = shallow(<InfoWindow {...props} />);
    const iconPTag = wrapper.find(".accessible-24-hours");
    expect(iconPTag.length).toBe(1);
  });

  it("should render list of connector types", () => {
    const wrapper = shallow(<InfoWindow {...props} />);
    const connectorsListItems = wrapper.find("li");
    const firstConnectorType = connectorsListItems.first().text();
    const expectedType = props.location.Connector[0].ConnectorType;
    expect(connectorsListItems.length).toBe(2);
    expect(firstConnectorType).toBe(expectedType);
  });

  it("renders empty payment details if none required", () => {
    const wrapper = shallow(<InfoWindow {...props} />);
    const paymentDetails = wrapper.find(".payment-details");
    expect(paymentDetails.text()).toMatch(/Free of charge$/);
  });
});
