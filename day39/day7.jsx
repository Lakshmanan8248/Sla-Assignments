import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registration Details:\n
Name: ${formData.name}\n
Age: ${formData.age}\n
Phone: ${formData.phone}\n
Email: ${formData.email}`);
    // You can replace this alert with actual form submission logic
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Registration Form</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "inline-block", textAlign: "left" }}
      >
        <div style={{ marginBottom: "15px" }}>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            style={{ padding: "10px", width: "250px", fontSize: "16px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Age:</label><br />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
            required
            style={{ padding: "10px", width: "250px", fontSize: "16px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Phone:</label><br />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
            style={{ padding: "10px", width: "250px", fontSize: "16px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
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
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
