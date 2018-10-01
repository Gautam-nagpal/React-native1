import React, { Component } from "react";

import { Text, View, Image, Button, StyleSheet, FlatList } from "react-native";
import Header from "../components/Header";
import Input from "../components/common/Input";

class Notificationscreen extends Component {
  static navigationOptions = {
    drawerIcon: (
      <Image
        style={{ height: 30, width: 30 }}
        source={require("../assets/notification.png")}
      />
    )
  };
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Header {...this.props} />
        <Input />

        <FlatList
          style={styles.list}
          data={[
            {
              key:
                "Inspirational kjbaskc asjcas c a a a a aa a aa a ascas asc asc asca  "
            },
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
              <Image
                source={require("../assets/quotes.jpeg")}
                style={styles.quoteimage}
              />
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
    marginBottom: 30
  },
  box: {
    marginBottom: 20,
    display: "flex",
    alignSelf: "center",
    borderColor: "#fff",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderWidth: 1,
    width: 330,
    height: 80,
    flexWrap: "wrap",
    alignContent: "space-between"
  },
  text: {
    paddingTop: 5,
    paddingLeft: 10,
    width: 260,
    display: "flex"
  },
  quoteimage: {
    justifyContent: "flex-end",
    height: 80,
    borderRadius: 6,
    borderBottomRightRadius: 7,
    width: 50
  }
});

export default Notificationscreen;
