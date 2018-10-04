import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { createDrawerNavigator, DrawerItems } from "react-navigation";
import Homescreen from "./Homescreen";
import Notificationscreen from "./Notificarionscreen";

export default class QuotesHome extends Component {
  state = {};
  render() {
    return <MyApp />;
  }
}

const CustomDrawerContentComponent = props => (
  <View>
    <View style={{ backgroundColor: "#03b393", height: 150 }}>
      <Image
        style={styles.drawerimage}
        source={require("../assets/download.jpeg")}
      />
      <Text style={styles.drawertext}> Quotes</Text>
    </View>
    <View>
      <DrawerItems {...props} />
    </View>
  </View>
);

const MyApp = createDrawerNavigator(
  {
    Home: {
      screen: Notificationscreen
    },
    Categories: {
      screen: Homescreen
    }
  },
  {
    drawerPosition: "left",
    initialRouteName: "Home",
    contentComponent: CustomDrawerContentComponent,
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
  },
  drawerimage: {
    display: "flex",
    marginTop: 30,
    marginLeft: 10,
    height: 80,
    width: 90,
    borderRadius: 75,
    flexDirection: "column"
  },
  drawertext: {
    marginLeft: 15,
    fontSize: 20
  }
});
