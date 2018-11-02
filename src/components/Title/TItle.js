import React, { Component } from "react";
import "./Title.css";

export default class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "You Can Change This Title",
      isInput: false
    };
  }

  clickHandler() {
    this.setState({
      ...this.state,
      isInput: true
    });
  }

  blurHandler() {
    this.setState({
      ...this.state,
      isInput: false
    });
  }

  enterHandler(event) {
    if (event.key === "Enter") {
      this.setState({
        ...this.state,
        isInput: false
      });
    }
  }
  changeHandler(event) {
    this.setState({
      ...this.state,
      title: event.target.value
    });
  }

  outputfun() {
    let output = null;
    if (this.state.isInput) {
      output = (
        <input
          value={this.state.title}
          onChange={event => this.changeHandler(event)}
          onKeyDown={event => this.enterHandler(event)}
          onBlur={() => this.blurHandler()}
          type="text"
          className="form-control"
        />
      );
    } else {
      output = (
        <div className="d-flex Title">
          <h2>{this.state.title}</h2>
          <span onClick={() => this.clickHandler()} className="ml-auto">
            <i className="fas fa-pencil-alt" />
          </span>
        </div>
      );
    }
    return output;
  }

  render() {
    return <div>{this.outputfun()}</div>;
  }
}
