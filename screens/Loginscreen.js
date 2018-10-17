import React, { Component } from "react";
import Expo from "expo";
import FBSDK from "react-native-fbsdk";
import FacebookService from "./demo";

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

const facebookid = "501792203636783";
const googleid = `395173461203-vv41veehpvcg9fqnmph6b7kvm6dlnj0j.apps.googleusercontent.com`;
// const FBSDK = require("react-native-fbsdk");
// const { LoginButton, AccessToken, GraphRequest, GraphRequestManager } = FBSDK;
// const { LoginManager } = FBSDK;

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
          alert("you are now Logged IN");
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

  loginFacebook = async () => {
    try {
      const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
        facebookid,
        { permissions: ["public_profile", "email", "user_friends"] }
      );
      if (type === "success") {
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,about,picture`
        );
        console.log("response", response);
        const json = await response.json();
        console.log("User Info  facebook", json);
      }
    } catch (e) {
      alert("No Internet Connection");
    }
    // LoginManager.logInWithPublishPermissions([
    //   "public_profile",
    //   "email",
    //   "user_friends"
    // ]).then(result => {
    //   if (result.isCancelled) {
    //     alert("Unable to SignIn ,User cancled ");
    //   } else {
    //     alert("Login sucess" + result.grantedPermissions.toString());
    //   }
    // });
  };

  loginGoogle = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: googleid,

        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        console.log("google sign in data", result.user);

        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      alert(e);
    }
  };

  render() {
    let { errors = {}, loader } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loginscreen</Text>

        {loader ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View>
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
            </View>
            <View style={{ width: "100%", marginTop: 10 }}>
              <Button
                title="Quotes"
                style={styles.button1}
                color="#212121"
                onPress={() => this.props.navigation.navigate("QuotesHome")}
              />
            </View>
            <View style={{ width: "100%", marginTop: 10 }}>
              <Button
                title="Login with fb"
                style={styles.button1}
                color="#212121"
                onPress={() => this.loginFacebook()}
              />
            </View>
            <View style={{ width: "100%", marginTop: 10 }}>
              <Button
                title="Login with Google"
                style={styles.button1}
                color="#212121"
                onPress={this.loginGoogle.bind(this)}
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
    alignItems: "center",
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
