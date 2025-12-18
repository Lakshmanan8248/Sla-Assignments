// ProductItem.js
import React from "react";

function ProductItem({ title, price }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "12px",
      borderRadius: "8px",
      width: "220px"
    }}>
      <h3>{title}</h3>
      <p>Price: ₹{price}</p>
    </div>
  );
}

export default ProductItem;
