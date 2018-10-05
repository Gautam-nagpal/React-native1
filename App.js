import React, { Component } from "react";

import { Provider } from "react-redux";
import { store } from "./reducer/Reducer";
import Index from "./index";

export default class App extends Component {
  state = {};
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}
