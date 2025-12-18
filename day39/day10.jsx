import React, { useState } from "react";

function FeedbackForm() {
  const [feedback, setFeedback] = useState({
    name: "",
    comments: "",
    rating: "",
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFeedback({
      ...feedback,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback Submitted:", feedback);
    alert("Feedback submitted! Check console for data.");
    setFeedback({
      name: "",
      comments: "",
      rating: "",
      subscribe: false,
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit} style={{ display: "inline-block", textAlign: "left" }}>
        {/* Name */}
        <div style={{ marginBottom: "15px" }}>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={feedback.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            style={{ padding: "10px", width: "250px", fontSize: "16px" }}
          />
        </div>

        {/* Comments */}
        <div style={{ marginBottom: "15px" }}>
          <label>Comments:</label><br />
          <textarea
            name="comments"
            value={feedback.comments}
            onChange={handleChange}
            placeholder="Write your feedback"
            rows="4"
            style={{ padding: "10px", width: "250px", fontSize: "16px" }}
            required
          ></textarea>
        </div>

        {/* Rating */}
        <div style={{ marginBottom: "15px" }}>
          <label>Rating:</label><br />
          <select
            name="rating"
            value={feedback.rating}
            onChange={handleChange}
            style={{ padding: "10px", width: "270px", fontSize: "16px" }}
            required
          >
            <option value="">Select rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>

        {/* Subscribe Checkbox */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ fontSize: "16px" }}>
            <input
              type="checkbox"
              name="subscribe"
              checked={feedback.subscribe}
              onChange={handleChange}
              style={{ marginRight: "10px" }}
            />
            Subscribe to newsletter
          </label>
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
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;
