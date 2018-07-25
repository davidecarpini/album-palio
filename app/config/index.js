import React, { Component } from "react";

import Login from "screens/Login";
import Button from "atoms/Button";

// if login active, must be active graphql
export default {
  server: {
    graphql: {
      active: true,
      url: "http://0.0.0.0:9000/graphql"
    }
  },
  client: {
    mobx: {
      active: true
    },
    router: {
      active: true,
      login: {
        active: true,
        key: "login",
        component: Login,
        title: "Login"
      },
      scenes: [
        {
          key: "button",
          component: Button,
          title: "Button",
          initial: true
        }
      ]
    }
  }
};
