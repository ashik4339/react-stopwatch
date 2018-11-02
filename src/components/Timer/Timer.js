import React from "react";
import TimerItem from "../TimerItem/TimerItem";
const Timer = props => {
  return (
    <div className="d-flex">
      <TimerItem value={props.time.min} />
      <TimerItem value={props.time.sec} />
      <TimerItem value={props.time.mili} />
    </div>
  );
};

export default Timer;
