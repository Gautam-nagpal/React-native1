import React, { Component } from "react";

import { Text, View, Image, Button, StyleSheet, FlatList } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import Header from "../components/Header";
import Input from "../components/common/Input";
import { likedQuote } from "../action/Action";

class Favourite extends Component {
  static navigationOptions = {
    drawerIcon: (
      <Image
        style={{ height: 30, width: 30 }}
        source={require("../assets/like.png")}
      />
    )
  };
  state = {
    user: [],
    checkLikes: false
  };

  componentDidMount = () => {
    const user = [...this.props.quotes.user];
    this.setState({
      user
    });
    user.map((item, index) => {
      if (item.liked) {
        this.setState({
          checkLikes: true
        });
      }
    });
  };

  liked = index => {
    let { user } = this.state;
    const updatedUser = [...user];

    updatedUser[index] = {
      ...updatedUser[index],
      liked: !updatedUser[index].liked
    };

    this.setState(
      {
        user: updatedUser
      },
      () => {
        likedQuote(this.state);
      }
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Header header="favourite" {...this.props} />
        {this.state.checkLikes ? (
          <FlatList
            style={styles.list}
            data={this.state.user}
            renderItem={({ item, index }) => (
              <View>
                {item.liked ? (
                  <View style={styles.box}>
                    <Text style={styles.text}>{item.key}</Text>
                    <Icon
                      name={`md-heart${item.liked ? "" : "-outline"}`}
                      size={30}
                      style={styles.like}
                      onPress={() => this.liked(index)}
                    />

                    <Image
                      source={require("../assets/quotes.jpeg")}
                      style={styles.quoteimage}
                    />
                  </View>
                ) : null}
              </View>
            )}
          />
        ) : (
          <FlatList
            style={styles.list}
            data={this.state.user}
            renderItem={({ item, index }) => (
              <View>
                <View style={styles.box}>
                  <Text style={styles.text}>{item.key}</Text>
                  <Icon
                    name={`md-heart${item.liked ? "" : "-outline"}`}
                    size={30}
                    style={styles.like}
                    onPress={() => this.liked(index)}
                  />

                  <Image
                    source={require("../assets/quotes.jpeg")}
                    style={styles.quoteimage}
                  />
                </View>
              </View>
            )}
          />
        )}
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
    width: 50,
    paddingLeft: 5
  }
});

const mapStateToProps = state => {
  return {
    quotes: state
  };
};

export default connect(mapStateToProps)(Favourite);
