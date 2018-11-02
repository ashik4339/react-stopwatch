import React from "react";
import "./TimerItem.css";
const TimerItem = props => {
  return (
    <div>
      <span className="mr-4 TimerItem">
        {props.value < 10 ? `0${props.value}` : props.value}
      </span>
    </div>
  );
};

export default TimerItem;
