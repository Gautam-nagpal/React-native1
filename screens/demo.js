import React from "react";
import FBSDK from "react-native-fbsdk";

const { LoginButton, AccessToken, GraphRequest, GraphRequestManager } = FBSDK;

class FacebookService {
  constructor() {
    this.requestManager = new GraphRequestManager();
  }

  makeLoginButton(callback) {
    return (
      <LoginButton
        readPermissions={["public_profile"]}
        onLoginFinished={(error, result) => {
          if (error) {
          } else if (result.isCancelled) {
          } else {
            AccessToken.getCurrentAccessToken()
              .then(data => {
                callback(data.accessToken);
              })
              .catch(error => {
                console.log(error);
              });
          }
        }}
      />
    );
  }

  makeLogoutButton(callback) {
    return (
      <LoginButton
        onLogoutFinished={() => {
          callback();
        }}
      />
    );
  }

  async fetchProfile(callback) {
    return new Promise((resolve, reject) => {
      const request = new GraphRequest("/me", null, (error, result) => {
        if (result) {
          const profile = result;
          profile.avatar = `https://graph.facebook.com/${result.id}/picture`;
          resolve(profile);
        } else {
          reject(error);
        }
      });

      this.requestManager.addRequest(request).start();
    });
  }
}

export const facebookService = new FacebookService();

// import React, { Component } from "react";
// import { View, Text, TouchableHighlight, Image } from "react-native";
// import { Info } from "../screenNames";
// import Header from "../components/Header";

// const backgroundColor = "#0067a7";

// export default class Homescreen extends Component {
//   static navigationOptions = ({ navigation }) => {
//     let drawerLabel = "Home";
//     let drawerIcon = () => {
//       <Image
//         source={require("../assets/menu.png")}
//         style={{ width: 26, height: 26, tintColor: backgroundColor }}
//       />;
//     };
//     return { drawerLabel, drawerIcon };
//   };
//   render() {
//     return (
//       <View
//         style={{
//           flex: 1,
//           flexDirection: "column"
//         }}
//       >
//         <Header {...this.props} />
//         <View
//           style={{
//             flex: 1,
//             alignItems: "center",
//             justifyContent: "center",
//             backgroundColor: backgroundColor
//           }}
//         >
//           <Text style={{ fontWeight: "bold", color: "white", fontSize: 22 }}>
//             This is home screen
//           </Text>
//           <TouchableHighlight
//             onPress={() => {
//               const { navigate } = this.props.navigation;
//               navigate(Info);
//             }}
//           />
//         </View>
//       </View>
//     );
//   }
// }
