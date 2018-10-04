import React, { Component } from "react";

import { Text, View, Image, Button, StyleSheet, FlatList } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import Header from "../components/Header";
import Input from "../components/common/Input";

let user = [
  {
    key: "quote 1",
    liked: false
  },
  {
    key: "quote 2",
    liked: false
  },
  {
    key: "quote 3",
    liked: false
  },
  {
    key: "quote 4",
    liked: false
  },
  {
    key: "quote 5",
    liked: false
  },
  {
    key: "quote 6",
    liked: false
  }
];

class Notificationscreen extends Component {
  static navigationOptions = {
    drawerIcon: (
      <Image
        style={{ height: 30, width: 30 }}
        source={require("../assets/home.png")}
      />
    )
  };
  state = {
    user: user
  };

  liked = (data, index) => {
    let { user } = this.state;
    const updatedUser = [...user];

    updatedUser[index] = {
      ...updatedUser[index],
      liked: !updatedUser[index].liked
    };

    this.setState({
      user: updatedUser
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header header="Quotes" {...this.props} />
        <Input placeholder="Search Quotes" />

        <FlatList
          style={styles.list}
          data={this.state.user}
          renderItem={({ item, index }) => (
            <View style={styles.box}>
              <Text style={styles.text}>{item.key}</Text>
              <Icon
                name={`md-heart${item.liked ? "" : "-outline"}`}
                size={30}
                style={styles.like}
                onPress={() => this.liked(item, index)}
              />

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
    marginBottom: 30,
    marginTop: 10
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
    flexWrap: "wrap"
  },
  text: {
    paddingTop: 5,
    paddingLeft: 10,
    width: 260,
    height: 46
  },
  quoteimage: {
    alignSelf: "flex-end",
    height: 80,
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6,
    width: 70
  },
  like: {
    alignItems: "flex-end",

    paddingLeft: 5
  }
});

export default Notificationscreen;
