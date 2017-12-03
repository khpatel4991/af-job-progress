import React from "react";
import { render } from "react-dom";
import ProgressBarList from "./ProgressBarList";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => {
  return (
    <div style={styles}>
      <ProgressBarList />
    </div>
  );
};

render(<App />, document.getElementById("root"));
