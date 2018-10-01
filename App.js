import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { createDrawerNavigator } from "react-navigation";
import Homescreen from "./screens/Homescreen";
import Notificationscreen from "./screens/Notificarionscreen";

export default class App extends Component {
  state = {};
  render() {
    return <MyApp />;
  }
}

const MyApp = createDrawerNavigator(
  {
    Home: {
      screen: Homescreen
    },
    Notification: {
      screen: Notificationscreen
    }
  },
  {
    drawerPosition: "left",
    initialRouteName: "Home",
    drawerWidth: 270,
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle"
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
