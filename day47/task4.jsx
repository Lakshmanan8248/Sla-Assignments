import React from "react";

function CityList() {
  const cities = [
    { id: 1, name: "Chennai" },
    { id: 2, name: "Bengaluru" },
    { id: 3, name: "Hyderabad" },
    { id: 4, name: "Mumbai" },
    { id: 5, name: "Delhi" }
  ];

  return (
    <div>
      <h2>City List</h2>
      <ul>
        {cities.map(city => (
          <li key={city.id}>{city.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CityList;
