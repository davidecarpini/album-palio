import React, { Component } from "react";
import App from "./App";
import config from "./app/config";
import language from "./app/language";

import { MobxStoreProvider } from "state";
import { View } from "react-native";

import { YellowBox } from "react-native";
YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

class WrapperPersitor extends Component<Props> {
  state = {
    ready: false,
    token: undefined,
    update: 0
  };

  render() {
    if (config.client.mobx.active) {
      return (
        <MobxStoreProvider
          onLoadUser={user => {
            this.setState({ token: user.token });
          }}
          onLoadLang={lang => {
            language.init(lang, () => {
              this.setState({ update: this.state.update + 1 });
            });
          }}
          onLoadAll={() => {
            this.setState({ ready: true });
          }}
        >
          {this.state.ready ? (
            <App key={this.state.update} token={this.state.token} />
          ) : (
            <View />
          )}
        </MobxStoreProvider>
      );
    }

    return App;
  }
}

export default WrapperPersitor;
