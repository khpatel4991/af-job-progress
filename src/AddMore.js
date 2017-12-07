import React from "react";
import axios from "axios";
import { connect } from "react-redux";

const AddMore = ({ addSingle, addBulk }) => (
  <div>
    <button onClick={addSingle}>Add Single</button>
    <button onClick={addBulk}>Add Bulk</button>
  </div>
);

const addSingle = (payload) => ({
  type: "PUSH_PROGRESS_STATUS",
  payload,
});

const addSingleRequest = () => dispatch => {
  const request = axios.post('http://localhost:5090/single', {});
  request.then(res => {
    const { progress } = res.data;
    dispatch(addSingle(progress));
  }).catch(console.log);
};

const addBulk = () => ({
  type: "PUSH_PROGRESS_STATUS",
  payload: {
    active: null,
    jobId: Date.now(),
    count: 2,
    done: 0,
    type: "bulk",
    startTime: Date.now(),
    jobs: [
      {
        active: false,
        jobId: Date.now() + 333,
        progress: 0,
        message: "Queued"
      },
      {
        active: false,
        jobId: Date.now() + 334,
        progress: 0,
        message: "Queued"
      }
    ]
  }
});

const mapDispatchToProps = dispatch => ({
  addSingle: () => dispatch(addSingleRequest()),
  addBulk: () => dispatch(addBulk())
});

export default connect(null, mapDispatchToProps)(AddMore);
