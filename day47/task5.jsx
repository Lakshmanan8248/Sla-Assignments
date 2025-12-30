import React from "react";

function DataList() {
  const items = []; // try adding data to test

  return (
    <div>
      <h2>Items</h2>

      {items.length === 0 && (
        <p>No Data Available</p>
      )}

      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataList;
