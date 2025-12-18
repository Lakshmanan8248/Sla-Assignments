import React, { useState } from "react";

function CheckboxControl() {
  const [isChecked, setIsChecked] = useState(false); // State for checkbox

  const handleChange = (e) => {
    setIsChecked(e.target.checked); // Update state on toggle
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <label style={{ fontSize: "18px" }}>
        <input
          type="checkbox"
          checked={isChecked} // Controlled checkbox
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        Check me
      </label>

      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        {isChecked ? "Checked" : "Not Checked"}
      </p>
    </div>
  );
}

export default CheckboxControl;
