// Layout.js
import React from "react";

function Layout({ children }) {
  return (
    <div>
      <header style={{ background: "#333", color: "#fff", padding: "10px" }}>
        <h2>My Website</h2>
      </header>

      <main style={{ padding: "20px" }}>
        {children}
      </main>

      <footer style={{ background: "#eee", padding: "10px", textAlign: "center" }}>
        © 2025 My Website
      </footer>
    </div>
  );
}

export default Layout;
