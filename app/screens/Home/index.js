import React, { Component } from "react";
import { View, Text } from "react-native";
import Card from "atoms/Card";
import range from "lodash/range";
import { ScrollView } from "react-native";
const styles = {
  contentContainerScrollView: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row"
  },
  ScrollView: {
    flexDirection: "column"
  }
};
const getImageFromNumber = n => {
  if (1 <= n && n <= 30) return "montone";
  if (31 <= n && n <= 90) return "nicchio";
  if (91 <= n && n <= 140) return "lupa";
  if (141 <= n && n <= 190) return "tartuca";
  return "siena";
};
const RandomNumber = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
class Home extends Component {
  render() {
    return (
      <View>
        <ScrollView
          horizontal={false}
          style={styles.ScrollView}
          contentContainerStyle={[styles.contentContainerScrollView]}
        >
          {range(500).map(n => (
            <Card
              key={n}
              number={n + 1}
              badge={RandomNumber(0, 3)}
              image={getImageFromNumber(n + 1)}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default Home;
