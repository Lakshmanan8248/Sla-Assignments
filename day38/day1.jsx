// Counter.js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // Initial count is 0

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrease} style={{ marginRight: "10px" }}>
        Increase
      </button>
      <button onClick={handleDecrease}>
        Decrease
      </button>
    </div>
  );
}

export default Counter;
