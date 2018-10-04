import React, { Component } from "react";

import { Text, TextInput, View, Image, Button, StyleSheet } from "react-native";
import { createSwitchNavigator } from "react-navigation";
import { validateLogin } from "../validation/Validation";

class Loginscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        password: ""
      },
      errors: {},
      demo: ""
    };
  }

  handlechange = key => value => {
    this.setState(prevState => {
      return {
        user: {
          ...prevState.user,
          [key]: value
        },
        errors: {
          ...prevState.errors,
          [key]: ""
        }
      };
    });
  };

  login = () => {
    if (this.isValid()) {
      this.props.navigation.navigate("Signupscreen");
    }
  };

  isValid = () => {
    let { errors, isValid } = { ...validateLogin(this.state.user) };
    this.setState({
      errors,
      isValid
    });
    return isValid;
  };

  render() {
    let { errors = {} } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loginscreen</Text>
        <TextInput
          defaultValue=""
          style={styles.searchbar}
          placeholder="Username"
          placeholderTextColor="#fff"
          underlineColorAndroid="transparent"
          onChangeText={this.handlechange("username")}
        />
        {errors.username ? (
          <Text style={styles.error}>{errors.username}</Text>
        ) : null}

        <TextInput
          style={styles.searchbar}
          placeholder="Password"
          placeholderTextColor="#fff"
          underlineColorAndroid="transparent"
          secureTextEntry={true}
          onChangeText={this.handlechange("password")}
        />
        {errors.password ? (
          <Text style={styles.error}>{errors.password}</Text>
        ) : null}

        <View style={{ width: "90%", marginTop: 10 }}>
          <Button
            title="Login"
            style={styles.button1}
            color="#212121"
            onPress={this.login}
          />
        </View>
        <View style={{ width: "90%", marginTop: 10 }}>
          <Button
            title="Signup"
            style={styles.button2}
            color="#212121"
            onPress={() => this.props.navigation.navigate("Signupscreen")}
          />
          <View style={{ width: "100%", marginTop: 10 }}>
            <Button
              title="Quotes"
              style={styles.button1}
              color="#212121"
              onPress={() => this.props.navigation.navigate("QuotesHome")}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#03b393",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 30,
    alignItems: "center",
    color: "#fff"
  },
  button1: {
    borderRadius: 20,
    marginBottom: 10,
    paddingBottom: 10
  },
  button2: {
    marginTop: 10,
    borderRadius: 10,
    paddingTop: 10
  },
  searchbar: {
    marginTop: 10,
    marginBottom: 10,
    borderColor: "#fff",
    borderRadius: 15,
    borderWidth: 1,
    width: 330,
    height: 40,
    paddingLeft: 20,
    color: "#fff"
  },
  error: {
    color: "red",
    margin: 0
  }
});

export default createSwitchNavigator({
  Home: {
    screen: Loginscreen
  }
});
