import React, { Component } from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
import { Info } from "../screenNames";
import Header from "../components/Header";

const backgroundColor = "#0067a7";

export default class Homescreen extends Component {
  static navigationOptions = ({ navigation }) => {
    let drawerLabel = "Home";
    let drawerIcon = () => {
      <Image
        source={require("../assets/menu.png")}
        style={{ width: 26, height: 26, tintColor: backgroundColor }}
      />;
    };
    return { drawerLabel, drawerIcon };
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column"
        }}
      >
        <Header {...this.props} />
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: backgroundColor
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 22 }}>
            This is home screen
          </Text>
          <TouchableHighlight
            onPress={() => {
              const { navigate } = this.props.navigation;
              navigate(Info);
            }}
          />
        </View>
      </View>
    );
  }
}
