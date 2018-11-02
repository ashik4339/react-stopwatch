import React, { Component } from "react";
import Title from "./Title/TItle";
import Timer from "./Timer/Timer";
import Button from "./Button/Button";
import Laps from "./Laps/Laps";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: {
        min: 0,
        sec: 0,
        mili: 0
      },
      laps: []
    };
  }

  getStart() {
    this.intervalID = setInterval(() => {
      let min = this.state.time.min;
      let sec = this.state.time.sec;
      let mili = this.state.time.mili;

      if (mili >= 10) {
        sec = sec + 1;
        mili = 0;
      }
      if (sec >= 60) {
        min = min + 1;
        sec = 0;
      }

      this.setState({
        ...this.state,
        time: {
          min,
          sec,
          mili: mili + 1
        }
      });
    }, 100);
  }

  getPouse() {
    clearInterval(this.intervalID);
  }

  getLap() {
    let time = {
      ...this.state.time
    };
    this.setState({
      ...this.state,
      laps: [time, ...this.state.laps]
    });
  }

  getReset() {
    this.setState({
      ...this.state,
      time: {
        min: 0,
        sec: 0,
        mili: 0
      },
      laps: []
    });
  }

  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 offset-md-4">
            <Title />
            <Timer time={this.state.time} />
            <Button
              start={() => this.getStart()}
              pause={() => this.getPouse()}
              reset={() => this.getReset()}
              laps={() => this.getLap()}
            />
            <Laps laps={this.state.laps} />
          </div>
        </div>
      </div>
    );
  }
}
