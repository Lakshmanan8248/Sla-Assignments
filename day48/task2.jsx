import React, { useEffect } from "react";

function ComponentLoaded() {

  useEffect(() => {
    console.log("Component Loaded");
  }, []); // 👈 empty dependency array

  return (
    <div>
      <h2>Check the Console</h2>
      <p>Component has been loaded.</p>
    </div>
  );
}

export default ComponentLoaded;
