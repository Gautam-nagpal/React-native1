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
          onPress={() => this.props.navigation.openDrawer()}
        />
        <View>
          <Text style={styles.text}>Categories</Text>
        </View>
        <Icon name="ios-add" size={40} />
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  spacetop: {
    marginTop: 29,
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-around"
  },

  text: {
    fontSize: 30,
    alignItems: "center"
  }
});
