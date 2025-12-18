import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");       // State for email
  const [password, setPassword] = useState(""); // State for password

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    alert(`Email: ${email}\nPassword: ${password}`);
    // Here you can add actual login logic
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit} style={{ display: "inline-block", textAlign: "left" }}>
        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
            style={{ padding: "10px", width: "250px", fontSize: "16px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
            style={{ padding: "10px", width: "250px", fontSize: "16px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
