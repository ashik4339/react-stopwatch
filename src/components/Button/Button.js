import React, { Component } from "react";
import "./Button.css";

export default class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start: true,
      pause: false,
      laps: false,
      resume: false,
      reset: false
    };
  }

  startHandler() {
    this.setState({
      ...this.state,
      start: false,
      pause: true,
      laps: true
    });

    this.props.start();
  }
  pouseHandler() {
    this.setState({
      ...this.state,
      pause: false,
      laps: false,
      resume: true,
      reset: true
    });
    this.props.pause();
  }
  lapsHandler() {
    this.props.laps();
  }
  resumeHandler() {
    this.setState({
      ...this.state,
      pause: true,
      laps: true,
      resume: false,
      reset: false
    });
    this.props.start();
  }
  resetHandler() {
    this.setState({
      ...this.state,
      start: true,
      puse: false,
      laps: false,
      resume: false,
      reset: false
    });
    this.props.reset();
  }

  outputHandler() {
    let output = null;
    let state = this.state;
    if (state.start) {
      output = (
        <button onClick={() => this.startHandler()} className="mr-5">
          <i class="fas fa-play" />
        </button>
      );
    } else if (state.pause && state.laps) {
      output = (
        <div>
          <button onClick={() => this.pouseHandler()} className="mr-5">
            <i class="fas fa-pause" />
          </button>
          <button onClick={() => this.lapsHandler()} className="mr-5">
            <i class="fas fa-sort-amount-down" />
          </button>
        </div>
      );
    } else if (state.resume && state.reset) {
      output = (
        <div>
          <button onClick={() => this.resumeHandler()} className="mr-5">
            <i class="fas fa-play" />
          </button>
          <button onClick={() => this.resetHandler()} className="mr-5">
            <i class="fas fa-redo-alt" />
          </button>
        </div>
      );
    }

    return output;
  }

  render() {
    return <div className="my-5">{this.outputHandler()}</div>;
  }
}
