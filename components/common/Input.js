import React, { Component } from "react";

import { Text, TextInput, View, StyleSheet } from "react-native";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      <View style={styles.spacetop}>
        <TextInput
          style={styles.searchbar}
          placeholder={this.props.placeholder}
          placeholderTextColor="#fff"
          underlineColorAndroid="transparent"
          onChangeText={text => this.setState({ text })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  spacetop: {
    marginTop: 18,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    alignContent: "center"
  },
  searchbar: {
    borderColor: "#fff",
    borderRadius: 15,
    borderWidth: 1,
    width: 330,
    height: 40,
    paddingLeft: 20,
    color: "#fff"
  }
});
