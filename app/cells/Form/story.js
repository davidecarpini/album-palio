import Component from "./index.js";

import React from "react";
import Input from "atoms/Input";
import Button from "atoms/Button";

export default {
  id: "Form",
  props: {
    format: "fields",
    children: [
      <Input key={"username"} role={"input"} hint={"Username"} />,
      <Input key={"password"} role={"input"} hint={"Password"} />,
      <Button
        key={"submit"}
        role={"submit"}
        title={"Login"}
        onSubmit={object => {
          alert(JSON.stringify(object));
        }}
      />
    ]
  },
  auto: true,
  Component,
  path: "cells",
  desc: "Form Component"
};
