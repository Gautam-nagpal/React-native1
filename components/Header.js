import React, { Component } from "react";

import { Text, Image, View, StyleSheet, Button } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class Header extends Component {
  state = {};
  render() {
    return (
      <View style={styles.spacetop}>
        <Icon
          name="ios-menu"
          size={40}
          style={styles.icon}
          onPress={() => this.props.navigation.openDrawer()}
        />
        <View>
          <Text style={styles.text}>{this.props.header}</Text>
        </View>
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  spacetop: {
    marginTop: 29,
    flexDirection: "row",
    display: "flex"
  },
  icon: {
    color: "#fff",
    justifyContent: "flex-start",
    paddingLeft: 17
  },

  text: {
    fontSize: 30,
    color: "#fff",
    paddingLeft: 90
  }
});
