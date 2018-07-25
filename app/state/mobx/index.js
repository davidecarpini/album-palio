import { observer, Provider } from "mobx-react/native";
import { create } from "mobx-persist";
import React from "react";
import { Platform, StyleSheet, Text, View, AsyncStorage } from "react-native";
import PropTypes from "prop-types";

import User from "./user";
import Lang from "./lang";

export default class MobxStoreProvider extends React.Component {
  hydrate = create({ storage: AsyncStorage });
  userStore = new User();
  langStore = new Lang();

  constructor() {
    super();

    this.hydrate("lang", this.langStore)
      .then(lang => {
        this.props.onLoadLang && this.props.onLoadLang(lang);
        return this.hydrate("user", this.userStore);
      })
      .then(user => {
        this.props.onLoadUser && this.props.onLoadUser(user);
        this.props.onLoadAll && this.props.onLoadAll();
      });
  }

  render() {
    return <Provider user={this.userStore}>{this.props.children}</Provider>;
  }
}

MobxStoreProvider.propTypes = {
  onLoadAll: PropTypes.func,
  onLoadUser: PropTypes.func,
  onLoadLang: PropTypes.func
};
