import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { createSwitchNavigator } from "react-navigation";

import Loginscreen from "./screens/Loginscreen";
import QuotesHome from "./screens/QuotesHome";
import Signupscreen from "./screens/Signupscreen";

export default class App extends Component {
  state = {};
  render() {
    return <Rootstack />;
  }
}

const Rootstack = createSwitchNavigator(
  {
    Home: Loginscreen,
    Signupscreen: Signupscreen,
    QuotesHome: QuotesHome
  },
  {
    initialRouteName: "Home"
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#03b393"
  }
});
