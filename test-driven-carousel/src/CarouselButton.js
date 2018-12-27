// src/CarouselButton.js
import React from "react";
import propTypes from "prop-types";

const CarouselButton = ({ children }) => <button>{children}</button>;

CarouselButton.propTypes = {
  children: propTypes.node.isRequired,
};

export default CarouselButton;
