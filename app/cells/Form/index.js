import PropTypes from "prop-types";

import React, { Component } from "react";
import { View } from "react-native";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.form = props.format === "fields" ? {} : [];
  }

  onChange = (key, value) => {
    if (this.props.format === "fields") {
      this.form[key] = value;
    } else {
      const indexElement = this.form.findIndex(element => {
        return element.key === key;
      });

      if (indexElement > -1) {
        this.form[indexElement].value = value;
      } else {
        this.form.push({ key, value });
      }
    }

    this.props.onUpdate && this.props.onUpdate(this.form);
  };

  render() {
    const { children } = this.props;
    return (
      <View>
        {children.map(element => {
          if (!element.key) {
            alert("undefined key for: " + JSON.stringify(element));
          }

          if (element.props.role === "input") {
            element = React.cloneElement(element, {
              onChangeText: text => {
                this.onChange(element.key, text);
              }
            });
          } else if (element.props.role === "submit") {
            element = React.cloneElement(element, {
              onPress: () => {
                element.props.onSubmit && element.props.onSubmit(this.form);
              }
            });
          }

          return element;
        })}
      </View>
    );
  }
}

Form.propTypes = {
  children: PropTypes.array.isRequired,
  onUpdate: PropTypes.func,
  format: PropTypes.oneOf(["array", "fields"])
};

export default Form;
