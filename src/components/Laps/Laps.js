import React, { Component } from "react";

export default class Laps extends Component {
  render() {
    return (
      <ul className="list-group mt-5">
        {this.props.laps.map((lap, index) => {
          return (
            <li key={index} className="list-group-item text-dark">
              <span>
                Minute:{" "}
                <strong className="mx-2 display-4 text-primary">
                  {lap.min}
                </strong>
              </span>
              <span>
                Secend:{" "}
                <strong className="mx-2 display-4 text-primary">
                  {lap.sec}
                </strong>
              </span>
              <span>
                MiliSecend:{" "}
                <strong className="mx-2 display-4 text-primary">
                  {lap.mili}
                </strong>
              </span>
            </li>
          );
        })}
      </ul>
    );
  }
}
