import PropTypes from "prop-types";

import React, { Component } from "react";

import { Button } from "react-native-elements";

class ButtonComponent extends React.Component {
  render() {
    return <Button {...this.props} />;
  }
}

ButtonComponent.propTypes = {};

export default ButtonComponent;
