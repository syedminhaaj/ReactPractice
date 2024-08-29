import React, { Component } from "react";
class Job extends Component {
  constructor(props) {
    super();
    //this.state = props;
  }
  render() {
    const names = ["minhaj", "sameer", "test"];
    return (
      <div>
        {names.map((name, key) => {
          return <h1>{name}</h1>;
        })}
      </div>
    );
  }
}

export default Job;
