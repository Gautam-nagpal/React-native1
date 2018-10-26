import Expo from "expo";

const googleid = "";
const facebookid = "";

export const loginFacebook = async () => {
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
};

export const loginGoogle = async () => {
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
