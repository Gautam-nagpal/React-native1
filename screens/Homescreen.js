import React, { Component } from "react";

import { Text, View, Image, Button, StyleSheet, FlatList } from "react-native";
import Header from "../components/Header";
import Input from "../components/common/Input";

class Homescreen extends Component {
  static navigationOptions = {
    drawerIcon: (
      <Image
        style={{ height: 30, width: 30 }}
        source={require("../assets/home.png")}
      />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <Header {...this.props} />

        <Input placeholder="Search Quotes" style={styles.searchbar} />

        <FlatList
          style={styles.list}
          data={[
            { key: "Inspirational" },
            { key: "Love" },
            { key: "Educational" },
            { key: "Life" },
            { key: "Motivational" },
            { key: "Friendship" },
            { key: "Smile" },
            { key: "Positive" },
            { key: "Funny" },
            { key: "Emotional" }
          ]}
          renderItem={({ item }) => (
            <View style={styles.box}>
              <Text style={styles.text}>{item.key}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#03b393"
  },
  list: {
    alignContent: "center",
    marginBottom: 30,
    marginTop: 10
  },
  box: {
    marginBottom: 20,
    display: "flex",
    alignSelf: "center",
    alignItems: "center",
    alignContent: "center",
    borderColor: "#fff",
    borderRadius: 3,
    borderWidth: 1,
    width: 330,
    height: 40
  },
  text: {
    paddingTop: 5,
    display: "flex",
    alignSelf: "center",
    color: "#fff"
  },
  searchbar: {
    marginBottom: 20
  }
});

export default Homescreen;
