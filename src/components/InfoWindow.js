import React from "react";
import { Popup } from "react-leaflet";
import { Content } from "react-bulma-components/full";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faPoundSign,
  faSlash
} from "@fortawesome/free-solid-svg-icons";

const fullAddress = location => {
  const address = { ...location.ChargeDeviceLocation.Address };
  const building = [address.BuildingName, address.BuildingNumber]
    .join(" ")
    .trim();
  const street = address.Thoroughfare || address.Street;
  const town = address.PostTown;
  const county = address.County;
  return (
    <p className="address">
      {building} {street}, {town}, {county}
    </p>
  );
};

const accessible24hours = location =>
  location.Accessible24Hours && (
    <p className="accessible-24-hours">
      <Icon icon={faClock} /> 24 hour access
    </p>
  );

const connectorTypes = ({ Connector, ChargeDeviceId }) => (
  <ul>
    {Connector.map(({ ConnectorType }, i) => (
      <li key={`${ChargeDeviceId}-${i}`}>{ConnectorType}</li>
    ))}
  </ul>
);

const paymentDetails = ({ PaymentRequiredFlag, PaymentDetails }) =>
  PaymentRequiredFlag ? (
    <p className="payment-details">
      <Icon icon={faPoundSign} /> {PaymentDetails || "Details not available"}
    </p>
  ) : (
    <p className="payment-details">
      <span className="fa-layers fa-fw">
        <Icon icon={faPoundSign} />
        <Icon icon={faSlash} />
      </span>{" "}
      Free of charge
    </p>
  );

const InfoWindow = ({ location }) => (
  <Popup>
    <Content size="small">
      <h1>{location.ChargeDeviceName}</h1>
      <p>{fullAddress(location)}</p>
      {accessible24hours(location)}
      {connectorTypes(location)}
      {paymentDetails(location)}
    </Content>
  </Popup>
);

export default InfoWindow;
