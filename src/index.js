import React from "react";
import thunk from "redux-thunk";
import { render } from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import ProgressBarList from "./ProgressBarList";
import AddMore from "./AddMore";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const jobReducer = (state = [], action) => {
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

const reducers = combineReducers({
  jobs: jobReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

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
