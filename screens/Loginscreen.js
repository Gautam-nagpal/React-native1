import React, { Component } from "react";
import { loginFacebook, loginGoogle } from "../utils";

import {
  Text,
  TextInput,
  View,
  Image,
  Button,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { createSwitchNavigator } from "react-navigation";
import { validateLogin } from "../validation/Validation";

class Loginscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: ""
      },
      errors: {},
      loader: false
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
      this.setState({
        loader: true
      });

      let { user } = this.state;
      console.log(user, "user");
      const URL = `https://crispage-api.herokuapp.com/login`;
      fetch(URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
        .then(response => {
          this.setState({
            loader: false
          });
          return response.json();
        })
        .then(responseJson => {
          console.log("api response", responseJson);
          this.props.navigation.navigate("QuotesHome");
          return responseJson;
        })
        .catch(err => {
          console.log("error", err);
        });
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
    let { errors = {}, loader } = this.state;
    return (
      <View style={styles.container}>
        {loader ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View>
            <Text style={styles.text}>Loginscreen</Text>
            <TextInput
              defaultValue=""
              style={styles.searchbar}
              placeholder="Email"
              placeholderTextColor="#fff"
              underlineColorAndroid="transparent"
              onChangeText={this.handlechange("email")}
            />
            {errors.email ? (
              <Text style={styles.error}>{errors.email}</Text>
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

            <View style={{ marginTop: 10 }}>
              <Button
                title="Login"
                style={styles.button1}
                color="#212121"
                onPress={this.login}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Button
                title="Signup"
                style={styles.button2}
                color="#212121"
                onPress={() => this.props.navigation.navigate("Signupscreen")}
              />
            </View>

            <View style={{ marginTop: 10 }}>
              <Button
                title="Login with fb"
                style={styles.button1}
                color="#212121"
                onPress={() => loginFacebook()}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Button
                title="Login with Google"
                style={styles.button1}
                color="#212121"
                onPress={() => loginGoogle()}
              />
            </View>
          </View>
        )}
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
    alignSelf: "center",
    color: "#fff"
  },
  button1: {
    borderRadius: 20,
    justifyContent: "center",
    marginBottom: 10,
    paddingBottom: 10
  },
  button2: {
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
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
