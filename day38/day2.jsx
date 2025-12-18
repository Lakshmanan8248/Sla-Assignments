import React, { useState } from "react";

function InputDisplay() {
  const [text, setText] = useState(""); // State to store input value

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)} // Update state on input
        style={{ padding: "10px", width: "300px", fontSize: "16px" }}
      />
      <p style={{ marginTop: "20px", fontSize: "18px" }}>{text}</p>
    </div>
  );
}

export default InputDisplay;
