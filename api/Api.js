export const LoginApi = name => {
  // let { email, password } = name;
  console.log("name", name);
  const URL = `https://crispage-api.herokuapp.com/login`;
  return fetch(`https://crispage-api.herokuapp.com/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(name)
  })
    .then(response => {
      console.log("response", response);

      return response.json();
    })
    .then(responseJson => {
      console.log("api response", responseJson);

      return responseJson;
    })
    .catch(err => {
      console.log("error", err);
      return err;
    });
};
