import React, { useState } from "react";

function PasswordValidationForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordsMatch = password && confirmPassword && password === confirmPassword;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Password Match Validation</h2>

      <div style={{ marginBottom: "15px" }}>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", fontSize: "16px", width: "250px" }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{ padding: "10px", fontSize: "16px", width: "250px" }}
        />
      </div>

      {confirmPassword && (
        <p
          style={{
            color: passwordsMatch ? "green" : "red",
            fontSize: "16px",
          }}
        >
          {passwordsMatch ? "Passwords match ✅" : "Passwords do not match ❌"}
        </p>
      )}
    </div>
  );
}

export default PasswordValidationForm;
