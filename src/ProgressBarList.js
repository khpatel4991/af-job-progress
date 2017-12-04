import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Line } from "rc-progress";
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
  },
  {
    active: null,
    jobId: "bulk_324",
    count: 2,
    done: 0,
    type: "bulk",
    startTime: 1512285586952,
    jobs: [
      {
        active: false,
        jobId: "bulk_324_abc",
        progress: 0,
        message: "Queued"
      },
      {
        active: false,
        jobId: "bulk_324_qwe",
        progress: 0,
        message: "Queued"
      }
    ]
  }
];

class ProgressBarList extends PureComponent {
  componentDidMount() {
    //start listening to broadcasts
    this.props.setInitialState(progressStatuses);
  }

  render() {
    const { state } = this.props;
    const list = state.map(status => {
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
      } else if (status.type === "bulk") {
        return (
          <div key={status.jobId}>
            <Line percent={status.done * 100 / status.count} />
            Job: {status.jobId},
            {status.done}/{status.count} Done.
            {status.jobs.map(job => (
              <SingleProgressBar
                key={job.jobId}
                active={job.active}
                jobId={job.jobId}
                progress={job.progress}
                message={job.message}
              />
            ))}
          </div>
        );
      }
      return null;
    });
    return <ul>{list}</ul>;
  }
}

const setInitData = payload => ({
  type: "INIT_STATE",
  payload
});

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  setInitialState: payload => dispatch(setInitData(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBarList);
