import { store } from "../reducer/Reducer";

const { dispatch } = store;

export const likedQuote = e => {
  return dispatch({ type: "Liked", payload: e.user });
};
