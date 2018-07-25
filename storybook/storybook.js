import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { getStorybookUI, configure } from "@storybook/react-native";

import config from "config";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const client = new ApolloClient({
  link: new HttpLink({
    uri: config.server.graphql.url,
    credentials: "include"
  }),
  cache: new InMemoryCache()
});

// import stories
configure(() => {
  require("./aggregator.js");
}, module);

// This assumes that storybook is running on the same host as your RN packager,
// to set manually use, e.g. host: 'localhost' option
const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: true });

// react-native hot module loader must take in a Class - https://github.com/facebook/react-native/issues/10991
// https://github.com/storybooks/storybook/issues/2081
// eslint-disable-next-line react/prefer-stateless-function
class StorybookUIHMRRoot extends Component {
  render() {
    let Root;
    if (config.server.graphql.active) {
      Root = (
        <ApolloProvider client={client}>
          <StorybookUIRoot />
        </ApolloProvider>
      );
    } else {
      Root = <StorybookUIRoot />;
    }

    return Root;
  }
}

AppRegistry.registerComponent("ariaFrittaNative", () => StorybookUIHMRRoot);
export default StorybookUIHMRRoot;
