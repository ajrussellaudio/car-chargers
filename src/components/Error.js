import React from "react";
import PropTypes from "prop-types";
import { Notification } from "bloomer";

const Error = ({ message }) => (
  <Notification isColor="warning">Error: {message}</Notification>
);

Error.propTypes = {
  message: PropTypes.string
};

export default Error;
