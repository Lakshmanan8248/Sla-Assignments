import React, { useEffect, useState } from "react";

function RenderLogger() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Rendered!");
  }); // 👈 no dependency array

  return (
    <div>
      <h2>Check the Console</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Re-render
      </button>
    </div>
  );
}

export default RenderLogger;
