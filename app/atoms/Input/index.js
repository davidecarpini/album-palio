import PropTypes from "prop-types";

import React, { Component } from "react";

import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";

class InputComponent extends React.Component {
  render() {
    const { hint, onChange } = this.props;

    return (
      <Input
        placeholder={hint}
        onChangeText={text => onChange && onChangeText(text)}
        {...this.props}
      />
    );
  }
}

InputComponent.propTypes = {
  hint: PropTypes.string,
  onChangeText: PropTypes.func
};

export default InputComponent;
