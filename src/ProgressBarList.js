import React, { PureComponent } from "react";
import SingleProgressBar from "./SingleProgressBar";

const url = "wss://staging-backend.perfecttense.com";
//Job Sorted by startTime ASC
const progressStatuses = [
  {
    active: true,
    jobId: "xyz",
    progress: 0.79,
    message: "Churning some shit...",
    startTime: 1512284535683,
    type: "single"
  },
  {
    active: false,
    jobId: "abc",
    progress: 0,
    message: "Queued",
    startTime: 1512284586952,
    type: "single"
  }
];

class ProgressBarList extends PureComponent {
  componentDidMount() {
    //start listening to broadcasts
  }

  render() {
    const list = progressStatuses.map(status => {
      if (status.type === "single") {
        return (
          <SingleProgressBar
            key={status.jobId}
            active={status.active}
            jobId={status.jobId}
            progress={status.progress}
            message={status.message}
            startTime={status.startTime}
          />
        );
      }
      return null;
    });
    return <ul>{list}</ul>;
  }
}

export default ProgressBarList;
