import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ProgressBarList from "./ProgressBarList";
import AddMore from "./AddMore";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_STATE": {
      return action.payload;
    }
    case "PUSH_PROGRESS_STATUS": {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <div style={styles}>
        <ProgressBarList />
        <AddMore />
      </div>
    </Provider>
  );
};

render(<App />, document.getElementById("root"));
