import React, { Component } from "react";
class Test extends Component {
  constructor() {
    super();
    this.state = {
      message: "minhaj legend",
    };
  }
  changeName() {
    this.setState({
      message: "kya bey!!!!",
    });
  }
  render() {
    return (
      <div>
        <h1> test - {this.state.message}</h1>
        <button
          onClick={() => {
            this.changeName();
          }}
        >
          Subscribe
        </button>
      </div>
    );
  }
}

export default Test;
