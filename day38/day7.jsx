import React, { useState } from "react";

function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false); // false = Light, true = Dark

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const themeStyles = {
    backgroundColor: isDark ? "#333" : "#f5f5f5",
    color: isDark ? "#f5f5f5" : "#333",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    transition: "all 0.3s ease",
  };

  return (
    <div style={themeStyles}>
      <h1>{isDark ? "Dark Theme" : "Light Theme"}</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "5px",
          border: "none",
          backgroundColor: isDark ? "#f5f5f5" : "#333",
          color: isDark ? "#333" : "#f5f5f5",
        }}
      >
        Switch Theme
      </button>
    </div>
  );
}

export default ThemeSwitcher;
