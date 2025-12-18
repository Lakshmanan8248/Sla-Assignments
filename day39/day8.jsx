import React, { useState } from "react";

function ProfileUpdateForm() {
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        style={{ marginRight: "50px", textAlign: "left" }}
      >
        <h2>Update Profile</h2>

        <div style={{ marginBottom: "15px" }}>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            placeholder="Enter name"
            style={{ padding: "10px", width: "250px", fontSize: "16px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Age:</label><br />
          <input
            type="number"
            name="age"
            value={userData.age}
            onChange={handleChange}
            placeholder="Enter age"
            style={{ padding: "10px", width: "250px", fontSize: "16px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Enter email"
            style={{ padding: "10px", width: "250px", fontSize: "16px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Phone:</label><br />
          <input
            type="tel"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
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
          Update Profile
        </button>
      </form>

      {/* Live Preview */}
      <div style={{ border: "1px solid #ccc", padding: "20px", width: "300px" }}>
        <h3>Live Preview</h3>
        <p><strong>Name:</strong> {userData.name || "-"}</p>
        <p><strong>Age:</strong> {userData.age || "-"}</p>
        <p><strong>Email:</strong> {userData.email || "-"}</p>
        <p><strong>Phone:</strong> {userData.phone || "-"}</p>
      </div>
    </div>
  );
}

export default ProfileUpdateForm;
