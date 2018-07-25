import Component from "./index.js";

import React from "react";
import { View } from "react-native";

export default {
  id: "Grid",
  props: {
    column: 2,
    style: { height: "100%" },
    children: [
      <View
        key={"a"}
        style={{ backgroundColor: "#ff0000", height: "100%", width: "100%" }}
      />,
      <View
        key={"b"}
        style={{ backgroundColor: "#00ff00", height: "100%", width: "100%" }}
      />,
      <View
        key={"c"}
        style={{ backgroundColor: "#0000ff", height: "100%", width: "100%" }}
      />,
      <View
        key={"d"}
        style={{ backgroundColor: "#00ffff", height: "100%", width: "100%" }}
      />
    ]
  },
  auto: true,
  Component,
  path: "templates",
  desc: "Grid Component"
};
