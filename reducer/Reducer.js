import { createStore } from "redux";

let initialstate = {
  user: [
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
  ]
};

export let data = (state = initialstate, action) => {
  let { user } = state;
  switch (action.type) {
    case "Liked":
      user = action.payload;
      return { ...state, user };

    default:
      return state;
  }
};

export const store = createStore(data);

console.log(store, "store");

// store.subscribe(() => {
//   console.log("current state", store.getState());
// });
