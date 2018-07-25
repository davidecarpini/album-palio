/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import PropTypes from "prop-types";

import React, { Component } from "react";
import config from "config";
import { observer, inject } from "mobx-react/native";
import { View } from "react-native";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

import { Router, Scene } from "react-native-router-flux";

import App from "./app/index.js";

@inject("user")
@observer
export default class Gui extends Component {
  constructor(props) {
    super(props);

    const httpLink = createHttpLink({
      uri: config.server.graphql.url
    });

    const authLink = setContext((_, { headers }) => {
      // get the authentication token from local storage if it exists
      const token = this.props.token;
      // return the headers to the context so httpLink can read them
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : ""
        }
      };
    });

    this.client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache()
    });
  }

  render() {
    let Root = <App />;

    if (config.client.router.active) {
      Root = (
        <Router>
          <Scene key={"root"}>
            {config.client.router.login.active ? (
              <Scene
                key={config.client.router.login.key}
                component={config.client.router.login.component}
                title={config.client.router.login.title}
                initial={true}
              />
            ) : (
              <Scene key={"undefined"} component={<View />} />
            )}
            {config.client.router.scenes.map(scene => (
              <Scene
                key={scene.key}
                component={scene.component}
                title={scene.title}
                initial={
                  scene.initial &&
                  ((config.client.router.login.active && this.props.token) ||
                    !config.client.router.login.active)
                }
              />
            ))}
          </Scene>
        </Router>
      );
    }

    if (config.server.graphql.active) {
      Root = <ApolloProvider client={this.client}>{Root}</ApolloProvider>;
    }

    return Root;
  }
}

Gui.propTypes = {
  token: PropTypes.string
};
