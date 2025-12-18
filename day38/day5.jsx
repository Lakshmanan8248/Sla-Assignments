import React, { useState } from "react";

function BackgroundColorButton() {
  const [bgColor, setBgColor] = useState("white"); // Initial background color

  const changeColor = () => {
    // Toggle between colors (you can customize)
    setBgColor(bgColor === "white" ? "lightblue" : "white");
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: bgColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={changeColor}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "gray",
          color: "white",
        }}
      >
        Change Background Color
      </button>
    </div>
  );
}

export default BackgroundColorButton;
