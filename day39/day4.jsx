import React, { useState } from "react";

function CountrySelector() {
  const [country, setCountry] = useState(""); // State for selected country

  const countries = ["India", "USA", "Canada", "Australia", "UK"];

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <select
        value={country}
        onChange={handleChange}
        style={{ padding: "10px", fontSize: "16px", width: "200px" }}
      >
        <option value="">Select a country</option>
        {countries.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      {country && (
        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          You selected: {country}
        </p>
      )}
    </div>
  );
}

export default CountrySelector;
