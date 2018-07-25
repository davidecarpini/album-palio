import React, { Component } from "react";
import { Container, Header } from "native-base";
import { Platform, StyleSheet, Text, View } from "react-native";

export default class App extends Component<Props> {
  render() {
    return (
      <Container>
        <Header>
          <Text style={styles.welcome}>Welcome to Aria Fritta!</Text>
        </Header>
        <Text style={styles.welcome}>NO ROUTER</Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
