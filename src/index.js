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

const initialState = {
  jobList: [],
  jobs: {},
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INIT_STATE": {
      return action.payload;
    }
    case "PUSH_PROGRESS_STATUS": {
      return {
        jobList: [
          ...state.jobList,
          action.payload.jobId,
        ],
        jobs: {
          ...state.jobs,
          [action.payload.jobId]: action.payload,
        }
      }
    }
    case 'UPDATE_JOB': {
      return {
        ...state,
        jobs: {
          ...state.jobs,
          [action.payload.jobId]: action.payload,
        },
      };
    }
    default:
      return state;
  }
};

const reducers = combineReducers({
  progressStatuses: jobReducer
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
