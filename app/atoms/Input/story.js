import Component from "./index.js";
export default {
  id: "Input",
  props: {
    hint: "Username",
    leftIcon: { type: "font-awesome", name: "user" },
    containerStyle: {
      borderRadius: 20,
      borderWidth: 1,
      borderColor: "#d6d7da"
    }
  },
  auto: true,
  Component,
  path: "atoms",
  desc: "Input Component"
};
