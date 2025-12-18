import React, { useState } from "react";

function EvenOddChecker() {
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const isEvenOdd = () => {
    if (number === "") return ""; // empty input
    return Number(number) % 2 === 0 ? "Even" : "Odd";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={handleChange}
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <p style={{ marginTop: "20px", fontSize: "18px" }}>{isEvenOdd()}</p>
    </div>
  );
}

export default EvenOddChecker;
