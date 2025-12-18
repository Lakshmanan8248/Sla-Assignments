import React, { useState } from "react";

function UppercaseInput() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value.toUpperCase()); // Convert input to uppercase
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input
        type="text"
        placeholder="Type here..."
        value={text}
        onChange={handleChange}
        style={{ padding: "10px", fontSize: "16px", width: "300px" }}
      />
      <p style={{ marginTop: "20px", fontSize: "18px" }}>You typed: {text}</p>
    </div>
  );
}

export default UppercaseInput;
