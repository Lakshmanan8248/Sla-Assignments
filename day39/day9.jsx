import React, { useState } from "react";

function ValidatedForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    // Basic validation: check if fields are empty
    if (!formData.name.trim()) validationErrors.name = "Name is required";
    if (!formData.email.trim()) validationErrors.email = "Email is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert(`Form submitted successfully!\nName: ${formData.name}\nEmail: ${formData.email}`);
    setFormData({ name: "", email: "" }); // Clear form
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Validated Form</h2>
      <form onSubmit={handleSubmit} style={{ display: "inline-block", textAlign: "left" }}>
        <div style={{ marginBottom: "15px" }}>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            style={{ padding: "10px", width: "250px", fontSize: "16px" }}
          />
          {errors.name && <p style={{ color: "red", margin: "5px 0 0" }}>{errors.name}</p>}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            style={{ padding: "10px", width: "250px", fontSize: "16px" }}
          />
          {errors.email && <p style={{ color: "red", margin: "5px 0 0" }}>{errors.email}</p>}
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
          Submit
        </button>
      </form>
    </div>
  );
}

export default ValidatedForm;
