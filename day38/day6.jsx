import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");      // State for email
  const [password, setPassword] = useState(""); // State for password

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    // For demo, just alert the values
    alert(`Email: ${email}\nPassword: ${password}`);
    // You can replace this with actual login logic
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <form 
        onSubmit={handleSubmit} 
        style={{ display: "flex", flexDirection: "column", width: "300px" }}
      >
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px", marginBottom: "15px", fontSize: "16px" }}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", marginBottom: "20px", fontSize: "16px" }}
          required
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
