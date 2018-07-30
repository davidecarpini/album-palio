import React, { Component } from "react";

import Login from "screens/Login";
import ScanQRCode from "screens/ScanQRCode";

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
        active: false,
        key: "login",
        component: Login,
        title: "Login"
      },
      scenes: [
        {
          key: "scanqrcode",
          component: ScanQRCode,
          title: "QRCode",
          initial: true
        }
      ]
    }
  }
};
