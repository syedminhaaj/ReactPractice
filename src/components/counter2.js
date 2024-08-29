import React, { Component, useState } from "react";

class Counter2 extends Component {
  counter = 0;
  //const [inputValue, setInputValue] = useState("");

  change() {
    console.log("counter is", this.counter);
    this.counter++;
  }
  render() {
    return (
      <div>
        <button onClick={() => this.change()}>Increase Counter</button>{" "}
        {this.counter}
      </div>
    );
  }
}

function MyApp() {
  const [count, setCountValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [showText, updateText] = useState(true);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      {/* <input type="text" onChange={handleInputChange} /> {inputValue}
      <button
        onClick={() => {
          setInputValue(count + 1);
        }}
      >
        Count {count}
      </button> */}
      <button
        onClick={() => {
          updateText(!showText);
        }}
      >
        show/hide
      </button>
      {showText && <h1>Show text </h1>}
    </div>
  );
}

export default MyApp;

//export default Counter2;
