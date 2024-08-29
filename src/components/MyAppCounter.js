import React, { useState } from "react";

function MyNewCounter() {
  const [count, setCount] = useState(0);
  const IcreaseCount = () => {
    return setCount(count + 1);
  };

  const DecreaseCount = () => {
    return setCount(count - 1);
  };
  const setToZero = () => {
    return setCount(0);
  };
  return (
    <div>
      <button onClick={IcreaseCount}>Increase</button>
      <button onClick={DecreaseCount}>Decrease</button>
      <button onClick={setToZero}>Set to 0</button>

      <div>Count is ----{count}</div>
    </div>
  );
}
export default MyNewCounter;
