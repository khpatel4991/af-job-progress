import React, { PureComponent } from "react";
import { Line } from "rc-progress";

class SingleProgressBar extends PureComponent {
  render() {
    const { active, jobId, progress, message, startTime } = this.props;
    return (
      <div>
        <Line percent={progress * 100} />
        Job: {jobId},
        {active && "Active, "}
        {message}, {(Date.now() - startTime) / 1000} s,
      </div>
    );
  }
}

export default SingleProgressBar;
