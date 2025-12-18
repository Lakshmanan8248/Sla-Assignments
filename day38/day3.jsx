import React, { useState } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState(false); // false = OFF, true = ON

  const handleToggle = () => {
    setIsOn(!isOn); // Toggle the state
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button
        onClick={handleToggle}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: isOn ? "green" : "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default ToggleButton;
