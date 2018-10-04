import React, { Component } from "react";

import {
  Text,
  TextInput,
  View,
  Image,
  Button,
  StyleSheet,
  ScrollView
} from "react-native";

import { validateSignup } from "../validation/Validation";

class Signupscreen extends Component {
  state = {
    user: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: ""
    },
    errors: {}
  };

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

  signup = () => {
    if (this.isValid()) {
      this.props.navigation.navigate("Home");
    }
  };

  isValid = () => {
    let { errors, isValid } = { ...validateSignup(this.state.user) };
    this.setState({
      errors,
      isValid
    });
    return isValid;
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Signup</Text>

        <TextInput
          style={styles.searchbar}
          placeholder="Name"
          placeholderTextColor="#fff"
          underlineColorAndroid="transparent"
          onChangeText={this.handlechange("name")}
        />
        <Text style={styles.error}>{this.state.errors.name}</Text>

        <TextInput
          style={styles.searchbar}
          placeholder="Username"
          placeholderTextColor="#fff"
          underlineColorAndroid="transparent"
          onChangeText={this.handlechange("username")}
        />
        <Text style={styles.error}>{this.state.errors.username}</Text>

        <TextInput
          style={styles.searchbar}
          placeholder="Email"
          placeholderTextColor="#fff"
          underlineColorAndroid="transparent"
          onChangeText={this.handlechange("email")}
        />
        <Text style={styles.error}>{this.state.errors.email}</Text>

        <TextInput
          style={styles.searchbar}
          placeholder="Password"
          placeholderTextColor="#fff"
          underlineColorAndroid="transparent"
          secureTextEntry={true}
          onChangeText={this.handlechange("password")}
        />
        <Text style={styles.error}>{this.state.errors.password}</Text>

        <TextInput
          style={styles.searchbar}
          placeholder="Confirm Password"
          placeholderTextColor="#fff"
          underlineColorAndroid="transparent"
          secureTextEntry={true}
          onChangeText={this.handlechange("confirmpassword")}
        />
        <Text style={styles.error}>{this.state.errors.confirmpassword}</Text>

        <View style={{ width: "90%", marginTop: 10 }}>
          <Button
            title="Signup"
            style={styles.button1}
            color="#212121"
            onPress={this.signup}
          />
        </View>
        <View style={{ width: "90%", marginTop: 10 }}>
          <Button
            title="Login"
            style={styles.button2}
            color="#212121"
            onPress={() => this.props.navigation.navigate("Home")}
          />
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
  button: {
    borderRadius: 6
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
    margin: 0,
    padding: 0
  }
});

export default Signupscreen;
