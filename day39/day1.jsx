import React, { useState } from "react";

function Greeting() {
  const [name, setName] = useState(""); // State to store input value

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)} // Update state on input
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        {name ? `Hello, ${name}` : "Hello!"}
      </p>
    </div>
  );
}

export default Greeting;
