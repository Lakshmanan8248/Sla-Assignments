import React, { useState } from "react";

function DropdownMenu() {
  const [selectedOption, setSelectedOption] = useState(""); // Current selection
  const [isOpen, setIsOpen] = useState(false); // Dropdown open/close state

  const options = ["Option 1", "Option 2", "Option 3"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div
        style={{
          display: "inline-block",
          position: "relative",
          width: "200px",
        }}
      >
        <button
          onClick={toggleDropdown}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          {selectedOption || "Select an option"}
        </button>

        {isOpen && (
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              border: "1px solid #ccc",
              borderTop: "none",
              position: "absolute",
              width: "100%",
              backgroundColor: "#fff",
              zIndex: 1,
            }}
          >
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  borderBottom: "1px solid #ccc",
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>

      {selectedOption && (
        <p style={{ marginTop: "20px" }}>You selected: {selectedOption}</p>
      )}
    </div>
  );
}

export default DropdownMenu;
