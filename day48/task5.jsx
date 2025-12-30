import React, { useState, useEffect } from "react";

function NameLogger() {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Name changed:", name);
  }, [name]); // 👈 runs whenever name changes

  return (
    <div>
      <h2>Name Input</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Typed Name: {name}</p>
    </div>
  );
}

export default NameLogger;
