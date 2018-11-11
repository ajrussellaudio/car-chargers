import React from "react";
import PropTypes from "prop-types";
import { Popup } from "react-leaflet";
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
  location.Accessible24Hours ? (
    <p className="accessible-24-hours">
      <Icon icon={faClock} /> 24 hour access
    </p>
  ) : (
    <p className="accessible-24-hours">
      <span className="fa-layers fa-fw">
        <Icon icon={faClock} />
        <Icon icon={faSlash} />
      </span>{" "}
      No 24 hour access
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
      <Icon icon={faPoundSign} />{" "}
      {PaymentDetails || "Payment required, but details not available"}
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
    <React.Fragment>
      <h1>{location.ChargeDeviceName}</h1>
      {fullAddress(location)}
      {accessible24hours(location)}
      {connectorTypes(location)}
      {paymentDetails(location)}
    </React.Fragment>
  </Popup>
);

InfoWindow.propTypes = {
  location: PropTypes.shape({
    ChargeDeviceName: PropTypes.string,
    ChargeDeviceLocation: PropTypes.shape({
      Address: PropTypes.shape({
        BuildingName: PropTypes.string,
        BuildingNumber: PropTypes.string,
        Thoroughfare: PropTypes.string,
        Street: PropTypes.string,
        PostTown: PropTypes.string,
        County: PropTypes.string
      })
    }),
    Accessible24Hours: PropTypes.bool,
    Connector: PropTypes.array
  })
};

export default InfoWindow;
