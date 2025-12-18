// Card.js
import React from "react";

function Card({ children }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "16px",
      borderRadius: "8px",
      width: "300px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      {children}
    </div>
  );
}

export default Card;
