import PropTypes from "prop-types";

import React, { Component } from "react";
import { StyleSheet, View, Dimensions } from "react-native";

import { Col, Row, Grid } from "react-native-easy-grid";

export default class GridComponent extends Component {
  render() {
    const { children, column } = this.props;

    const mapChildren = [];

    children.forEach((child, index) => {
      if (index % column == 0) {
        mapChildren.push([]);
      }

      mapChildren[mapChildren.length - 1].push(child);
    });

    return (
      <View {...this.props}>
        <Grid>
          {mapChildren.map((rowChildren, index) => (
            <Row key={index}>
              {rowChildren.map((child, index) => (
                <Col key={index}>{child}</Col>
              ))}
            </Row>
          ))}
        </Grid>
      </View>
    );
  }
}

GridComponent.propTypes = {
  items: PropTypes.number
};

GridComponent.defaultProps = {
  column: 1
};
